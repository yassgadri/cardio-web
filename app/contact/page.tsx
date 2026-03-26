import ContactPage from "@/components/site/ContactPage";
import { buildBreadcrumbJsonLd, buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact cardiologie Sainte-Clotilde",
  description:
    "Téléphone, email, horaires et informations de contact du service de cardiologie de la Clinique Sainte-Clotilde à Saint-Denis de La Réunion.",
  path: "/contact",
  keywords: ["contact cardiologie sainte-clotilde", "téléphone cardiologie saint-denis"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildWebPageJsonLd({
      name: "Contact cardiologie Sainte-Clotilde",
      description: metadata.description as string,
      path: "/contact",
    }),
    buildBreadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Contact", path: "/contact" },
    ]),
  ],
};

export default function Page() {
  return (
    <>
      <ContactPage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
