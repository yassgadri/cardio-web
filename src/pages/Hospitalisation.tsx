import { motion } from "framer-motion";
import { Phone, Wifi, Tv, Wind, Lock, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { contactInfo } from "@/content/navigation";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const amenities = [
  { icon: Wifi, label: "Un accès WIFI" },
  { icon: Lock, label: "Des placards individuels" },
  { icon: PhoneCall, label: "Un téléphone" },
  { icon: Tv, label: "Une télévision" },
  { icon: Wind, label: "Une climatisation" },
];

const Hospitalisation = () => (
  <Layout>
    <PageBanner
      title="Hospitalisation"
      breadcrumb={[
        { label: "Selarl de cardiologie", href: "/" },
        { label: "Hospitalisation" },
      ]}
    />

    <section className="section-padding">
      <div className="container-main max-w-4xl">
        <motion.div {...fadeUp}>
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">À propos de</p>
          <h2 className="text-2xl md:text-3xl mb-4">Hospitalisation</h2>
          <div className="h-1 w-16 rounded-full bg-primary mb-6" />
          <p className="text-body leading-relaxed mb-8">
            Notre priorité est d'assurer un séjour optimal à tous nos patients, en garantissant expertise, attention et confort.
          </p>
        </motion.div>

        <motion.div className="medical-card mb-6" {...fadeUp}>
          <h3 className="text-lg font-semibold mb-6">Équipements des chambres</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {amenities.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-sm text-body">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                {label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="medical-card" {...fadeUp}>
          <h3 className="text-lg font-semibold mb-4">Le secrétariat du service hospitalisation</h3>
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <p className="font-semibold text-heading mb-1">Tel:</p>
              <a href={`tel:${contactInfo.phoneHospitalisation.replace(/\s/g, "")}`} className="flex items-center gap-2 text-primary font-medium">
                <Phone className="h-4 w-4" /> {contactInfo.phoneHospitalisation}
              </a>
            </div>
            <div>
              <p className="font-semibold text-heading mb-1">Fax:</p>
              <p className="text-body">{contactInfo.faxHospitalisation}</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="mt-8 text-center" {...fadeUp}>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Service de cardiologie — Contactez-nous
          </Link>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Hospitalisation;
