'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Wifi, Tv, Wind, Lock, PhoneCall } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import { contactInfo } from '@/content/navigation';

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };
const amenities = [
  { icon: Wifi, label: 'Un accès WIFI' },
  { icon: Lock, label: 'Des placards individuels' },
  { icon: PhoneCall, label: 'Un téléphone' },
  { icon: Tv, label: 'Une télévision' },
  { icon: Wind, label: 'Une climatisation' },
];

export default function HospitalisationPage() {
  return (
    <Layout>
      <PageBanner title="Hospitalisation" breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Parcours patient', href: '/parcours-patient' }, { label: 'Hospitalisation' }]} />
      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <motion.div {...fadeUp}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Parcours patient</p>
            <h2 className="mb-4 text-2xl md:text-3xl">Hospitalisation</h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-primary" />
            <p className="mb-8 text-body leading-relaxed">
              Lorsque votre prise en charge nécessite une surveillance, un examen interventionnel ou un geste spécialisé, l’hospitalisation est organisée dans un cadre médical structuré visant à assurer sécurité, confort et continuité des soins.
            </p>
          </motion.div>

          <motion.div className="medical-card mb-6" {...fadeUp}>
            <h3 className="mb-6 text-lg font-semibold">Équipements des chambres</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {amenities.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-body">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="medical-card" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <h3 className="mb-4 text-lg font-semibold">Le secrétariat du service hospitalisation</h3>
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <p className="mb-1 font-semibold text-heading">Tel:</p>
                <a href={`tel:${contactInfo.phoneHospitalisation.replace(/\s/g, '')}`} className="flex items-center gap-2 font-medium text-primary">
                  <Phone className="h-4 w-4" /> {contactInfo.phoneHospitalisation}
                </a>
              </div>
              <div>
                <p className="mb-1 font-semibold text-heading">Fax:</p>
                <p className="text-body">{contactInfo.faxHospitalisation}</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="mt-8 text-center" {...fadeUp}>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Service de cardiologie — Contactez-nous
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
