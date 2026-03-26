export interface Doctor {
  name: string;
  qualifications: string[];
  email: string;
}

export const doctors: Doctor[] = [
  {
    name: "Dr. Christophe Pouillot",
    qualifications: ["Cardiologie interventionnelle"],
    email: "christophe.pouillot@clinifutur.net",
  },
  {
    name: "Dr. Geoffray Rambaud",
    qualifications: ["Consultation", "Exploration non invasive", "Cardiologie interventionnelle"],
    email: "rambaud.geo@gmail.com",
  },
  {
    name: "Dr. Christophe Geyer",
    qualifications: ["Consultation", "Exploration non invasive", "Cardiologie interventionnelle"],
    email: "christophe.geyer993@orange.fr",
  },
  {
    name: "Dr. Karim Bougrini",
    qualifications: ["Consultation", "Exploration non invasive", "Cardiologie interventionnelle"],
    email: "kbougrini@yahoo.fr",
  },
  {
    name: "Dr. Richard Vi-Fane",
    qualifications: ["Consultation", "Exploration non invasive", "Cardiologie interventionnelle"],
    email: "richard.vifane@clinifutur.net",
  },
  {
    name: "Dr. Jens Glasenapp",
    qualifications: ["Consultation", "Exploration non invasive", "Cardiologie interventionnelle"],
    email: "jens.glasenapp@gmx.fr",
  },
  {
    name: "Dr. Yassine Gadri",
    qualifications: ["Consultation", "Exploration non invasive", "Cardiologie interventionnelle"],
    email: "yassine.gadri@clinifutur.net",
  },
  {
    name: "Dr. David Huchette",
    qualifications: ["Consultation", "Exploration non invasive", "Rythmologie interventionnelle"],
    email: "david_huchette@hotmail.com",
  },
];
