'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageBanner from '@/components/layout/PageBanner';
import { contactInfo } from '@/content/navigation';

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

export default function ContactPage() {
  return (
    <Layout>
      <PageBanner title="Contact" breadcrumb={[{ label: 'Selarl de cardiologie', href: '/' }, { label: 'Contact' }]} />
      <section className="section-padding">
        <div className="container-main max-w-5xl">
          <motion.div className="text-center mb-12" {...fadeUp}>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Entrer en contact</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl">N&apos;hésitez pas à nous contacter</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div className="medical-card text-center" {...fadeUp}><Phone className="h-8 w-8 text-primary mx-auto mb-4" /><h3 className="text-lg font-semibold mb-3">Téléphone</h3><div className="space-y-2"><a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="block text-primary font-medium">{contactInfo.phone}</a><a href={`tel:${contactInfo.phoneHospitalisation.replace(/\s/g, '')}`} className="block text-primary font-medium">{contactInfo.phoneHospitalisation}</a></div></motion.div>
            <motion.div className="medical-card text-center" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}><MapPin className="h-8 w-8 text-primary mx-auto mb-4" /><h3 className="text-lg font-semibold mb-3">Adresse</h3><p className="text-body">{contactInfo.address}<br />{contactInfo.city}</p></motion.div>
            <motion.div className="medical-card text-center" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}><Mail className="h-8 w-8 text-primary mx-auto mb-4" /><h3 className="text-lg font-semibold mb-3">Email</h3><a href={`mailto:${contactInfo.email}`} className="text-primary font-medium">Envoyer un Email</a></motion.div>
          </div>
          <motion.div className="medical-card mt-8 text-center" {...fadeUp}><div className="aspect-[16/7] rounded-lg bg-section flex items-center justify-center"><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${contactInfo.address}, ${contactInfo.city}`)}`} target="_blank" rel="noreferrer" className="text-primary font-medium hover:underline">Voir sur Google Maps<br />{contactInfo.address}, {contactInfo.city}</a></div></motion.div>
        </div>
      </section>
    </Layout>
  );
}
