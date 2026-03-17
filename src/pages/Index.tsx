import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, HeartPulse, Activity, Stethoscope } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/SectionHeading";
import { serviceCategories } from "@/content/services";
import { stats, contactInfo } from "@/content/navigation";
import heroImg from "@/assets/hero-cardio.jpg";
import aboutImg from "@/assets/about-cardio.jpg";

const serviceIcons = [HeartPulse, Activity, Stethoscope];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Cardiologie" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      </div>
      <div className="container-main relative z-10 py-20">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary-foreground/70 text-sm font-medium uppercase tracking-widest mb-4">Bienvenue</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight">
            Service de Cardiologie
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 mt-4 font-medium">
            Clinique Sainte Clotilde
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/qui-sommes-nous"
              className="inline-flex items-center gap-2 bg-background text-primary px-8 py-3 rounded-lg text-sm font-semibold hover:bg-background/90 transition-colors"
            >
              Nos spécialités <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
            >
              <Phone className="h-4 w-4" /> {contactInfo.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading overline="Spécialités" title="Les services que nous proposons" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((cat, i) => {
            const Icon = serviceIcons[i];
            return (
              <motion.div
                key={cat.slug}
                className="medical-card group"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{cat.title}</h3>
                <p className="text-body text-sm leading-relaxed mb-6">{cat.description}</p>
                <Link
                  to={`/${cat.slug}`}
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all"
                >
                  Lire la suite <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* About */}
    <section className="section-padding bg-section">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">À propos de nous</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6">
              Service de cardiologie de la Clinique Sainte Clotilde
            </h2>
            <div className="h-1 w-16 rounded-full bg-primary mb-6" />
            <p className="text-body leading-relaxed mb-6">
              L'établissement de santé, SELARL de <strong>cardiologie</strong> de la clinique sainte Clotilde, est situé à Saint-Denis, 126 route de bois de nefles dans le 97490. Il accueille 20 professionnels de santé dont 8 cardiologues, 12 infirmiers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/qui-sommes-nous"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Cliquez Ici
              </Link>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-section transition-colors"
              >
                <Phone className="h-4 w-4" /> {contactInfo.phone}
              </a>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
            <div className="relative rounded-xl overflow-hidden">
              <img src={aboutImg} alt="Équipe de cardiologie" className="w-full h-auto rounded-xl" />
              <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-xl p-6 max-w-[200px]">
                <p className="text-2xl font-bold">30</p>
                <p className="text-sm opacity-80">Années d'expérience en cardiologie</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Info cards */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeading overline="Informations" title="Pour plus d'informations" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div className="medical-card" {...fadeUp}>
            <Link to="/consultation" className="text-primary font-semibold text-lg mb-2 block hover:underline">
              Pour une prise de rendez-vous
            </Link>
            <p className="text-body text-sm mb-4">veuillez nous contacter</p>
            <Link to="/consultation" className="inline-flex items-center gap-2 text-primary text-sm font-medium">
              Lire la suite <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <motion.div className="medical-card" {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <Link to="/hospitalisation" className="text-primary font-semibold text-lg mb-2 block hover:underline">
              Le secrétariat du service hospitalisation
            </Link>
            <p className="text-body text-sm mb-4">Pour toute information</p>
            <Link to="/hospitalisation" className="inline-flex items-center gap-2 text-primary text-sm font-medium">
              Lire la suite <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary py-16">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center text-primary-foreground"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
              <p className="text-sm opacity-70 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-main text-center">
        <motion.p className="text-body text-lg" {...fadeUp}>
          Pour toute demande de rendez-vous, merci de{" "}
          <Link to="/contact" className="text-primary font-semibold hover:underline">
            nous contacter
          </Link>
          .
        </motion.p>
      </div>
    </section>
  </Layout>
);

export default Index;
