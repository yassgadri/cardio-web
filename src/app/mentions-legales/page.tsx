import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { companyInfo, contactInfo } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Mentions légales | SELARL de cardiologie",
  description:
    "Mentions légales du site de la SELARL de cardiologie : éditeur, directeur de publication, hébergeur, propriété intellectuelle, responsabilité et droit applicable.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/mentions-legales",
  },
  openGraph: {
    title: "Mentions légales | SELARL de cardiologie",
    description: "Consultez les mentions légales du site de la SELARL de cardiologie.",
    url: "/mentions-legales",
    siteName: "SELARL de cardiologie",
    type: "website",
    locale: "fr_FR",
  },
};

export default function MentionsLegalesPage() {
  return (
    <Layout>
      <PageBanner
        title="Mentions légales"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]}
      />

      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <div className="medical-card px-6 py-8 md:px-8">
            <h2 className="text-2xl font-semibold">Informations légales</h2>

            <div className="mt-6 space-y-8 text-body leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-heading">1. Éditeur du site</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    Le présent site est édité par la <strong>{companyInfo.raisonSociale}</strong>,
                    société d’exercice libéral à responsabilité limitée.
                  </p>
                  <p>
                    <strong>Forme juridique :</strong> SELARL
                  </p>
                  <p>
                    <strong>Capital social :</strong> {companyInfo.capitalSocial}
                  </p>
                  <p>
                    <strong>Siège social :</strong> {companyInfo.siegeSocial}
                  </p>
                  <p>
                    <strong>RCS :</strong> {companyInfo.RCS}
                  </p>
                  <p>
                    <strong>SIREN :</strong> {companyInfo.SIREN}
                  </p>
                  <p>
                    <strong>Téléphone :</strong> {contactInfo.hospitalisationPhone}
                  </p>
                  <p>
                    <strong>Email :</strong> {contactInfo.hospitalisationEmail}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">
                  2. Directeur de la publication
                </h3>
                <div className="mt-2 space-y-2">
                  <p>
                    Le directeur de la publication est <strong>Dr Yassine Gadri</strong>, gérant de
                    la SELARL de cardiologie et responsable du site web.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">
                  3. Informations professionnelles et déontologiques
                </h3>
                <div className="mt-2 space-y-2">
                  <p>
                    Le site a pour objet de présenter l’activité de cardiologie, les consultations,
                    les examens proposés et des informations pratiques destinées aux patients.
                  </p>
                  <p>
                    Les informations diffusées sur ce site sont fournies à titre général
                    d’information. Elles ne remplacent en aucun cas une consultation médicale, un
                    avis spécialisé, un diagnostic ou une prise en charge personnalisée.
                  </p>
                  <p>
                    L’éditeur s’efforce de diffuser des informations exactes et mises à jour, sans
                    pouvoir en garantir l’exhaustivité ou l’absence d’erreur.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">4. Hébergement</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    Le site est hébergé par <strong>Cloudflare, Inc.</strong>, fournisseur de
                    services de diffusion de contenu (CDN) et d'hébergement.
                  </p>
                  <p>
                    <strong>Adresse :</strong> 101 Townsend Street, San Francisco, CA 94107,
                    États-Unis
                  </p>
                  <p>
                    <strong>Site web :</strong> https://www.cloudflare.com/
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">5. Accès au site</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    L’accès au site est libre et gratuit pour tout utilisateur disposant d’un accès
                    à internet. Les coûts d’accès et d’utilisation du réseau demeurent à la charge
                    de l’utilisateur.
                  </p>
                  <p>
                    L’éditeur peut suspendre, limiter ou interrompre l’accès à tout ou partie du
                    site, notamment pour des opérations de maintenance, de mise à jour ou en cas de
                    force majeure.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">6. Propriété intellectuelle</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    La structure générale du site, les textes, photographies, illustrations,
                    éléments graphiques, logos, icônes, vidéos, documents téléchargeables et, plus
                    généralement, l’ensemble des éléments composant le site sont protégés par les
                    dispositions du Code de la propriété intellectuelle.
                  </p>
                  <p>
                    Sauf mention contraire, ces éléments sont la propriété exclusive de la SELARL de
                    cardiologie ou font l’objet d’une autorisation d’utilisation.
                  </p>
                  <p>
                    Toute reproduction, représentation, adaptation, diffusion, extraction ou
                    exploitation, totale ou partielle, sur quelque support que ce soit, sans
                    autorisation écrite préalable, est interdite.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">7. Responsabilité</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    L’éditeur met en œuvre les moyens raisonnables pour assurer l’exactitude des
                    informations publiées et le bon fonctionnement du site.
                  </p>
                  <p>Toutefois, sa responsabilité ne saurait être engagée en cas :</p>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>
                      d’erreur, d’omission ou d’indisponibilité temporaire d’une information ;
                    </li>
                    <li>de dysfonctionnement, interruption, virus ou anomalie technique ;</li>
                    <li>
                      de dommages directs ou indirects résultant de l’accès au site ou de son
                      utilisation ;
                    </li>
                    <li>
                      d’une mauvaise interprétation des informations mises en ligne par
                      l’utilisateur.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">8. Liens hypertextes</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    Le site peut contenir des liens vers des sites tiers. Ces liens sont proposés à
                    titre informatif. L’éditeur n’exerce aucun contrôle sur leur contenu et décline
                    toute responsabilité quant aux informations, services ou pratiques qui y sont
                    proposés.
                  </p>
                  <p>
                    La création de liens hypertextes vers le présent site est autorisée sous réserve
                    qu’elle ne porte pas atteinte à l’image, à la réputation ou aux intérêts
                    légitimes de la SELARL de cardiologie.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">9. Données personnelles</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    Les modalités de collecte et de traitement des données personnelles sont
                    détaillées dans la page <strong>Politique de confidentialité</strong>.
                  </p>
                  <p>
                    Les utilisateurs disposent notamment d’un droit d’accès, de rectification,
                    d’effacement, d’opposition, de limitation et, lorsque cela est applicable, d’un
                    droit à la portabilité de leurs données.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">10. Cookies et traceurs</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    Le site peut recourir à des cookies ou traceurs strictement nécessaires à son
                    fonctionnement, ainsi qu’à des services tiers soumis, le cas échéant, au
                    consentement préalable de l’utilisateur.
                  </p>
                  <p>
                    Pour plus d’informations, veuillez consulter la page{" "}
                    <strong>Politique de confidentialité</strong> et, le cas échéant, les outils de
                    gestion du consentement proposés sur le site.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">11. Droit applicable</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    Les présentes mentions légales sont soumises au <strong>droit français</strong>.
                  </p>
                  <p>
                    En cas de litige et à défaut de résolution amiable, les juridictions françaises
                    territorialement compétentes seront seules compétentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
