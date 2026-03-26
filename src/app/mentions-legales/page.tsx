import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";

export default function MentionsLegalesPage() {
  return (
    <Layout>
      <PageBanner
        title="Mentions légales"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]}
      />

      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <div className="medical-card px-6 py-8 md:px-8">
            <h2 className="text-2xl font-semibold">Informations légales</h2>

            <div className="mt-6 space-y-6 text-body leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-heading">Éditeur du site</h3>
                <p className="mt-2">Dr Yassine Gadri</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">Directeur de publication</h3>
                <p className="mt-2">Dr Yassine Gadri</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">Hébergeur</h3>
                <p className="mt-2">github-pages</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">Objet du site</h3>
                <p className="mt-2">
                  Le présent site a pour objet de présenter l’activité du service de cardiologie et
                  de fournir des informations pratiques aux patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
