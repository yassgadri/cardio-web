"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, Printer, MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import SectionHeading from "@/components/SectionHeading";
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl">Coordonnées du service</h2>
            <p className="mx-auto mt-3 max-w-2xl text-body leading-relaxed">
              Cette page rassemble les coordonnées utiles pour une consultation, une question sur
              l’hospitalisation ou une demande adressée au secrétariat du service.
            </p>
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

          <h3 className="text-xl md:text-2xl lg:text-3xl mt-8 mb-4">Consultation</h3>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <motion.div className="medical-card px-5 py-6 text-center" {...fadeUp}>
              <Phone className="mx-auto mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Téléphone</h3>
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
              <Printer className="mx-auto mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Fax</h3>
              <p>{contactInfo.fax}</p>
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

          <h3 className="text-xl md:text-2xl lg:text-3xl mt-8 mb-4">Hospitalisation</h3>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <motion.div className="medical-card px-5 py-6 text-center" {...fadeUp}>
              <Phone className="mx-auto mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Téléphone</h3>
              <div className="space-y-2 text-sm md:text-base">
                <a
                  href={`tel:${contactInfo.hospitalisationPhone.replace(/\s/g, "")}`}
                  className="block font-medium text-primary hover:underline"
                >
                  {contactInfo.hospitalisationPhone}
                </a>
              </div>
            </motion.div>

            <motion.div
              className="medical-card px-5 py-6 text-center"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              <Printer className="mx-auto mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Fax</h3>
              <p>{contactInfo.hospitalisationFax}</p>
            </motion.div>

            <motion.div
              className="medical-card px-5 py-6 text-center"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
            >
              <Mail className="mx-auto mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 text-lg font-semibold">Email</h3>
              <a
                href={`mailto:${contactInfo.hospitalisationEmail}`}
                className="text-sm font-medium text-primary hover:underline md:text-[15px] whitespace-nowrap"
              >
                {contactInfo.hospitalisationEmail}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section">
        <div className="container-main max-w-5xl">
          <SectionHeading
            overline="Liens utiles"
            title="Préparer votre venue et votre prise de contact"
            centered={false}
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <motion.div className="medical-card" {...fadeUp}>
              <h3 className="text-lg font-semibold">Consultation</h3>
              <p className="mt-3 text-body leading-relaxed">
                Retrouvez les informations utiles avant votre rendez-vous de cardiologie.
              </p>
              <Link
                href="/consultation"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                Voir la page <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div
              className="medical-card"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
            >
              <h3 className="text-lg font-semibold">Préparer ma visite</h3>
              <p className="mt-3 text-body leading-relaxed">
                Accédez aux conseils pratiques pour venir au service dans de bonnes conditions.
              </p>
              <Link
                href="/preparer-ma-visite"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                Voir la page <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div
              className="medical-card"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.16 }}
            >
              <h3 className="text-lg font-semibold">Équipe médicale</h3>
              <p className="mt-3 text-body leading-relaxed">
                Consulter les profils des cardiologues du service et leurs domaines d’activité.
              </p>
              <Link
                href="/medecins"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary"
              >
                Voir les médecins <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
