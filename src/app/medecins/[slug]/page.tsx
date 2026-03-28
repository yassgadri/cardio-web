import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DoctorProfilePage from "@/components/site/DoctorProfilePage";
import { doctors, getDoctorBySlug } from "@/content/doctors";
import { absoluteUrl, buildBreadcrumbJsonLd, buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    return {
      title: "Page introuvable",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildPageMetadata({
    title: `${doctor.name} - Cardiologie`,
    description: `${doctor.name}, cardiologue au sein du service de cardiologie de la Clinique Sainte-Clotilde à Saint-Denis de La Réunion.`,
    path: `/medecins/${doctor.slug}`,
    keywords: [doctor.name, ...doctor.qualifications, "cardiologue Sainte-Clotilde", "Saint-Denis", "La Réunion"],
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  const path = `/medecins/${doctor.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      buildWebPageJsonLd({
        name: doctor.name,
        description: doctor.shortDescription,
        path,
      }),
      buildBreadcrumbJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Médecins", path: "/medecins" },
        { name: doctor.name, path },
      ]),
      {
        "@type": "Physician",
        name: doctor.name,
        medicalSpecialty: "Cardiovascular",
        description: doctor.shortDescription,
        email: doctor.email,
        worksFor: {
          "@type": "MedicalClinic",
          name: "Service de cardiologie de la Clinique Sainte-Clotilde",
        },
        url: absoluteUrl(`${path}/`),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Saint-Denis",
          addressRegion: "La Réunion",
          postalCode: "97490",
          addressCountry: "FR",
        },
      },
    ],
  };

  return (
    <>
      <DoctorProfilePage doctor={doctor} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
