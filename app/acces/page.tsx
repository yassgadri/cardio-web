import AccessPage from "@/components/site/AccessPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Accès et localisation",
  description:
    "Adresse, localisation et informations d'accès au service de cardiologie de la Clinique Sainte-Clotilde à Saint-Denis de La Réunion.",
  path: "/acces",
  keywords: ["adresse cardiologie sainte-clotilde", "accès clinique sainte-clotilde"],
});

export default function Page() {
  return <AccessPage />;
}
