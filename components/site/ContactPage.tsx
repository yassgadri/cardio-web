"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { contactInfo } from "@/content/navigation";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function ContactPage() {
  return (
    <Layout>
      <PageBanner
        title="Contact"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
      />
      <section className="section-padding">
        <div className="container-main max-w-5xl">
          <motion.div className="mb-12 text-center" {...fadeUp}>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
              Entrer en contact
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl">Nous joindre simplement</h2>
            <p className="mt-4 text-body leading-relaxed">
              Pour une prise de rendez-vous, une information sur le service ou une question liée à
              l’hospitalisation, vous pouvez contacter le secrétariat du service de cardiologie.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div className="medical-card text-center" {...fadeUp}>
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Téléphones utiles</h3>
              <div className="space-y-2">
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="block text-primary font-medium"
                >
                  Consultation : {contactInfo.phone}
                </a>
                <a
                  href={`tel:${contactInfo.phoneHospitalisation.replace(/\s/g, "")}`}
                  className="block text-primary font-medium"
                >
                  Hospitalisation : {contactInfo.phoneHospitalisation}
                </a>
              </div>
            </motion.div>
            <motion.div
              className="medical-card text-center"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Adresse</h3>
              <p className="text-body">
                {contactInfo.address}
                <br />
                {contactInfo.city}
              </p>
            </motion.div>
            <motion.div
              className="medical-card text-center"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
            >
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Email</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-primary font-medium break-all"
              >
                {contactInfo.email}
              </a>
            </motion.div>
          </div>
          <motion.div className="medical-card mt-8" {...fadeUp}>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div className="text-sm text-body leading-relaxed">
                <p className="mb-2 font-semibold text-heading">Informations complémentaires</p>
                <p>Fax consultation : {contactInfo.fax}</p>
                <p>Fax hospitalisation : {contactInfo.faxHospitalisation}</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="medical-card mt-8 text-center" {...fadeUp}>
            <div className="aspect-[16/7] rounded-lg bg-section flex items-center justify-center px-6">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${contactInfo.address}, ${contactInfo.city}`)}`}
                target="_blank"
                rel="noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Voir sur Google Maps
                <br />
                {contactInfo.address}, {contactInfo.city}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
