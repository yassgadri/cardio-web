import SpecialtiesPage from "@/components/site/SpecialtiesPage";
import { serviceCategories } from "@/content/services";
import { buildBreadcrumbJsonLd, buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Spécialités de cardiologie",
  description:
    "Découvrez les principales spécialités du service de cardiologie de la Clinique Sainte-Clotilde à Saint-Denis de La Réunion : explorations non invasives, cardiologie interventionnelle et rythmologie.",
  path: "/specialites",
  keywords: serviceCategories.map((category) => category.title),
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildWebPageJsonLd({
      name: "Spécialités de cardiologie",
      description: metadata.description as string,
      path: "/specialites",
    }),
    buildBreadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Spécialités", path: "/specialites" },
    ]),
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
