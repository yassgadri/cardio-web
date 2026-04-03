"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartPulse,
  Activity,
  Stethoscope,
  MapPin,
  Phone,
  CalendarDays,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import { serviceCategories } from "@/content/services";
import { contactInfo } from "@/content/navigation";
import { withBasePath } from "@/lib/paths";

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

const quickLinks = [
  {
    title: "Consultation de cardiologie",
    description:
      "Prendre rendez-vous pour une première consultation, un suivi spécialisé ou l'analyse d'examens déjà réalisés.",
    href: "/consultation",
    icon: CalendarDays,
  },
  {
    title: "Examens cardiologiques",
    description:
      "Explorer le cœur grâce aux explorations non invasives, aux examens complémentaires et aux avis spécialisés.",
    href: "/explorations-non-invasives",
    icon: Activity,
  },
  {
    title: "Contacter le service",
    description:
      "Retrouver l'adresse, le téléphone du secrétariat et les contacts utiles du service.",
    href: "/contact",
    icon: Phone,
  },
];

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
              Service de cardiologie
            </h1>
            <p className="mt-4 text-xl font-medium text-primary-foreground/80 md:text-2xl">
              Clinique Sainte-Clotilde
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              À Saint-Denis, le service accompagne les patients en consultation, en hospitalisation
              et dans les principaux examens cardiologiques, avec une organisation structurée et
              une prise en charge coordonnée.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/specialites"
                className="inline-flex items-center gap-2 rounded-lg bg-background px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-background/90"
              >
                Découvrir le service <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
              >
                Prendre rendez-vous <ArrowRight className="h-4 w-4" />
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
                Une équipe de cardiologie à Saint-Denis
              </h2>
              <div className="mb-6 h-1 w-16 rounded-full bg-primary" />
              <p className="mb-4 text-body leading-relaxed">
                Le service réunit cardiologues et personnel paramédical autour du diagnostic, du
                suivi et de la prise en charge des pathologies cardiovasculaires.
              </p>
              <p className="mb-4 text-body leading-relaxed">
                Le site présente les spécialités du service, l’équipe médicale, le parcours patient
                et les informations pratiques pour joindre le secrétariat ou préparer une venue.
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
              <div className="mt-6 flex flex-wrap gap-4">
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

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading overline="Accès rapide" title="Consulter, être orienté, contacter le service" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {quickLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="medical-card h-full"
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mb-5 text-body text-sm leading-relaxed">{item.description}</p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    Voir la page <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading overline="Spécialités" title="Les grands domaines du service" />
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

      <section className="section-padding bg-section">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div className="medical-card" {...fadeUp}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                Orientation des patients
              </p>
              <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl">
                Dans quelles situations consulter ?
              </h2>
              <p className="text-body leading-relaxed">
                Le service peut être sollicité pour un premier avis, un suivi cardiologique, une
                orientation après symptômes ou l’organisation d’examens spécialisés.
              </p>
              <ul className="mt-6 space-y-3 text-body">
                <li>• Douleurs thoraciques, palpitations, essoufflement ou malaise.</li>
                <li>• Bilan cardiovasculaire, hypertension artérielle ou facteurs de risque.</li>
                <li>• Suivi après examen, hospitalisation ou geste spécialisé.</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/consultation"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
                >
                  Demander une consultation
                </Link>
                <Link
                  href="/specialites"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground"
                >
                  Voir les spécialités
                </Link>
              </div>
            </motion.div>

            <motion.div className="medical-card" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Infos pratiques</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    Clinique Sainte-Clotilde<br />
                    127 route du Bois de Nèfles<br />
                    97490 Sainte-Clotilde, La Réunion
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-body">
                Secrétariat :{" "}
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="font-medium text-primary hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
                >
                  Nous contacter
                </Link>
                <Link
                  href="/preparer-ma-visite"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground"
                >
                  Préparer ma visite
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
