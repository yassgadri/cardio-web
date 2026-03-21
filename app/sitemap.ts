export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { serviceCategories } from "@/content/services";
import { normalizePath } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const staticRoutes = [
  "/",
  "/qui-sommes-nous",
  "/medecins-professionnels",
  "/consultation",
  "/examens",
  "/specialites",
  "/parcours-patient",
  "/hospitalisation",
  "/preparer-ma-visite",
  "/acces",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route, index) => ({
      url: `${SITE_URL}${normalizePath(route)}`,
      lastModified: now,
      changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : index < 5 ? 0.8 : 0.7,
    })),
    ...serviceCategories.map((category) => ({
      url: `${SITE_URL}${normalizePath(`/${category.slug}`)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
