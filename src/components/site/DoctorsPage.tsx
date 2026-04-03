"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { doctors } from "@/content/doctors";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function DoctorsPage() {
  return (
    <Layout>
      <PageBanner
        title="Médecins"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Médecins" }]}
      />
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
              Équipe médicale
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl">Nos cardiologues</h2>
            <p className="mx-auto mt-4 max-w-3xl text-body leading-relaxed">
              Cette page permet de découvrir les cardiologues du service, leurs activités au sein
              de l’équipe et leurs profils individuels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.email}
                className="medical-card text-center"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              >
                <h3 className="mb-2 text-base font-semibold text-heading">
                  <Link href={`/medecins/${doc.slug}`} className="hover:text-primary hover:underline">
                    {doc.name}
                  </Link>
                </h3>
                <ul className="text-body text-xs space-y-1 mb-4">
                  {doc.qualifications.map((q, j) => (
                    <li key={j}>{q}</li>
                  ))}
                </ul>
                <Link
                  href={`/medecins/${doc.slug}`}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                >
                  Voir le profil <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`mailto:${doc.email}`}
                  className="mt-3 inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                >
                  <Mail className="h-4 w-4" /> Envoyer un mail
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
