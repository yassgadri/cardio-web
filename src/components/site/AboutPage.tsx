"use client";

import { motion } from "framer-motion";
import { MapPin, HeartPulse, Stethoscope, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import { withBasePath } from "@/lib/paths";

const aboutImg = withBasePath("/assets/clinique.webp");

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const highlights = [
  {
    icon: HeartPulse,
    title: "Soins spécialisés",
    text: "Prise en charge adaptée aux pathologies cardiovasculaires, du diagnostic au suivi.",
  },
  {
    icon: Stethoscope,
    title: "Diagnostic moderne",
    text: "Évaluation précise grâce à des examens et équipements de cardiologie avancés.",
  },
  {
    icon: ShieldCheck,
    title: "Prise en charge sécurisée",
    text: "Organisation structurée du parcours patient au sein de la Clinique Sainte-Clotilde.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <PageBanner
        title="Qui sommes-nous ?"
        breadcrumb={[
          { label: "Service de cardiologie", href: "/" },
          { label: "Qui sommes-nous ?" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <motion.div {...fadeUp} className="lg:col-span-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                À propos du service
              </p>

              <h2 className="text-3xl font-semibold leading-tight text-heading md:text-4xl lg:text-5xl">
                Un service de cardiologie structuré, expérimenté et centré sur le patient
              </h2>

              <div className="mt-5 h-1.5 w-20 rounded-full bg-primary" />

              <p className="mt-6 max-w-2xl text-base leading-8 text-body md:text-lg">
                Le service de <strong>cardiologie</strong> de la{" "}
                <strong>Clinique Sainte-Clotilde</strong>, situé à Saint-Denis au{" "}
                <strong>126 route de Bois de Nèfles</strong>, réunit une équipe pluridisciplinaire
                dédiée au diagnostic, au traitement et au suivi des maladies cardiovasculaires.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.12 }}
              className="lg:col-span-6"
            >
              <div className="relative overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <img
                  src={aboutImg}
                  alt="Équipe de cardiologie"
                  className="h-[420px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

                <div className="absolute left-5 top-5 rounded-2xl bg-white/92 px-4 py-3 shadow-md backdrop-blur">
                  <div className="flex items-center gap-2 text-sm font-medium text-heading">
                    <MapPin className="h-4 w-4 text-primary" />
                    Saint-Denis, La Réunion
                  </div>
                  <p className="mt-1 text-xs text-body">Clinique Sainte-Clotilde</p>
                </div>

                <div className="absolute bottom-5 right-5 max-w-[220px] rounded-2xl bg-primary p-5 text-primary-foreground shadow-xl">
                  <p className="text-3xl font-bold leading-none">30+</p>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/90">
                    années d’expérience en cardiologie et cardiologie interventionnelle
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <motion.div {...fadeUp} className="lg:col-span-5">
              <SectionHeading title="Le service de cardiologie de la Clinique Sainte-Clotilde" />

              <p className="mt-6 text-base leading-8 text-body">
                Depuis 1991, le service de cardiologie de la Clinique Sainte-Clotilde, fondé par le{" "}
                <strong>Dr Christophe Pouillot</strong>, est pionnier dans le domaine de la
                cardiologie interventionnelle sur l’île de La Réunion. Il a réalisé des premières
                majeures, telles que la première angioplastie coronaire en 1991, le premier stent
                intracoronaire en 1993, ainsi que la première dilatation de valve cardiaque.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <div className="grid items-stretch gap-5 md:grid-cols-2">
                <div className="flex h-full flex-col space-y-6 rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                      Histoire
                    </p>
                    <p className="mt-3 leading-7 text-body">
                      Depuis plus de trois décennies, le service développe une expertise reconnue en
                      cardiologie diagnostique et interventionnelle, au service des patients de
                      l’île.
                    </p>
                  </div>

                  <div>
                    <p className="leading-7 text-body">
                      Le service s’appuie sur des cardiologues interventionnels expérimentés,
                      soutenus par une équipe infirmière et technique formée aux prises en charge
                      spécialisées.
                    </p>
                  </div>
                </div>

                <div className="flex h-full flex-col justify-start rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Activité
                  </p>

                  <div className="mt-4 space-y-4">
                    <p className="leading-7 text-body">
                      Plus de <strong>80 000 examens</strong> ont été réalisés au fil des années, et
                      plus de <strong>3 000 procédures</strong> sont effectuées chaque année.
                    </p>

                    <p className="leading-7 text-body">
                      En 2014, le service a réalisé le premier <strong>TAVI</strong> de l’océan
                      Indien, illustrant une dynamique d’innovation continue au bénéfice des
                      patients.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
