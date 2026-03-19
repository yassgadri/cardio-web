import { notFound } from "next/navigation";
import SpecialtyPage from "@/components/site/SpecialtyPage";
import { serviceCategories } from "@/content/services";

export function generateStaticParams() {
  return serviceCategories.map((category) => ({ slug: category.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!serviceCategories.some((category) => category.slug === slug)) {
    notFound();
  }
  return <SpecialtyPage slug={slug} />;
}
