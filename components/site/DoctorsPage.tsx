"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { doctors } from "@/content/doctors";
import { contactInfo } from "@/content/navigation";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function DoctorsPage() {
  return (
    <Layout>
      <PageBanner
        title="Médecins"
        breadcrumb={[{ label: "Service de cardiologie", href: "/" }, { label: "Médecins" }]}
      />
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
              Service de cardiologie de la clinique Sainte Clotilde
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl">Nos cardiologues</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.email}
                className="medical-card text-center"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              >
                <h3 className="font-semibold text-heading text-base mb-2">{doc.name}</h3>
                <ul className="text-body text-xs space-y-1 mb-4">
                  {doc.qualifications.map((q, j) => (
                    <li key={j}>{q}</li>
                  ))}
                </ul>
                <a
                  href={`mailto:${doc.email}`}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                >
                  <Mail className="h-4 w-4" /> Envoyer un mail
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
