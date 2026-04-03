"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { specialtySeoContent } from "@/content/seo-content";
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

  const seoContent = specialtySeoContent[slug];

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
        <div className="container-main max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 mb-12">
            <motion.div {...fadeUp}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                Spécialité
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl">{category.title}</h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
              <p className="mt-6 text-body leading-relaxed">{category.description}</p>
              {seoContent ? <p className="mt-4 text-body leading-relaxed">{seoContent.intro}</p> : null}
            </motion.div>

            <motion.div className="w-full h-full" {...fadeUp}>
              <img
                src={category.image}
                alt={category.title}
                className="h-[250px] w-full rounded-2xl object-cover shadow-md md:h-[300px]"
              />
            </motion.div>
          </div>

          {seoContent ? (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] mb-12">
              <motion.div className="medical-card" {...fadeUp}>
                <h3 className="text-xl font-semibold">{seoContent.whenToConsultTitle}</h3>
                <ul className="mt-4 space-y-3 text-body leading-relaxed">
                  {seoContent.whenToConsult.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className="medical-card"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.08 }}
              >
                <h3 className="text-xl font-semibold">Prise en charge</h3>
                <p className="mt-4 text-body leading-relaxed">{seoContent.localCareText}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/consultation"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
                  >
                    Prendre rendez-vous
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground"
                  >
                    Contacter le service
                  </Link>
                </div>
              </motion.div>
            </div>
          ) : null}

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
