import AboutPage from "@/components/site/AboutPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Le service de cardiologie",
  description:
    "Présentation du service de cardiologie de la Clinique Sainte-Clotilde à Saint-Denis de La Réunion, de son organisation et de son approche de prise en charge.",
  path: "/qui-sommes-nous",
  keywords: ["service de cardiologie", "clinique cardiologie saint-denis"],
});

export default function Page() {
  return <AboutPage />;
}
