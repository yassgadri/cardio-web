export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Spécialités",
    href: "/specialites",
    children: [
      { label: "Explorations non invasives", href: "/explorations-non-invasives" },
      { label: "Cardiologie interventionnelle", href: "/cardiologie-interventionnelle" },
      { label: "Rythmologie interventionnelle", href: "/rythmologie" },
    ],
  },
  { label: "Médecins", href: "/medecins" },
  {
    label: "Parcours patient",
    href: "/parcours-patient",
    children: [
      { label: "Consultation", href: "/consultation" },
      { label: "Hospitalisation", href: "/hospitalisation" },
      { label: "Préparer ma visite", href: "/preparer-ma-visite" },
      { label: "Accès", href: "/contact" },
    ],
  },
];

export const contactInfo = {
  address: "127 route du Bois de Nèfles",
  city: "97490 Sainte-Clotilde, La Réunion",
  // Consultation
  phone: "+262 2 62 48 21 22",
  fax: "+262 2 62 48 24 54",
  email: "sec.cscardio.csc@clinifutur.net",
  // Hospitalisation
  hospitalisationPhone: "+262 2 62 48 20 56",
  hospitalisationFax: "+262 2 62 48 20 85",
  hospitalisationEmail: "sec.cardiologie.csc@clinifutur.net",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/clinifutur/",
  youtube: "https://www.youtube.com/@clinifutur4075",
  linkedin: "https://www.linkedin.com/company/clinifutur/",
};

export const stats = [
  { value: "8+", label: "Cardiologues" },
  { value: "12+", label: "Infirmiers" },
  { value: "20+", label: "Professionnels de santé" },
  { value: "30+", label: "Années d'expérience" },
];

export const companyInfo = {
  raisonSociale: "SELARL DE CARDIOLOGIE DE LA CLINIQUE SAINTE-CLOTILDE",
  capitalSocial: "154 825,92 Euros",
  siegeSocial:
    "Clinique de Sainte-clotilde, 127 route du Bois de Nèfles, 97490 Sainte-Clotilde, Saint-Denis, La Réunion",
  RCS: "391 557 048 R.C.S. Saint Denis de La Réunion",
  SIREN: "391 557 048",
};
