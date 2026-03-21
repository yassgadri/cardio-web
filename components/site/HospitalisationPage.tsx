"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Wifi, Tv, Wind, Lock, PhoneCall } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { contactInfo } from "@/content/navigation";
import { withBasePath } from "@/lib/paths";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};
const amenities = [
  { icon: Wifi, label: "Accès WIFI" },
  { icon: Lock, label: "Placards individuels" },
  { icon: PhoneCall, label: "Téléphone" },
  { icon: Tv, label: "Télévision" },
  { icon: Wind, label: "Climatisation" },
];

const gallery = [
  {
    src: withBasePath("/assets/unite-ambulatoire.jpg"),
    alt: "Unité d’hospitalisation ambulatoire",
  },
  {
    src: withBasePath("/assets/chambre.jpg"),
    alt: "Chambre d’hospitalisation conventionnelle",
  },
  { src: withBasePath("/assets/soins.jpg"), alt: "Préparation des soins" },
];

export default function HospitalisationPage() {
  return (
    <Layout>
      <PageBanner
        title="Hospitalisation"
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Parcours patient", href: "/parcours-patient" },
          { label: "Hospitalisation" },
        ]}
      />
      <section className="section-padding">
        <div className="container-main max-w-6xl">
          <motion.div className="max-w-4xl" {...fadeUp}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Parcours patient
            </p>
            <h2 className="mb-4 text-2xl md:text-3xl">Hospitalisation</h2>
            <div className="mb-6 h-1 w-16 rounded-full bg-primary" />
            <div className="mb-8 text-body leading-relaxed">
              <p>
                Lorsque votre état nécessite une surveillance, un examen spécialisé ou un geste
                interventionnel, une hospitalisation peut être proposée.
              </p>
              <p>
                Celle-ci peut se faire en ambulatoire (sur la journée) ou en hospitalisation
                conventionnelle avec séjour.
              </p>
              <p>
                Tout est organisé pour assurer votre sécurité, la continuité des soins et votre
                confort tout au long de votre prise en charge.
              </p>
            </div>
            <h3 className="mb-4 text-lg font-semibold">Capacité d'accueil</h3>
            <p className="mb-8 text-body leading-relaxed">
              35 lits de cardiologie (dont 8 lits de soins intensifs de cardiologie, 6 lits
              d'ambulatoire dans un espace dédié, 12 lits en unité de surveillance continue et 9
              lits de cardiologie conventionnelle).
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 gap-6 lg:grid-cols-2" {...fadeUp}>
            <div className="medical-card">
              <h3 className="mb-4 text-lg font-semibold">Le séjour</h3>
              <div className="space-y-3 text-sm text-body">
                <p>
                  Selon l’indication médicale, l’hospitalisation peut être programmée pour une
                  exploration, une surveillance ou un geste spécialisé.
                </p>
                <p>
                  Le secrétariat vous précise les modalités administratives, l’horaire d’arrivée et
                  les éléments utiles à apporter avant votre admission.
                </p>
                <p>
                  L’équipe médicale et soignante vous accompagne pendant votre séjour et vous
                  informe sur le déroulement de la prise en charge.
                </p>
              </div>
            </div>

            <div className="medical-card">
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
            </div>
          </motion.div>

          <motion.div
            className="mt-10"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
          >
            <h3 className="mb-6 text-lg font-semibold text-heading">Le service en images</h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {gallery.map((item) => (
                <div key={item.src} className="overflow-hidden rounded-xl bg-card shadow-sm">
                  <img src={item.src} alt={item.alt} className="h-64 w-full object-cover" />

                  {/* Sous-titre */}
                  <div className="px-4 py-3 text-sm text-body text-center">{item.alt}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="mt-8 text-center" {...fadeUp}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Service de cardiologie — Contactez-nous
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
