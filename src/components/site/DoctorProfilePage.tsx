"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ChevronLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import type { Doctor } from "@/content/doctors";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function DoctorProfilePage({ doctor }: { doctor: Doctor }) {
  return (
    <Layout>
      <PageBanner
        title={doctor.name}
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Médecins", href: "/medecins" },
          { label: doctor.name },
        ]}
      />

      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <motion.div className="medical-card" {...fadeUp}>
            <Link
              href="/medecins"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <ChevronLeft className="h-4 w-4" /> Retour à l'équipe médicale
            </Link>

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Service de cardiologie de la Clinique Sainte-Clotilde
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-heading">{doctor.name}</h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-primary" />

            <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-body leading-relaxed">{doctor.shortDescription}</p>

                <h2 className="mt-8 text-xl font-semibold text-heading">
                  Activités au sein du service
                </h2>
                <ul className="mt-4 space-y-2 text-body">
                  {doctor.qualifications.map((qualification) => (
                    <li key={qualification}>• {qualification}</li>
                  ))}
                </ul>
              </div>

              <aside className="rounded-2xl border border-black/5 bg-slate-50 p-6">
                <h2 className="text-lg font-semibold text-heading">Contact</h2>
                <p className="mt-3 text-sm text-body">
                  Pour toute demande, vous pouvez écrire directement au praticien ou contacter le
                  service.
                </p>
                <a
                  href={`mailto:${doctor.email}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" /> Envoyer un mail{/*doctor.email*/}
                </a>
              </aside>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
