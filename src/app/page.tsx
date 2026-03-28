import HomePage from "@/components/site/HomePage";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Service de cardiologie à Saint-Denis de La Réunion - Clinique Sainte-Clotilde",
  description:
    "Service de cardiologie de la Clinique Sainte-Clotilde à Saint-Denis de La Réunion : consultations, examens cardiologiques, cardiologie interventionnelle et rythmologie.",
  path: "/",
  keywords: [
    "service de cardiologie",
    "clinique sainte-clotilde",
    "cardiologue saint-denis réunion",
    "cardiologie saint-denis réunion",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildWebPageJsonLd({
      name: "Service de cardiologie à Saint-Denis de La Réunion - Clinique Sainte-Clotilde",
      description: metadata.description as string,
      path: "/",
    }),
  ],
};

export default function Page() {
  return (
    <>
      <HomePage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
