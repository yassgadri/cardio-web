import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SpecialtyPage from "@/components/site/SpecialtyPage";
import { specialtySeoContent } from "@/content/seo-content";
import { serviceCategories } from "@/content/services";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildSpecialtyMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo";

export function generateStaticParams() {
  return serviceCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = serviceCategories.find((item) => item.slug === slug);

  if (!category) {
    return {
      title: "Page introuvable",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildSpecialtyMetadata({
    title: `${category.title} à Saint-Denis de La Réunion`,
    description: `${category.description} Prise en charge au sein du service de cardiologie de la Clinique Sainte-Clotilde à Saint-Denis de La Réunion.`,
    slug,
    procedures: category.procedures.map((procedure) => procedure.title),
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = serviceCategories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const seoContent = specialtySeoContent[slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageJsonLd({
        name: `${category.title} à Saint-Denis de La Réunion`,
        description: category.description,
        path: `/${category.slug}`,
      }),
      buildBreadcrumbJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Spécialités", path: "/specialites" },
        { name: category.title, path: `/${category.slug}` },
      ]),
      {
        "@type": "MedicalWebPage",
        name: category.title,
        description: category.description,
        url: absoluteUrl(`/${category.slug}/`),
        about: {
          "@type": "MedicalCondition",
          name: "Pathologies cardiovasculaires",
        },
      },
      ...(seoContent ? [buildFaqJsonLd(seoContent.faq)] : []),
    ],
  };

  return (
    <>
      <SpecialtyPage slug={slug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
