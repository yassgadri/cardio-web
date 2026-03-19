'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import { contactInfo } from '@/content/navigation';

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

export default function ConsultationPage() {
  return (
    <Layout>
      <PageBanner title="Consultation" breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Parcours patient', href: '/parcours-patient' }, { label: 'Consultation' }]} />
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <motion.div {...fadeUp}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Parcours patient</p>
            <h2 className="mb-4 text-2xl md:text-3xl">Consultation cardiologique</h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-primary" />
            <p className="mb-8 text-body leading-relaxed">
              La consultation permet une première évaluation cardiologique, un suivi spécialisé ou l’interprétation d’examens déjà réalisés. Elle permet aussi d’orienter la prise en charge et, si nécessaire, d’organiser des examens complémentaires ou une hospitalisation.
            </p>
          </motion.div>

          <motion.div className="medical-card mb-6" {...fadeUp}>
            <h3 className="mb-4 text-lg font-semibold">Prendre rendez-vous</h3>
            <p className="mb-4 text-body text-sm leading-relaxed">
              Pour toute demande de consultation, merci de contacter le secrétariat du service. Les modalités de prise de rendez-vous vous seront précisées selon votre situation.
            </p>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              <Phone className="h-4 w-4" /> {contactInfo.phone}
            </a>
          </motion.div>

          <motion.div className="medical-card mb-6" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <h3 className="mb-4 text-lg font-semibold">Le jour de la consultation</h3>
            <div className="space-y-3 text-sm text-body">
              <p>Merci de vous présenter avec vos ordonnances, traitements en cours et examens cardiologiques antérieurs si vous en disposez.</p>
              <p>Selon votre dossier, un ECG ou d’autres examens pourront être proposés ou programmés à l’issue de la consultation.</p>
              <p>En cas d’empêchement, il est recommandé de prévenir le secrétariat dès que possible.</p>
            </div>
          </motion.div>

          <motion.div className="text-center" {...fadeUp}>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Service de cardiologie — Contactez-nous
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
