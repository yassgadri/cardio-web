'use client';

import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';

const items = [
  'Votre pièce d’identité et votre carte de prise en charge ou d’assurance, selon votre situation.',
  'Vos ordonnances et traitements en cours.',
  'Vos examens cardiologiques antérieurs : ECG, échographies, comptes rendus, bilans récents.',
  'Les coordonnées de votre médecin traitant ou du professionnel qui vous adresse.',
];

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

export default function PreparingVisitPage() {
  return (
    <Layout>
      <PageBanner title="Préparer ma visite" breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Parcours patient', href: '/parcours-patient' }, { label: 'Préparer ma visite' }]} />
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <motion.div className="mb-10" {...fadeUp}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Avant votre venue</p>
            <h2 className="mb-4 text-2xl md:text-3xl">Les éléments utiles à prévoir</h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-primary" />
            <p className="text-body leading-relaxed">
              Afin de faciliter votre prise en charge, il est recommandé de venir avec les documents et informations utiles à votre dossier médical.
            </p>
          </motion.div>

          <motion.div className="medical-card mb-6" {...fadeUp}>
            <h3 className="mb-4 text-lg font-semibold">Documents à apporter</h3>
            <ul className="space-y-3 text-sm text-body">
              {items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="medical-card" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <h3 className="mb-4 text-lg font-semibold">Recommandations pratiques</h3>
            <div className="space-y-3 text-sm text-body">
              <p>Merci d’arriver quelques minutes avant l’horaire prévu afin de faciliter l’accueil administratif.</p>
              <p>En cas d’examen spécifique, les consignes particulières de préparation vous sont précisées lors de la prise de rendez-vous.</p>
              <p>En cas d’empêchement, il est recommandé de prévenir le secrétariat dès que possible.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
