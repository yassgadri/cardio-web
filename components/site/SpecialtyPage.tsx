"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { serviceCategories } from "@/content/services";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function SpecialtyPage({ slug }: { slug: string }) {
  const category = serviceCategories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <Layout>
        <PageBanner title="Page non trouvée" />
        <div className="container-main section-padding text-center">
          <p className="text-body">La spécialité demandée n&apos;existe pas.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageBanner
        title={category.title}
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Spécialités", href: "/specialites" },
          { label: category.title },
        ]}
      />
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <motion.div className="mb-8" {...fadeUp}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Spécialité
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl">{category.title}</h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
            <p className="mt-6 text-body leading-relaxed">{category.description}</p>
          </motion.div>

          <div className="space-y-12">
            {category.procedures.map((proc, i) => (
              <motion.div
                key={proc.title}
                className="medical-card"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              >
                <h3 className="mb-6 text-xl font-semibold text-heading">
                  {String(i + 1).padStart(2, "0")}. {proc.title}
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-heading">
                      Description
                    </h4>
                    <p className="whitespace-pre-line text-body text-sm leading-relaxed">
                      {proc.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-heading">
                      Déroulement
                    </h4>
                    <p className="whitespace-pre-line text-body text-sm leading-relaxed">
                      {proc.process}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
