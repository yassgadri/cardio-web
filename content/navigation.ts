export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Spécialités',
    href: '/specialites',
    children: [
      { label: 'Explorations non invasives', href: '/explorations-non-invasives' },
      { label: 'Cardiologie interventionnelle', href: '/cardiologie-interventionnelle' },
      { label: 'Rythmologie', href: '/rythmologie' },
    ],
  },
  { label: 'Examens', href: '/examens' },
  {
    label: 'Parcours patient',
    href: '/parcours-patient',
    children: [
      { label: 'Consultation', href: '/consultation' },
      { label: 'Hospitalisation', href: '/hospitalisation' },
      { label: 'Préparer ma visite', href: '/preparer-ma-visite' },
      { label: 'Accès', href: '/acces' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const contactInfo = {
  phone: '+262 2 62 48 21 22',
  fax: '+262 2 62 48 24 54',
  email: 'Sec.cscardio.csc@clinifutur.net',
  address: '127, route du Bois de Nèfles',
  city: '97490 SAINTE-CLOTILDE',
  phoneHospitalisation: '+262 2 62 48 20 56',
  faxHospitalisation: '+262 2 62 48 20 85',
};

export const socialLinks = {
  facebook: '#',
  youtube: '#',
  linkedin: '#',
};

export const stats = [
  { value: '3', label: 'Axes de prise en charge' },
  { value: '5', label: 'Examens principaux' },
  { value: '30+', label: "Années d'expérience" },
  { value: '4', label: 'Rubriques patient' },
];
