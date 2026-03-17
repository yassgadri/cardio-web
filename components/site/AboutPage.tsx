'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, HeartPulse, Activity, Stethoscope, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import SectionHeading from '@/components/SectionHeading';
import { serviceCategories } from '@/content/services';
import { stats, contactInfo } from '@/content/navigation';

const aboutImg = '/assets/about-cardio.jpg';
const serviceIcons = [HeartPulse, Activity, Stethoscope];
const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

export default function AboutPage() {
  return (
    <Layout>
      <PageBanner title="Qui sommes-nous ?" breadcrumb={[{ label: 'Selarl de cardiologie', href: '/' }, { label: 'Qui sommes-nous ?' }]} />
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">À propos de</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">SELARL de Cardiologie</h2>
              <div className="h-1 w-16 rounded-full bg-primary mb-6" />
              <p className="text-body leading-relaxed mb-6">L&apos;établissement de santé, SELARL de <strong>cardiologie</strong> de la clinique sainte Clotilde, est situé à Saint-Denis, 126 route de bois de nefles dans le 97490. Il accueille 20 professionnels de santé dont 8 cardiologues, 12 infirmiers.</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3"><HeartPulse className="h-5 w-5 text-primary mt-0.5 shrink-0" /><div><h4 className="font-semibold text-heading">Soins médicaux spécialisés</h4><p className="text-body text-sm">Prise en charge adaptée aux besoins cardiovasculaires des patients.</p></div></div>
                <div className="flex items-start gap-3"><Stethoscope className="h-5 w-5 text-primary mt-0.5 shrink-0" /><div><h4 className="font-semibold text-heading">Diagnostic moderne</h4><p className="text-body text-sm">Utilisation de technologies avancées pour une évaluation précise du cœur.</p></div></div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Cliquez ici</Link>
                <a href={`tel:${contactInfo.phoneHospitalisation.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-section transition-colors"><Phone className="h-4 w-4" /> {contactInfo.phoneHospitalisation}</a>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
              <div className="relative rounded-xl overflow-hidden">
                <img src={aboutImg} alt="Équipe de cardiologie" className="w-full h-auto rounded-xl" />
                <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-xl p-6 max-w-[200px]"><p className="text-2xl font-bold">30</p><p className="text-sm opacity-80">Années d&apos;expérience en cardiologie</p></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-primary py-16"><div className="container-main"><div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((stat, i) => <motion.div key={stat.label} className="text-center text-primary-foreground" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><p className="text-4xl md:text-5xl font-bold">{stat.value}</p><p className="text-sm opacity-70 mt-2">{stat.label}</p></motion.div>)}</div></div></section>
      <section className="section-padding"><div className="container-main"><SectionHeading overline="Spécialités" title="Les spécialités disponibles" /><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{serviceCategories.map((cat, i) => { const Icon = serviceIcons[i]; return <motion.div key={cat.slug} className="medical-card group" {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }}><div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6"><Icon className="h-6 w-6 text-primary" /></div><h3 className="text-lg font-semibold mb-3">{cat.title}</h3><p className="text-body text-sm leading-relaxed mb-6">{cat.description}</p><Link href={`/${cat.slug}`} className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">Lire la suite <ArrowRight className="h-4 w-4" /></Link></motion.div>; })}</div></div></section>
      <section className="section-padding bg-section"><div className="container-main max-w-4xl"><SectionHeading overline="Expertise" title="Le service de cardiologie de la Clinique Sainte-Clotilde" /><motion.p className="text-body leading-relaxed text-center" {...fadeUp}>Depuis 1991, l&apos;équipe de cardiologues de la Clinique Sainte-Clotilde a pionniéré la cardiologie interventionnelle sur l&apos;île de la Réunion, réalisant des premières majeures telles que la première angioplastie coronaire en 1991, le premier stent intra-coronaire en 1993 et la première dilatation des valves cardiaques. Au cours des 30 dernières années, plus de 60 000 examens ont été effectués. Aujourd&apos;hui, l&apos;équipe composée de 8 cardiologues interventionnels réalise plus de 3000 procédures chaque année, soutenue par 12 infirmières et manipulatrices de radiologie. En 2014, elle a réalisé le premier TAVI (remplacement de la valve aortique par cathéter).</motion.p></div></section>
    </Layout>
  );
}
