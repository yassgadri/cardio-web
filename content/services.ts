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

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "cardiopathies-ischemiques",
    title: "Cardiopathies ischémiques",
    description:
      "Les cardiopathies ischémiques sont des maladies cardiaques causées par un apport sanguin insuffisant au muscle cardiaque en raison d'une obstruction des artères coronaires.",
    procedures: [
      {
        title: "Echocardiographie de stress",
        description:
          "L'échocardiographie de stress est une méthode non invasive qui évalue la fonction cardiaque sous stress physique, permettant de détecter d'éventuelles anomalies coronariennes. Elle utilise des images échographiques pendant l'effort ou après l'administration de médicaments pour accélérer le rythme cardiaque. Cela aide les médecins à diagnostiquer les maladies coronariennes et autres problèmes cardiaques chez les patients présentant des symptômes tels que des douleurs thoraciques ou une dyspnée.",
        process:
          "Au cours de l'examen, les patients pédalent sur un vélo stationnaire pour effectuer un effort physique. Des électrodes autocollantes sont placées sur le thorax pour surveiller la pression artérielle, tandis que des médicaments peuvent être administrés par voie intraveineuse selon les besoins. La durée de l'examen varie généralement entre 30 et 45 minutes.",
      },
      {
        title: "Épreuve d'effort",
        description:
          "Les épreuves d'effort, y compris les épreuves cardio-respiratoires avec mesure du VO2 max, évaluent le fonctionnement cardiaque pendant l'exercice, identifiant d'éventuelles anomalies du rythme, de la pression artérielle et de la circulation coronaire, et surveillant l'efficacité des traitements cardiaques.",
        process:
          "L'épreuve d'effort, d'une durée de 15 à 30 minutes, se déroule sur un tapis roulant ou un vélo stationnaire. Elle implique l'application d'électrodes autocollantes sur le thorax et l'utilisation d'un masque pour évaluer la réponse respiratoire. Il est recommandé d'apporter des vêtements de sport et une serviette.",
      },
      {
        title: "Échographie trans-œsophagienne (ETO)",
        description:
          "L'échographie trans-œsophagienne (ETO) vise à visualiser des structures spécifiques du cœur telles que la valve mitrale, l'oreillette gauche et l'auricule gauche. Cette méthode est privilégiée pour détecter des végétations, des caillots intracardiaques, des anomalies de continence des valves cardiaques.",
        process:
          "Cet examen, effectué au sein du bloc opératoire de cardiologie, a une durée de 5 à 10 minutes et est réalisé sous anesthésie locale ou brève anesthésie générale.",
      },
      {
        title: "Coronarographie",
        description:
          "Après avoir administré une anesthésie locale, le médecin insère un petit tube dans l'artère fémorale droite ou dans l'artère radiale pour permettre le passage du cathéter. Ensuite, le cathéter est guidé vers les artères coronaires sous surveillance visuelle sur un écran.",
        process:
          "La durée de l'examen varie de 15 à 30 minutes, et il requiert une hospitalisation de 24 heures. Une consultation préopératoire avec un anesthésiste est indispensable quelques jours avant l'intervention.",
      },
      {
        title: "Dilatation coronaire ou angioplastie transluminale",
        description:
          "L'angioplastie transluminale coronaire vise à rétablir un flux sanguin normal dans les artères coronaires rétrécies ou obstruées par l'athérosclérose. Cette procédure implique le passage d'un guide métallique très mince à travers le rétrécissement.",
        process:
          "L'angioplastie est un examen peu douloureux qui requiert une anesthésie locale. Sa durée peut varier de 15 minutes à plus d'une heure en fonction du nombre d'artères coronaires à traiter. La période d'hospitalisation peut s'étendre de 1 à 3 jours.",
      },
    ],
  },
  {
    slug: "cardiopathies-rythmiques",
    title: "Cardiopathies rythmiques",
    description:
      "Les cardiopathies rythmiques désignent des troubles du rythme cardiaque qui entraînent des battements du cœur irréguliers, perturbant ainsi son fonctionnement normal et optimal.",
    procedures: [
      {
        title: "Explorations électro-physiologiques",
        description:
          "Les explorations électrophysiologiques sont des examens destinés à confirmer un diagnostic de troubles du rythme cardiaque. Elles consistent à étudier les tissus musculaires du cœur et à enregistrer leur activité électrique à différents endroits.",
        process:
          "L'examen consiste à introduire une sonde par la veine fémorale sous anesthésie locale, dirigée vers le cœur à l'aide d'un appareil de radiographie, nécessitant une hospitalisation de quelques heures, d'une durée moyenne de 30 minutes à 1 heure.",
      },
      {
        title: "Enregistrement continu de l'électrocardiogramme",
        description:
          "Le suivi continu de l'électrocardiogramme sur 24 à 48 heures se fait à l'aide du moniteur Holter, un dispositif portable. Il permet de repérer les variations du rythme cardiaque nécessitant un traitement.",
        process:
          "Des électrodes autocollantes sont placées sur le thorax du patient, reliées à un moniteur portable à porter à la ceinture ou en bandoulière, tandis que le patient note ses activités et toute douleur ou accélération du rythme cardiaque ressentie.",
      },
      {
        title: "Cardioversion",
        description:
          "La cardioversion, pratique médicale visant à rétablir un rythme cardiaque normal en appliquant un bref choc électrique dans le cœur, est effectuée sur des patients atteints d'arythmie, notamment la fibrillation auriculaire.",
        process:
          "Une sonde est introduite par la veine fémorale après l'administration d'une anesthésie locale. Ensuite, elle est dirigée vers le cœur à l'aide d'un équipement de radiographie. Cette intervention peut être réalisée en ambulatoire.",
      },
      {
        title: "Ablation par radiofréquence ou cryothérapie",
        description:
          "L'ablation par radiofréquence ou cryothérapie est une intervention qui vise à traiter les troubles du rythme cardiaque en détruisant les anomalies cardiaques spécifiques.",
        process:
          "L'examen d'ablation par voie endovasculaire, réalisée sous anesthésie locale ou générale, implique l'introduction de sondes par la veine fémorale, avec une durée de préparation d'environ 2 heures et une durée d'examen de 30 minutes à 3 heures.",
      },
      {
        title: "Mise en place d'un pacemaker ou défibrillateur",
        description:
          "La mise en place d'un stimulateur cardiaque vise à normaliser un rythme cardiaque perturbé en utilisant des impulsions électriques. Un pacemaker surveille en continu l'activité cardiaque, identifie les irrégularités et envoie des signaux électriques pour rétablir un rythme approprié.",
        process:
          "L'implantation d'un pacemaker, réalisée sous anesthésie locale, dure environ une heure, tandis que celle d'un défibrillateur automatique, nécessitant une anesthésie générale, peut prendre jusqu'à deux heures. La durée moyenne d'hospitalisation est de 2 jours.",
      },
      {
        title: "Contrôle de stimulateur ou défibrillateur cardiaque",
        description:
          "La mise en place d'un dispositif de stimulation cardiaque requiert un suivi régulier pour garantir son bon fonctionnement.",
        process:
          "Lors des consultations de contrôle, le patient définit avec l'équipe médicale les modalités, la fréquence et les objectifs des suivis.",
      },
      {
        title: "Changement de boîtier",
        description:
          "Le remplacement du boîtier du stimulateur cardiaque implique généralement une simple incision sur la cicatrice initiale pour retirer le boîtier existant, tester et reconnecter les sondes au nouveau boîtier.",
        process:
          "Le changement de boîtier se fait généralement sous anesthésie locale avec surveillance continue du rythme cardiaque, avec une hospitalisation moyenne d'un jour et une durée d'intervention de 15 à 40 minutes.",
      },
    ],
  },
  {
    slug: "cardiopathies-valvulaires",
    title: "Cardiopathies valvulaires",
    description:
      "Les cardiopathies valvulaires sont des maladies cardiaques impliquant un dysfonctionnement des valves cardiaques, qui sont responsables de la régulation du flux sanguin à travers le cœur.",
    procedures: [
      {
        title: "Échocardiographie Doppler transthoracique (ETT)",
        description:
          "Technique utilisant des ultrasons pour examiner le cœur et ses mouvements, afin de détecter d'éventuelles anomalies cardiaques. Son objectif principal est d'inspecter les diverses parties anatomiques du cœur.",
        process:
          "Pendant cette procédure sans douleur, d'une durée de 15 à 30 minutes, un gel est étalé sur la poitrine. Ensuite, le médecin déplace la sonde sur la peau pour observer le cœur.",
      },
      {
        title: "Cathétérisme cardiaque hémodynamique",
        description:
          "Le cathétérisme cardiaque représente une technique d'intervention visant à évaluer la pression dans les cavités cardiaques et à vérifier le bon fonctionnement du système de circulation sanguine.",
        process:
          "Une minuscule sonde souple, connue sous le nom de cathéter, est introduite dans une artère ou une veine de l'aine ou du bras pour accéder au cœur. La durée peut varier de 45 minutes à 4 heures, nécessitant un séjour d'une à deux nuits.",
      },
      {
        title: "Implantation de valve aortique percutanée (TAVI)",
        description:
          "La procédure de remplacement de la valve aortique par voie percutanée (TAVI) est utilisée pour traiter les patients présentant une sténose aortique symptomatique.",
        process:
          "La valve est insérée par voie percutanée à travers un cathéter. Un ballonnet est gonflé pour ouvrir la valve aortique percutanée. Cette procédure requiert une hospitalisation d'environ cinq jours.",
      },
      {
        title: "Valvuloplastie aortique",
        description:
          "La valvuloplastie aortique percutanée est une méthode réservée aux patients souffrant d'un rétrécissement de la valve aortique et qui ne sont pas éligibles à une intervention chirurgicale traditionnelle.",
        process:
          "Après administration d'une anesthésie locale, le médecin insère un petit cathéter. À l'extrémité de la sonde se trouve un ballonnet qui est positionné et gonflé rapidement. Durée environ 30 minutes, hospitalisation de 5 à 7 jours.",
      },
    ],
  },
];
