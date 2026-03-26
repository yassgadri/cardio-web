import PreparingVisitPage from "@/components/site/PreparingVisitPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Préparer ma visite",
  description:
    "Documents utiles, conseils et informations pratiques pour préparer votre visite au service de cardiologie de la Clinique Sainte-Clotilde à Saint-Denis de La Réunion.",
  path: "/preparer-ma-visite",
  keywords: ["préparer visite cardiologie", "documents consultation cardiologie"],
});

export default function Page() {
  return <PreparingVisitPage />;
}
