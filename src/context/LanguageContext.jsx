import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Initialize the Context
const LanguageContext = createContext();

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    activities: 'Activities',
    gallery: 'Gallery',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Union de Jeunesse Famille Congolaise (U.J.F.C)',
    heroSubtitle: 'Building Bridges, Creating Futures, Together We Remember, We Build, We Fight for Justice and Peace - Unity is Strength',
    heroDescription: 'U.J.F.C is a youth organisation of Congolese refugees living in Rwanda. Our goals: 1. Remember the Tutsi killed in Congo 2. Love 3. Unity 4. Love for the RDC 5. Maintain confidentiality where we work.',
    joinUs: 'Join Us',
    learnMore: 'Learn More',
    
    // About Section
    aboutTitle: 'About U.J.F.C',
    aboutDescription: 'Union de Jeunesse Famille Congolaise (U.J.F.C) is a dynamic organisation of Congolese Tutsi refugees in Rwanda, dedicated to empowering young people and fostering community development.',
    mission: 'Our Mission',
    missionText: '1. Remember the Tutsi murdered in Congo 2. Love 3. Unity 4. Love for the RDC 5. Maintain confidentiality where we work (KATSS - Kirehe Adventist Technical Secondary School)',
    vision: 'Our Vision',
    visionText: 'A thriving community where young people are empowered leaders and cultural heritage is preserved. To preserve the memory of our ancestors and build a united future.',
    values: 'Our Values',
    valuesText: 'Unity, Love, Brotherhood, Service, Excellence, and Cultural Pride.',
    
    // History Section
    historyTitle: 'Our History',
    historyDescription: 'The story of how we became refugees in Rwanda',
    historyContent: 'On March 30, 2005, many Tutsi families fled Congo (RDC) due to persecution and genocide. They crossed the border into Rwanda seeking safety and shelter. These refugees settled in different camps and locations in Rwanda, particularly in Kigali and surrounding areas. Among them were young people who formed U.J.F.C to maintain their unity, culture, and to never forget their history.',
    arrivalDate: 'March 30, 2005',
    arrivalTitle: 'The Day We Arrived',
    
    // Family Structure
    familyTitle: 'Our Family Structure',
    familySubtitle: 'Three pillars of our organisation',
    family1Title: 'Ubumwe (Unity)',
    family1Desc: 'Unity is the foundation of our organisation. We believe that together we are stronger. Ubumwe brings together all Congolese youth in Rwanda to support each other and work towards common goals.',
    family2Title: 'Urumuri (Light)',
    family2Desc: 'Urumuri represents the light of hope that guides us through darkness. We are committed to illuminating the path for our youth through education, guidance, and positive role modeling.',
    family3Title: 'Duhozanye (Let Us Help Each Other)',
    family3Desc: 'Duhozanye embodies the spirit of mutual support and solidarity. We help each other in times of need, share resources, and work together for the common good of our community.',
    
    // Founders & Leadership
    foundersTitle: 'Our Founders',
    foundersDescription: 'The visionary leaders who started this journey',
    foundersContent: 'U.J.F.C was founded by Congolese refugees who arrived in Rwanda on March 30, 2005. Our founding parents are Daddy and Mamy (Grapere Twayigize Sadick and Mushimiyimana Nadia), who established this organisation to keep our community united and preserve our cultural heritage.',
    daddy: 'Grand father',
    mamy: 'Grand mother',
    foundersRole: 'Founder',
    ourTeam: 'Our Team',
    leadershipTeam: 'Leadership Team',
    leadershipDesc: 'Meet the dedicated leaders guiding our organization towards excellence.',
    president: 'President',
    vicePresident: 'Vice President',
    
    // Values Detail
    valuesUnity: 'Unity',
    valuesUnityDesc: 'We believe in the power of togetherness and collaboration.',
    valuesLove: 'Love',
    valuesLoveDesc: 'Love is at the core of everything we do.',
    valuesBrotherhood: 'Brotherhood',
    valuesBrotherhoodDesc: 'We support each other as one family.',
    valuesService: 'Service',
    valuesServiceDesc: 'We are committed to serving our community selflessly.',
    
    // Stats
    activeMembers: 'Active Members',
    programs: 'Programs',
    events: 'Events',
    years: 'Years',

    // Location
    locationTitle: 'Where We Work',
    locationDesc: 'Our organisation is based at Kirehe Adventist Technical Secondary School and serves Congolese youth from different camps, primarily Mahama Camp in Kirehe District.',
    location1: 'KATSS – Kirehe Adventist Technical Secondary School',
    location2: 'Kirehe District',
    location3: 'Mahama Camp and other refugee settlements',
    
    // Refugee Journey Section
    journeyTitle: 'From the RDC to Rwanda: Our Journey',
    journeySubtitle: 'Understanding the refugee experience and the birth of UJFC',
    rdcBackground: 'The RDC Background',
    rdcBackgroundDesc: 'The Democratic Republic of Congo (RDC) is a resource-rich nation in Central Africa with a population of over 100 million people. However, decades of political instability, armed conflicts, and economic challenges have forced thousands of Congolese citizens to seek refuge in neighboring countries.',
    conflictsDesc: 'The conflicts in Eastern RDC have displaced millions of people, with families fleeing violence, persecution, and lack of basic services. Rwanda, with its relative stability and humanitarian commitment, has welcomed many Congolese refugees.',
    whyRwanda: 'Why We Came to Rwanda',
    whyRwandaDesc: 'Over 120,000 Congolese refugees have found sanctuary in Rwanda, including in Kigali, Gisenyi, and other regions. Many came fleeing armed conflict, ethnic tensions, and humanitarian crises that have devastated Eastern RDC since the 1990s.',
    gratefulDescription: 'While grateful for Rwanda\'s hospitality, these refugees face challenges including limited employment opportunities, housing insecurity, language barriers, and the struggle to maintain their cultural identity in a new homeland.',
    birthUJFC: 'The Birth of UJFC',
    birthUJFCDesc: 'In response to the needs of the Congolese youth community in Rwanda, U.J.F.C (Union de Jeunesse Famille Congolaise) was founded over 20 years ago. It emerged from a simple yet powerful vision: to unite young Congolese people, preserve their heritage, and create pathways to success.',
    ujfcBridge: 'UJFC serves as a bridge between the past and future—honoring our roots while building new opportunities for the next generation of Congolese leaders.',
    missionAction: 'Our Mission in Action',
    missionActionDesc: 'UJFC works tirelessly to support Congolese refugees and diaspora by providing educational scholarships, cultural programs, leadership training, and community services. We remember those who suffered in the RDC while building hope for tomorrow.',
    powerBelief: 'We believe in the power of unity, love, and brotherhood to transform lives and communities, regardless of borders or circumstances.',
    challengesSolutions: 'Challenges & Solutions',
    challengesDesc: 'How UJFC Empowers Congolese Refugees and Youth',
    challengesFaced: 'Challenges Faced',
    ujfcSolutions: 'UJFC Solutions',
    economicHardship: 'Economic Hardship: Limited job opportunities and discrimination in the job market',
    educationAccess: 'Education Access: High cost of education limiting opportunities for youth',
    culturalPreservation: 'Cultural Preservation: Risk of losing Congolese heritage and identity',
    mentalHealth: 'Mental Health: Trauma from conflict and displacement',
    socialIntegration: 'Social Integration: Language barriers and difficulty connecting with host communities',
    scholarships: 'Scholarships & Education: Providing financial aid to deserving students',
    leadershipTraining: 'Leadership Training: Developing skills for personal and professional growth',
    culturalEvents: 'Cultural Events: Celebrating Congolese heritage through festivals and gatherings',
    communitySupport: 'Community Support: Peer mentorship and psychological support',
    networking: 'Networking: Creating connections for employment and collaboration',
    commitment: 'Our Commitment to You',
    commitmentDesc: 'We are more than just an organization. We are a family united by our shared heritage, our memories of the Democratic Republic of Congo, and our commitment to building a better future for Congolese youth and refugees in Rwanda.',
    remember: 'Remember',
    rememberDesc: 'We honor the memory of those who suffered in the RDC and the journey of those who sought refuge',
    connect: 'Connect',
    connectDesc: 'We build bridges between Congolese communities, preserving culture while embracing new opportunities',
    empower: 'Empower',
    empowerDesc: 'We equip our youth with education, skills, and mentorship to become leaders in their communities',
    
    // Language Switcher
    switchTo: 'Switch to',
    kinyarwanda: 'Kinyarwanda',
    english: 'English',
    french: 'French',
  },
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À propos',
    activities: 'Activités',
    gallery: 'Galerie',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Union de Jeunesse Famille Congolaise (U.J.F.C)',
    heroSubtitle: 'Bâtir des Ponts, Créer des Avenirs, Ensemble Nous Nous Souvenons, Nous Construisons, Nous Luttons pour la Justice et la Paix - L\'union Fait la Force',
    heroDescription: 'L\'U.J.F.C est une organisation de jeunesse des réfugiés congolais vivant au Rwanda. Nos objectifs : 1. Se souvenir des Tutsi assassinés au Congo 2. L\'Amour 3. L\'Unité 4. Aimer la RDC 5. Garder la confidentialité là où nous travaillons.',
    joinUs: 'Rejoignez-nous',
    learnMore: 'En savoir plus',
    
    // About Section
    aboutTitle: 'À propos de l\'U.J.F.C',
    aboutDescription: 'L\'Union de Jeunesse Famille Congolaise (U.J.F.C) est une organisation dynamique des réfugiés tutsi congolais au Rwanda, dédiée à l\'autonomisation des jeunes et au développement communautaire.',
    mission: 'Notre Mission',
    missionText: '1. Se souvenir des Tutsi assassinés au Congo 2. L\'Amour 3. L\'Unité 4. Aimer la RDC 5. Maintenir la confidentialité là où nous travaillons (KATSS - École Technique Secondaire Adventiste de Kirehe)',
    vision: 'Notre Vision',
    visionText: 'Une communauté florissante où les jeunes sont des leaders autonomes et le patrimoine culturel est préservé. Préserver la mémoire de nos ancêtres et construire un avenir uni.',
    values: 'Nos Valeurs',
    valuesText: 'Unité, Amour, Fraternité, Service, Excellence et Fierté Culturelle.',
    
    // History Section
    historyTitle: 'Notre Histoire',
    historyDescription: 'L\'histoire de comment nous sommes devenus réfugiés au Rwanda',
    historyContent: 'Le 30 mars 2005, de nombreuses familles tutsi ont fui le Congo (RDC) en raison des persécutions et du génocide. Elles ont traversé la frontière pour chercher sécurité et abri au Rwanda. Ces réfugiés se sont installés dans différents camps et localités du Rwanda, particulièrement à Kigali et ses environs. Parmi eux, des jeunes ont formé l\'U.J.F.C pour maintenir leur unité, leur culture et ne jamais oublier leur histoire.',
    arrivalDate: '30 mars 2005',
    arrivalTitle: 'Le jour de notre arrivée',
    
    // Family Structure
    familyTitle: 'Notre Structure Familiale',
    familySubtitle: 'Trois piliers de notre organisation',
    family1Title: 'Ubumwe (Unité)',
    family1Desc: 'L\'unité est le fondement de notre organisation. Nous croyons qu\'ensemble nous sommes plus forts. Ubumwe rassemble tous les jeunes congolais au Rwanda pour se soutenir mutuellement et travailler vers des objectifs communs.',
    family2Title: 'Urumuri (Lumière)',
    family2Desc: 'Urumuri représente la lumière de l\'espoir qui nous guide dans l\'obscurité. Nous nous engageons à éclairer le chemin de notre jeunesse par l\'éducation, l\'orientation et un modèle positif.',
    family3Title: 'Duhozanye (Entraidons-nous)',
    family3Desc: 'Duhozanye incarne l\'esprit d\'entraide et de solidarité. Nous nous aidons dans les moments difficiles, partageons les ressources et travaillons ensemble pour le bien commun de notre communauté.',
    
    // Founders & Leadership
    foundersTitle: 'Nos Fondateurs',
    foundersDescription: 'Les leaders visionnaires qui ont commencé ce parcours',
    foundersContent: 'L\'U.J.F.C a été fondé par des réfugiés congolais arrivés au Rwanda le 30 mars 2005. Nos parents fondateurs sont Daddy et Mamy (Grapere Twayigize Sadick et Mushimiyimana Nadia), qui ont créé cette organisation pour maintenir notre communauté unie et préserver notre patrimoine culturel.',
    daddy: 'Grand père',
    mamy: 'Grand mère',
    foundersRole: 'Parent Fondateur',
    ourTeam: 'Notre Équipe',
    leadershipTeam: 'Équipe de Direction',
    leadershipDesc: 'Rencontrez les leaders dévoués qui guident notre organisation vers l\'excellence.',
    president: 'Président',
    vicePresident: 'Vice-Président',
    
    // Values Detail
    valuesUnity: 'Unité',
    valuesUnityDesc: 'Nous croyons au pouvoir de la solidarité et de la collaboration.',
    valuesLove: 'Amour',
    valuesLoveDesc: "L'amour est au cœur de tout ce que nous faisons.",
    valuesBrotherhood: 'Fraternité',
    valuesBrotherhoodDesc: 'Nous nous soutenons comme une seule famille.',
    valuesService: 'Service',
    valuesServiceDesc: 'Nous nous engageons à servir notre communauté sans relâche.',
    
    // Stats
    activeMembers: 'Membres Actifs',
    programs: 'Programmes',
    events: 'Événements',
    years: 'Années',

    // Location
    locationTitle: 'Où nous travaillons',
    locationDesc: 'Notre organisation est basée à l\'École Technique Secondaire Adventiste de Kirehe et accueille des jeunes Congolais issus de différents camps, principalement du camp de Mahama dans le district de Kirehe.',
    location1: 'KATSS – École Technique Secondaire Adventiste de Kirehe',
    location2: 'District de Kirehe',
    location3: 'Camp de Mahama et autres camps de réfugiés',
    
    // Refugee Journey Section
    journeyTitle: 'De la RDC au Rwanda: Notre Voyage',
    journeySubtitle: 'Comprendre l\'expérience des réfugiés et la naissance de l\'UJFC',
    rdcBackground: 'Contexte de la RDC',
    rdcBackgroundDesc: 'La République Démocratique du Congo (RDC) est une nation riche en ressources en Afrique centrale avec une population de plus de 100 millions d\'habitants. Cependant, des décennies d\'instabilité politique, de conflits armés et de défis économiques ont forcé des milliers de citoyens congolais à chercher refuge dans les pays voisins.',
    conflictsDesc: 'Les conflits en RDC orientale ont déplacé des millions de personnes, avec des familles fuyant la violence, les persécutions et le manque de services de base. Le Rwanda, avec sa relative stabilité et son engagement humanitaire, a accueilli de nombreux réfugiés congolais.',
    whyRwanda: 'Pourquoi Nous Sommes Venus au Rwanda',
    whyRwandaDesc: 'Plus de 120 000 réfugiés congolais ont trouvé refuge au Rwanda, y compris à Kigali, Gisenyi et dans d\'autres régions. Beaucoup ont fui les conflits armés, les tensions ethniques et les crises humanitaires qui ont ravagé la RDC orientale depuis les années 1990.',
    gratefulDescription: 'Bien que reconnaissants de l\'hospitalité du Rwanda, ces réfugiés font face à des défis, notamment les opportunités d\'emploi limitées, l\'insécurité du logement, les barrières linguistiques et la lutte pour maintenir leur identité culturelle dans une nouvelle patrie.',
    birthUJFC: 'La Naissance de l\'UJFC',
    birthUJFCDesc: 'En réponse aux besoins de la communauté jeunesse congolaise au Rwanda, l\'U.J.F.C (Union de Jeunesse Famille Congolaise) a été fondée il y a plus de 20 ans. Elle est née d\'une vision simple mais puissante: unir les jeunes Congolais, préserver leur patrimoine et créer des chemins vers le succès.',
    ujfcBridge: 'L\'UJFC sert de pont entre le passé et l\'avenir—honorer nos racines tout en construisant de nouvelles opportunités pour la prochaine génération de leaders congolais.',
    missionAction: 'Notre Mission en Action',
    missionActionDesc: 'L\'UJFC travaille inlassablement pour soutenir les réfugiés et la diaspora congolaise en fournissant des bourses d\'études, des programmes culturels, une formation au leadership et des services communautaires. Nous nous souvenons de ceux qui ont souffert en RDC tout en construisant l\'espoir pour demain.',
    powerBelief: 'Nous croyons au pouvoir de l\'unité, de l\'amour et de la fraternité pour transformer les vies et les communautés, indépendamment des frontières ou des circonstances.',
    challengesSolutions: 'Défis & Solutions',
    challengesDesc: 'Comment l\'UJFC Responsabilise les Réfugiés et Jeunes Congolais',
    challengesFaced: 'Défis Affrontés',
    ujfcSolutions: 'Solutions de l\'UJFC',
    economicHardship: 'Difficultés Économiques: Opportunités d\'emploi limitées et discrimination sur le marché du travail',
    educationAccess: 'Accès à l\'Éducation: Coût élevé de l\'éducation limitant les opportunités pour les jeunes',
    culturalPreservation: 'Préservation Culturelle: Risque de perdre le patrimoine et l\'identité congolais',
    mentalHealth: 'Santé Mentale: Traumatisme des conflits et du déplacement',
    socialIntegration: 'Intégration Sociale: Barrières linguistiques et difficultés à se connecter avec les communautés d\'accueil',
    scholarships: 'Bourses et Éducation: Fournir une aide financière aux étudiants méritants',
    leadershipTraining: 'Formation au Leadership: Développer les compétences pour la croissance personnelle et professionnelle',
    culturalEvents: 'Événements Culturels: Célébrer le patrimoine congolais à travers des festivals et des rassemblements',
    communitySupport: 'Soutien Communautaire: Mentorat par les pairs et soutien psychologique',
    networking: 'Réseautage: Créer des connexions pour l\'emploi et la collaboration',
    commitment: 'Notre Engagement Envers Vous',
    commitmentDesc: 'Nous sommes plus qu\'une simple organisation. Nous sommes une famille unie par notre patrimoine partagé, nos souvenirs de la République Démocratique du Congo, et notre engagement à construire un meilleur avenir pour la jeunesse congolaise et les réfugiés au Rwanda.',
    remember: 'Se Souvenir',
    rememberDesc: 'Nous honorons la mémoire de ceux qui ont souffert en RDC et le voyage de ceux qui ont cherché refuge',
    connect: 'Se Connecter',
    connectDesc: 'Nous construisons des ponts entre les communautés congolaises, préservant la culture tout en embrassant de nouvelles opportunités',
    empower: 'Responsabiliser',
    empowerDesc: 'Nous équipons notre jeunesse avec l\'éducation, les compétences et le mentorat pour devenir des leaders dans leurs communautés',
    
    // Language Switcher
    switchTo: 'Passer à',
    kinyarwanda: 'Kinyarwanda',
    english: 'Anglais',
    french: 'Français',
  },
  rw: {
    // Navigation
    home: 'Ahabanza',
    about: 'Abo Turibo',
    activities: 'Ibikorwa',
    gallery: 'Amashusho',
    contact: 'Twandikire',
    
    // Hero Section
    heroTitle: 'Union de Jeunesse Famille Congolaise (U.J.F.C)',
    heroSubtitle: 'Kwubaka ibiraro, Gushyiraho ejo hazaza, Twese hamwe twibuka, twubaka, duharanira ubutabera n\'amahoro – Ubumwe ni imbaraga',
    heroDescription: 'U.J.F.C ni urubyiruko rw\'Abanyekongo bacumbitse mu Rwanda. Intego zacu: 1. Kwibuka Abatutsi bishwe muri Congo 2. Urukundo 3. Ubumwe 4. Gukunda Repubulika Iharanira Demokarasi ya Congo (RDC) 5. Kubika ibanga aho dukorera.',
    joinUs: 'Duhurire',
    learnMore: 'Menya Byinshi',
    
    // About Section
    aboutTitle: 'Abo Turibo',
    aboutDescription: 'Union de Jeunesse Famille Congolaise (U.J.F.C) ni ihuriro ry\'urubyiruko rw\'Abanyekongo b\'Abatutsi batuye mu Rwanda, rifite intego yo guha imbaraga urubyiruko no guteza imbere imibereho myiza yabo.',
    mission: 'Intego Yacu',
    missionText: '1. Kwibuka Abatutsi bishwe muri Congo 2. Urukundo 3. Ubumwe 4. Gukunda RDC 5. Kubika ibanga aho dukorera (KATSS - Ishuri ry\'imyuga rya Adiventiste i Kirehe)',
    vision: 'Icyerekezo Cyacu',
    visionText: 'Umuryango uteje imbere urubyiruko rw\'indashyikirwa kandi umuco wacu ugakomeza kurindwa. Kwibuka abakurambere bacu no kubaka ejo hazaza hamwe.',
    values: 'Indangagaciro Zacu',
    valuesText: 'Ubumwe, Urukundo, Ubuvandimwe, Ubwitange, Indashyikirwa, n\'Ishema ry\'Umuco.',
    
    // History Section
    historyTitle: 'Amateka Yacu',
    historyDescription: 'Inkuru y\'ukuntu twahindutse abacumbitse mu Rwanda',
    historyContent: 'Tariki ya 30 Werurwe 2005, imiryango myinshi y\'Abatutsi yarahunze Congo (RDC) kubera ituza n\'ibikorwa bya jenoside. Bambutse umupaka binjira mu Rwanda bashaka umutekano n\'ubuhungiro. Abo bacumbitse batuye mu nkambi no mu bice bitandukanye mu Rwanda, cyane cyane i Kigali no mu nkengero zayo. Muri bo harimo urubyiruko rwashinze U.J.F.C kugira ngo bakomeze ubumwe bwabo, umuco wabo, kandi batibagirwa amateka yabo.',
    arrivalDate: '30 Werurwe 2005',
    arrivalTitle: 'Umunsi Twahageze',
    
    // Family Structure
    familyTitle: 'Imiterere y\'Umuryango Wacu',
    familySubtitle: 'Inkingi eshatu z\'umuryango wacu',
    family1Title: 'Ubumwe',
    family1Desc: 'Ubumwe ni ryo shingiro ry\'umuryango wacu. Twizera ko hamwe dukomera. Ubumwe buhuriza hamwe urubyiruko rwose rw\'Abanyekongo mu Rwanda kugira ngo bafashanye kandi bagere ku ntego rusange.',
    family2Title: 'Urumuri',
    family2Desc: 'Urumuri rugereranya urumuri rw\'ibyiringiro rutuyobora mu mwijima. Twiyemeje kumurikira urubyiruko inzira binyuze mu burezi, inama n\'intangarugero nziza.',
    family3Title: 'Duhozanye',
    family3Desc: 'Duhozanye ni umwuka wo gufashanya no gufatanya. Dufashanya mu bihe bikomeye, tugasangira ibikoresho, kandi tugakorera hamwe inyungu rusange z\'umuryango wacu.',
    
    // Founders & Leadership
    foundersTitle: 'Abashinze U.J.F.C',
    foundersDescription: 'Abayobozi b\'ibyerekezo batangije uru rugendo',
    foundersContent: 'U.J.F.C yashinzwe n\'Abanyekongo bacumbitse mu Rwanda bagezeyo tariki ya 30 Werurwe 2005. Ababyeyi bacu bashingiye ni Daddy na Mamy (Grapere Twayigize Sadick na Mushimiyimana Nadia), bashinze uyu muryango kugira ngo bakomeze ubumwe bw\'umuryango wacu kandi barinde umuco wacu.',
    daddy: 'Grand pere',
    mamy: 'Grand mamy',
    foundersRole: 'Umubyeyi washizeho umuryango',
    ourTeam: 'Itsinda Rikuru',
    leadershipTeam: 'Ubuyobozi',
    leadershipDesc: 'Menya abayobozi bitange bayobora urugaga rwacu.',
    president: 'Perezida',
    vicePresident: 'Visi Perezida',
    
    // Values Detail
    valuesUnity: 'Ubumwe',
    valuesUnityDesc: 'Twizera imbaraga z\'ubumwe n\'ubufatanye.',
    valuesLove: 'Urukundo',
    valuesLoveDesc: 'Urukundo ni rwo shingiro ry\'ibyo dukora byose.',
    valuesBrotherhood: 'Ubuvandimwe',
    valuesBrotherhoodDesc: 'Dufashanya nk\'umuryango umwe.',
    valuesService: 'Ubwitange',
    valuesServiceDesc: 'Twiyemeje gukorera umuryango wacu tutizigama.',
    
    // Stats
    activeMembers: 'Abanyamuryango',
    programs: 'Gahunda',
    events: 'Ibirori',
    years: 'Imyaka',

    // Location
    locationTitle: 'Aho Dukorera',
    locationDesc: 'Uyu muryango ufite icyicaro mu Ishuri ry\'imyuga rya Adiventiste i Kirehe, kandi ugizwe n\'urubyiruko rw\'abana b\'impunzi za Banyekongo bava mu nkambi zitandukanye, cyane cyane inkambi ya Mahama mu Karere ka Kirehe.',
    location1: 'KATSS – Ishuri ry\'imyuga rya Adiventiste i Kirehe',
    location2: 'Akarere ka Kirehe',
    location3: 'Inkambi ya Mahama n\'izindi nkambi z\'abacumbitse',
    
    // Refugee Journey Section
    journeyTitle: 'Kuva muri RDC kugera mu Rwanda: Uru Rugendo Rwacu',
    journeySubtitle: 'Gusobanukiriza ubwoko bw\'abacumbitse n\'amavuko ya UJFC',
    rdcBackground: 'Inzira y\'RDC',
    rdcBackgroundDesc: 'Repubulika Iharanira Demokarasi ya Congo (RDC) ni igihugu cyifuzo ry\'ubwenge mu Afrika y\'Iburengerazuba bifite abamegobwa barenza miriyoni 100. Ariko, imyaka myinshi y\'amousyi, intambwe z\'inzira n\'ubupfu bwageneraga bagenze ku ntambwe y\'abanyekongo benshi gusakira mu mahiga atandukanye.',
    conflictsDesc: 'Intambwe z\'inzira mu mahinga y\'i RDC yahezeyo abamegobwa miriyoni. Imiryango yatakira ubugwere, ituza, n\'ubusa bw\'amakuru y\'ubuzima. Rwanda, hamwe na kimwe n\'amagezi yayo kandi ubwitange bwayo, wakiriye abacumbitse benshi b\'Abanyekongo.',
    whyRwanda: 'Ni Kuki Twaje mu Rwanda',
    whyRwandaDesc: 'Abacumbitse 120,000 benshi b\'Abanyekongo basanze inzira ya kahoro mu Rwanda, kugira n\'i Kigali, Gisenyi n\'ibindi bice. Benshi baratakira intambwe z\'inzira, ituza ry\'aboko, n\'ubupfu bwageneraga bwibazeyo RDC y\'iburasirazuba kuva mu 1990s.',
    gratefulDescription: 'Nubwo dushoboye kunanga Uburundi bw\'Urwanda, abo bacumbitse bongereza ibibazo by\'amakazi, urukundo rw\'inzu, amangiza n\'ubugwere bwo kubika umuco wacu mu nzira nshya.',
    birthUJFC: 'Amavuko ya UJFC',
    birthUJFCDesc: 'Guhinduka ku ntego z\'urubyiruko rw\'Abanyekongo mu Rwanda, U.J.F.C (Union de Jeunesse Famille Congolaise) yashizwe mu mahoro 20 ishize. Yavuye mu mahoro ashingizwa n\'ishema ry\'iterabwoba: guhurira urubyiruko rw\'Abanyekongo, gukomeza umuco wabo, no gushyiraho inzira z\'ibikorwa nziza.',
    ujfcBridge: 'UJFC ni ikirango n\'igereza n\'ejo hazaza—kunanga imizi yabo habwambukirizwa kandi kubaka inzira nshya zo mu byerekezo b\'abayobozi b\'ejo hazaza b\'Abanyekongo.',
    missionAction: 'Intego Yacu mu Bikorwa',
    missionActionDesc: 'UJFC ikorera mu mahoro igitiye inzira y\'abacumbitse n\'abantu b\'Abanyekongo n\'inanira ibisomero, gahunda z\'umuco, gahunda y\'ubuyobozi, n\'ubwitange bw\'umuryango. Turibuka abo bwinze muri RDC habwambukirizwa kandi tubaka ibyiringiro n\'ejo hazaza.',
    powerBelief: 'Twizera ku mbaraga z\'ubumwe, urukundo, n\'ubuvandimwe bikwata ikigira c\'imibereho n\'imiryango, ntagira umusaruro w\'umupaka cyangwa ibyabaye.',
    challengesSolutions: 'Ibibazo & Ibisubizo',
    challengesDesc: 'Ukuntu UJFC Iha Imbaraga Abacumbitse n\'Urubyiruko rw\'Abanyekongo',
    challengesFaced: 'Ibibazo Bigaruka',
    ujfcSolutions: 'Ibisubizo by\'UJFC',
    economicHardship: 'Ubupfu bwikonomiki: Amakazi macye n\'ubugwere ku isoko ry\'amakazi',
    educationAccess: 'Ikirango cy\'Ubwigenge: Igiciro cy\'ubwigenge kibangira inzira z\'urubyiruko',
    culturalPreservation: 'Kubika Umuco: Ubugwere bwo kuwonda umuco n\'umuryango w\'Abanyekongo',
    mentalHealth: 'Ubuzima bw\'ubwenge: Ubwoba n\'ubupfu bwavuka mu ntambwe',
    socialIntegration: 'Guhurira n\'umuryango: Amangiza mu mitwe n\'ubugwere bwo guhurira na bantu',
    scholarships: 'Imfashanyigisho n\'Ubwigenge: Kwishyura imfashanyo ku bantu bagira amahoro y\'ubwigenge',
    leadershipTraining: 'Gahunda y\'Ubuyobozi: Kwikira uko gukorera kubantu n\'ubwigenge',
    culturalEvents: 'Ibirori by\'Umuco: Gushimira umuco w\'Abanyekongo mu birori n\'ibirando',
    communitySupport: 'Ubwitange bw\'Umuryango: Inama kwa gipfumire n\'ubwitange bw\'ubwenge',
    networking: 'Guhurira n\'abandi: Kubaka ikirango cy\'abakazi n\'ubufatanye',
    commitment: 'Icyemezo Cyacu Kwa Wewe',
    commitmentDesc: 'Nta munzira gusa. Turi umuryango wahuje n\'umuco wacu uruhande rwigice, kuribuka RDC, n\'icyemezo cyacu cyagushyira ahandi mu nzira nziza yo mu byerekezo b\'urubyiruko rw\'Abanyekongo n\'abacumbitse mu Rwanda.',
    remember: 'Kuribuka',
    rememberDesc: 'Tunanyuma abo bwinze muri RDC n\'uru rugendo rw\'abo batacibye inzira y\'abacumbitse',
    connect: 'Guhurira',
    connectDesc: 'Tubaka ikirango c\'imiryango y\'Abanyekongo, tukomeze umuco habwambukirizwa kandi tubikiriza inzira nshya',
    empower: 'Kwagira Imbaraga',
    empowerDesc: 'Twanahuwi urubyiruko rw\'ubwigenge, uko gukorera n\'inama kugira ngo babe abayobozi mu muryango wacu',
    
    // Language Switcher
    switchTo: 'Hindura mo',
    kinyarwanda: 'Kinyarwanda',
    english: 'Icyongereza',
    french: 'Igifaransa',
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('ujfc-language');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('ujfc-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    const languages = ['en', 'fr', 'rw'];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  const setLang = (lang) => {
    if (['en', 'fr', 'rw'].includes(lang)) {
      setLanguage(lang);
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}