export const nav = [
  { label: "Accueil", path: "/" },
  { label: "Spécialités", path: "/specialites" },
  { label: "Examens", path: "/examens" },
  {
    label: "Parcours patient",
    path: "/parcours",
    children: [
      { label: "Consultation", path: "/consultation" },
      { label: "Hospitalisation", path: "/hospitalisation" },
      { label: "Préparer ma visite", path: "/preparer" },
      { label: "Accès", path: "/contact" },
    ],
  },
  { label: "Contact", path: "/contact" },
];
