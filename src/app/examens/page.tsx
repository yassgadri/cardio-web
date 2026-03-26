import ExamensPage from "@/components/site/ExamensPage";
import { exams } from "@/content/services";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Examens de cardiologie",
  description:
    "Découvrez les examens cardiologiques proposés par le service de cardiologie de la Clinique Sainte-Clotilde à Saint-Denis de La Réunion pour le diagnostic et le suivi cardiovasculaire.",
  path: "/examens",
  keywords: exams.map((exam) => exam.title),
});

export default function Page() {
  return <ExamensPage />;
}
