import {ExamCardProps} from "@/components/pages/exams-section";
import {EvidenceProps} from "@/components/pages/skills-section";

export const ExamsConfig: ExamCardProps[] = [
  {
    duration: "40min",
    title: "Épreuve E5",
    description: "L'épreuve se divise en deux temps : une présentation de 10 minutes du parcours de professionnalisation, suivie de 30 minutes d'échange avec le jury pour approfondir les réalisations du dossier. Cet entretien évalue les compétences du candidat et sa contribution en équipe.",
    documents: [
      {
        path: "/docs/exams/e4/tableau.pdf",
        title: "Tableau de synthèse",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/Formulaire_attestation_de_stage2.pdf",
        title: "Attestation de stage 1ére année de BTS SIO",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/stage-bts.pdf",
        title: "Attestation de stage 2ème année de BTS SIO",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/epreuve_E5.pdf",
        title: "Présentation oral",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/stage_wepa.pdf",
        title: "Stage de première année",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/rapport_stage.pdf",
        title: "Stage de deuxième année",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
    ]
  },

  {
    duration: "2h10min",
    title: "Épreuve E6",
    description: "L’évaluation dure 40 minutes (+1h30 de préparation) et comporte deux phases : d’abord, 30 minutes de préparation suivies d’un entretien de 20 minutes sur une expression de besoins, puis une heure de préparation pour réaliser une solution, validée par un entretien explicatif.",
    documents: []
  },
  {
    duration: "20min",
    title: "Certification SIO",
    description: "L'épreuve de Certification SIO consiste en un oral de 20 minutes, sans préparation, où le candidat expose la démarche suivie pour acquérir des compétences supplémentaires, dans le but de renforcer son parcours professionnel et favoriser son insertion ou évolution de carrière.",
    documents: [{
      path: "/docs/exams/e4/Epreuve_de_parcours_de_certification.pdf",
      title: "Oral de Certification SIO",
      description: "Powerpoint de présentation",
      variant: "document",
      isExternalLink: true,
    },]
  }

]


export const ExamSkills: EvidenceProps[] = [
  {
    code: "Compétence 1.1",
    title: "Gérer le patrimoine informatique",
    description:
      "Pour gérer le patrimoine informatique, il faut recenser et identifier les ressources numériques, exploiter les référentiels et normes en vigueur, mettre en place et vérifier les niveaux d'habilitation des services, assurer la continuité des services, gérer les sauvegardes et veiller au respect des règles d'utilisation des ressources numériques.",
    documents: [
      {
        path: "/docs/exams/e4/haproxy.pdf",
        title: "Haproxy : continuité d'un service informatique",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/installation_glpi.pdf",
        title: "Installation GLPI",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/stage_wepa.pdf",
        title: "Stage de première année",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/rapport_stage.pdf",
        title: "Stage de deuxième année",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/rapport_stage.pdf",
        title: "AP WEB",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/marieteam_cl.pdf",
        title: "AP Client Lourd",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
    ],
  },
  {
    code: "Compétence 1.2",
    title:
      "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    description:
      "Pour assurer un support efficace, il est nécessaire de collecter, suivre et orienter les demandes des utilisateurs, tout en traitant celles concernant les services réseau, système et les applications.",
    documents: [
      {
        path: "/docs/exams/e4/stage_wepa.pdf",
        title: "Stage de première année",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/rapport_stage.pdf",
        title: "Stage de deuxième année",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
    ],
  },
  {
    code: "Compétence 1.3",
    title: "Développer la présence en ligne de l'organisation",
    description:
      "Contribuer à valoriser l'image de l'organisation sur les médias numériques en tenant compte des contraintes juridiques et des enjeux économiques, tout en référencent ses services en ligne et mesurant leur visibilité, ainsi qu'en participant à l'évolution d'un site Web utilisant les données de l'organisation.",
    documents: [
      {
        path: "/docs/exams/e4/portfolio.pdf",
        title: "Portfolio",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/rapport_stage.pdf",
        title: "Stage de deuxième année",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/marieteam_web.pdf",
        title: "AP MarieTeam Web",
        description: "",
        variant: "document",
        isExternalLink: true,
      },

    ],
  },
  {
    code: "Compétence 1.4",
    title: "Travailler en mode projet",
    description:
      "Analyser les objectifs et les modalités d’organisation d'un projet, planifier les activités, et évaluer les indicateurs de suivi pour analyser les écarts.",
    documents: [
      {
        path: "/docs/exams/e4/stage_wepa.pdf",
        title: "Stage de première année",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/rapport_stage.pdf",
        title: "Stage de deuxième année",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/marieteam_web.pdf",
        title: "AP MarieTeam Web",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/marieteam_cl.pdf",
        title: "AP Client Lourd",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
    ],
  },
  {
    code: "Compétence 1.5",
    title:
      "Mettre à disposition des utilisateurs un service informatique",
    description:
      "Réaliser les tests d’intégration et d’acceptation d’un service, le déployer et accompagner les utilisateurs dans sa mise en place.",
    documents: [
      {
        path: "/docs/exams/e4/stage_wepa.pdf",
        title: "Stage de première année",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/rapport_stage.pdf",
        title: "Stage de deuxième année",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/installation_glpi.pdf",
        title: "Installation GLPI",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/marieteam_web.pdf",
        title: "AP MarieTeam Web",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/marieteam_cl.pdf",
        title: "AP Client Lourd",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
    ],
  },
  {
    code: "Compétence 1.6",
    title: " Organiser son développement professionnel",
    description:
      "Mettre en place son environnement d’apprentissage personnel, utiliser des outils et stratégies de veille informationnelle, gérer son identité professionnelle et développer son projet professionnel.",
    documents: [
      {
        path: "/docs/exams/e4/rapport_stage.pdf",
        title: "Stage de deuxième année",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/portfolio.pdf",
        title: "Portfolio",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
      {
        path: "/docs/exams/e4/conclusion2.pdf",
        title: "Veille tech",
        description: "",
        variant: "document",
        isExternalLink: true,
      },
    ],
  },
];
