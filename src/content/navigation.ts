export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Qui sommes-nous ?", href: "/qui-sommes-nous" },
  {
    label: "Spécialités",
    href: "#",
    children: [
      { label: "Cardiopathies ischémiques", href: "/cardiopathies-ischemiques" },
      { label: "Cardiopathies rythmiques", href: "/cardiopathies-rythmiques" },
      { label: "Cardiopathies valvulaires", href: "/cardiopathies-valvulaires" },
    ],
  },
  {
    label: "Informations",
    href: "#",
    children: [
      { label: "Consultation", href: "/consultation" },
      { label: "Hospitalisation", href: "/hospitalisation" },
    ],
  },
  { label: "Médecins & Professionnels", href: "/medecins-professionnels" },
  { label: "Contact", href: "/contact" },
];

export const contactInfo = {
  phone: "+262 2 62 48 21 22",
  fax: "+262 2 62 48 24 54",
  email: "Sec.cscardio.csc@clinifutur.net",
  address: "127, route du Bois de Nèfles",
  city: "97490 SAINTE-CLOTILDE",
  phoneHospitalisation: "+262 2 62 48 20 56",
  faxHospitalisation: "+262 2 62 48 20 85",
};

export const socialLinks = {
  facebook: "#",
  youtube: "#",
  linkedin: "#",
};

export const stats = [
  { value: "8+", label: "Médecins professionnels" },
  { value: "2+", label: "Laboratoire numérique" },
  { value: "30+", label: "Années d'expérience" },
  { value: "12+", label: "Infirmiers" },
];
