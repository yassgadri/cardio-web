'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';

const items = [
  {
    title: 'Consultation',
    href: '/consultation',
    text: 'Première évaluation, suivi cardiologique, interprétation des examens et orientation médicale.',
  },
  {
    title: 'Hospitalisation',
    href: '/hospitalisation',
    text: 'Organisation du séjour et informations utiles lorsque votre prise en charge nécessite une hospitalisation.',
  },
  {
    title: 'Préparer ma visite',
    href: '/preparer-ma-visite',
    text: 'Documents à apporter, informations pratiques et éléments utiles avant votre venue.',
  },
  {
    title: 'Accès',
    href: '/acces',
    text: 'Coordonnées, accès au site et moyens simples pour rejoindre le service de cardiologie.',
  },
];

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

export default function PatientJourneyPage() {
  return (
    <Layout>
      <PageBanner title="Parcours patient" breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Parcours patient' }]} />
      <section className="section-padding">
        <div className="container-main">
          <motion.div className="mx-auto mb-12 max-w-3xl text-center" {...fadeUp}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Informations pratiques</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl">Les étapes utiles avant, pendant et après votre venue</h2>
            <p className="mt-4 text-body leading-relaxed">
              Cette rubrique regroupe les informations les plus utiles pour vous orienter simplement dans le service de cardiologie.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {items.map((item, index) => (
              <motion.div key={item.href} className="medical-card flex h-full flex-col" {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }}>
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="mb-6 text-body text-sm leading-relaxed">{item.text}</p>
                <div className="mt-auto">
                  <Link href={item.href} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Lire la suite <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
