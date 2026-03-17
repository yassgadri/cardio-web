import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { contactInfo } from "@/content/navigation";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Contact = () => (
  <Layout>
    <PageBanner
      title="Contact"
      breadcrumb={[
        { label: "Selarl de cardiologie", href: "/" },
        { label: "Contact" },
      ]}
    />

    <section className="section-padding">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Entrer en contact</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl">N'hésitez pas à nous contacter</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <motion.div className="medical-card text-center" {...fadeUp}>
            <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-3">Téléphone</h3>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="text-body text-sm block hover:text-primary transition-colors">
              {contactInfo.phone}
            </a>
            <a href={`tel:${contactInfo.phoneHospitalisation.replace(/\s/g, "")}`} className="text-body text-sm block mt-1 hover:text-primary transition-colors">
              {contactInfo.phoneHospitalisation}
            </a>
          </motion.div>

          <motion.div className="medical-card text-center" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-3">Adresse</h3>
            <p className="text-body text-sm">
              {contactInfo.address}<br />{contactInfo.city}
            </p>
          </motion.div>

          <motion.div className="medical-card text-center" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
            <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-3">Email</h3>
            <a href={`mailto:${contactInfo.email}`} className="text-body text-sm hover:text-primary transition-colors">
              Envoyer un Email
            </a>
          </motion.div>
        </div>

        {/* Static Map */}
        <motion.div className="mt-12 max-w-4xl mx-auto rounded-xl overflow-hidden" {...fadeUp}>
          <a
            href="https://www.google.com/maps/search/?api=1&query=127+route+du+Bois+de+Nèfles+97490+Sainte-Clotilde"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-section rounded-xl p-8 text-center hover:bg-accent transition-colors">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-heading font-semibold text-lg">Voir sur Google Maps</p>
              <p className="text-body text-sm mt-1">{contactInfo.address}, {contactInfo.city}</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Contact;
