import SpecialtiesPage from "@/components/site/SpecialtiesPage";
import { specialtiesFaq } from "@/content/seo-content";
import { serviceCategories } from "@/content/services";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Spécialités de cardiologie à Saint-Denis de La Réunion",
  description:
    "Découvrez les principales spécialités du service de cardiologie de la Clinique Sainte-Clotilde à Saint-Denis de La Réunion : explorations non invasives, cardiologie interventionnelle et rythmologie.",
  path: "/specialites",
  keywords: [
    ...serviceCategories.map((category) => category.title),
    "cardiologie saint-denis réunion",
    "spécialités cardiologie réunion",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildWebPageJsonLd({
      name: "Spécialités de cardiologie à Saint-Denis de La Réunion",
      description: metadata.description as string,
      path: "/specialites",
    }),
    buildBreadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Spécialités", path: "/specialites" },
    ]),
    buildItemListJsonLd({
      name: "Spécialités de cardiologie",
      path: "/specialites",
      items: serviceCategories.map((category) => ({
        name: category.title,
        path: `/${category.slug}`,
        description: category.description,
      })),
    }),
    buildFaqJsonLd(specialtiesFaq),
  ],
};

export default function Page() {
  return (
    <>
      <SpecialtiesPage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
