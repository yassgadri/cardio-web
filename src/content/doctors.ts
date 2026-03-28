export interface Doctor {
  slug: string;
  name: string;
  qualifications: string[];
  email: string;
  shortDescription: string;
  publications?: string[];
}

export const doctors: Doctor[] = [
  {
    slug: "christophe-pouillot",
    name: "Dr. Christophe Pouillot",
    qualifications: ["Cardiologie interventionnelle"],
    email: "christophe.pouillot@clinifutur.net",
    shortDescription:
      "Le Dr Christophe Pouillot exerce au sein du service de cardiologie de la Clinique Sainte-Clotilde et participe à la prise en charge des patients en cardiologie interventionnelle.",
    publications: ["comparative-analysis-vffr-ffr-wire-reunion-registry"],
  },
  {
    slug: "geoffray-rambaud",
    name: "Dr. Geoffray Rambaud",
    qualifications: ["Consultation", "Exploration non invasive", "Cardiologie interventionnelle"],
    email: "rambaud.geo@gmail.com",
    shortDescription:
      "Le Dr Geoffray Rambaud exerce au sein du service de cardiologie de la Clinique Sainte-Clotilde et intervient en consultation, exploration non invasive et cardiologie interventionnelle.",
    publications: ["comparative-analysis-vffr-ffr-wire-reunion-registry"],
  },
  {
    slug: "christophe-geyer",
    name: "Dr. Christophe Geyer",
    qualifications: ["Consultation", "Exploration non invasive", "Cardiologie interventionnelle"],
    email: "christophe.geyer993@orange.fr",
    shortDescription:
      "Le Dr Christophe Geyer exerce au sein du service de cardiologie de la Clinique Sainte-Clotilde et intervient en consultation, exploration non invasive et cardiologie interventionnelle.",
  },
  {
    slug: "karim-bougrini",
    name: "Dr. Karim Bougrini",
    qualifications: ["Consultation", "Exploration non invasive", "Cardiologie interventionnelle"],
    email: "kbougrini@yahoo.fr",
    shortDescription:
      "Le Dr Karim Bougrini exerce au sein du service de cardiologie de la Clinique Sainte-Clotilde et intervient en consultation, exploration non invasive et cardiologie interventionnelle.",
    publications: ["comparative-analysis-vffr-ffr-wire-reunion-registry"],
  },
  {
    slug: "richard-vi-fane",
    name: "Dr. Richard Vi-Fane",
    qualifications: ["Consultation", "Exploration non invasive", "Cardiologie interventionnelle"],
    email: "richard.vifane@clinifutur.net",
    shortDescription:
      "Le Dr Richard Vi-Fane exerce au sein du service de cardiologie de la Clinique Sainte-Clotilde et intervient en consultation, exploration non invasive et cardiologie interventionnelle.",
    publications: ["comparative-analysis-vffr-ffr-wire-reunion-registry"],
  },
  {
    slug: "jens-glasenapp",
    name: "Dr. Jens Glasenapp",
    qualifications: ["Consultation", "Exploration non invasive", "Cardiologie interventionnelle"],
    email: "jens.glasenapp@gmx.fr",
    shortDescription:
      "Le Dr Jens Glasenapp exerce au sein du service de cardiologie de la Clinique Sainte-Clotilde et intervient en consultation, exploration non invasive et cardiologie interventionnelle.",
    publications: ["comparative-analysis-vffr-ffr-wire-reunion-registry"],
  },
  {
    slug: "yassine-gadri",
    name: "Dr. Yassine Gadri",
    qualifications: ["Consultation", "Exploration non invasive", "Cardiologie interventionnelle"],
    email: "yassine.gadri@clinifutur.net",
    shortDescription:
      "Le Dr Yassine Gadri exerce au sein du service de cardiologie de la Clinique Sainte-Clotilde et intervient en consultation, exploration non invasive et cardiologie interventionnelle.",
    publications: ["comparative-analysis-vffr-ffr-wire-reunion-registry"],
  },
  {
    slug: "david-huchette",
    name: "Dr. David Huchette",
    qualifications: ["Consultation", "Exploration non invasive", "Rythmologie interventionnelle"],
    email: "david_huchette@hotmail.com",
    shortDescription:
      "Le Dr David Huchette exerce au sein du service de cardiologie de la Clinique Sainte-Clotilde et intervient en consultation, exploration non invasive et rythmologie interventionnelle.",
    publications: ["comparative-analysis-vffr-ffr-wire-reunion-registry"],
  },
];

export function getDoctorBySlug(slug: string) {
  return doctors.find((doctor) => doctor.slug === slug);
}
