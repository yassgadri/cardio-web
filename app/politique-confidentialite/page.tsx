import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";

export default function PolitiqueConfidentialitePage() {
  return (
    <Layout>
      <PageBanner
        title="Politique de confidentialité"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Politique de confidentialité" }]}
      />

      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <div className="medical-card px-6 py-8 md:px-8">
            <h2 className="text-2xl font-semibold">Protection des données personnelles</h2>

            <div className="mt-6 space-y-6 text-body leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-heading">Responsable du traitement</h3>
                <p className="mt-2">Dr Yassine Gadri</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">Nature des échanges</h3>
                <p className="mt-2">
                  Les échanges avec les patients se font par email, aux coordonnées indiquées sur le
                  site.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">Finalité des données</h3>
                <p className="mt-2">
                  Les données éventuellement transmises par email sont utilisées uniquement dans le
                  cadre de la prise de contact, de la gestion des demandes d’information et de
                  l’orientation du patient.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">Absence d’usage commercial</h3>
                <p className="mt-2">
                  Les données ne sont pas utilisées à des fins commerciales ou publicitaires.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">Cookies et services tiers</h3>
                <p className="mt-2">
                  Le site peut proposer l’affichage d’une carte Google Maps. Ce service tiers peut
                  entraîner le dépôt de traceurs soumis à votre consentement préalable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
