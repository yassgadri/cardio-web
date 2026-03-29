"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigation, type NavItem } from "@/content/navigation";
import { withBasePath } from "@/lib/paths";
import { cn } from "@/lib/utils";

const isReview = process.env.NEXT_PUBLIC_CF_PAGES_BRANCH === "staging";

const logoImg = withBasePath("/assets/logo-cardio.png");

function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isItemActive(pathname: string, item: NavItem) {
  if (isActiveLink(pathname, item.href)) return true;
  return item.children?.some((child) => isActiveLink(pathname, child.href)) ?? false;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      {isReview && (
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "16px",
            zIndex: 1000,
            background: "rgba(185,28,28,0.9)",
            backdropFilter: "blur(4px)",
            color: "#fff",
            padding: "4px 10px",
            fontSize: "12px",
            fontWeight: 700,
            borderRadius: "6px",
            letterSpacing: "0.03em",
            pointerEvents: "none", // important → ne bloque pas les clics du menu
          }}
        >
          VERSION REVIEW
        </div>
      )}
      <div className="container-main flex h-20 items-center justify-between gap-4 lg:gap-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <img src={logoImg} alt="Service de cardiologie" className="h-10 w-auto sm:h-12" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-heading sm:text-base">
              Service de Cardiologie
            </p>
            <p className="hidden truncate text-xs text-body sm:block">Clinique Sainte Clotilde</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navigation.map((item) => {
            const itemActive = isItemActive(pathname, item);
            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium transition-colors",
                    itemActive ? "text-primary" : "text-heading hover:text-primary",
                  )}
                >
                  {item.label}
                  {item.children ? <ChevronDown className="h-4 w-4" /> : null}
                </Link>

                {item.children ? (
                  <div className="invisible absolute left-0 top-full z-50 mt-3 min-w-[280px] rounded-xl border border-border bg-card p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => {
                      const childActive = isActiveLink(pathname, child.href);
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block rounded-lg px-4 py-2.5 text-sm transition-colors",
                            childActive
                              ? "bg-section font-medium text-primary"
                              : "text-body hover:bg-section hover:text-primary",
                          )}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-main py-4">
            <div className="space-y-2">
              {navigation.map((item) => {
                const itemActive = isItemActive(pathname, item);
                return (
                  <div
                    key={item.href}
                    className="rounded-xl border border-border/70 bg-card/60 p-2"
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-3 py-2 text-sm font-medium",
                        itemActive ? "bg-section text-primary" : "text-heading",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children ? (
                      <div className="mt-1 space-y-1 px-2 pb-2">
                        {item.children.map((child) => {
                          const childActive = isActiveLink(pathname, child.href);
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                "block rounded-lg px-3 py-2 text-sm transition-colors",
                                childActive
                                  ? "bg-section font-medium text-primary"
                                  : "text-body hover:bg-section hover:text-primary",
                              )}
                              onClick={() => setOpen(false)}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>

            <Link
              href="/contact"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
