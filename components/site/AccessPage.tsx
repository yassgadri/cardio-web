"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { contactInfo } from "@/content/navigation";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function AccessPage() {
  return (
    <Layout>
      <PageBanner
        title="Accès"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Parcours patient", href: "/parcours-patient" },
          { label: "Accès" },
        ]}
      />
      <section className="section-padding">
        <div className="container-main max-w-5xl">
          <motion.div className="mb-10 text-center" {...fadeUp}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Nous situer
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl">Accéder au service de cardiologie</h2>
            <p className="mx-auto mt-3 max-w-2xl text-body leading-relaxed">
              Le service de cardiologie est situé à la Clinique Sainte-Clotilde. Contactez le
              secrétariat par téléphone ou par email pour toute information complémentaire.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <motion.div className="medical-card px-5 py-6 text-center" {...fadeUp}>
              <MapPin className="mx-auto mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Adresse</h3>
              <p className="text-sm leading-7 text-body md:text-base">
                {contactInfo.address}
                <br />
                {contactInfo.city}
              </p>
            </motion.div>

            <motion.div
              className="medical-card px-5 py-6 text-center"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              <Phone className="mx-auto mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Téléphone</h3>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="text-sm font-medium text-primary hover:underline md:text-base"
              >
                {contactInfo.phone}
              </a>
            </motion.div>

            <motion.div
              className="medical-card px-5 py-6 text-center"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
            >
              <Mail className="mx-auto mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Email</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-sm font-medium text-primary hover:underline md:text-[15px]"
              >
                {contactInfo.email}
              </a>
            </motion.div>
          </div>

          <motion.div className="medical-card mt-6 px-5 py-6 text-center" {...fadeUp}>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${contactInfo.address}, ${contactInfo.city}`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mb-4 inline-block text-sm font-medium text-primary hover:underline md:text-base"
            >
              Voir sur Google Maps — {contactInfo.address}, {contactInfo.city}
            </a>

            <div className="relative aspect-[16/7] overflow-hidden rounded-lg">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${contactInfo.address}, ${contactInfo.city}`,
                )}&output=embed`}
              />

              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
                <div className="relative">
                  <span className="absolute inline-flex h-6 w-6 rounded-full bg-primary opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-6 w-6 rounded-full border-2 border-white bg-primary shadow-lg"></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
