"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, FileText, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import { contactInfo } from "@/content/navigation";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const consultationSteps = [
  "Prise de contact avec le secrétariat pour préciser le motif et les modalités pratiques.",
  "Préparation du rendez-vous avec les documents utiles : ordonnance, courriers, examens et traitement en cours.",
  "Consultation cardiologique permettant d’évaluer la situation et d’orienter la suite du parcours.",
  "Programmation éventuelle d’examens complémentaires ou d’un suivi spécialisé selon l’avis du cardiologue.",
];

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
            <p className="mb-6 text-body leading-relaxed">
              La consultation permet une première évaluation, un suivi spécialisé ou l’analyse
              d’examens déjà réalisés. Elle sert à préciser la situation, orienter la prise en
              charge et programmer si besoin des examens complémentaires.
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
                L’équipe vous indiquera les modalités pratiques selon votre situation.
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
              <h3 className="mb-4 text-lg font-semibold">Le jour du rendez-vous</h3>
              <div className="space-y-3 text-sm text-body">
                <p>
                  Merci de vous présenter quelques minutes avant l’horaire prévu et d’apporter les
                  documents médicaux utiles à l’évaluation.
                </p>
                <div className="flex items-start gap-3 rounded-xl bg-section p-4">
                  <FileText className="mt-0.5 h-5 w-5 text-primary" />
                  <p>
                    Courriers médicaux, examens antérieurs, liste des traitements en cours et
                    documents administratifs peuvent être demandés selon votre situation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section">
        <div className="container-main max-w-5xl">
          <SectionHeading
            overline="Parcours"
            title="Déroulement d'une consultation de cardiologie"
            centered={false}
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {consultationSteps.map((step, index) => (
              <motion.div
                key={step}
                className="medical-card"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.05 }}
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Étape {index + 1}
                </p>
                <p className="mt-3 text-body leading-relaxed">{step}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/preparer-ma-visite"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background"
            >
              Préparer ma visite <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              Voir les contacts utiles
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
