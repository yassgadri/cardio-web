import DoctorsPage from "@/components/site/DoctorsPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Médecins",
  description:
    "Découvrez l'équipe du service de cardiologie de la Clinique Sainte-Clotilde à Saint-Denis de La Réunion : cardiologues impliqués dans la prise en charge.",
  path: "/medecins",
  keywords: ["équipe cardiologie", "cardiologues clinique sainte-clotilde"],
});

export default function Page() {
  return <DoctorsPage />;
}
