'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import { contactInfo } from '@/content/navigation';

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };
const schedule = [
  { day: 'Lundi', hours: '8:30-12:00 / 14:00-17:00' },
  { day: 'Mardi', hours: '8:30-12:00 / 14:00-17:00' },
  { day: 'Mercredi', hours: '8:30-12:00 / 14:00-17:00' },
  { day: 'Jeudi', hours: '8:30-12:00 / 14:00-17:00' },
  { day: 'Vendredi', hours: '8:30-12:00 / 14:00-17:00' },
];
const documents = [
  'Le courrier de consultation du médecin traitant.',
  'Les ordonnances des traitements actuels.',
  "Les résultats des examens médicaux et d'analyses biologiques.",
  'La carte Vitale ou une attestation (partie mutuelle à régler sauf ALD ou CMU).',
  "Une pièce d'identité valide.",
];

export default function ConsultationPage() {
  return (
    <Layout>
      <PageBanner title="Consultation" breadcrumb={[{ label: 'Selarl de cardiologie', href: '/' }, { label: 'Consultation' }]} />
      <section className="section-padding"><div className="container-main max-w-4xl"><motion.div {...fadeUp}><p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">À propos de</p><h2 className="text-2xl md:text-3xl mb-4">Consultation</h2><div className="h-1 w-16 rounded-full bg-primary mb-6" /><p className="text-body leading-relaxed mb-8">Les patients sont reçus en consultation par les médecins du service <strong>cardiologie</strong> au sein de l&apos;établissement. Notre priorité est d&apos;assurer un accueil optimal à tous nos patients, en garantissant expertise, attention et confort.</p></motion.div><div className="grid grid-cols-1 md:grid-cols-2 gap-6"><motion.div className="medical-card" {...fadeUp}><div className="flex items-center gap-3 mb-4"><Clock className="h-6 w-6 text-primary" /><h3 className="text-lg font-semibold">Horaires de consultation</h3></div><ul className="space-y-2">{schedule.map((s) => <li key={s.day} className="flex justify-between text-sm text-body"><span className="font-medium text-heading">{s.day}</span><span>{s.hours}</span></li>)}</ul></motion.div><motion.div className="medical-card" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}><h3 className="text-lg font-semibold mb-4">Les documents essentiels</h3><ol className="space-y-2 text-sm text-body list-decimal list-inside">{documents.map((doc, i) => <li key={i}>{doc}</li>)}</ol></motion.div></div><motion.div className="mt-8 medical-card" {...fadeUp}><h3 className="text-lg font-semibold mb-4">Le secrétariat du service consultation</h3><div className="flex flex-wrap gap-6 text-sm"><div><p className="font-semibold text-heading mb-1">Tel:</p><a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-primary font-medium"><Phone className="h-4 w-4" /> {contactInfo.phone}</a></div><div><p className="font-semibold text-heading mb-1">Fax:</p><p className="text-body">{contactInfo.fax}</p></div></div></motion.div><motion.div className="mt-8 text-center" {...fadeUp}><Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">Service de cardiologie — Contactez-nous</Link></motion.div></div></section>
    </Layout>
  );
}
