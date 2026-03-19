'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import { contactInfo } from '@/content/navigation';

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

export default function AccessPage() {
  return (
    <Layout>
      <PageBanner title="Accès" breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Parcours patient', href: '/parcours-patient' }, { label: 'Accès' }]} />
      <section className="section-padding">
        <div className="container-main max-w-5xl">
          <motion.div className="mb-12 text-center" {...fadeUp}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Nous situer</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl">Informations d’accès au service</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <motion.div className="medical-card text-center" {...fadeUp}><MapPin className="mx-auto mb-4 h-8 w-8 text-primary" /><h3 className="mb-3 text-lg font-semibold">Adresse</h3><p className="text-body">{contactInfo.address}<br />{contactInfo.city}</p></motion.div>
            <motion.div className="medical-card text-center" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}><Phone className="mx-auto mb-4 h-8 w-8 text-primary" /><h3 className="mb-3 text-lg font-semibold">Téléphone</h3><a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="font-medium text-primary">{contactInfo.phone}</a></motion.div>
            <motion.div className="medical-card text-center" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}><Mail className="mx-auto mb-4 h-8 w-8 text-primary" /><h3 className="mb-3 text-lg font-semibold">Email</h3><a href={`mailto:${contactInfo.email}`} className="font-medium text-primary">{contactInfo.email}</a></motion.div>
          </div>

          <motion.div className="medical-card mt-8 text-center" {...fadeUp}>
            <div className="aspect-[16/7] rounded-lg bg-section flex items-center justify-center">
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${contactInfo.address}, ${contactInfo.city}`)}`} target="_blank" rel="noreferrer" className="font-medium text-primary hover:underline">
                Voir sur Google Maps<br />{contactInfo.address}, {contactInfo.city}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
