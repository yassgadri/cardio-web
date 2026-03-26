import PatientJourneyPage from "@/components/site/PatientJourneyPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Parcours patient",
  description:
    "Retrouvez les informations utiles sur le parcours patient en cardiologie à la Clinique Sainte-Clotilde : consultation, examens, hospitalisation et suivi.",
  path: "/parcours-patient",
  keywords: ["parcours patient cardiologie", "prise en charge cardiologie"],
});

export default function Page() {
  return <PatientJourneyPage />;
}
