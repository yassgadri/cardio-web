"use client";

import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { exams } from "@/content/services";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function ExamensPage() {
  return (
    <Layout>
      <PageBanner
        title="Examens"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Examens" }]}
      />
      <section className="section-padding">
        <div className="container-main max-w-6xl">
          <motion.div className="mb-12 max-w-3xl" {...fadeUp}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Examens cardiologiques
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl">
              Les examens les plus fréquemment proposés
            </h2>
            <p className="mt-4 text-body leading-relaxed">
              Cette page présente les examens les plus courants du service. L’objectif est
              d’expliquer simplement à quoi ils servent, comment ils se déroulent et ce qu’il faut
              prévoir avant le rendez-vous.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {exams.map((exam, index) => (
              <motion.div
                key={exam.slug}
                className="medical-card"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold">{exam.title}</h3>
                  {exam.subtitle ? (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {exam.subtitle}
                    </span>
                  ) : null}
                </div>
                <div className="space-y-5 text-sm">
                  <div>
                    <h4 className="mb-2 font-semibold text-heading">À quoi sert cet examen ?</h4>
                    <p className="text-body leading-relaxed">{exam.description}</p>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-heading">
                      Comment se déroule l’examen ?
                    </h4>
                    <p className="text-body leading-relaxed">{exam.process}</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-2 font-semibold text-heading">Durée</h4>
                      <p className="text-body">{exam.duration}</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-heading">Préparation</h4>
                      <p className="text-body">{exam.preparation}</p>
                    </div>
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
