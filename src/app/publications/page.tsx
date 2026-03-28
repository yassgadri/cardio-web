import PublicationsPage from "@/components/site/PublicationsPage";
import { publications } from "@/content/publications";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Publications scientifiques",
  description:
    "Publications scientifiques associées au service de cardiologie de la Clinique Sainte-Clotilde à Saint-Denis de La Réunion.",
  path: "/publications",
  keywords: [
    "publications scientifiques cardiologie",
    "recherche cardiologie réunion",
    "Clinique Sainte-Clotilde cardiologie",
    "Yassine Gadri publication",
    "FFR vFFR",
  ],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    buildWebPageJsonLd({
      name: "Publications scientifiques",
      description: metadata.description as string,
      path: "/publications",
    }),
    buildBreadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Publications scientifiques", path: "/publications" },
    ]),
    {
      "@type": "CollectionPage",
      name: "Publications scientifiques",
      url: absoluteUrl("/publications/"),
      hasPart: publications.map((publication) => ({
        "@type": "ScholarlyArticle",
        headline: publication.title,
        url: publication.articleUrl,
        sameAs: publication.doiUrl,
        datePublished: publication.year,
        author: publication.authors.map((author) => ({
          "@type": "Person",
          name: author,
        })),
        isPartOf: {
          "@type": "Periodical",
          name: publication.journal,
        },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <PublicationsPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
