import type { Metadata } from "next";
import { serviceCategories } from "@/content/services";
import { SITE_DESCRIPTION, SITE_IMAGE, SITE_LOCALE, SITE_NAME, SITE_URL } from "@/lib/site";

const specialtyKeywords = serviceCategories.flatMap((category) => [
  category.title,
  ...category.procedures.map((procedure) => procedure.title),
]);

export const SITE_KEYWORDS = Array.from(
  new Set([
    SITE_NAME,
    "cardiologie",
    "cardiologue",
    "clinique Sainte-Clotilde",
    "Saint-Denis",
    "La Réunion",
    "coronarographie",
    "rythmologie",
    "échocardiographie",
    "épreuve d'effort",
    ...specialtyKeywords,
  ]),
);

const DEFAULT_OG_IMAGE = "/assets/about-cardio.jpg";

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function normalizePath(path: string) {
  if (!path || path === "/") return "/";
  return `${path.replace(/\/$/, "")}/`;
}

function pickKeywords(keywords: string[], max = 10) {
  return Array.from(new Set(keywords.map((item) => item.trim()).filter(Boolean))).slice(0, max);
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const canonical = normalizePath(path);
  const fullTitle = title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`;
  const ogImage = DEFAULT_OG_IMAGE;
  const mergedKeywords = pickKeywords(keywords);

  return {
    title,
    description,
    keywords: mergedKeywords.length ? mergedKeywords : undefined,
    alternates: {
      canonical,
    },
    category: "healthcare",
    openGraph: {
      type: "website",
      url: absoluteUrl(canonical),
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      locale: SITE_LOCALE,
      images: [
        {
          url: absoluteUrl(ogImage),
          width: 1600,
          height: 900,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(ogImage)],
    },
  };
}

export function buildSpecialtyMetadata({
  title,
  description,
  slug,
  procedures,
}: {
  title: string;
  description: string;
  slug: string;
  procedures: string[];
}): Metadata {
  return buildPageMetadata({
    title,
    description,
    path: `/${slug}`,
    keywords: [title, "cardiologie", "Clinique Sainte-Clotilde", "Saint-Denis", ...procedures],
  });
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(normalizePath(item.path)),
    })),
  };
}

export function buildWebPageJsonLd({
  name,
  description = SITE_DESCRIPTION,
  path,
}: {
  name: string;
  description?: string;
  path: string;
}) {
  const canonical = normalizePath(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(canonical),
    inLanguage: "fr-FR",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#medical-clinic`,
    },
  };
}
