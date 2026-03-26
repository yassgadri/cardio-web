import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SpecialtyPage from "@/components/site/SpecialtyPage";
import { serviceCategories } from "@/content/services";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
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
    title: category.title,
    description: category.description,
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageJsonLd({
        name: category.title,
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
    ],
  };

  return (
    <>
      <SpecialtyPage slug={slug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
