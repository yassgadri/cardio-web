"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, HeartPulse, Activity, Stethoscope } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import { serviceCategories } from "@/content/services";

const icons = [HeartPulse, Activity, Stethoscope];
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function SpecialtiesPage() {
  return (
    <Layout>
      <PageBanner
        title="Spécialités"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Spécialités" }]}
      />
      <section className="section-padding">
        <div className="container-main">
          <motion.div className="mx-auto mb-12 max-w-3xl text-center" {...fadeUp}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Organisation médicale
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl">
              Les principaux domaines de prise en charge
            </h2>
            <p className="mt-4 text-body leading-relaxed">
              Cette page présente les grandes spécialités du service afin d’aider les patients à
              mieux comprendre vers quel type de prise en charge ils peuvent être orientés.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {serviceCategories.map((category, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={category.slug}
                  className="medical-card flex h-full flex-col"
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{category.title}</h3>
                  <p className="mb-4 text-body text-sm leading-relaxed">{category.description}</p>
                  <div className="mb-6 space-y-2 text-sm text-body">
                    {category.procedures.slice(0, 3).map((procedure) => (
                      <p key={procedure.title}>• {procedure.title}</p>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={`/${category.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                    >
                      Voir le détail <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section">
        <div className="container-main">
          <SectionHeading
            overline="Parcours patient"
            title="Comment le service oriente la prise en charge"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <motion.div className="medical-card" {...fadeUp}>
              <h3 className="text-lg font-semibold">Consultation et premier bilan</h3>
              <p className="mt-3 text-body leading-relaxed">
                Une consultation permet d’évaluer les symptômes, les facteurs de risque et les
                examens déjà réalisés afin d’orienter la suite du parcours.
              </p>
              <Link
                href="/consultation"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                Voir la consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              className="medical-card"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
            >
              <h3 className="text-lg font-semibold">Examens et explorations spécialisées</h3>
              <p className="mt-3 text-body leading-relaxed">
                Selon la situation, le patient peut être orienté vers des explorations non
                invasives, un suivi du rythme cardiaque ou un bilan plus ciblé.
              </p>
              <Link
                href="/explorations-non-invasives"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                Voir les explorations <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              className="medical-card"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.16 }}
            >
              <h3 className="text-lg font-semibold">Prise en charge spécialisée</h3>
              <p className="mt-3 text-body leading-relaxed">
                Lorsque cela est indiqué, la prise en charge peut relever de la cardiologie
                interventionnelle ou d’une rythmologie spécialisée.
              </p>
              <Link
                href="/cardiologie-interventionnelle"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                Voir la filière <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
