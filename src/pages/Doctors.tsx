import { Link } from "react-router-dom";
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

const Doctors = () => (
  <Layout>
    <PageBanner
      title="Médecins & Professionnels"
      breadcrumb={[
        { label: "Selarl de cardiologie", href: "/" },
        { label: "Médecins & Professionnels" },
      ]}
    />

    <section className="section-padding">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Service de cardiologie de la clinique Sainte Clotilde</p>
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
              <div className="w-20 h-20 rounded-full bg-section flex items-center justify-center mx-auto mb-4">
                <User className="h-10 w-10 text-muted-foreground" />
              </div>
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

    {/* Contact CTA */}
    <section className="section-padding bg-section">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div className="medical-card" {...fadeUp}>
            <p className="text-body text-sm mb-2">Si vous souhaitez fixer un rendez-vous avec un cardiologue</p>
            <p className="text-body text-sm mb-4">Vous pouvez joindre le secrétariat du service consultation</p>
            <Link to="/consultation" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Cliquez ici
            </Link>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-primary text-sm font-medium mt-3">
              <Phone className="h-4 w-4" /> {contactInfo.phone}
            </a>
          </motion.div>
          <motion.div className="medical-card" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <p className="text-body text-sm mb-2">Pour toute information concernant les services d'hospitalisation</p>
            <p className="text-body text-sm mb-4">vous pouvez contacter</p>
            <Link to="/hospitalisation" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Cliquez ici
            </Link>
            <a href={`tel:${contactInfo.phoneHospitalisation.replace(/\s/g, "")}`} className="flex items-center gap-2 text-primary text-sm font-medium mt-3">
              <Phone className="h-4 w-4" /> {contactInfo.phoneHospitalisation}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Doctors;
