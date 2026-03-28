import Layout from "@/components/layout/Layout";
import PageBanner from "@/components/layout/PageBanner";
import { buildPageMetadata } from "@/lib/seo";
import { companyInfo, contactInfo } from "@/content/navigation";

export const metadata = buildPageMetadata({
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site de la SELARL de cardiologie : données collectées, finalités, base légale, durée de conservation, cookies et droits RGPD.",
  path: "/politique-confidentialite",
  keywords: ["politique de confidentialité", "SELARL de cardiologie", "Clinique Sainte-Clotilde"],
});

export default function PolitiqueConfidentialitePage() {
  return (
    <Layout>
      <PageBanner
        title="Politique de confidentialité"
        breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Politique de confidentialité" }]}
      />

      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <div className="medical-card px-6 py-8 md:px-8">
            <h2 className="text-2xl font-semibold">Protection des données personnelles</h2>

            <div className="mt-6 space-y-8 text-body leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-heading">1. Responsable du traitement</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    Les données personnelles collectées sur le présent site sont traitées par la{" "}
                    <strong>{companyInfo.raisonSociale}</strong>, en qualité de responsable du
                    traitement.
                  </p>
                  <p>
                    <strong>Adresse :</strong> {companyInfo.siegeSocial}
                  </p>
                  <p>
                    <strong>Email de contact :</strong> {contactInfo.email}
                  </p>
                  <p>
                    <strong>Téléphone :</strong> {contactInfo.phone}
                  </p>
                  <p>
                    <strong>Référent site / gérant responsable :</strong> Dr Yassine Gadri
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">2. Finalités des traitements</h3>
                <div className="mt-2 space-y-2">
                  <p>Les données éventuellement transmises via le site sont utilisées pour :</p>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>répondre aux demandes de contact ou de renseignement ;</li>
                    <li>
                      orienter les patients vers le bon interlocuteur ou la bonne consultation ;
                    </li>
                    <li>assurer le suivi des échanges administratifs ou informatifs ;</li>
                    <li>sécuriser le site et prévenir les usages abusifs ;</li>
                    <li>
                      mesurer l’audience du site, lorsque des outils statistiques sont activés ;
                    </li>
                    <li>
                      gérer les traceurs ou contenus tiers soumis à consentement, le cas échéant.
                    </li>
                  </ul>
                  <p>
                    Le site n’a pas pour objet d’organiser une prise en charge médicale complète en
                    ligne, ni de remplacer une consultation, un avis médical ou une urgence.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">3. Données concernées</h3>
                <div className="mt-2 space-y-2">
                  <p>Selon les fonctionnalités utilisées, les données traitées peuvent inclure :</p>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>nom et prénom ;</li>
                    <li>adresse email ;</li>
                    <li>numéro de téléphone ;</li>
                    <li>contenu du message librement transmis par l’utilisateur ;</li>
                    <li>données techniques de connexion et journaux techniques ;</li>
                    <li>données relatives au consentement cookies ;</li>
                    <li>
                      données de navigation ou de mesure d’audience, uniquement si ces outils sont
                      activés.
                    </li>
                  </ul>
                  <p>
                    Il est recommandé de ne pas transmettre, via un formulaire non sécurisé ou par
                    simple email, des informations médicales détaillées ou des données de santé non
                    nécessaires à la demande initiale.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">4. Base légale</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    Les traitements réalisés sur le site reposent sur les bases légales suivantes :
                  </p>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>
                      <strong>intérêt légitime</strong> de la structure pour répondre aux demandes,
                      administrer le site et assurer sa sécurité ;
                    </li>
                    <li>
                      <strong>consentement</strong> de l’utilisateur pour les cookies, traceurs ou
                      contenus tiers non strictement nécessaires ;
                    </li>
                    <li>
                      <strong>obligations légales</strong>, lorsque la réglementation impose la
                      conservation ou la communication de certaines informations.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">5. Destinataires des données</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    Les données sont destinées uniquement aux personnes habilitées au sein de la
                    SELARL de cardiologie et, le cas échéant, à ses prestataires techniques
                    intervenant pour l’hébergement, la maintenance, la sécurité ou les services
                    intégrés au site.
                  </p>
                  <p>
                    Elles ne font l’objet d’aucune cession ou revente à des tiers à des fins
                    commerciales.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">6. Durée de conservation</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    Les données sont conservées pendant une durée n’excédant pas celle nécessaire
                    aux finalités pour lesquelles elles sont traitées.
                  </p>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>
                      <strong>Demandes de contact :</strong> jusqu’à 12 mois après le dernier
                      échange, sauf obligation particulière ou nécessité de suivi plus long ;
                    </li>
                    <li>
                      <strong>Journaux techniques et sécurité :</strong> durée limitée strictement
                      nécessaire à la sécurité, au bon fonctionnement et à la traçabilité technique
                      ;
                    </li>
                    <li>
                      <strong>Cookies et traceurs :</strong> selon leur nature et la configuration
                      retenue, conformément à la réglementation applicable.
                    </li>
                  </ul>
                  <p>
                    Ces durées peuvent être ajustées en fonction des obligations légales,
                    réglementaires ou contentieuses applicables.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">7. Exercice des droits</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    Conformément à la réglementation applicable en matière de protection des données
                    personnelles, vous disposez, selon les cas, des droits suivants :
                  </p>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>droit d’accès ;</li>
                    <li>droit de rectification ;</li>
                    <li>droit à l’effacement ;</li>
                    <li>droit à la limitation du traitement ;</li>
                    <li>droit d’opposition ;</li>
                    <li>droit à la portabilité lorsque celui-ci est applicable ;</li>
                    <li>
                      droit de retirer votre consentement à tout moment pour les traitements fondés
                      sur celui-ci.
                    </li>
                  </ul>
                  <p>
                    Vous pouvez exercer ces droits en écrivant à :{" "}
                    <strong>{contactInfo.email}</strong>
                  </p>
                  <p>
                    Vous pouvez également adresser votre demande par courrier à :{" "}
                    <strong>{companyInfo.siegeSocial}</strong>
                  </p>
                  <p>
                    En cas de doute raisonnable sur l’identité du demandeur, un justificatif pourra
                    être demandé afin de sécuriser le traitement de la demande.
                  </p>
                  <p>
                    Si vous estimez, après nous avoir contactés, que vos droits ne sont pas
                    respectés, vous pouvez introduire une réclamation auprès de la{" "}
                    <strong>CNIL</strong>.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">8. Sécurité</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    La SELARL de cardiologie met en œuvre des mesures techniques et
                    organisationnelles appropriées pour préserver la sécurité, l’intégrité et la
                    confidentialité des données personnelles.
                  </p>
                  <p>
                    Toutefois, aucun système de transmission ou de stockage électronique ne pouvant
                    garantir une sécurité absolue, l’utilisateur est invité à limiter l’envoi de
                    données sensibles non indispensables par les canaux de contact du site.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">9. Cookies et traceurs</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    Lors de la navigation sur le site, des cookies ou autres traceurs peuvent être
                    déposés sur votre terminal.
                  </p>
                  <p>Ces traceurs peuvent relever de plusieurs catégories :</p>
                  <ul className="list-disc space-y-1 pl-6">
                    <li>cookies strictement nécessaires au fonctionnement du site ;</li>
                    <li>cookies de mesure d’audience ;</li>
                    <li>cookies liés à des contenus ou services tiers intégrés au site.</li>
                  </ul>
                  <p>
                    Les cookies non strictement nécessaires ne sont déposés qu’après recueil de
                    votre consentement, lorsque la configuration du site prévoit un bandeau ou un
                    module de gestion du consentement.
                  </p>
                  <p>
                    Vous pouvez à tout moment accepter, refuser ou modifier vos préférences selon
                    les outils de gestion mis à votre disposition sur le site.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">10. Services tiers</h3>
                <div className="mt-2 space-y-2">
                  <p>
                    Le site peut intégrer ou proposer des services tiers, par exemple une carte
                    interactive, un bouton de navigation, une vidéo, une police externe ou un outil
                    de mesure d’audience.
                  </p>
                  <p>
                    L’utilisation de ces services peut entraîner des traitements de données par
                    leurs éditeurs respectifs, selon leurs propres politiques de confidentialité.
                  </p>
                  <p>
                    Lorsque ces services impliquent le dépôt de traceurs non nécessaires, ils
                    doivent être soumis à votre consentement préalable.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">
                  11. Absence d’usage commercial des données
                </h3>
                <div className="mt-2 space-y-2">
                  <p>
                    Les données collectées par l’intermédiaire du site ne sont pas utilisées à des
                    fins de prospection commerciale non sollicitée, ni cédées à des tiers à des fins
                    de marketing.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-heading">
                  12. Mise à jour de la politique
                </h3>
                <div className="mt-2 space-y-2">
                  <p>
                    La présente politique de confidentialité peut être modifiée à tout moment afin
                    de tenir compte des évolutions légales, réglementaires, techniques ou des
                    services proposés sur le site.
                  </p>
                  <p>La version en ligne est celle en vigueur à la date de sa consultation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
