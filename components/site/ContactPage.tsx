"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Printer, MapPin } from "lucide-react";
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
          <motion.div className="mb-10 text-center" {...fadeUp}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Entrer en contact
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl">Nous joindre simplement</h2>
            <p className="mx-auto mt-3 max-w-2xl text-body leading-relaxed">
              Pour une prise de rendez-vous, une information sur le service ou une question liée à
              l’hospitalisation, vous pouvez contacter le secrétariat du service de cardiologie.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <motion.div className="medical-card px-5 py-6 text-center" {...fadeUp}>
              <Phone className="mx-auto mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Consultation</h3>
              <div className="space-y-2 text-sm md:text-base">
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="block font-medium text-primary hover:underline"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </motion.div>

            <motion.div
              className="medical-card px-5 py-6 text-center"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              <Phone className="mx-auto mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Hospitalisation</h3>
              <a
                href={`tel:${contactInfo.phoneHospitalisation.replace(/\s/g, "")}`}
                className="block font-medium text-primary hover:underline"
              >
                {contactInfo.phoneHospitalisation}
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
                className="text-sm font-medium text-primary hover:underline md:text-[15px] whitespace-nowrap"
              >
                {contactInfo.email}
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <motion.div className="medical-card px-5 py-6 text-center" {...fadeUp}>
              <Printer className="mx-auto mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Fax consultation</h3>
              <p>{contactInfo.fax}</p>
            </motion.div>

            <motion.div className="medical-card px-5 py-6 text-center" {...fadeUp}>
              <Printer className="mx-auto mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Fax hospitalisation</h3>
              <p>{contactInfo.fax}</p>
            </motion.div>

            <motion.div className="medical-card px-5 py-6 text-center" {...fadeUp}>
              <MapPin className="mx-auto mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Adresse</h3>
              <p className="text-sm leading-7 text-body md:text-base">
                Clinique Sainte-Clotilde
                <br />
                {contactInfo.address}
                <br />
                {contactInfo.city}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `Clinique Sainte-Clotilde, ${contactInfo.address}, ${contactInfo.city}`,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mb-4 inline-block text-sm font-medium text-primary hover:underline md:text-base"
              >
                Voir sur Google Maps
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
