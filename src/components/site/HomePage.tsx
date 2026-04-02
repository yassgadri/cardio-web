"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, HeartPulse, Activity, Stethoscope, Microscope } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import { serviceCategories } from "@/content/services";
import { withBasePath } from "@/lib/paths";
import { featuredPublication } from "@/content/publications";

const heroImg = withBasePath("/assets/hero.jpg");
const serviceImg = withBasePath("/assets/salle-de-soins.png");
const doctorsImg = withBasePath("/assets/secreteriat.jpg");
const interventionImg = withBasePath("/assets/bloc.jpg");
const cliniqueLogo = withBasePath("/assets/carre-rvb-csc.png");
const serviceIcons = [HeartPulse, Activity, Stethoscope];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function HomePage() {
  return (
    <Layout>
      <section className="relative flex min-h-[40vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Cardiologie" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        </div>
        <div className="container-main relative z-10 py-20">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
              Bienvenue
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Service de Cardiologie
            </h1>
            <p className="mt-4 text-xl font-medium text-primary-foreground/80 md:text-2xl">
              Clinique Sainte Clotilde
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              Le service prend en charge les patients en consultation, en hospitalisation et lors
              des principaux examens cardiologiques, dans le cadre d’une organisation rigoureuse
              garantissant un parcours de soins fluide, coordonné et sécurisé.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/specialites"
                className="inline-flex items-center gap-2 rounded-lg bg-background px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-background/90"
              >
                Découvrir le service <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-section">
        <div className="container-main">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div {...fadeUp}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                À propos du service
              </p>
              <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl">
                Le service de cardiologie de la Clinique Sainte-Clotilde
              </h2>
              <div className="mb-6 h-1 w-16 rounded-full bg-primary" />
              <p className="mb-4 text-body leading-relaxed">
                Le service de cardiologie de la Clinique Sainte-Clotilde, situé à Saint-Denis,
                regroupe cardiologues et personnel paramédical autour de la prise en charge des
                pathologies cardiovasculaires.
              </p>
              <p className="mb-6 text-body leading-relaxed">
                La Clinique Sainte-Clotilde fait partie du groupe{" "}
                <a
                  href="https://www.clinifutur.net/fr/sainte-clotilde-clinique"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Clinique Sainte-Clotilde - Groupe Clinifutur"
                  className="text-blue-600 underline hover:text-blue-800 hover:text-primary"
                >
                  Clinifutur
                </a>
                .
              </p>
              <img
                src={cliniqueLogo}
                alt="Clinique Sainte-Clotilde"
                className="h-12 lg:h-12 max-h-12 w-auto"
              />
              <p className="mb-6 text-body leading-relaxed" />
              <p className="mb-6 text-body leading-relaxed">
                Les patients sont pris en charge de la consultation aux examens et aux gestes
                interventionnels, dans une organisation structurée avec un secrétariat dédié.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/qui-sommes-nous"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  En savoir plus
                </Link>
                <Link
                  href="/medecins"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background"
                >
                  Voir les médecins
                </Link>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-xl col-span-2">
                  <img
                    src={serviceImg}
                    alt="Locaux du service de cardiologie"
                    className="h-72 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={doctorsImg}
                    alt="Équipe du service de cardiologie"
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={interventionImg}
                    alt="Plateau technique de cardiologie interventionnelle"
                    className="h-48 w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="section-padding bg-section">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div className="medical-card" {...fadeUp}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Microscope className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Activité scientifique
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl text-heading">
                Une publication scientifique mise en avant
              </h2>
              <p className="mt-5 text-body leading-relaxed">
                Le service participe également à la recherche clinique. Retrouvez une publication
                scientifique réalisée autour de l’évaluation fonctionnelle des lésions coronaires.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/publications"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Voir la publication <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.article
              className="medical-card"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Publication 2025
              </p>
              <h3 className="mt-3 text-xl font-semibold text-heading">
                {featuredPublication.title}
              </h3>
              <p className="mt-3 text-sm text-body">
                {featuredPublication.journal} • DOI : {featuredPublication.doi}
              </p>
              <p className="mt-5 text-body leading-relaxed">{featuredPublication.summary}</p>
              <p className="mt-4 text-sm text-body leading-relaxed">
                Résumé pour les patients : cette étude illustre une démarche d’évaluation précise
                des lésions coronaires et l’implication du service dans une pratique fondée sur les
                données cliniques.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading overline="" title="Spécialités" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((cat, i) => {
              const Icon = serviceIcons[i];
              return (
                <motion.div
                  key={cat.slug}
                  className="medical-card group"
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">{cat.title}</h3>
                  <p className="mb-6 text-body text-sm leading-relaxed">{cat.description}</p>
                  <Link
                    href={`/${cat.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3"
                  >
                    Lire la suite <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
