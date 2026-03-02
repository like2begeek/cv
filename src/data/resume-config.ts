import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Camille Dillies',
    photoBackEmoji: '🚀',
    title: {
      fr: 'Growth & Transformation Leader | Marketing • Digital • IA | HubSpot Expert',
    },
    subtitle: {
      fr: '15 ans d\'expérience | J\'accélère les entreprises et transforme les organisations grâce au digital & au marketing',
    },
    location: 'Lille, Hauts-de-France, France',
  },
  seo: {
    title: 'Camille Dillies — Growth & Transformation Leader',
    description: 'CV interactif de Camille Dillies, expert en Marketing Digital, IA et Transformation des organisations avec 15 ans d\'expérience.',
  },
  languages: {
    default: 'fr',
    available: ['fr'],
    labels: { fr: 'FR' },
  },
  contact: [
    { type: 'linkedin', label: 'Camille Dillies', href: 'https://www.linkedin.com/in/camilledillies' },
    { type: 'email', label: 'cdilliescreation@gmail.com' },
    { type: 'phone', label: '06 19 75 75 36' },
    { type: 'location', label: 'Lille, France' },
  ],
  skills: [
    {
      title: { fr: 'Growth & Marketing' },
      type: 'badges',
      items: [
        { name: 'HubSpot' },
        { name: 'WordPress' },
        { name: 'SEO' },
        { name: 'Google Ads' },
        { name: 'Google Analytics' },
        { name: 'Data Studio', color: '#4285F4' },
        { name: 'Inbound Marketing', color: '#FF6B35' },
        { name: 'Email Marketing', color: '#E8A838' },
      ],
    },
    {
      title: { fr: 'IA & NoCode' },
      type: 'badges',
      items: [
        { name: 'Make', color: '#6D00CC' },
        { name: 'n8n', color: '#EA4B71' },
        { name: 'ChatGPT', color: '#10A37F' },
        { name: 'Agents IA', color: '#7C3AED' },
        { name: 'Vibe Coding', color: '#0EA5E9' },
      ],
    },
    {
      title: { fr: 'CRM & Systèmes d\'information' },
      type: 'badges',
      items: [
        { name: 'CRM', color: '#FF7A59' },
        { name: 'ATS', color: '#5C6BC0' },
        { name: 'LMS', color: '#26A69A' },
        { name: 'Google Workspace' },
      ],
    },
    {
      title: { fr: 'Méthodologies' },
      type: 'text',
      items: [
        { name: { fr: 'Stratégie digitale, Inbound Marketing, Transformation digitale, Data-driven, A/B Testing' } },
      ],
    },
    {
      title: { fr: 'Leadership & Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Management d\'équipe, Vision stratégique, Formation & pédagogie, RGPD, Éco-conception, B Corp' } },
      ],
    },
    {
      title: { fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { fr: 'Français' }, level: { fr: 'Natif' } },
        { name: { fr: 'Anglais' }, level: { fr: 'Professionnel' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'rh-performances',
      company: { fr: 'RH Performances' },
      role: { fr: 'Responsable Marketing & Digital / Associé' },
      type: { fr: 'CDI' },
      period: { fr: 'Mars 2021 - Présent' },
      description: {
        fr: 'Architecte de la transformation digitale et moteur de croissance du groupe : +634% de trafic qualifié, +1 191% de génération de leads sur 4 ans, 15% du CA annuel généré via stratégie Inbound.',
      },
      techs: ['HubSpot', 'WordPress', 'SEO', 'Google Ads', 'Make', 'n8n', 'Google Analytics'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Membre du CODIR — 3 Business Units (Lille, Paris, Lyon). Groupe certifié B Corporation. Management de l\'équipe Digital/Marketing/Communication et pilotage des prestataires externes.',
        },
        tasks: {
          fr: [
            'Vision & Stratégie : pilotage de la stratégie Marketing/Digital/Data du groupe',
            'Growth Marketing : conception et déploiement de la stratégie Inbound complète (SEO/SEA/SMO/Email/Content)',
            'Expérience Client : responsable CX end-to-end, de l\'acquisition à la fidélisation',
            'HubSpot : architecture complète (CRM/Marketing/Sales/Service), intégrations API, automatisations, dashboarding BI',
            'Innovation IA : déploiement de l\'IA dans les process métiers, création d\'agents et workflows agentiques (n8n, Make)',
            'Système d\'Information : pilotage CRM/ATS/LMS/BI, admin Google Workspace, hébergement/sécurité web',
            'Formateur GenAI : formations, bootcamps, conférences sur l\'IA générative',
            'Numérique Responsable : éco-conception, accessibilité, RGPD, impact carbone, marketing éthique',
          ],
        },
        training: {
          fr: [
            'Certification HubSpot Partner Solution',
            'Certification No Code Make x IA',
          ],
        },
        env: {
          fr: 'HubSpot / WordPress / Make / n8n / Google Ads / SEO / Google Analytics / Data Studio / Google Workspace',
        },
      },
    },
    {
      id: 'silicon-salad',
      company: { fr: 'Silicon Salad' },
      role: { fr: 'Consultant Marketing Digital / Responsable d\'équipe' },
      type: { fr: 'CDI' },
      period: { fr: 'Oct. 2020 - Déc. 2020' },
      description: {
        fr: 'Gestion du portefeuille clients Marketing (B2B et B2C) et encadrement de la BU Marketing.',
      },
      techs: ['SEO', 'Google Ads', 'Email Marketing'],
      details: {
        tasks: {
          fr: [
            'Rédaction des documents stratégiques à destination des clients et prospects',
            'Gestion du portefeuille des clients Marketing (B2B et B2C)',
            'Encadrement de la BU Marketing (Business et équipe)',
          ],
        },
        env: {
          fr: 'Stratégie digitale / SEO / SEA / Email Marketing',
        },
      },
    },
    {
      id: 'nacon',
      company: { fr: 'NACON' },
      role: { fr: 'E-commerce Manager' },
      type: { fr: 'CDI' },
      period: { fr: 'Août 2019 - Avr. 2020' },
      description: {
        fr: 'Pilotage de la stratégie d\'acquisition et de conversion e-commerce pour une marque gaming internationale.',
      },
      techs: ['SEO', 'Google Ads', 'Google Analytics', 'Email Marketing'],
      details: {
        tasks: {
          fr: [
            'Stratégie d\'acquisition : SEO, SEA, Emailing, Display Ads, Social Ads',
            'Stratégie de conversion : UX, A/B Test, Analytics, Data, Landing Page',
            'Animation commerciale : temps forts, offres, stratégie de prix, bundle',
            'Accompagnement dans la mise en place de l\'écosystème technique',
            'Reporting & Monitoring mensuel / Préconisations à court et long terme',
          ],
        },
        env: {
          fr: 'SEO / SEA / Google Analytics / Email Marketing / A/B Testing / Social Ads',
        },
      },
    },
    {
      id: 'ntmy',
      company: { fr: 'NTMY — Netco Group' },
      role: { fr: 'Consultant Marketing Digital → Directeur de Production → Chef de Projet Digital' },
      type: { fr: 'CDI' },
      period: { fr: 'Juil. 2014 - Juil. 2019 (5 ans)' },
      description: {
        fr: 'Parcours complet au sein du groupe Netco : de Chef de Projet Digital à Directeur de Production, puis Consultant Marketing Digital senior.',
      },
      techs: ['SEO', 'Google Ads', 'Google Analytics', 'Data Studio', 'Email Marketing'],
      details: {
        context: {
          fr: 'Agence digitale — progression interne sur 5 ans avec élargissement progressif des responsabilités.',
        },
        tasks: {
          fr: [
            'Consultant Marketing Digital (2017-2019) : audits SEO, campagnes SEA/email, ateliers stratégie digitale, interventions et conférences',
            'Directeur de Production (2015-2017) : management équipe projet, cadrage des projets entrants, optimisation du process de production, contrôle qualité et rentabilité',
            'Chef de Projet Digital (2014-2015) : pilotage projets clients, social media, reporting et conseil stratégie email',
          ],
        },
        env: {
          fr: 'SEO / SEA / Google Analytics / Data Studio / Email Marketing / CRM / WordPress',
        },
      },
    },
    {
      id: 'pimp-my-web',
      company: { fr: 'Pimp My Web' },
      role: { fr: 'Consultant Web Freelance' },
      type: { fr: 'Freelance' },
      period: { fr: 'Déc. 2013 - Mars 2016' },
      description: {
        fr: 'Conseil en stratégie digitale et gestion de projets web pour TPE/PME de la région lilloise.',
      },
      techs: ['WordPress', 'SEO'],
      details: {
        tasks: {
          fr: [
            'Stratégie digitale et gestion de projet freelance pour TPE/PME',
            'Création de sites internet WordPress, webmastering et TMA',
            'Formations et interventions sur la gestion de projet Web, le Marketing Digital et le Social Média',
          ],
        },
        env: {
          fr: 'WordPress / SEO / Social Media / Formation',
        },
      },
    },
    {
      id: 'altavia',
      company: { fr: 'Altavia Lille' },
      role: { fr: 'Chef de Projet Web' },
      type: { fr: 'CDI' },
      period: { fr: 'Nov. 2009 - Juil. 2012' },
      description: {
        fr: 'Pilotage de projets web et campagnes digitales pour des clients grands comptes.',
      },
      techs: ['WordPress', 'Email Marketing'],
      details: {
        tasks: {
          fr: [
            'Pilotage de projets Web : sites internet, campagnes e-mail, social média',
            'Recommandation client (compétitions et clients dédiés)',
            'Community Management (Facebook, Twitter, Youtube, Dailymotion)',
          ],
        },
        env: {
          fr: 'WordPress / Email Marketing / Social Media / Community Management',
        },
      },
    },
  ],
  education: [
    {
      school: { fr: 'EFFICOM Lille' },
      degree: { fr: 'Bac+4 — Chef de Projet Web' },
      period: '2009 - 2010',
    },
    {
      school: { fr: 'ISCOM Lille' },
      degree: { fr: 'Bac+3 — Communication Globale des Entreprises (COMAL)' },
      period: '2005 - 2008',
    },
  ],
  projects: [
    {
      id: 'autoformation-ia',
      title: { fr: 'Auto-formation IA' },
      description: { fr: 'Formation continue en IA générative : lectures, expérimentations, agents autonomes, LLM et outils no-code.' },
      techs: ['ChatGPT', 'Make', 'n8n'],
    },
    {
      id: 'brasserie-du-pave',
      title: { fr: 'Brasserie du Pavé & Marque PVL' },
      description: { fr: 'Accompagnement complet (digital, marketing & communication) du projet de brasserie artisanale et développement de la marque PVL (projet vendu).' },
      techs: ['WordPress', 'Inbound Marketing'],
    },
  ],
  hobbies: [
    {
      title: { fr: 'Jeux Vidéo' },
    },
    {
      title: { fr: 'Tech & IA' },
      details: [
        { fr: 'Veille innovation & actu tech' },
      ],
    },
    {
      title: { fr: 'Cuisine' },
    },
    {
      title: { fr: 'Golf' },
    },
    {
      title: { fr: 'Sport Automobile' },
    },
  ],
  theme: { preset: 'minimal' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      education: { fr: 'FORMATION' },
      projects: { fr: 'PROJETS' },
      hobbies: { fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :' },
      moreTasks: { fr: 'autres missions...' },
      training: { fr: 'Formations :' },
      techEnv: { fr: 'Env. technique :' },
      technologies: { fr: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { fr: 'Changer le thème' },
      downloadPdf: { fr: 'Télécharger le PDF' },
    },
  },
}
