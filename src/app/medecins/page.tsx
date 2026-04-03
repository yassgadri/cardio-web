import DoctorsPage from "@/components/site/DoctorsPage";
import { doctorsFaq } from "@/content/seo-content";
import { doctors } from "@/content/doctors";
import { buildFaqJsonLd, buildItemListJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Cardiologues à Saint-Denis de La Réunion",
  description:
    "Découvrez l'équipe de cardiologues du service de cardiologie de la Clinique Sainte-Clotilde à Saint-Denis de La Réunion : consultations, explorations, cardiologie interventionnelle et rythmologie.",
  path: "/medecins",
  keywords: [
    "cardiologues saint-denis réunion",
    "équipe cardiologie",
    "cardiologues clinique sainte-clotilde",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildItemListJsonLd({
      name: "Équipe médicale de cardiologie",
      path: "/medecins",
      items: doctors.map((doctor) => ({
        name: doctor.name,
        path: `/medecins/${doctor.slug}`,
        description: doctor.shortDescription,
      })),
    }),
    buildFaqJsonLd(doctorsFaq),
  ],
};

export default function Page() {
  return (
    <>
      <DoctorsPage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
