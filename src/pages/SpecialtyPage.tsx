import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { serviceCategories } from "@/content/services";
import { Link } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

interface SpecialtyPageProps {
  slug: string;
}

const SpecialtyPage = ({ slug }: SpecialtyPageProps) => {
  const category = serviceCategories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <Layout>
        <PageBanner title="Page non trouvée" />
        <div className="container-main section-padding text-center">
          <p className="text-body">La spécialité demandée n'existe pas.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageBanner
        title={category.title}
        breadcrumb={[
          { label: "Selarl de cardiologie", href: "/" },
          { label: category.title },
        ]}
      />

      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <motion.div className="mb-8" {...fadeUp}>
            <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Spécialité</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl">{category.title}</h2>
            <div className="h-1 w-16 rounded-full bg-primary mt-4" />
          </motion.div>

          <div className="space-y-12">
            {category.procedures.map((proc, i) => (
              <motion.div
                key={proc.title}
                className="medical-card"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              >
                <h3 className="text-xl font-semibold text-heading mb-6">
                  {String(i + 1).padStart(2, "0")}. {proc.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-heading uppercase tracking-wider mb-2">
                      {String(i + 1)}.1. Description
                    </h4>
                    <p className="text-body text-sm leading-relaxed">{proc.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-heading uppercase tracking-wider mb-2">
                      {String(i + 1)}.2. Déroulement de l'examen
                    </h4>
                    <p className="text-body text-sm leading-relaxed">{proc.process}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-12 text-center" {...fadeUp}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Service de cardiologie — Contactez-nous
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SpecialtyPage;
