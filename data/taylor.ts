export const description = `
<p class='mb-2'>Jérôme Sarrac cultive l'image d'un universitaire britannique d'ascendance française dans la quarantaine, spécialisé dans la mécanique des fluides et la pollution urbaine. Grand et sec, il a su adapter son style au XXIe siècle, alternant entre des tenues décontractées-chics pour ses cours (pulls en cachemire et pantalons bien coupés de marques italiennes) et des vêtements techniques haut de gamme pour ses activités nocturnes. Son visage anguleux aux traits aristocratiques est marqué par un nez aquilin prononcé et des yeux d'un gris délavé, presque transparents, qui semblent constamment scruter l'invisible.</p>

<p class='mb-2'>Ses cheveux gris fer, coiffés avec une négligence étudiée, et son aisance naturelle lui donnent un air de chercheur branché plutôt que d'universitaire poussiéreux. Son accent britannique prononcé lorsqu'il parle français et son usage exclusif de l'anglais dans ses cours ajoutent à son personnage d'universitaire international, tandis que sa maîtrise surprise du tchèque - héritage de ses années à Prague - suscite parfois la curiosité.</p>

<p class='mb-2'>Petit-fils supposé d'un héros de la Résistance française, il s'est forgé une réputation de chercheur brillant et accessible à l'université. Son absence de maîtrise de l'italien, qu'il justifie par son arrivée récente à Turin et son emploi du temps chargé, l'a conduit à donner tous ses cours en anglais, ce qui convient parfaitement au caractère international de ses séminaires de recherche. Si ses collègues le considèrent comme un original pour ses cours du soir et son obsession de la qualité de l'air qu'il mesure avec des appareils dernier cri, son appartenance au groupe des "Chauves-souris" correspond parfaitement à l'image d'un universitaire moderne qui concilie carrière intellectuelle et sports extrêmes.</p>

<p class='mb-2'>Il habite un loft rénové proche de la Mole Antonelliana, dont la bibliothèque impressionnante côtoie des équipements high-tech et des purificateurs d'air design, créant un espace qui reflète parfaitement son personnage : un intellectuel du XXIe siècle passionné par l'innovation et les sensations fortes.</p>`;

export const timelineEvents = [
  {
    id: "1",
    date: "1886",
    description: "Naissance à Camden, Londres",
  },
  {
    id: "2",
    date: "1904-1908",
    description: "Études à Trinity College, Cambridge",
  },
  {
    id: "3",
    date: "1908-1914",
    description: "Travail au Met Office, début de son obsession pour la pureté de l'air",
  },
  {
    id: "4",
    date: "1915",
    description: "Mariage avec Grace Stephanie Ravenhill",
  },
  {
    id: "5",
    date: "1916",
    description: "Étreinte par Juliet Parr lors d'une mission secrète",
  },
  {
    id: "6",
    date: "1941",
    description: "Mort apparente de Grace pendant le Blitz",
  },
  {
    id: "7",
    date: "1946-1977",
    description: "Période Gottfried Scheiner, recherches sur Golconda",
  },
  {
    id: "8",
    date: "1977",
    description: "Retrouvailles avec Grace, devenue une Salubri",
  },
  {
    id: "9",
    date: "1980",
    description: "Découverte du tarot mystique à Prague",
  },
  {
    id: "2010",
    date: "2010",
    title: "Retour à Londres",
    description: "Retour à Londres après des années d'errance. Début de la surveillance de Merle."
  },
  {
    id: "2015",
    date: "2015",
    title: "Découverte de la Trahison",
    description: "Découverte des activités de Merle et de son implication dans la mort de Grace."
  },
  {
    id: "2020",
    date: "2020",
    title: "Nomination comme Archonte",
    description: "Nommé archonte par la Camarilla, utilisant cette position pour poursuivre ses recherches sur Merle."
  },
  {
    id: "2024",
    date: "2024",
    title: "Installation à Turin",
    description: "Installation à Turin comme professeur d'aérodynamique urbaine contemporaine et conseiller du Prince."
  }
];

export const recentEvents = [];

export const characters = {
  proches: [
    {
      id: "grace",
      name: "Grace Stephanie Ravenhill",
      title: "Épouse et Salubri",
      description: "Experte en santé publique devenue vampire Salubri, elle a guidé Taylor vers la recherche de Golconda avant sa disparition tragique.",
      imagePath: "/images/characters/grace2.webp",
      tags: ["Disparue", "Salubri", "Mentor spirituel"]
    },
    {
      id: "juliet",
      name: "Juliet Parr",
      title: "Sire",
      description: "Ancien Shérif Malkavien de North London, elle a donné l'Étreinte à Taylor durant la Grande Guerre.",
      tags: ["Malkavien", "Mentor", "Shérif"]
    },
    {
      id: "william",
      name: "William Taylor",
      title: "Petit-neveu fidèle",
      description: "Petit-neveu fidèle de Geoffrey Taylor, il dépose régulièrement ses lettres au caveau familial de Camden, ignorant la véritable nature de son grand-oncle.",
      tags: ["mortel", "famille"]
    },
    {
      id: "jessica",
      name: "Jessica Leone",
      title: "Détective privée",
      description: "Détective privée chargée de surveiller Jerome Sarrac, elle entretient avec lui d'étranges dialogues nocturnes qui lui rappellent parfois Grace.",
      imagePath: "/images/characters/jessica.webp",
      tags: ["mortel", "enquêteur"]
    },
    {
      id: "chauvesouris",
      name: "Les Chauves-souris",
      title: "Chasseurs d'orages",
      description: "Groupe de chasseurs d'orages initiés au base jump urbain par Jerome, ils ignorent à quel point leur surnom est approprié.",
      tags: ["mortel", "groupe"]
    }
  ],
  ennemis: [
    {
      id: "merle",
      name: "Merle",
      title: "Infant de Grace",
      description: "Ancien Salubri devenu Sang Clair, responsable de la disparition de Grace.",
      tags: ["Adversaire", "Anarchs", "Diablerie", "Vengance"]
    }
  ],
  allies: [
    {
      id: "korda",
      name: "Vladimir Korda",
      title: "Prince de Prague",
      description: "Toréador et créateur du tarot mystique, ancien allié devenu distant.",
      tags: ["Distant", "Toréador", "Prince", "Artiste"]
    },
    {
      id: "prince_turin",
      name: "Prince de Turin",
      title: "Employeur actuel",
      description: "Un Prince réformateur cherchant à maintenir une forme de justice dans le monde vampirique.",
      tags: ["Allié","Camarilla", "Justice", "Mentor"]
    }
  ]
};

export const caracteristiques = {
  attributs: {
    physiques: {
      force: 2,
      dexterite: 3,
      vigueur: 2
    },
    sociaux: {
      charisme: 1,
      manipulation: 3,
      sangfroid: 3
    },
    mentaux: {
      intelligence: 4,
      astuce: 2,
      resolution: 3
    }
  },
  competences: {
    armesafeu: 1,
    artisanat: 2,
    athletisme: 3,
    conduite: 2,
    furtivite: 1,
    survie: 1,
    etiquette: 2,
    persuasion: 1,
    erudition: 3,
    investigation: 1,
    medecine: 2,
    occultisme: 3,
    politique: 1,
    sciences: 2,
    technologie: 1,
    vigilance: 2
  },
  disciplines: {
    auspex: 3,
    domination: 2,
    occultation: 1
  },
  avantages: {
    langues: 2,
    refuge: 2,
    masque: 2,
    ressources: 2,
    respiration: 1
  },
  handicaps: [
    "Proie Taboue (femme)",
    "Adversaire",
    "Refuge hanté",
    "Suspect Anarchs"
  ]
};

export const predation = `
Taylor pratique la méthode du Marchand de Sable. Il se nourrit essentiellement sur des adolescents masculins, qu'il oblige à venir à lui avant de leur faire oublier l'incident. Cette méthode reflète à la fois son désir de contrôle et sa réticence à chasser activement.`;

export const objectifs = {
  principal: "Combattre la corruption de l'air",
  desire: "Se venger de Merle, l'Infant de Grace"
};

export const sessions = [{
  id: "1",
  title: "Lettre à Grace Loiseau",
  date: "17 janvier 2025",
  severity: "info",
  summary: `Turin, le 17 janvier de l'an 2025
À l'attention de Madame Grace Loiseau,
En sa dernière demeure de Camden.

Mon bel oiseau,

Le foehn, ce vent capricieux des Alpes, descend sur la ville telle une main invisible, transportant dans son étreinte les exhalaisons délétères de la vallée du Pô. Les particules en suspension racontent une histoire troublante - les analyses récentes y ont décelé des traces de cocaïne, d'excréments et de particules fines, témoignage de la corruption moderne qui s'infiltre jusque dans l'air que nous ne respirons plus. Turin demeure, hélas, l'une des métropoles les plus polluées d'Europe, prisonnière de sa géographie et de ses péchés industriels.

Chaque nuit qui passe est un rappel de votre absence. Mes appartements près de la Mole Antonelliana, malgré sa proximité d'hauteurs pleines de promesses et d'une vue sur un patrimoine chargé d'histoire, demeurent vides de votre présence. Je me surprends parfois à parler aux murs, comme nous le faisions durant nos longues nuits d'étude. Et ressasser ces trois années où nous avons pu partager à nouveau, quand vous m'avez rejoint, nos marches folles dans Prague, nos projets de famille. J'ai déserté la voie de Golconde pour des choix plus pragmatiques, mais nos conversations restent prégnantes parmi mes obsessions de détente. 

Je parle de mon lieu, en oubliant les faits propres à défrayer les feuilles de chou. Ce dernier serait hanté ! Les manifestations s'intensifient lorsque mes pensées se tournent vers Merle, votre Infant félon. Les livres traitant de la diablerie tremblent sur leurs étagères.  Leurs pages s'agitent dans un ballet frénétique. Est-ce là votre façon de me guider ? Ou tentez-vous, même dans la mort, de tempérer ma soif de vengeance ? Je perçois ces signes aussi clairement que je sens encore parfois les battements d'un cœur depuis longtemps immobile.

Ici, je suis devenu Jérôme Sarrac, petit-fils supposé d'un héros de la Résistance française. J'ai tissé cette identité pour me fondre parmi les hommes comme nous aimions le faire, Madame. Mes missions de l'époque sont devenues les exploits d'un capitaine du Special Operations Executive dans le maquis des Fraichots. J'ai choisi ce maquis particulier du Sud-Morvan car ses archives ont brûlé en 1944 - un détail qui me permet d'éviter les questions trop précises. Le capitaine Sarrac aurait été parachuté de nuit, comme tant d'autres agents de la section F, pour coordonner les réseaux locaux. Dans cette version de l'histoire, il aurait continué à servir dans l'ombre après la guerre, expliquant ainsi pourquoi si peu de traces subsistent de son passage. Le nom lui-même, je l'ai emprunté à un village abandonné des Cévennes - Sarrac, un lieu où même l'air semble figé dans le temps.

Cette identité française justifie non seulement ma présence à Turin, si proche de la frontière, mais donne aussi un cadre à mes… excentricités. Et mes malheureux dérapages de comportements s'expliquent comme par magie : il suffit de dire que je suis "français", et les têtes hochent avec approbation. Mon accent britannique que les meilleures oreilles peuvent déceler s'explique simplement : une mère anglaise, des études à Londres, l'entrée dans une unité au service de la Libération - une fiction qui n'est qu'un miroir déformé de ma propre histoire.

Je donne à nouveau des cours à des doctorants et étudiants en master - avec un arrangement horaire qui convient parfaitement à ma condition, que j'ai présenté à l'université comme une excentricité de chercheur préférant le calme des heures tardives. J'enseigne ce que j'appelle désormais "l'aérodynamique urbaine contemporaine". J'ai dû adapter mes théories des fluides pour ce siècle pollué. Là où j'étudiais jadis les mouvements purs de l'air, j'analyse maintenant la dispersion des particules fines, la circulation des polluants, l'impact des îlots de chaleur urbains. Ces jeunes chercheurs sont fascinés par mes observations sur les microclimats créés par les gratte-ciels de Turin, ignorant mes théories morales et spirituelles que je garde à travers moi. Je les guide dans leurs travaux sur la modélisation numérique et l'intelligence artificielle appliquée à la météorologie urbaine, parachevant une discipline qui continue de me fasciner.

Dans la salle de séminaire, sous l'éclairage large des salles de cours, je les observe tandis qu'ils présentent leurs recherches. Il y a ce doctorant, Marco, brillant et passionné, dont l'intensité me rappelle douloureusement notre fils avant qu'il ne reçoive l'Étreinte. Une autre, Sophia, dont la rigueur méthodologique fait mon admiration et me rappelle mes jeunes années. Et puis Paolo, toujours en retrait mais dont les intuitions théoriques me font parfois oublier que je suis face à de simples mortels. S'ils rentrent dans ma vie, c'est parce que leur sang coule certains soirs dans ma bouche, sans qu'il ne s'en rendent vraiment compte. J'ai rarement laissé un de mes donneurs me dire non, mais je caresse l'idée d'un partage mutuel de nos esprits qui transcende le bête appétit. 

Je suis venu à Turin à la demande du Prince, et doit m'acquitter plusieurs fois par semaine d'assemblées municipales où je peine à faire émerger des lignes d'amélioration. Beaucoup ne jurent que par la Bête, ou par le confort moderne facilité par leurs pouvoirs hérités. Je m'échine à leur rappeler que si les hommes commencent à se révolter contre les riches, les jeunes vampires peuvent également viser une nouvelle répartition des richesses, plus à leur avantage. Comment pourrais-je agir autrement après ce qu'a fait Merle ? Il est le parangon de la redistribution aveugle, amorale, qui marche sur les ruines fumantes de l'Ancien Monde. Le nom que vous lui aviez donné, évoquant ces oiseaux chanteurs que vous aimiez tant, est devenu une cruelle ironie. Sa trahison n'est pas seulement la fin de notre quête commune, elle est la négation de tout ce en quoi vous croyiez.

Pour tromper la solitude, je m'élance dans le ciel de Turin. Les "Chauves-souris" - c'est ainsi que s'est rebaptisé ce groupe de chasseurs d'orages que j'ai initiés aux plaisirs du base jump urbain - ne se doutent pas à quel point leur sobriquet est approprié. Ils me croient simplement passionné par les phénomènes atmosphériques nocturnes, et leur enthousiasme pour les sauts en wingsuit depuis la Basilique de Superga me permet de maintenir cette illusion d'humanité. Mais, dans ces moments où nous fendons l'air nocturne ensemble, mon corps se souvient. Le fantôme d'un cœur palpite dans ma poitrine, irradiant des schémas corporels qui ne servent plus, sauf à me sentir vivant.

Vous auriez souri, mon bel oiseau, en apprenant que je m’offre les services d'une détective privée, Jessica Leone, pour prévenir les coups bas des vampires qui ne sont pas de mon côté. Je l’avais initialement recrutée à cause de son rythme de vie : elle passe ses journées à cuver l’alcool qu’elle ingurgite au mépris de ses organes. Au début, son travail était professionnel, mais j’ai du lui dire de ne pas me suivre quand je pars dans les ombres. Un soir où je me contentais de lire dans la bibliothèque, elle m’a appelé pour m’invectiver d’ennui. Nous avons alors échangé sur nos vies, sur ma dernière identité. Depuis, nous entretenons d'étranges dialogues téléphoniques où je me surprends à rire comme autrefois. Elle me rappelle parfois votre perspicacité, cette façon que vous aviez de voir au-delà des apparences. Mais ces conversations, aussi réconfortantes soient-elles, ne font que souligner l'immensité de votre absence. Chaque mot échangé avec elle me rappelle que vous seule arriviez à faire taire mes obsessions par la seule force de votre présence.

Cette missive rejoindra les autres par les bons soins de mon petit-neveu William. Il continuera fidèlement sa tâche, m’a-t-il assuré, déposant mes lettres dans le caveau familial de Camden aux premières lueurs de l'aube. Il ignore que la sépulture est vide, tout comme il ignore ma véritable nature. Son dévouement à perpétuer cette correspondance me touche - cette fidélité fait écho à votre bonté naturelle qui s’exprimait sans rien exiger en retour.
Le temps n'atténue en rien la douleur de vous avoir perdue deux fois. D'abord à la tuberculose, puis à la diablerie - comme si le destin s'acharnait à nous séparer. Les nuits se suivent, mais aucune ne vous ramène à moi. Je continue pourtant, porté par la certitude que justice sera faite. Non pas pour la rédemption que vous cherchiez à m'offrir, mon bel oiseau, mais pour que votre sacrifice ne reste pas impuni.

Votre éternel mari. 

*Post-scriptum* : L'air de cette nuit me rappelle celui de notre première rencontre à Trinity College. Peut-être est-ce là un signe que je devrais coucher sur le papier les souvenirs de cette époque lors de ma prochaine missive.`
}];

export const identites = [
  {
    id: "geoffrey",
    periode: "1886-1946",
    nom: "Geoffrey Taylor",
    description: `
      <p>Né dans une famille de la classe moyenne de Camden, Geoffrey Taylor a toujours été fasciné par les sciences atmosphériques. Brillant étudiant à Trinity College, Cambridge, il rejoint le Met Office où son obsession pour la pureté de l'air commence à se développer. Son mariage avec Grace Stephanie Ravenhill en 1915 marque le début d'une période de bonheur, brutalement interrompue par son Étreinte l'année suivante.</p><p>Pendant la Grande Guerre, il utilise ses connaissances en météorologie pour servir la Couronne, tout en s'adaptant à sa nouvelle condition de vampire. Il échange avec son sire et va de nouveau se préparer à combattre les allemands dans les années 80, jusqu’à être envoyé dans la Résistance Française et rencontrer des vampires alliés. La mort de son épouse le fera brutalement quitter la bataille.</p>
    `,
    image: "/images/sections/geoffrey1.jpeg"
  },
  {
    id: "scheiner",
    periode: "1946-2010",
    nom: "Gottfried Scheiner",
    description: `
      <p>Après la seconde guerre mondiale, Taylor adopte l'identité de Gottfried Scheiner, un scientifique autrichien ayant fui le régime nazi. Il se passionne pour le réseau ferroviaire, pour lequel il est ingénieur. Inconsolable de la mort de son épouse, il délaisse les affaires vampiriques et se consacre à étudier l’état de Golconde, qui rejoint ses édudes sur la pureté, mais cette fois-ci dans une perspective plus spirituelle. Il voyage à travers l'Europe, étudiant les textes anciens et discutant avec des vampires plus anciens. C'est durant cette période qu'il développe sa théorie sur la corrélation entre la pureté de l'air et l'élévation spirituelle.</p><p>Cette quête prend un nouveau tournant avec les retrouvailles inattendues avec Grace en 1977, qui lui avoue être une Descendante du clan Salubri, et d’avoir guidé ses recherches. Ils entament une vie commune, et se rendent à Prague, où ils vont mettre la main sur un Tarot mystérieux qui permet d’aider à repousser la Bête. </p>
    `,
    image: "/images/sections/scheiner.webp"
  },
  {
    id: "sarrac",
    periode: "2010-présent",
    nom: "Jerome Sarrac",
    description: `
      <p>Jerome Sarrac se présente comme le petit-fils d'un héros de la Résistance française, qui a étudié en Angleterre avant de devenir agent du Special Operations Executive et d’être parachuté dans les Cévennes. Par cette histoire, il justifie qu’il ne parle pas italien. Le nom "Sarrac" lui-même vient d'un village abandonné des Cévennes, un lieu où, selon lui, "même l'air semble figé dans le temps".</p><p>Professeur d'aérodynamique urbaine contemporaine, il adapte sa fameuse théories des fluides aux problématiques modernes de pollution atmosphérique. Il possède un appartement et une vie presque humaine, même s’il est le bras droit du Prince de la ville et assiste à de nombreuses assemblées politiques vampiriques.</p><p>Il fait également partie des “Chauves-Souris”, un groupe de chasseurs de nuage qui aime également, sous son impulsion, faire du base jump.</p>
    `,
    image: "/images/sections/sarrac.webp"
  }
];

export const quete = [
  {
    id: "obsession",
    titre: "L'Obsession de la Pureté",
    contenu: `
      <p>L'obsession de Taylor pour la pureté de l'air transcende sa condition de vampire. Ce qui a commencé comme une préoccupation scientifique s'est transformé en une quête mystique, puis en une mission de "purification" morale. Sa perception unique des mouvements atmosphériques comme indicateurs de corruption morale influence profondément sa vision du monde vampirique.</p>

      <p>Pour Taylor, la pollution de l'air n'est pas simplement physique, mais spirituelle. Il voit dans les courants atmosphériques des signes de la dégradation morale de la société vampirique. Cette vision, bien que née de sa folie Malkavienne, lui permet paradoxalement de percevoir des vérités cachées dans les intrigues de la Camarilla.</p>

      <p>Sa méthode de purification combine approche scientifique et rituels personnels. Il maintient des systèmes élaborés de filtration d'air dans ses refuges, effectue des mesures atmosphériques régulières, et développe des théories complexes liant qualité de l'air et comportement vampirique.</p>
    `
  },
  {
    id: "methodes",
    titre: "Méthodologie et Outils",
    contenu: `
      <p>Taylor utilise un mélange unique d'outils scientifiques et occultes dans ses investigations :</p>
      <ul>
        <li>Équipement de mesure atmosphérique moderne</li>
        <li>Systèmes de filtration d'air portables</li>
        <li>Journal détaillé des patterns atmosphériques</li>
        <li>Cartes de tarot modifiées pour la divination atmosphérique</li>
        <li>Réseau d'informateurs sensibles aux changements atmosphériques</li>
      </ul>

      <p>Sa méthodologie combine rigueur scientifique et intuition mystique. Il documente méticuleusement ses observations, créant des corrélations complexes entre mouvements d'air, activités vampiriques et corruption morale. Bien que ses conclusions puissent sembler délirantes, ses résultats sont souvent remarquablement précis.</p>

      <p>En tant qu'archonte, il a développé un système de classification des "corruptions atmosphériques" qui, bien qu'incompréhensible pour la plupart, s'est révélé étonnamment efficace pour détecter les complots et les trahisons au sein de la Camarilla.</p>
    `
  }
]; 