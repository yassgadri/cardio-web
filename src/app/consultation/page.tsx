import ConsultationPage from "@/components/site/ConsultationPage";
import { buildBreadcrumbJsonLd, buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Consultation de cardiologie",
  description:
    "Informations utiles sur la consultation de cardiologie à la Clinique Sainte-Clotilde : rendez-vous, déroulement et orientation des patients à Saint-Denis de La Réunion.",
  path: "/consultation",
  keywords: ["consultation cardiologie", "rendez-vous cardiologue saint-denis"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildWebPageJsonLd({
      name: "Consultation de cardiologie",
      description: metadata.description as string,
      path: "/consultation",
    }),
    buildBreadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Consultation", path: "/consultation" },
    ]),
  ],
};

export default function Page() {
  return (
    <>
      <ConsultationPage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
