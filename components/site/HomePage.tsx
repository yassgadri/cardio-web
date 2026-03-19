'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, HeartPulse, Activity, Stethoscope, ClipboardList } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/SectionHeading';
import { serviceCategories, exams } from '@/content/services';
import { stats, contactInfo } from '@/content/navigation';
import { withBasePath } from '@/lib/paths';

const heroImg = withBasePath('/assets/hero-cardio.jpg');
const aboutImg = withBasePath('/assets/about-cardio.jpg');
const serviceIcons = [HeartPulse, Activity, Stethoscope];
const patientCards = [
  { title: 'Consultation', href: '/consultation', text: 'Première évaluation, suivi spécialisé et interprétation des examens.' },
  { title: 'Hospitalisation', href: '/hospitalisation', text: 'Organisation de la prise en charge lorsque votre situation nécessite un séjour adapté.' },
  { title: 'Préparer ma visite', href: '/preparer-ma-visite', text: 'Documents utiles, examens antérieurs et informations pratiques avant votre venue.' },
  { title: 'Accès', href: '/acces', text: 'Coordonnées, localisation et moyens simples pour rejoindre le service.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function HomePage() {
  return (
    <Layout>
      <section className="relative flex min-h-[80vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Cardiologie" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />
        </div>
        <div className="container-main relative z-10 py-20">
          <motion.div className="max-w-2xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/70">Bienvenue</p>
            <h1 className="text-4xl font-semibold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">Service de Cardiologie</h1>
            <p className="mt-4 text-xl font-medium text-primary-foreground/80 md:text-2xl">Clinique Sainte Clotilde</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              Une prise en charge cardiologique structurée autour de trois axes : spécialités, examens et parcours patient.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/specialites" className="inline-flex items-center gap-2 rounded-lg bg-background px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-background/90">
                Découvrir le service <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10">
                <Phone className="h-4 w-4" /> {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading overline="Spécialités" title="Les domaines de prise en charge" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((cat, i) => {
              const Icon = serviceIcons[i];
              return (
                <motion.div key={cat.slug} className="medical-card group" {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">{cat.title}</h3>
                  <p className="mb-6 text-body text-sm leading-relaxed">{cat.description}</p>
                  <Link href={`/${cat.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
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
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <motion.div {...fadeUp}>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Le service</p>
              <h2 className="mb-6 text-2xl md:text-3xl lg:text-4xl">Une cardiologie organisée autour du patient</h2>
              <div className="mb-6 h-1 w-16 rounded-full bg-primary" />
              <p className="mb-6 text-body leading-relaxed">
                Le service de cardiologie de la Clinique Sainte Clotilde propose une prise en charge complète associant consultations, examens spécialisés et gestes techniques, avec une attention particulière portée à la clarté du parcours patient.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/parcours-patient" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
                  Parcours patient
                </Link>
                <Link href="/examens" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background">
                  Voir les examens
                </Link>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              <div className="relative overflow-hidden rounded-xl">
                <img src={aboutImg} alt="Équipe de cardiologie" className="h-auto w-full rounded-xl" />
                <div className="absolute bottom-4 right-4 max-w-[220px] rounded-xl bg-primary p-6 text-primary-foreground">
                  <p className="text-2xl font-bold">30</p>
                  <p className="text-sm opacity-80">Années d'expérience en cardiologie</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading overline="Examens" title="Les principaux examens proposés" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
            {exams.map((exam, i) => (
              <motion.div key={exam.slug} className="medical-card p-6" {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.06 }}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <ClipboardList className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold">{exam.title}</h3>
                <p className="text-body text-sm leading-relaxed">{exam.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/examens" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Découvrir tous les examens <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section">
        <div className="container-main">
          <SectionHeading overline="Parcours patient" title="Les informations utiles avant votre venue" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {patientCards.map((card, i) => (
              <motion.div key={card.href} className="medical-card" {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
                <h3 className="mb-3 text-lg font-semibold">{card.title}</h3>
                <p className="mb-5 text-body text-sm leading-relaxed">{card.text}</p>
                <Link href={card.href} className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Lire la suite <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container-main">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} className="text-center text-primary-foreground" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <p className="text-4xl font-bold md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm opacity-70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main text-center">
          <motion.p className="text-lg text-body" {...fadeUp}>
            Pour toute demande de rendez-vous, merci de{' '}
            <Link href="/contact" className="font-semibold text-primary hover:underline">nous contacter</Link>.
          </motion.p>
        </div>
      </section>
    </Layout>
  );
}
