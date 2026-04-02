"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { contactInfo } from "@/content/navigation";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function ConsultationPage() {
  return (
    <Layout>
      <PageBanner
        title="Consultation"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Parcours patient", href: "/parcours-patient" },
          { label: "Consultation" },
        ]}
      />
      <section className="section-padding">
        <div className="container-main max-w-5xl">
          <motion.div {...fadeUp}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Parcours patient
            </p>
            <h2 className="mb-4 text-2xl md:text-3xl">Consultation cardiologique</h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-primary" />
            <p className="mb-8 text-body leading-relaxed">
              La consultation permet une première évaluation cardiologique, un suivi spécialisé ou
              l’interprétation d’examens déjà réalisés. Elle permet également d’orienter la prise en
              charge, de programmer si besoin des examens complémentaires et d’expliquer la suite du
              parcours.
            </p>
            <p className="mb-8 text-body leading-relaxed">
              Les consultations se déroulent dans le bâtiment B, au 2ᵉ étage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <motion.div className="medical-card" {...fadeUp}>
              <h3 className="mb-4 text-lg font-semibold">Prendre rendez-vous</h3>
              <p className="mb-4 text-body text-sm leading-relaxed">
                Pour toute demande de consultation, merci de contacter le secrétariat du service.
                L’équipe vous indiquera les modalités pratiques selon votre situation et le type de
                prise en charge attendu.
              </p>
              <div className="space-y-3 text-sm">
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 font-semibold text-primary"
                >
                  <Phone className="h-4 w-4" /> {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                >
                  <Mail className="h-4 w-4" /> {contactInfo.email}
                </a>
              </div>
            </motion.div>

            <motion.div
              className="medical-card"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              <h3 className="mb-4 text-lg font-semibold">Le jour de la consultation</h3>
              <div className="space-y-3 text-sm text-body">
                <p>
                  Merci de venir avec vos ordonnances, traitements en cours et examens
                  cardiologiques antérieurs si vous en disposez.
                </p>
                <p>
                  Selon votre dossier, un ECG ou d’autres examens peuvent être réalisés ou
                  programmés à l’issue de la consultation.
                </p>
                <p>
                  En cas d’empêchement, il est recommandé de prévenir le secrétariat dès que
                  possible.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="medical-card mt-6"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">À prévoir</h3>
                <p className="text-sm text-body leading-relaxed">
                  Pensez à apporter une pièce d’identité, vos documents de prise en charge si
                  besoin, ainsi que vos comptes rendus, ECG, échographies ou bilans récents afin de
                  faciliter l’évaluation médicale.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
