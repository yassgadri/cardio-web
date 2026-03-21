import HospitalisationPage from "@/components/site/HospitalisationPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Hospitalisation en cardiologie",
  description:
    "Informations pratiques sur l'hospitalisation en cardiologie à la Clinique Sainte-Clotilde à Saint-Denis de La Réunion.",
  path: "/hospitalisation",
  keywords: ["hospitalisation cardiologie", "séjour cardiologie clinique sainte-clotilde"],
});

export default function Page() {
  return <HospitalisationPage />;
}
