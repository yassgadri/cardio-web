export interface FaqItem {
  question: string;
  answer: string;
}

export const homeFaq: FaqItem[] = [
  {
    question: "Quand consulter un cardiologue à Saint-Denis de La Réunion ?",
    answer:
      "Une consultation cardiologique peut être utile en cas de douleur thoracique, essoufflement, palpitations, malaise, hypertension artérielle, suivi après un avis médical ou contrôle de facteurs de risque cardiovasculaire.",
  },
  {
    question: "Le service de cardiologie réalise-t-il des examens sur place ?",
    answer:
      "Oui. Le service prend en charge les consultations, les explorations non invasives, la cardiologie interventionnelle et la rythmologie au sein de la Clinique Sainte-Clotilde à Saint-Denis.",
  },
  {
    question: "Comment prendre contact avec le service de cardiologie ?",
    answer:
      "Le secrétariat du service peut être contacté par téléphone, par email ou via la page contact du site pour une demande de rendez-vous, une information pratique ou une orientation dans le parcours patient.",
  },
];

export const specialtiesFaq: FaqItem[] = [
  {
    question: "Quelles spécialités de cardiologie sont proposées à la Clinique Sainte-Clotilde ?",
    answer:
      "Le service s'organise autour de trois domaines complémentaires : explorations non invasives, cardiologie interventionnelle et rythmologie interventionnelle.",
  },
  {
    question: "Peut-on être orienté vers des examens après une consultation ?",
    answer:
      "Oui. Selon la situation, la consultation peut conduire à la programmation d'examens cardiologiques, d'un suivi spécialisé ou d'un geste interventionnel.",
  },
  {
    question: "Les spécialités sont-elles accessibles à Saint-Denis de La Réunion ?",
    answer:
      "Oui. Le service de cardiologie de la Clinique Sainte-Clotilde, à Saint-Denis de La Réunion, prend en charge ces spécialités sur son plateau technique et en consultation spécialisée.",
  },
];

export const consultationFaq: FaqItem[] = [
  {
    question: "Comment prendre rendez-vous pour une consultation de cardiologie ?",
    answer:
      "Le rendez-vous se prend auprès du secrétariat du service de cardiologie, qui précise les modalités pratiques selon la demande et le type de prise en charge attendu.",
  },
  {
    question: "Quels documents apporter en consultation ?",
    answer:
      "Il est recommandé d'apporter l'ordonnance, la lettre du médecin traitant si vous en avez une, les anciens examens, votre traitement en cours et les documents administratifs demandés par le secrétariat.",
  },
  {
    question: "La consultation peut-elle déboucher sur des examens complémentaires ?",
    answer:
      "Oui. Selon l'évaluation médicale, une consultation peut conduire à la prescription ou à la programmation d'examens cardiologiques complémentaires ou d'un suivi spécialisé.",
  },
];

export const contactFaq: FaqItem[] = [
  {
    question: "Comment contacter le service de cardiologie de la Clinique Sainte-Clotilde ?",
    answer:
      "Le service peut être contacté par téléphone, par email ou directement sur place à la Clinique Sainte-Clotilde, 127 route du Bois de Nèfles, 97490 Sainte-Clotilde, La Réunion.",
  },
  {
    question: "Y a-t-il un contact distinct pour la consultation et l'hospitalisation ?",
    answer:
      "Oui. Le site met à disposition les coordonnées du secrétariat de consultation ainsi que celles dédiées à l'hospitalisation afin d'orienter plus facilement les patients et leurs proches.",
  },
  {
    question: "Où se situe le service de cardiologie ?",
    answer:
      "Le service de cardiologie est situé à la Clinique Sainte-Clotilde, à Saint-Denis de La Réunion, avec un accès simple pour les consultations, examens et hospitalisations.",
  },
];

export const doctorsFaq: FaqItem[] = [
  {
    question: "Quels cardiologues exercent au sein du service ?",
    answer:
      "Le service réunit plusieurs cardiologues intervenant en consultation, exploration non invasive, cardiologie interventionnelle et rythmologie interventionnelle.",
  },
  {
    question: "Comment savoir quel médecin contacter ?",
    answer:
      "Le secrétariat du service peut orienter vers le praticien ou la filière la plus adaptée selon le motif de consultation, l'examen souhaité ou la prise en charge nécessaire.",
  },
  {
    question: "Les médecins consultent-ils à Saint-Denis de La Réunion ?",
    answer:
      "Oui. Les praticiens présentés sur le site exercent au sein du service de cardiologie de la Clinique Sainte-Clotilde à Saint-Denis de La Réunion.",
  },
];

export const specialtySeoContent: Record<
  string,
  {
    introTitle: string;
    intro: string;
    whenToConsultTitle: string;
    whenToConsult: string[];
    localCareTitle: string;
    localCareText: string;
    faq: FaqItem[];
  }
> = {
  "explorations-non-invasives": {
    introTitle: "Examens cardiologiques non invasifs à Saint-Denis de La Réunion",
    intro:
      "Les explorations non invasives permettent d'évaluer le cœur sans geste interventionnel. Elles sont utiles pour explorer des symptômes cardiovasculaires, assurer un suivi cardiologique et orienter la stratégie de prise en charge au sein du service de cardiologie de la Clinique Sainte-Clotilde.",
    whenToConsultTitle: "Quand ces examens peuvent-ils être proposés ?",
    whenToConsult: [
      "En cas de douleur thoracique, essoufflement, palpitations ou malaise nécessitant un bilan cardiologique.",
      "Pour le suivi d'une hypertension artérielle, d'un souffle cardiaque, d'une pathologie valvulaire ou d'un antécédent cardiovasculaire.",
      "Après une consultation spécialisée afin de compléter l'évaluation du cœur et d'adapter le traitement ou la surveillance.",
    ],
    localCareTitle: "Une prise en charge coordonnée sur le même site",
    localCareText:
      "À Saint-Denis de La Réunion, le service de cardiologie organise les consultations, l'interprétation des examens et, si nécessaire, l'orientation vers une hospitalisation, une cardiologie interventionnelle ou une rythmologie spécialisée.",
    faq: [
      {
        question: "Quels examens sont réalisés en exploration non invasive ?",
        answer:
          "Le service réalise notamment ECG, échocardiographie, épreuve d'effort, Holter ECG, Holter tensionnel, échocardiographie de stress et contrôle de dispositifs implantés selon les indications médicales.",
      },
      {
        question: "Faut-il une hospitalisation pour ces examens ?",
        answer:
          "La plupart des explorations non invasives sont réalisées en ambulatoire. Le secrétariat ou le médecin précise les consignes selon l'examen programmé.",
      },
      {
        question: "Ces examens sont-ils réalisés à la Clinique Sainte-Clotilde ?",
        answer:
          "Oui. Les explorations non invasives présentées sur cette page sont organisées au sein du service de cardiologie de la Clinique Sainte-Clotilde à Saint-Denis de La Réunion.",
      },
    ],
  },
  "cardiologie-interventionnelle": {
    introTitle: "Cardiologie interventionnelle à Saint-Denis de La Réunion",
    intro:
      "La cardiologie interventionnelle regroupe les examens et gestes mini-invasifs destinés à explorer ou traiter certaines pathologies cardiovasculaires. Elle s'adresse aux patients nécessitant une prise en charge spécialisée, programmée ou urgente, dans un environnement technique dédié.",
    whenToConsultTitle: "Dans quelles situations cette prise en charge est-elle envisagée ?",
    whenToConsult: [
      "En cas de suspicion ou de suivi d'une maladie coronaire nécessitant une coronarographie ou une angioplastie.",
      "Pour l'évaluation hémodynamique de certaines valvulopathies ou d'une insuffisance cardiaque lorsque des mesures invasives sont indiquées.",
      "Dans certaines indications ciblées de remplacement valvulaire percutané ou d'autres procédures définies après bilan cardiologique.",
    ],
    localCareTitle: "Une filière cardiologique intégrée au sein de la clinique",
    localCareText:
      "Le plateau technique du service permet d'articuler consultation, examens préopératoires, geste interventionnel et suivi au même endroit, à la Clinique Sainte-Clotilde à Saint-Denis de La Réunion.",
    faq: [
      {
        question: "Qu'est-ce qu'une coronarographie ?",
        answer:
          "La coronarographie est un examen qui visualise les artères coronaires afin de rechercher un rétrécissement ou une obstruction et de guider la prise en charge si nécessaire.",
      },
      {
        question: "Une hospitalisation est-elle nécessaire ?",
        answer:
          "Selon l'acte réalisé et la situation clinique, la prise en charge peut être ambulatoire ou nécessiter une courte hospitalisation. Les modalités sont précisées par l'équipe médicale.",
      },
      {
        question: "La cardiologie interventionnelle est-elle disponible à Saint-Denis de La Réunion ?",
        answer:
          "Oui. Le service de cardiologie de la Clinique Sainte-Clotilde dispose d'un plateau technique de cardiologie interventionnelle à Saint-Denis de La Réunion.",
      },
    ],
  },
  rythmologie: {
    introTitle: "Rythmologie interventionnelle à Saint-Denis de La Réunion",
    intro:
      "La rythmologie interventionnelle prend en charge les troubles du rythme cardiaque, les anomalies de conduction et certaines palpitations nécessitant un avis spécialisé, des examens dédiés ou une procédure thérapeutique ciblée.",
    whenToConsultTitle: "Dans quelles situations une prise en charge en rythmologie peut être nécessaire ?",
    whenToConsult: [
      "En cas de palpitations, rythme cardiaque irrégulier, malaise, syncope ou suspicion d'arythmie.",
      "Pour le suivi d'une fibrillation auriculaire, d'un flutter, d'une tachycardie ou d'un dispositif implanté de type pacemaker ou défibrillateur.",
      "Lorsqu'une consultation cardiologique oriente vers une exploration électrophysiologique, une cardioversion ou une ablation.",
    ],
    localCareTitle: "Une prise en charge spécialisée intégrée",
    localCareText:
      "À la Clinique Sainte-Clotilde, la rythmologie s'inscrit dans un parcours coordonné avec consultation, examens, geste spécialisé si besoin et suivi du patient à Saint-Denis de La Réunion.",
    faq: [
      {
        question: "Qu'est-ce que la rythmologie interventionnelle ?",
        answer:
          "Il s'agit de la spécialité qui explore et traite certains troubles du rythme cardiaque au moyen d'examens dédiés, de cardioversions, d'ablations ou de dispositifs implantables.",
      },
      {
        question: "Un pacemaker ou un défibrillateur peut-il être suivi sur place ?",
        answer:
          "Oui. Le service réalise le suivi, le contrôle et, selon les indications, l'implantation ou le changement de boîtier de certains dispositifs cardiaques.",
      },
      {
        question: "La rythmologie est-elle disponible à Saint-Denis de La Réunion ?",
        answer:
          "Oui. La rythmologie interventionnelle fait partie des spécialités prises en charge au sein du service de cardiologie de la Clinique Sainte-Clotilde à Saint-Denis de La Réunion.",
      },
    ],
  },
};
