"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, FileText, Microscope } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { publications } from "@/content/publications";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function PublicationsPage() {
  return (
    <Layout>
      <PageBanner
        title="Publications scientifiques"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Publications scientifiques" }]}
      />

      <section className="section-padding">
        <div className="container-main max-w-5xl space-y-8">
          <motion.div className="medical-card" {...fadeUp}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Recherche & expertise
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-heading">
              Activité scientifique du service de cardiologie
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
            <p className="mt-6 text-body leading-relaxed">
              Cette rubrique présente les publications scientifiques associées à l’activité du
              service. Elle a pour objectif de valoriser l’expertise médicale de l’équipe et de
              mettre à disposition des patients et confrères les références académiques
              pertinentes.
            </p>
          </motion.div>

          {publications.map((publication, index) => (
            <motion.article
              key={publication.slug}
              className="medical-card"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.08 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Publication scientifique
                  </p>
                  <h2 className="mt-2 text-xl md:text-2xl font-semibold text-heading">
                    {publication.title}
                  </h2>
                  <p className="mt-3 text-sm text-body">
                    {publication.journal} • {publication.year} • DOI : {publication.doi}
                  </p>
                </div>

                <a
                  href={publication.articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Consulter l’article <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
                <div>
                  <div className="rounded-2xl bg-section p-6">
                    <div className="flex items-center gap-3">
                      <Microscope className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold text-heading">Résumé accessible</h3>
                    </div>
                    <p className="mt-4 text-body leading-relaxed">{publication.summary}</p>
                    <div className="mt-5 space-y-3 text-body">
                      {publication.patientSummary.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-heading">Auteurs</h3>
                    <p className="mt-3 text-body leading-relaxed">
                      {publication.authors.join(", ")}
                    </p>
                  </div>
                </div>

                <aside className="rounded-2xl border border-black/5 bg-slate-50 p-6">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-heading">Points clés</h3>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-body">
                    {publication.highlights.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>

                  <div className="mt-8 border-t border-border pt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-heading">
                      Voir aussi
                    </h4>
                    <div className="mt-3 space-y-2 text-sm">
                      <Link href="/medecins" className="block text-primary hover:underline">
                        L’équipe médicale
                      </Link>
                      <Link href="/specialites" className="block text-primary hover:underline">
                        Les spécialités du service
                      </Link>
                    </div>
                  </div>
                </aside>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
