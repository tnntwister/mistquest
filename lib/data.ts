export type Session = {
  id: string;
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  content: string;
};

export type Breve = {
  id: string;
  title: string;
  gameWeek: number;
  publishDate: string;
  summary: string;
  content: string;
};

export const sessions: Session[] = [
  {
    id: "session-2",
    title: "Session 2 : La Chasse aux Artefacts",
    date: "15/01/2024",
    summary: "Le groupe s'est lancé dans une quête périlleuse pour récupérer un ancien artefact magique...",
    imageUrl: "/placeholder.svg?height=150&width=150",
    content: `
      <h2>Résumé de la session</h2>
      <p>Dans cette session palpitante, notre groupe de mages s'est lancé dans une quête périlleuse pour récupérer un ancien artefact magique. L'aventure les a menés dans les profondeurs d'un temple oublié, rempli de pièges mortels et de gardiens mystiques.</p>
      <h3>Points clés de la session</h3>
      <ul>
        <li>Découverte d'une carte cryptique menant au temple oublié</li>
        <li>Confrontation avec une secte rivale également à la recherche de l'artefact</li>
        <li>Résolution d'énigmes anciennes pour progresser dans le temple</li>
        <li>Combat épique contre le gardien de l'artefact, une créature mythique oubliée</li>
        <li>Récupération de l'artefact et premières tentatives pour comprendre ses pouvoirs</li>
      </ul>
      <h3>Développements des personnages</h3>
      <p>Au cours de cette session, chaque membre du groupe a eu l'occasion de briller :</p>
      <ul>
        <li><strong>Personnage 1</strong> a démontré une affinité inattendue avec les énergies du temple, débloquant un nouveau pouvoir.</li>
        <li><strong>Personnage 2</strong> a utilisé ses connaissances en histoire pour déchiffrer les inscriptions cruciales.</li>
        <li><strong>Personnage 3</strong> a brillamment mené les négociations avec la secte rivale, évitant un conflit sanglant.</li>
      </ul>
      <h3>Conséquences et questions ouvertes</h3>
      <p>La récupération de l'artefact soulève de nombreuses questions :</p>
      <ul>
        <li>Quels sont les véritables pouvoirs de cet artefact ?</li>
        <li>Comment son utilisation affectera-t-elle l'équilibre magique de la région ?</li>
        <li>La secte rivale cherchera-t-elle à se venger ou à s'allier avec le groupe ?</li>
      </ul>
      <p>La prochaine session promet d'être tout aussi excitante alors que le groupe tente de percer les mystères de leur nouvelle acquisition tout en gérant les répercussions de leurs actions.</p>
    `,
  },
  {
    id: "session-1",
    title: "Session 1 : L'Éveil",
    date: "01/01/2024",
    summary: "Nos héros se sont rencontrés pour la première fois et ont découvert leurs pouvoirs magiques...",
    imageUrl: "/placeholder.svg?height=150&width=150",
    content: `
      <h2>Résumé de la session</h2>
      <p>Dans cette première session captivante, nos héros se sont rencontrés pour la première fois et ont découvert leurs pouvoirs magiques. L'histoire a débuté dans une ville moderne, où des événements étranges ont commencé à se produire, attirant l'attention de nos protagonistes.</p>
      <h3>Points clés de la session</h3>
      <ul>
        <li>Introduction des personnages et de leurs histoires personnelles</li>
        <li>Première manifestation des pouvoirs magiques de chaque personnage</li>
        <li>Rencontre avec un mentor mystérieux qui explique le concept de l'Éveil</li>
        <li>Confrontation avec une menace surnaturelle mineure, servant d'introduction au système de combat</li>
        <li>Formation du groupe et décision de travailler ensemble pour comprendre leurs nouveaux pouvoirs</li>
      </ul>
      <h3>Développements des personnages</h3>
      <p>Chaque personnage a vécu son Éveil de manière unique :</p>
      <ul>
        <li><strong>Personnage 1</strong> a découvert sa capacité à manipuler les éléments lors d'un moment de stress intense.</li>
        <li><strong>Personnage 2</strong> a eu une vision du futur qui l'a poussé à chercher les autres personnages.</li>
        <li><strong>Personnage 3</strong> a accidentellement lancé un sort de guérison, révélant ses pouvoirs de vie.</li>
      </ul>
      <h3>Questions ouvertes et prochaines étapes</h3>
      <p>La session s'est terminée avec plusieurs questions intrigantes :</p>
      <ul>
        <li>Qui est réellement le mentor mystérieux et quelles sont ses intentions ?</li>
        <li>Comment les personnages vont-ils apprendre à maîtriser leurs nouveaux pouvoirs ?</li>
        <li>Quelle est la nature de la menace surnaturelle à laquelle ils ont été confrontés ?</li>
        <li>Comment le monde réagira-t-il à l'émergence de ces nouveaux mages ?</li>
      </ul>
      <p>La prochaine session promet d'approfondir ces mystères alors que le groupe commence à explorer le monde caché de la magie et à découvrir les responsabilités qui accompagnent leurs nouveaux pouvoirs.</p>
    `,
  },
];

export const breves: Breve[] = [
  {
    id: "edition-2",
    title: "Édition #2 - Semaine 2",
    gameWeek: 2,
    publishDate: "14/01/2024",
    summary: "Cette semaine, mon groupe s'est retrouvé face à une cabale rivale, menant à un affrontement tendu au cœur de la cité. Les enjeux étaient élevés, avec le contrôle d'un important nœud magique en jeu.",
    content: `
      <h2>Conflit avec une cabale rivale</h2>
      <p>Durant la deuxième semaine de ma campagne, mon groupe s'est retrouvé face à une cabale rivale, menant à un affrontement tendu au cœur de la cité. Les enjeux étaient élevés, avec le contrôle d'un important nœud magique en jeu. L'atmosphère était électrique alors que les deux groupes se faisaient face, chacun prêt à utiliser tous les moyens nécessaires pour l'emporter.</p>
      <h3>Découvertes et Apprentissages</h3>
      <h4>Exploration d'un nœud magique ancien</h4>
      <p>Au cours de ma quête, j'ai découvert un nœud magique d'une puissance insoupçonnée, caché dans les profondeurs d'un ancien bâtiment. Ce lieu regorgeait d'énergie mystique et semblait contenir des secrets oubliés depuis des siècles. Mon exploration a révélé des inscriptions cryptiques et des artefacts mystérieux qui pourraient bien changer ma compréhension de la magie.</p>
      <h4>Apprentissage de nouveaux sorts</h4>
      <p>Face à l'adversité, mon groupe a dû faire preuve d'innovation et de créativité. J'ai développé de nouveaux sorts, combinant des aspects de différentes sphères de manière inédite. Ces nouvelles techniques magiques ont non seulement élargi mon arsenal, mais ont également approfondi ma compréhension des fondements de la magie.</p>
      <h4>Rencontre avec un mentor énigmatique</h4>
      <p>Au plus fort du conflit, un personnage mystérieux est apparu, offrant des conseils cryptiques et des enseignements profonds. Ce mentor, dont l'identité reste un mystère, semble posséder une connaissance vaste et ancienne de la magie. Ses paroles ont ouvert de nouvelles perspectives sur mon art, me poussant à remettre en question certaines de mes croyances les plus fondamentales.</p>
      <h3>Conséquences et Réflexions</h3>
      <p>Le conflit avec la cabale rivale a laissé des traces profondes, tant dans le tissu de la réalité que dans mon esprit. Alors que je réfléchis aux événements de cette semaine, de nombreuses questions se posent : Quelles seront les répercussions à long terme de mon affrontement ? Comment les enseignements de mon mystérieux mentor vont-ils influencer ma pratique de la magie ? Et surtout, suis-je prêt pour les défis encore plus grands qui m'attendent ?</p>
      <p>Une chose est certaine : mon voyage dans les profondeurs du Monde des Ténèbres ne fait que commencer, et chaque pas me rapproche un peu plus de l'Ascension... ou de la chute.</p>
    `,
  },
  {
    id: "edition-1",
    title: "Édition #1 - Semaine 1",
    gameWeek: 1,
    publishDate: "07/01/2024",
    summary: "La première semaine de ma campagne a commencé avec l'Éveil spectaculaire de plusieurs nouveaux mages dans ma ville. Cet événement rare a attiré l'attention de diverses factions du Monde des Ténèbres.",
    content: `
      <h2>L'Éveil des nouveaux mages</h2>
      <p>La première semaine de ma campagne a commencé avec un événement extraordinaire : l'Éveil simultané de plusieurs nouveaux mages dans ma ville. Ce phénomène rare a envoyé des ondes de choc à travers le tissu de la réalité, attirant l'attention de diverses factions du Monde des Ténèbres. L'air même semblait vibrer d'une énergie nouvelle et imprévisible.</p>
      <h3>Événements Marquants</h3>
      <h4>Découverte d'un ancien grimoire</h4>
      <p>Au milieu du chaos de ces Éveils multiples, un ancien grimoire a été découvert dans les archives poussiéreuses d'une vieille bibliothèque. Ce tome, rempli de sorts oubliés et de connaissances arcanes, promet de révolutionner ma compréhension de certains aspects de la magie. Mes premières tentatives de déchiffrage ont déjà révélé des techniques de manipulation de la réalité jusqu'alors inconnues.</p>
      <h4>Première rencontre avec un mentor puissant et mystérieux</h4>
      <p>Alors que les nouveaux Éveillés tentaient de comprendre leurs pouvoirs naissants, une figure énigmatique est apparue. Ce mentor, dont le nom reste un mystère, semble posséder une maîtrise incroyable de la magie. Ses enseignements, bien que cryptiques, ont déjà commencé à façonner ma compréhension des jeunes mages de leurs nouvelles capacités.</p>
      <h4>Formation d'alliances précaires</h4>
      <p>Face à l'incertitude et aux dangers potentiels de ma nouvelle réalité, les nouveaux Éveillés ont commencé à former des alliances. Ces liens, bien que fragiles, pourraient être la clé de leur survie dans le monde complexe et souvent hostile de la magie. Cependant, les tensions sont palpables, et la confiance reste un bien rare et précieux.</p>
      <h3>Implications et Questions</h3>
      <p>L'Éveil simultané de tant de nouveaux mages soulève de nombreuses questions. Pourquoi maintenant ? Y a-t-il une signification plus profonde à cet événement ? Comment cela affectera-t-il l'équilibre des pouvoirs dans ma région ?</p>
      <p>Alors que j'entre dans cette nouvelle ère, une chose est certaine : le monde tel que je le connaissais est en train de changer. Les frontières entre la réalité et la magie s'estompent, et l'avenir n'a jamais été aussi incertain... et excitant.</p>
      <p>Restez à l'écoute pour plus de mises à jour sur ces développements fascinants dans le Monde des Ténèbres.</p>
    `,
  },
];

