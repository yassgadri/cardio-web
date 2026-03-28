export interface Publication {
  slug: string;
  title: string;
  journal: string;
  year: string;
  doi: string;
  doiUrl: string;
  articleUrl: string;
  summary: string;
  patientSummary: string[];
  highlights: string[];
  authors: string[];
  internalAuthors: string[];
}

export const publications: Publication[] = [
  {
    slug: "comparative-analysis-vffr-ffr-wire-reunion-registry",
    title: "Comparative Analysis of vFFR and FFR Wire: Data From the Réunion Registry",
    journal: "Journal of Interventional Cardiology",
    year: "2025",
    doi: "10.1155/joic/9624166",
    doiUrl: "https://doi.org/10.1155/joic/9624166",
    articleUrl: "https://onlinelibrary.wiley.com/doi/10.1155/joic/9624166",
    summary:
      "Étude prospective monocentrique menée à la Clinique Sainte-Clotilde évaluant la concordance entre la vFFR issue de l’angiographie et la FFR mesurée par guide de pression pour l’analyse de lésions coronaires intermédiaires.",
    patientSummary: [
      "Cette publication montre le travail scientifique réalisé par l’équipe autour de l’évaluation fonctionnelle des sténoses coronaires.",
      "L’objectif était de comparer une méthode moins invasive, calculée à partir de l’angiographie, à la mesure de référence réalisée avec un guide de pression.",
      "Pour les patients, cela illustre la volonté du service de s’appuyer sur des données cliniques réelles et sur une pratique cardiologique fondée sur l’évaluation précise des lésions.",
    ],
    highlights: [
      "Étude prospective monocentrique réalisée à la Clinique Sainte-Clotilde (La Réunion).",
      "116 patients et 146 lésions coronaires analysés.",
      "Comparaison entre CAAS-vessel FFR (vFFR) et pressure wire FFR (pwFFR).",
      "Résultats en accord avec la littérature actuelle sur la précision diagnostique de la vFFR.",
    ],
    authors: [
      "Christophe Pouillot",
      "Stephane Fournier",
      "Jens Glasenapp",
      "Karim Bougrini",
      "Richard Vi Fane",
      "Yassine Gadri",
      "Geoffray Rambaud",
      "David Huchette",
      "Adil Salihu",
    ],
    internalAuthors: [
      "Dr. Christophe Pouillot",
      "Dr. Jens Glasenapp",
      "Dr. Karim Bougrini",
      "Dr. Richard Vi-Fane",
      "Dr. Yassine Gadri",
      "Dr. Geoffray Rambaud",
      "Dr. David Huchette",
    ],
  },
];

export const featuredPublication = publications[0];
