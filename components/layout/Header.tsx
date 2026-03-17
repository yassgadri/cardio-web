'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Printer, Mail, Menu, X, ChevronDown, Facebook, Youtube, Linkedin } from 'lucide-react';
import { navigation, contactInfo, socialLinks } from '@/content/navigation';
import type { NavItem } from '@/content/navigation';
import { withBasePath } from '@/lib/paths';

const logoImg = withBasePath('/assets/logo-cardio.png');

const TopBar = () => (
  <div className="bg-topbar text-topbar-foreground text-sm hidden md:block">
    <div className="container-main flex items-center justify-between py-2">
      <div className="flex items-center gap-6">
        <a href={`tel:${contactInfo.fax.replace(/\s/g, '')}`} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
          <Printer className="h-3.5 w-3.5" />
          <span>Fax: {contactInfo.fax}</span>
        </a>
        <span className="opacity-30">|</span>
        <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
          <Mail className="h-3.5 w-3.5" />
          <span>Envoyer un Email</span>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <a href={socialLinks.facebook} className="opacity-60 hover:opacity-100 transition-opacity" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
          <a href={socialLinks.youtube} className="opacity-60 hover:opacity-100 transition-opacity" aria-label="YouTube"><Youtube className="h-4 w-4" /></a>
          <a href={socialLinks.linkedin} className="opacity-60 hover:opacity-100 transition-opacity" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
        </div>
        <span className="opacity-30">|</span>
        <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
          <Phone className="h-3.5 w-3.5" />
          <span>Tel: {contactInfo.phone}</span>
        </a>
      </div>
    </div>
  </div>
);

const DropdownMenu = ({ item, isActive }: { item: NavItem; isActive: boolean }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className={`flex items-center gap-1 px-1 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-foreground'}`}>
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-0 w-64 rounded-lg border bg-card shadow-lg py-2 z-50">
          {item.children?.map((child) => (
            <Link key={child.href} href={child.href} className="block px-4 py-2.5 text-sm text-body hover:bg-section hover:text-primary transition-colors" onClick={() => setOpen(false)}>
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (item: NavItem): boolean => {
    if (item.href === '/' && pathname === '/') return true;
    if (item.href !== '/' && item.href !== '#' && pathname.startsWith(item.href)) return true;
    if (item.children?.some((c) => pathname.startsWith(c.href))) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <TopBar />
      <nav className="container-main flex items-center justify-between h-16 lg:h-20">
        <Link href="/" className="flex items-center gap-2">
          <img src={logoImg} alt="SELARL de Cardiologie" className="h-10 lg:h-12 w-auto" />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-heading leading-tight">SELARL DE</p>
            <p className="text-sm font-semibold text-heading leading-tight">CARDIOLOGIE</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label} item={item} isActive={isActive(item)} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-1 py-2 text-sm font-medium transition-colors hover:text-primary relative ${
                  isActive(item)
                    ? 'text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                    : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link href="/contact" className="ml-2 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Contactez Nous
          </Link>
        </div>

        <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="container-main py-4 space-y-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)} className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-foreground">
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  {openSubmenu === item.label && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="block px-3 py-2 text-sm text-body hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={`block px-3 py-2.5 text-sm font-medium ${isActive(item) ? 'text-primary' : 'text-foreground'}`} onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3">
              <Link href="/contact" className="block text-center bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contactez Nous
              </Link>
            </div>
            <div className="pt-3 flex items-center gap-4 px-3 text-sm text-body">
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
