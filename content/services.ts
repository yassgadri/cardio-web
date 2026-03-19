export interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
  procedures: Procedure[];
}

export interface Procedure {
  title: string;
  description: string;
  process: string;
}

export interface ExamItem {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  process: string;
  preparation: string;
  duration: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'explorations-non-invasives',
    title: 'Explorations non invasives',
    description:
      'Examens cardiologiques permettant d’évaluer le cœur sans geste invasif, afin de guider le diagnostic, le suivi et la stratégie thérapeutique.',
    procedures: [
      {
        title: 'Électrocardiogramme (ECG)',
        description:
          'Examen simple et rapide qui enregistre l’activité électrique du cœur afin d’analyser le rythme cardiaque et d’orienter le diagnostic.',
        process:
          'Des électrodes sont placées sur le thorax, les poignets et les chevilles. L’examen est indolore et dure généralement quelques minutes.',
      },
      {
        title: 'Échocardiographie Doppler transthoracique (ETT)',
        description:
          'Technique utilisant des ultrasons pour examiner les cavités cardiaques, la fonction du muscle cardiaque et le fonctionnement des valves.',
        process:
          'Un gel est appliqué sur la poitrine puis la sonde est déplacée sur la peau afin d’obtenir les images du cœur. La durée moyenne est de 15 à 30 minutes.',
      },
      {
        title: "Épreuve d'effort",
        description:
          'Examen réalisé pendant un effort progressif pour analyser la réponse du cœur, du rythme et de la tension artérielle à l’exercice.',
        process:
          'L’examen se déroule sur vélo ou tapis selon les indications. Des électrodes sont posées sur le thorax et l’effort est surveillé en continu.',
      },
      {
        title: 'Échocardiographie de stress',
        description:
          'Méthode non invasive évaluant la fonction cardiaque sous stress physique ou médicamenteux afin de rechercher certaines anomalies coronariennes.',
        process:
          'Des images échographiques sont réalisées au repos puis pendant l’effort ou après administration d’un traitement stimulant le cœur.',
      },
      {
        title: 'Holter ECG',
        description:
          'Enregistrement continu de l’électrocardiogramme sur 24 à 48 heures afin de repérer les variations du rythme cardiaque dans la vie quotidienne.',
        process:
          'Des électrodes autocollantes sont reliées à un boîtier portable porté à la ceinture ou en bandoulière pendant 24 à 48 heures.',
      },
      {
        title: 'Holter tensionnel',
        description:
          'Mesure répétée de la tension artérielle sur 24 heures pour mieux évaluer son évolution dans les conditions habituelles de la journée et de la nuit.',
        process:
          'Un brassard relié à un appareil portable réalise automatiquement des mesures régulières tout au long de la journée et pendant le sommeil.',
      },
      {
        title: 'Échographie trans-œsophagienne (ETO)',
        description:
          'Examen ciblé permettant de visualiser avec précision certaines structures cardiaques comme les valves, l’oreillette gauche ou la présence de caillots.',
        process:
          'Réalisé au sein du bloc opératoire de cardiologie, l’examen dure généralement 5 à 10 minutes sous anesthésie locale ou brève anesthésie générale.',
      },
    ],
  },
  {
    slug: 'cardiologie-interventionnelle',
    title: 'Cardiologie interventionnelle',
    description:
      'Prise en charge diagnostique et thérapeutique par techniques mini-invasives pour explorer ou traiter certaines pathologies cardiovasculaires.',
    procedures: [
      {
        title: 'Coronarographie',
        description:
          'Examen permettant de visualiser les artères coronaires afin d’identifier un rétrécissement ou une obstruction du flux sanguin.',
        process:
          'Sous anesthésie locale, un cathéter est introduit par l’artère radiale ou fémorale puis guidé jusqu’aux coronaires. Une hospitalisation courte est habituellement nécessaire.',
      },
      {
        title: 'Angioplastie coronaire',
        description:
          'Procédure visant à rétablir un flux sanguin normal dans une artère coronaire rétrécie ou obstruée, parfois avec mise en place d’un stent.',
        process:
          'L’intervention est réalisée sous anesthésie locale. Sa durée dépend du geste à effectuer et peut nécessiter une hospitalisation de 1 à 3 jours.',
      },
      {
        title: 'Cathétérisme cardiaque hémodynamique',
        description:
          'Technique d’exploration permettant d’évaluer les pressions dans les cavités cardiaques et le fonctionnement de la circulation sanguine.',
        process:
          'Une sonde souple est introduite dans une artère ou une veine afin d’accéder au cœur. L’examen peut durer de 45 minutes à plusieurs heures selon le bilan réalisé.',
      },
      {
        title: 'Implantation de valve aortique percutanée (TAVI)',
        description:
          'Procédure percutanée utilisée dans certaines indications pour traiter un rétrécissement aortique symptomatique.',
        process:
          'La valve est acheminée par cathéter puis implantée sous contrôle médical spécialisé. La procédure nécessite une hospitalisation adaptée.',
      },
      {
        title: 'Valvuloplastie aortique',
        description:
          'Technique réservée à certaines situations pour améliorer l’ouverture d’une valve aortique rétrécie lorsque l’indication le justifie.',
        process:
          'Après anesthésie locale, un ballonnet est introduit par cathéter puis gonflé rapidement au niveau de la valve aortique.',
      },
    ],
  },
  {
    slug: 'rythmologie',
    title: 'Rythmologie',
    description:
      'Évaluation et traitement des troubles du rythme cardiaque, des palpitations et des anomalies de conduction nécessitant un suivi spécialisé.',
    procedures: [
      {
        title: 'Explorations électrophysiologiques',
        description:
          'Examens destinés à confirmer un diagnostic de trouble du rythme en étudiant l’activité électrique du cœur à différents endroits.',
        process:
          'Une sonde est introduite par voie veineuse sous anesthésie locale puis guidée vers le cœur à l’aide d’un dispositif de radiographie.',
      },
      {
        title: 'Cardioversion',
        description:
          'Acte médical visant à rétablir un rythme cardiaque normal chez certains patients présentant une arythmie, notamment la fibrillation auriculaire.',
        process:
          'La procédure est réalisée en milieu spécialisé selon le protocole médical adapté à la situation clinique du patient.',
      },
      {
        title: 'Ablation par radiofréquence ou cryothérapie',
        description:
          'Intervention destinée à traiter certaines arythmies en ciblant les zones responsables du trouble du rythme cardiaque.',
        process:
          'Des sondes sont introduites par voie veineuse ; la durée varie selon la complexité du geste et le type d’arythmie traité.',
      },
      {
        title: "Mise en place d'un pacemaker ou défibrillateur",
        description:
          'Implantation d’un dispositif de stimulation ou de protection cardiaque destiné à corriger certaines anomalies du rythme.',
        process:
          'L’implantation est réalisée sous anesthésie locale ou générale selon le matériel implanté et le contexte médical.',
      },
      {
        title: 'Contrôle de stimulateur ou défibrillateur cardiaque',
        description:
          'Suivi régulier d’un dispositif implanté afin de vérifier son bon fonctionnement et d’adapter si besoin les réglages.',
        process:
          'Les contrôles sont organisés en consultation spécialisée avec une fréquence adaptée au matériel et à la situation du patient.',
      },
      {
        title: 'Changement de boîtier',
        description:
          'Remplacement du boîtier d’un dispositif implanté lorsque cela devient nécessaire, tout en conservant si possible les sondes en place.',
        process:
          'L’intervention est généralement réalisée sous anesthésie locale avec surveillance du rythme cardiaque et courte hospitalisation.',
      },
    ],
  },
];

export const exams: ExamItem[] = [
  {
    slug: 'ecg',
    title: 'ECG',
    subtitle: 'Électrocardiogramme',
    description: 'Examen simple permettant d’enregistrer l’activité électrique du cœur et d’orienter le diagnostic en cas de symptômes ou de suivi.',
    process: 'Des électrodes sont placées sur la peau afin d’enregistrer le rythme cardiaque. L’examen est indolore et réalisé sur place.',
    preparation: 'Aucune préparation particulière n’est généralement nécessaire.',
    duration: '5 à 10 minutes',
  },
  {
    slug: 'echographie-cardiaque',
    title: 'Échographie cardiaque',
    subtitle: 'Échocardiographie',
    description: 'Examen d’imagerie par ultrasons qui étudie la structure du cœur, son fonctionnement et celui des valves cardiaques.',
    process: 'Le médecin applique un gel sur la poitrine puis déplace une sonde pour visualiser le cœur en temps réel.',
    preparation: 'Aucune préparation particulière, sauf indication contraire.',
    duration: '15 à 30 minutes',
  },
  {
    slug: 'test-deffort',
    title: "Test d'effort",
    subtitle: "Épreuve d'effort",
    description: 'Examen qui analyse la réaction du cœur pendant un effort progressif afin d’évaluer la tolérance à l’exercice et d’orienter le diagnostic.',
    process: 'L’examen se déroule sur vélo ou tapis avec surveillance continue de l’ECG et de la tension artérielle.',
    preparation: 'Prévoir une tenue confortable ; les consignes spécifiques sont données lors du rendez-vous.',
    duration: '15 à 30 minutes',
  },
  {
    slug: 'holter-ecg',
    title: 'Holter ECG',
    subtitle: 'Enregistrement 24h / 48h',
    description: 'Surveillance prolongée du rythme cardiaque afin de détecter certaines anomalies qui n’apparaissent pas toujours lors d’un ECG standard.',
    process: 'Un petit appareil portable relié à des électrodes enregistre l’activité cardiaque pendant la vie quotidienne.',
    preparation: 'Venir avec des vêtements pratiques ; les consignes sont précisées au moment de la pose.',
    duration: 'Pose rapide puis enregistrement sur 24h à 48h',
  },
  {
    slug: 'holter-tensionnel',
    title: 'Holter tensionnel',
    subtitle: 'Mesure ambulatoire de la tension',
    description: 'Examen utile pour mesurer la tension artérielle sur 24 heures et mieux apprécier sa variabilité au cours de la journée et de la nuit.',
    process: 'Un brassard automatique réalise des mesures régulières pendant les activités habituelles.',
    preparation: 'Aucune préparation complexe ; il est recommandé de garder une journée aussi habituelle que possible.',
    duration: 'Pose rapide puis enregistrement sur 24h',
  },
];
