import ConsultationPage from "@/components/site/ConsultationPage";
import { consultationFaq } from "@/content/seo-content";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Consultation de cardiologie à Saint-Denis de La Réunion",
  description:
    "Prendre rendez-vous pour une consultation de cardiologie à la Clinique Sainte-Clotilde à Saint-Denis de La Réunion : informations pratiques, documents utiles et parcours patient.",
  path: "/consultation",
  keywords: [
    "consultation cardiologue saint-denis",
    "consultation cardiologie réunion",
    "rendez-vous cardiologue sainte-clotilde",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildWebPageJsonLd({
      name: "Consultation de cardiologie à Saint-Denis de La Réunion",
      description: metadata.description as string,
      path: "/consultation",
    }),
    buildBreadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Consultation", path: "/consultation" },
    ]),
    buildFaqJsonLd(consultationFaq),
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
