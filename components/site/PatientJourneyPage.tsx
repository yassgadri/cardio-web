"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { withBasePath } from "@/lib/paths";

const items = [
  {
    title: "Consultation",
    href: "/consultation",
    text: "Prendre rendez-vous, préparer son dossier, comprendre le déroulement de la consultation et la suite du parcours.",
  },
  {
    title: "Hospitalisation",
    href: "/hospitalisation",
    text: "Retrouver les informations utiles sur le séjour, les équipements disponibles et le secrétariat dédié.",
  },
  {
    title: "Préparer ma visite",
    href: "/preparer-ma-visite",
    text: "Venir avec les bons documents et les examens déjà réalisés afin de faciliter la prise en charge.",
  },
  {
    title: "Accès",
    href: "/acces",
    text: "Consulter l’adresse, les coordonnées utiles et la localisation du service de cardiologie.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function PatientJourneyPage() {
  return (
    <Layout>
      <PageBanner
        title="Parcours patient"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Parcours patient" }]}
      />
      <section className="section-padding">
        <div className="container-main">
          <motion.div className="mx-auto mb-12 max-w-3xl text-center" {...fadeUp}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Informations pratiques
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl">
              Les informations utiles pour vous orienter simplement
            </h2>
            <p className="mt-4 text-body leading-relaxed">
              Cette rubrique regroupe les principales informations utiles avant votre venue, pendant
              votre prise en charge et pour vos échanges avec le secrétariat du service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {items.map((item, index) => (
              <motion.div
                key={item.href}
                className="medical-card flex h-full flex-col"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
              >
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="mb-6 text-body text-sm leading-relaxed">{item.text}</p>
                <div className="mt-auto">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Lire la suite <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
