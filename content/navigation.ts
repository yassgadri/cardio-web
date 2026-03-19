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
      { label: "Rythmologie", href: "/rythmologie" },
    ],
  },
  { label: "Médecins", href: "/medecins-professionnels" },
  {
    label: "Parcours patient",
    href: "/parcours-patient",
    children: [
      { label: "Consultation", href: "/consultation" },
      { label: "Hospitalisation", href: "/hospitalisation" },
      { label: "Préparer ma visite", href: "/preparer-ma-visite" },
      { label: "Accès", href: "/acces" },
    ],
  },
];

export const contactInfo = {
  phone: "+262 2 62 48 21 22",
  fax: "+262 2 62 48 24 54",
  email: "sec.cscardio.csc@clinifutur.net",
  address: "Clinique Sainte-Clotilde, 127 route du Bois de Nèfles",
  city: "97490 Sainte-Clotilde, La Réunion",
  phoneHospitalisation: "+262 2 62 48 20 56",
  faxHospitalisation: "+262 2 62 48 20 85",
};

export const socialLinks = {
  facebook: "https://www.facebook.com/RH.CliniqueSainteClotilde",
  youtube: "https://www.youtube.com/@clinifutur4075",
  linkedin: "https://www.linkedin.com/company/clinifutur/",
};

export const stats = [
  { value: "8+", label: "Cardiologues" },
  { value: "12+", label: "Infirmiers" },
  { value: "20+", label: "Professionnels de santé" },
  { value: "30+", label: "Années d'expérience" },
];
