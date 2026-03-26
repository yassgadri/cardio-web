"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, HeartPulse, Activity, Stethoscope } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
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
              Trois domaines complémentaires au sein du service
            </h2>
            <p className="mt-4 text-body leading-relaxed">
              Le service de cardiologie s’organise autour de trois spécialités qui permettent
              d’assurer l’évaluation, le traitement et le suivi des principales pathologies
              cardiovasculaires.
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
                  <p className="mb-6 text-body text-sm leading-relaxed">{category.description}</p>
                  <div className="mb-6 space-y-2 text-sm text-body">
                    {category.procedures.slice(0, 4).map((procedure) => (
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
    </Layout>
  );
}
