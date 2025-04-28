import {TimelineCardProps} from "@/components/timeline-card";
import {GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";
import {MailIcon} from "lucide-react";

export const siteConfig = {
  name: "ROMAIN Portfolio",
  description: "Product of © 2025 Romain DELANNOY, All rights reserved.",
  profile: {
    name: "Romain DELANNOY",
    position: "Etudiant BTS SIO",
    avatar: "/imgavatar.png",
    description: "Je suis étudiant en BTS SIO (SLAM), depuis 2 ans à Gaston Berger à Lille (59), en deuxième année spécialité SLAM (Solutions logicielles et applications métiers). J'ai développé une passion pour l'informatique depuis que j'ai commencé mes études en BTS SIO. C'est ainsi que j'ai découvert le développement web. En dehors des études, je pratique du Football amateur depuis plus de 15 ans à niveau départemental à Frelinghien dans le Nord.",
    resume: "/docs/Delannoy_Romain_CV_2024-2025.pdf",
  },
  professional_project: "Mon projet professionnel s'inscrit dans une volonté de me spécialiser dans le domaine des sciences des données. Actuellement en BTS SIO, j'ai découvert un intérêt profond pour les données, les statistiques et les mathématiques, des domaines qui me passionnent particulièrement. Mon objectif est d'intégrer un BUT en sciences des données pour approfondir mes connaissances et compétences techniques, afin de pouvoir analyser et exploiter les données de manière pertinente et efficace. Je suis convaincu que cette formation me permettra d'acquérir les outils nécessaires pour devenir un professionnel capable de répondre aux enjeux actuels liés à l'analyse des données dans divers secteurs.",
  veille_technologique: "L'intelligence artificielle (IA) joue un rôle de plus en plus crucial dans le domaine de la santé, révolutionnant la manière dont les diagnostics, les traitements et la personnalisation des soins sont abordés. Grâce à des algorithmes sophistiqués et des modèles d'apprentissage automatique, l'IA permet d'analyser d'énormes quantités de données médicales pour identifier des pathologies, personnaliser les traitements et améliorer la précision des diagnostics.",
}

export type siteConfig = typeof siteConfig;

export const SOCIAL_LINKS = [
  {
    name: "linkedin.com/in/romain-delannoy",
    href: "https://www.linkedin.com/in/romain-delannoy-271702263/",
    icon: LinkedInLogoIcon,
  },
  {
    name: "github.com/Romain",
    href: "https://github.com/Romaindly",
    icon: GitHubLogoIcon,
  },
  {
    name: "romain.dly05@gmail.com",
    href: "mailto:romain.dly05@gmail.com",
    icon: MailIcon,
  },
]

export const EXPERIENCE_CONFIG: TimelineCardProps[] = [
  {
    label: "Stage deuxième année BTS SIO",
    location: "Damartex Group",
    duration: "6 semaines en 2025",
    variant: "experience"
  },
  {
    label: "Stage première année BTS SIO",
    location: "WEPA",
    duration: "7 semaines en 2024",
    variant: "experience"
  }
]

export const EDUCATION_CONFIG: TimelineCardProps[] = [
  {
    label: "BTS SIO option SLAM",
    location: "Lycée Gaston Berger",
    duration: "2023 - Présent",
    variant: "education"
  },
  {
    label: "cycle préparatoire CIR",
    location: "Junia ISEN",
    duration: "2022 - 2023",
    variant: "education"
  }
]
