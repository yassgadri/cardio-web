export interface Doctor {
  name: string;
  qualifications: string[];
  email: string;
}

export const doctors: Doctor[] = [
  {
    name: "Dr. Christophe Pouillot",
    qualifications: [
      "Ancien interne des hôpitaux",
      "Ex-Chef de Clinique Cardiologique",
      "Ex-Assistant des hôpitaux de Rennes",
    ],
    email: "christophe.pouillot@clinifutur.net",
  },
  {
    name: "Dr. Geoffray Rambaud",
    qualifications: [
      "Ancien interne des hôpitaux",
      "Ex-Chef de Clinique Cardiologique",
      "Ex-Assistant des hôpitaux de Limoges",
    ],
    email: "rambaud.geo@gmail.com",
  },
  {
    name: "Dr. Christophe Geyer",
    qualifications: [
      "Ancien assistant Chef de Clinique des Hôpitaux de Paris",
      "Ancien praticien hospitalier des Hospices",
      "Civils de Lyon",
    ],
    email: "christophe.geyer993@orange.fr",
  },
  {
    name: "Dr. Karim Bougrini",
    qualifications: [
      "Ancien interne des hôpitaux",
      "Ex-Chef de Clinique Cardiologique",
      "Ex-Assistant des hôpitaux de Paris",
    ],
    email: "kbougrini@yahoo.fr",
  },
  {
    name: "Dr. Richard Vi-Fane",
    qualifications: ["Ancien interne des Hôpitaux"],
    email: "richard.vifane@clinifutur.net",
  },
  {
    name: "Dr. Jens Glasenapp",
    qualifications: ["Ancien interne des Hôpitaux"],
    email: "jens.glasenapp@gmx.fr",
  },
  {
    name: "Dr. Yassine Gadri",
    qualifications: ["Ancien interne des Hôpitaux"],
    email: "yassine.gadri@clinifutur.net",
  },
  {
    name: "Dr. David Huchette",
    qualifications: [
      "Ancien interne du CHU de Lille",
      "Ancien chef de clinique de CHRU de Lille",
    ],
    email: "david_huchette@hotmail.com",
  },
];
