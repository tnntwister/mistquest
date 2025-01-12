export const assets = [
    {
        "id": "lion-des-cavernes",
        "name": "Lion des Cavernes",
        "type": "companion",
        "description": "Votre chat abat sa proie.",
        "abilities": [
          {
            "id": "avide",
            "description": "Lorsque votre chat pourchasse du gros gibier, vous pouvez vous Réapprovisionner avec +vivacité (au lieu de +astuce). Si vous le faites, vous gagnez +1 provisions ou +1 élan sur un coup fort.",
            "requiresInput": false
          },
          {
            "id": "inevitable",
            "description": "Lorsque vous Plongez dans la Mêlée ou Frappez en envoyant votre chat à l'attaque, faites un jet +vivacité. Sur un succès, vous gagnez +2 élan.",
            "requiresInput": false
          },
          {
            "id": "protecteur",
            "description": "Lorsque vous Montez le Camp, votre chat reste attentif au danger. Si vous ou l'un de vos allié choisissez de vous relaxer, vous gagnez +1 esprit. Si vous vous concentrez, vous gagnez +1 élan.",
            "requiresInput": false
          }
        ],
        "requiresTrack": true,
        "trackMax": 4
      },
      {
        "id": "faucon",
        "name": "Faucon",
        "type": "companion",
        "description": "Votre faucon peut vous aider lorsqu'il est en vol.",
        "abilities": [
          {
            "id": "vision-lointaine",
            "description": "Lorsque vous Entreprenez un voyage ou lorsque vous vous Ravitaillez en chassant du petite gibier, ajoutez +1.",
            "requiresInput": false
          },
          {
            "id": "feroce",
            "description": "Lorsque vous vous Emparez d'un Avantage sur un jet +vivacité en utilisant votre faucon pour harceler et détourner l'attention de vos ennemis, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "vigilant",
            "description": "Lorsque vous Faites Face au Danger avec +astuce pour détecter l'approche d'une menace, ou lorsque vous Plongez dans la Mêlée avec +astuce contre une embuscade, ajoutez +2.",
            "requiresInput": false
          }
        ],
        "requiresTrack": true,
        "trackMax": 3
      },
      {
        "id": "cheval",
        "name": "Cheval", 
        "type": "companion",
        "description": "Votre cheval et vous ne faites plus qu'un lorsque vous êtes sur son dos.",
        "abilities": [
          {
            "id": "veloce",
            "description": "Lorsque vous Faites Face au Danger avec +vivacité en utilisant la rapidité et la grâce de votre cheval ou lorsque vous Entreprenez un Voyage, ajoutez +1.",
            "requiresInput": false
          },
          {
            "id": "imperturbable",
            "description": "Lorsque vous Plongez dans la Mêlée ou que vous vous Emparez d'un Avantage avec +cœur en chargeant au combat, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "puissant",
            "description": "Lorsque vous Frappez ou que vous Ripostez à courte portée en chevauchant, ajoutez +1 et infligez +1 dégât sur un succès.",
            "requiresInput": false
          }
        ],
        "requiresTrack": true,
        "trackMax": 5
      },
      {
        "id": "chien",
        "name": "Chien",
        "type": "companion", 
        "description": "Votre chien est votre fidèle compagnon.",
        "abilities": [
          {
            "id": "limier",
            "description": "Lorsque vous Récoltez des Informations en tirant parti des sens affûtés de votre chien pour pister votre proie ou pour fouiller un lieu, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "feroce",
            "description": "Lorsque vous Frappez ou Fracassez aux côtés de votre chien et obtenez un succès, vous infligez +1 dégât ou gagnez +1 élan.",
            "requiresInput": false
          },
          {
            "id": "loyal",
            "description": "Lorsque vous Subissez un Stress en compagnie de votre chien, ajoutez +1.",
            "requiresInput": false
          }
        ],
        "requiresTrack": true,
        "trackMax": 4
      },
      {
        "id": "sang-lie",
        "name": "Sang-Lié",
        "type": "companion",
        "description": "Votre ami indéfectible.",
        "abilities": [
          {
            "id": "expertise",
            "description": "Lorsque vous déclenchez une action en dehors du combat en vous aidant de l'expertise de votre compagnon, ajoutez +1.",
            "requiresInput": true,
            "inputLabel": "Expertise"
          },
          {
            "id": "compagnon-darmes",
            "description": "Lorsque vous Ripostez ou Bataillez aux côtés de votre compagnon, ou lorsque vous Faites Face au Danger contre une attaque en faisant front ensemble, ajoutez +1.",
            "requiresInput": false
          },
          {
            "id": "lies",
            "description": "Une fois que vous aurez noté un lien avec votre compagnon, ajoutez +1 lorsque vous Faites Face à la Désolation en sa présence.",
            "requiresInput": false
          }
        ],
        "requiresTrack": true,
        "trackMax": 4
      }
  ,
      {
        "id": "mammouth",
        "name": "Mammouth",
        "type": "companion",
        "description": "Votre mammouth marche d'un pas résolu.",
        "abilities": [
          {
            "id": "massif",
            "description": "Lorsque vous Entreprenez un Voyage en compagnie de votre mammouth, vous pouvez ajouter +2 (décidez-en avant votre jet). Si vous le faites, vous subissez une pénalité de -1 élan.",
            "requiresInput": false
          },
          {
            "id": "bete-de-somme",
            "description": "Lorsque vous déclenchez une action avec +provisions, vous pouvez faire votre jet avec +la santé de votre mammouth à la place.",
            "requiresInput": false
          },
          {
            "id": "ecrasant",
            "description": "Lorsque vous Frappez ou Ripostez sur le dos de votre mammouth contre une meute d'adversaires, ajoutez +1 et infligez +1 dégât sur un succès.",
            "requiresInput": false
          }
        ],
        "requiresTrack": true,
        "trackMax": 5
      },
      {
        "id": "chouette",
        "name": "Chouette",
        "type": "companion",
        "description": "Votre chouette s'élève à travers les ténèbres.",
        "abilities": [
          {
            "id": "nocturne",
            "description": "Si vous vous Ravitaillez de nuit en envoyant votre chouette chasser, vous gagnez +2 élan sur un succès. Lorsque vous Plongez dans la Mêlée avec +astuce face à une ambuscade tendue de nuit, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "sage",
            "description": "Lorsque vous mettez à profit le savoir secret de votre chouette pour accomplir un rituel, ajoutez +1 ou gagnez +1 élan sur un succès (décidez-en avant de faire votre jet).",
            "requiresInput": false
          },
          {
            "id": "incarnation",
            "description": "Lorsque vous Faites Face à la Mort, vous gagnez autant d'élan que le score de santé de votre chouette avant de faire votre jet.",
            "requiresInput": false
          }
        ],
        "requiresTrack": true,
        "trackMax": 3
      },
      {
        "id": "corbeau",
        "name": "Corbeau",
        "type": "companion",
        "description": "Votre corbeau répond à votre appel.",
        "abilities": [
          {
            "id": "ruse",
            "description": "Lorsque vous Faites Face au Danger ou que vous vous Emparez d'un Avantage avec +ombre en utilisant votre corbeau pour jouer un tour (tel que créer une distraction ou voler un petit objet), ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "savant",
            "description": "Lorsque vous Faites Face à la Mort, ajoutez +2 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "diligent",
            "description": "Lorsque votre corbeau livre des messages pour vous, vous pouvez vous Emparer d'un Avantage, Récolter des Informations ou Contraindre à distance.",
            "requiresInput": false
          }
        ],
        "requiresTrack": true,
        "trackMax": 2
      },
      {
        "id": "araignee-geante",
        "name": "Araignée Géante",
        "type": "companion",
        "description": "Votre araignée découvre des secrets.",
        "abilities": [
          {
            "id": "discrete",
            "description": "Lorsque vous vous Emparez d'un Avantage en envoyant votre araignée en éclaireur à votre place, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "perceuse-dame",
            "description": "Lorsque vous envoyez votre araignée étudier secrètement quelqu'un, vous pouvez Faire Face au Danger avec +ombre. Sur un succès, l'araignée revient en vous révélant les peurs les plus profondes de la cible à travers le reflet de ses yeux vitreux. Vous pouvez utiliser ce savoir pour Récolter des Informations et relancer n'importe quel dé.",
            "requiresInput": false
          },
          {
            "id": "tisseuse",
            "description": "Lorsque votre araignée tend un piège, ajoutez +1 si vous Plongez dans la Mêlée avec +ombre. Sur un coup fort, vous infligez également 2 dégâts.",
            "requiresInput": false
          }
        ],
        "requiresTrack": true,
        "trackMax": 4
      },
      {
        "id": "jeune-wyverne",
        "name": "Jeune Wyverne",
        "type": "companion",
        "description": "Votre wyverne ne vous dévorera pas. Pour l'instant...",
        "abilities": [
          {
            "id": "insatiable",
            "description": "Lorsque vous Entreprenez un Voyage et obtenez un succès, vous pouvez accepter de subir -1 provisions en échange de +1 élan.",
            "requiresInput": false
          },
          {
            "id": "indomptable",
            "description": "Lorsque vous déclenchez l'action Dégâts au Compagnon pour votre wyverne, ajoutez +2 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "sauvage",
            "description": "Lorsque vous Frappez en ordonnant à votre wyvern d'attaquer, faites un jet +cœur. Votre wyverne inflige 3 dégâts sur un succès.",
            "requiresInput": false
          }
        ],
        "requiresTrack": true,
        "trackMax": 5
      },
      {
        "id": "alchimiste",
        "name": "Alchimiste",
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "creation-elixir",
            "description": "Lorsque vous créez un élixir, choisissez l'un des effets suivants : habileté (vivacité), audace (coeur), vigueur (fer), ruse (ombre) ou lucidité (astuce). Puis, subissez une pénalité de -1 provisions et faites un jet +astuce. Sur un coup fort, vous créez une dose unique. Un personnage qui boit l'élixir doit Faire Face au Danger avec +fer ; s'il obtient un succès, il ajoute +1 lorsqu'il déclenche des actions avec la caractéristique correspondante jusqu'à ce que son score de santé, d'esprit ou d'élan tombe en-dessous de 1. Sur un coup faible, comme précédemment, mais vous subissez une pénalité supplémentaire de -1 provisions pour créer la dose.",
            "requiresInput": false
          },
          {
            "id": "double-dose",
            "description": "Comme précédemment, et vous pouvez choisir deux effets pour une dose unique, ou créer deux doses avec le même effet.",
            "requiresInput": false
          },
          {
            "id": "maitre-alchimiste",
            "description": "Lorsque vous préparez un élixir, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      }
  ,
      {
        "id": "dresseur",
        "name": "Dresseur",
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "maitre-animaux",
            "description": "Lorsque vous déclenchez une action pour apaiser, calmer, contrôler, aider ou repousser un animal (ou un compagnon animal ou bête), ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "affinite-animale",
            "description": "Vous pouvez acquérir ou améliorer un atout de compagnon animal ou bête pour un point d'expérience en moins. Une fois que vous aurez remplis toutes les capacités de cet atout, vous pouvez Forgez un Lien avec ce compagnon et obtenir automatiquement un succès fort. Si vous le faites, notez deux coches sur votre jauge de liens, et gagnez +1 expérience.",
            "requiresInput": false
          },
          {
            "id": "lien-animal",
            "description": "Une fois par combat, lorsque vous faites appel à votre compagnon animal ou bête pour déclenchez une action, vous pouvez relancer n'importe quel dé. Sur un succès, vous gagnez +1 élan.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "banniere-jure",
        "name": "Bannière-Juré",
        "type": "path",
        "description": "Lorsque vous marquez un lien avec un meneur ou une faction...",
        "abilities": [
          {
            "id": "serment-banniere",
            "description": "Lorsque vous Jurez le Vœu de Fer de servir votre meneur ou votre faction durant une mission, vous pouvez relancer n'importe quel dé. Quand vous Réalisez votre Vœu et notez votre expérience, vous gagnez +1 expérience.",
            "requiresInput": false
          },
          {
            "id": "fraternite",
            "description": "Lorsque vous Séjournez ou que vous Montez un Camp en compagnie de vos frères et sœurs de bannière, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "porteur-banniere",
            "description": "Lorsque vous Plongez dans la Mêlée en brandissant votre bannière, ajoutez +1 et gagnez +1 élan sur un succès. Quand vous brûlez de l'élan en portant votre bannière au combat, vous gagnez +1 élan après réinitialisation.",
            "requiresInput": false
          }
        ],
        "requiresInput": true,
        "inputLabel": "Nom"
      },
      {
        "id": "blesse-de-guerre",
        "name": "Blessé de Guerre",
        "type": "path",
        "description": "Une fois que vous êtes mutilé...",
        "abilities": [
          {
            "id": "concentration-energie",
            "description": "Vous concentrez votre énergie : Réduisez votre caractéristique vivacité ou fer de 1 et ajoutez +2 en astuce ou en cœur, ou bien +1 à chacune (pour un maximum de +4).",
            "requiresInput": false
          },
          {
            "id": "surmonter-limitations",
            "description": "Réduisez votre maximum de santé de 1. Mutilé ne compte plus comme un handicap : ignorez la pénalité d'élan maximum et de réinitialisation. Lorsque vous Subissez un stress avec +cœur, gagnez +1 élan sur un succès fort.",
            "requiresInput": false
          },
          {
            "id": "defier-mort",
            "description": "Vous avez déjà défié la mort : Lorsque vous tombez à 0 santé et que vous Subissez des dégâts, vous pouvez faire un jet avec +astuce ou +cœur (au lieu de +santé ou +fer) et gagner +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      }
  ,
      {
        "id": "lame-liee",
        "name": "Lame-Liée",
        "type": "path",
        "description": "Une fois que vous avez noté un lien avec une lame-liée, cette arme intelligente qui abrite l'esprit de l'un de vos ancêtres...",
        "abilities": [
          {
            "id": "lame-ancestrale",
            "description": "Lorsque vous Plongez dans la Mêlée ou Tracez le Cercle en maniant votre lame-liée, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "murmures-lame",
            "description": "Lorsque vous Récoltez des Informations en écoutant les murmures de votre lame-liée, ajoutez +1 et gagnez +2 élan sur un succès, puis Subissez un Stress (2 stress).",
            "requiresInput": false
          },
          {
            "id": "frappe-brutale",
            "description": "Lorsque vous Frappez de façon brutale avec votre lame-liée (choisissez avant de jeter les dés), ajoutez +1 et infligez +2 dégâts sur un succès, puis Subissez un Stress (2 stress).",
            "requiresInput": false
          }
        ],
        "requiresInput": true,
        "inputLabel": "Nom"
      },
      {
        "id": "lie",
        "name": "Lié",
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "liens-profonds",
            "description": "Lorsque vous déclenchez une action qui vous octroie un ajout si vous partagez un lien, ajoutez +1 supplémentaire.",
            "requiresInput": false
          },
          {
            "id": "apprentissage-liens",
            "description": "Lorsque vous remplissez complètement une case de votre jauge de liens, visualisez ce que vos relations vous ont apprises. Vous gagnez +1 expérience et +2 élan.",
            "requiresInput": false
          },
          {
            "id": "force-liens",
            "description": "Lorsque vous déclenchez une action à un moment crucial et que vous obtenez un échec, vous pouvez puiser du courage et du soutien en pensant à celles et ceux avec qui vous êtes liés. Si vous le faites, vous pouvez relancer n'importe quel dé. Sur un nouvel échec, vous devez noter secoué ou corrompu en plus du résultat de l'action. Si ces deux handicaps sont déjà notés, vous devez Faire Face à la Désolation.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "danseur",
        "name": "Danseur",
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "performance",
            "description": "Lorsque vous vous Emparez d'un Avantage avec +vivacité en dansant devant un public, ajoutez +1 et gagnez +2 élan sur un succès. Sur un coup fort, ajoutez également +2 si vous déclenchez une action afin d'interagir avec quelqu'un du public (une seule fois seulement).",
            "requiresInput": false
          },
          {
            "id": "danse-combat",
            "description": "Lorsque vous Faites Face au Danger avec +vivacité en combat afin d'esquiver adroitement les attaques de vos adversaires, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "danse-celebration",
            "description": "Lorsque vous ou l'un de vos alliés déclenchez une action de progrès et obtenez un succès, vous pouvez accomplir une danse afin de célébrer l'événement. Si vous le faites, faites un jet avec +vivacité. Sur un coup fort, vous et chacun de vos alliés gagnez +2 élan et +1 esprit. Sur un coup faible, vous gagnez +1 élan ou +1 esprit, mais vos alliés restent indifférents.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "devot",
        "name": "Dévot",
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "prieres-quotidiennes",
            "description": "Lorsque vous récitez vos prières quotidiennes, vous pouvez vous Emparer d'un Avantage en demandant la bénédiction de votre dieu. Si c'est le cas, faites un jet +la caractéristique de votre dieu. Sur un succès, vous gagnez +2 élan.",
            "requiresInput": false
          },
          {
            "id": "quete-divine",
            "description": "Lorsque vous Jurez le Vœu de Fer de servir votre dieu durant une quête divine, vous pouvez faire un jet +la caractéristique de votre dieu et relancer n'importe quel dé. Quand vous Réalisez votre Vœu et notez votre expérience, vous gagnez +1 expérience.",
            "requiresInput": false
          },
          {
            "id": "repandre-parole",
            "description": "Lorsque vous Séjournez et répandez la bonne parole de votre dieu, vous pouvez faire un jet +la caractéristique de votre dieu et gagner +1 élan sur un succès.",
            "requiresInput": false
          }
        ],
        "requiresInput": true,
        "inputLabel": "Nom du Dieu",
        "requiresTrack": true,
        "trackLabel": "Caractéristique"
      }
  ,
      {
        "id": "chasseur-de-fortune",
        "name": "Chasseur de Fortune",
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "voeu-fortune",
            "description": "Lorsque vous Jurez un Vœu de Fer à quelqu'un moyennant la promesse d'une rétribution financière, ajoutez +1 et distinguez cette quête par une marque particulière. Lorsque vous Réalisez votre Vœu et obtenez un succès, vous gagnez +richesses équivalent au rang de la quête. Si vous mettez en avant votre richesse lorsque vous déclenchez une action pour laquelle les ressources peuvent entre en ligne de compte, ajoutez +richesses et subissez une pénalité de -1 richesses.",
            "requiresInput": false
          },
          {
            "id": "conversion-richesse",
            "description": "Lorsque vous vous trouvez au sein d'une communauté, ou lors d'un échange commercial, vous pouvez subir une pénalité de -1 richesses. Si vous le faites, vous gagnez +2 provisions.",
            "requiresInput": false
          },
          {
            "id": "tresor-cache",
            "description": "Lorsque vous vous Ravitaillez en fouillant ou en pillant, et que vous obtenez un coup fort avec une égalité, vous pouvez visualiser la découverte d'un objet ayant de la valeur. Si vous le faites, vous gagnez +1 provisions (au lieu de +2) et +1 richesses.",
            "requiresInput": false
          }
        ],
        "requiresTrack": true,
        "trackMax": 5,
        "trackLabel": "Richesses"
      },
      {
        "id": "herboriste",
        "name": "Herboriste",
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "remedes-naturels",
            "description": "Lorsque vous tentez de Guérir en utilisant des remèdes à base de plantes et que vous disposez d'au moins +1 provisions, vous pouvez choisir l'un des deux effets suivants (à décider avant le jet) : Ajoutez +2 ou Sur un succès, gagnez ou prodiguez +1 santé supplémentaire.",
            "requiresInput": false
          },
          {
            "id": "soigneur-companion",
            "description": "Lorsque vous Guérissez un compagnon, un allié ou un autre personnage et que vous obtenez un succès, vous gagnez +1 esprit ou +1 élan.",
            "requiresInput": false
          },
          {
            "id": "repas-revigorant",
            "description": "Lorsque vous Montez un Camp et sélectionnez l'option festoyer, vous pouvez cuisiner un repas revigorant. Si vous le faites, vos compagnons et vous pouvez gagner +1 santé. Tout allié qui choisit lui aussi de festoyer gagne également +1 santé, sans subir de pénalité de -provisions.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "honorable",
        "name": "Honorable", 
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "renverser-situation",
            "description": "Lorsque vous Renversez la Situation, visualisez comment vos vœux vous donnent de la force dans ce moment décisif. Puis, ajoutez +2 (au lieu de +1) quand vous faites votre jet, et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "dure-verite",
            "description": "Lorsque vous vous Emparez d'un Avantage ou que vous Contraignez quelqu'un en lui révélant une dure vérité, ajoutez +1 et gagnez +1 élan sur un succès. Sur un coup faible ou un échec, visualisez comment cette vérité complique votre situation actuelle.",
            "requiresInput": false
          },
          {
            "id": "seconde-chance",
            "description": "Lorsque vous Réalisez votre Vœu et obtenez un échec, vous pouvez relancer l'un des dés de défi. Si vous obtenez à nouveau un échec, réduisez d'un point votre score maximum en esprit. Vous pourrez retrouver votre niveau normal la prochaine fois que vous Réaliserez votre Vœu et obtiendrez un coup fort.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "ingenieux",
        "name": "Ingénieux",
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "bricoleur",
            "description": "Lorsque vous Vérifiez votre Équipement, vous pouvez faire un jet avec +astuce (à la place de +provisions). Si vous le faites, visualisez le bricolage astucieux que vous parvenez à faire, et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "fabrication-improvisee",
            "description": "Lorsque vous vous Emparez d'un Avantage ou que vous Faites Face au Danger en bricolant un outil ou un matériel adéquat, ajoutez +1 et gagnez +1 élan sur un succès. Après votre jet, vous pouvez subir une pénalité de -1 provisions pour ajouter +1 supplément.",
            "requiresInput": false
          },
          {
            "id": "impulsif",
            "description": "Lorsque vous faites fi de toute prudence et déclenchez une action de façon impulsive lors d'une situation risquée, vous pouvez ajouter +2. Si vous le faites, gagnez +1 élan sur un coup fort, mais considérez un coup faible comme un échec.",
            "requiresInput": false
          }
        ]
      }
  ,
      {
        "id": "infiltre",
        "name": "Infiltré",
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "infiltration",
            "description": "Lorsque vous déclenchez une action pour faire une brèche, traverser, ou vous cacher au sein d'une zone tenue par un ennemi, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "renseignement",
            "description": "Lorsque vous Récoltez des Informations à l'intérieur d'un territoire ennemi afin de découvrir ses positions, ses plans, ou ses méthodes, ou lorsque vous vous Emparez d'un Avantage à l'intérieur de ce territoire en usant d'observation, vous pouvez faire un jet avec +ombre (au lieu de +astuce). Si vous le faites, vous gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "pillage",
            "description": "Lorsque vous vous Ravitaillez à l'intérieur d'un territoire ennemi en fouillant ou en pillant, vous pouvez faire un jet avec +ombre (au lieu de +astuce). Si vous le faites, vous gagnez +1 élan ou +1 provisions sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "loyaliste",
        "name": "Loyaliste",
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "soutien-loyal",
            "description": "Lorsque vous Aidez votre Allié, ajoutez +1 et gagnez +1 élan sur un succès, indépendamment des bénéfices reçus par votre allié.",
            "requiresInput": false
          },
          {
            "id": "presence-rassurante",
            "description": "Lorsqu'un allié déclenche l'action Subir un Stress en votre compagnie, celui-ci ajoute +1 et vous gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "soutien-allie",
            "description": "Lorsque vous êtes aux côtés d'un allié quand celui-ci déclenche une action de progrès, visualisez comment vous le soutenez. Puis lancez un dé de défi. Sur un 1-9, votre allié peut remplacer l'un de ses dés de défi par le vôtre. Sur un 10, visualisez comment vous ruinez son action par inadvertance : votre allié doit remplacer son dé de défi le moins élevé par le vôtre.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "masque",
        "name": "Masqué",
        "type": "path",
        "description": "Une fois que vous avez forgé un lien avec les elfes, et que vous avez reçu en présent un masque de bois elfique précieux...",
        "abilities": [
          {
            "id": "choix-masque",
            "description": "Choisissez en quel bois est votre masque : Bois-Tonnerre : Vivacité / Santé, Bois de Sang : Fer / Santé, Bois-Fantôme : Ombre / Esprit, Bois-Murmure : Astuce / Esprit. Lorsque vous portez ce masque et déclenchez une action qui utilise cette caractéristique, ajoutez +1. Si vous obtenez un 1 sur votre dé d'action, vous subissez -1 sur la jauge associée (en plus de tout autre résultat de l'action).",
            "requiresInput": true,
            "inputLabel": "Type de bois"
          },
          {
            "id": "pouvoir-accru",
            "description": "Comme précédemment, mais vous pouvez décider d'ajouter +2, au risque de subir -2 (décidez-en avant votre jet).",
            "requiresInput": false
          },
          {
            "id": "masque-protection",
            "description": "Lorsque vous Faites Face à la Mort ou à la Faites Face à la Désolation en portant votre masque, vous pouvez faire un jet +sa caractéristique (au lieu de +cœur).",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "parjure",
        "name": "Parjure",
        "type": "path",
        "description": "Une fois que vous avez Abandonné votre Vœu...",
        "abilities": [
          {
            "id": "handicap-parjure",
            "description": "Cet atout compte comme un handicap. Une fois seulement, lorsque vous Jurez un Vœu de Fer pour vous rachetez (au minimum de rang extrême), distinguez cette quête par une marque particulière. Lorsque vous Atteignez un Jalon sur cette quête particulière, vous gagnez +2 élan.",
            "requiresInput": false
          },
          {
            "id": "voie-redemption",
            "description": "Lorsque vous vous Emparez d'un Avantage ou que vous Contraignez en réaffirmant votre engagement envers votre quête particulière, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "redemption",
            "description": "Lorsque vous Réalisez votre Vœu et obtenez un succès pour votre quête particulière, vous vous rachetez et activez automatiquement cette capacité sans dépenser d'expérience. Vous pouvez alors augmenter l'une de vos caractéristique de +1 et défausser cet atout.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "potentat",
        "name": "Potentat",
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "hospitalite-due",
            "description": "Lorsque vous Séjournez et obtenez un coup faible ou un échec, vous pouvez faire appel au devoir d'hospitalité dû à votre titre ou votre lignage. Si vous le faites, rejetez tous les dés et ajoutez +1. Sur un nouvel échec, on vous rejette, et votre prétention engendre un nouveau problème.",
            "requiresInput": false
          },
          {
            "id": "autorite-titre",
            "description": "Lorsque vous faites falloir votre titre ou votre lignage pour Contraindre, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "humilite",
            "description": "Lorsque vous mettez de côté votre titre ou votre lignage afin de Forgez un Lien en tant qu'égal, ou lorsque vous Jurez un Vœu de Fer de servir quelqu'un ayant une condition sociale inférieure à la vôtre, ajoutez +1 et gagnez +1 élan ou +1 esprit sur un succès.",
            "requiresInput": false
          }
        ],
        "requiresInput": true,
        "inputLabel": "Titre / Lignage"
      }
  ,
      {
        "id": "revenant",
        "name": "Revenant",
        "type": "path",
        "description": "Une fois que vous Faites Face à la Mort et que vous retournez dans le monde des vivants...",
        "abilities": [
          {
            "id": "defi-mort",
            "description": "Lorsque votre santé tombe à 0, et que vous Subissez des Dégâts ou que vous Faites Face à la Mort, ajoutez +1. Si vous brûlez ensuite de l'élan pour améliorer votre résultat, visualisez quel lien ou vœu vous relie à ce monde, puis gagnez +2 élan après votre réinitialisation.",
            "requiresInput": false
          },
          {
            "id": "affinite-morts",
            "description": "Lorsque vous déclenchez une action pour enquêter sur, vous opposer à ou interagir avec une horreur, un esprit ou toute autre créature morte-vivante, ajoutez +1.",
            "requiresInput": false
          },
          {
            "id": "dernier-recours",
            "description": "Lorsque vous Mettez Fin au Combat en tuant votre ennemi, vous pouvez brûler de l'élan pour annuler l'un de vos deux dés de défi (mais pas les deux) si votre élan est supérieur au résultat de ce dé. Si vous le faites, vous Subissez un Stress (2 stress).",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "ritualiste",
        "name": "Ritualiste",
        "type": "path",
        "description": "Après avoir Réalisé votre Vœu (de rang redoubable ou plus) au service d'un grand mystique et que vous Forgez un Lien avec celui-ci pour qu'il vous entraîne...",
        "abilities": [
          {
            "id": "preparation-rituelle",
            "description": "Lorsque vous vous Emparez d'un Avantage pour vous préparer à un rituel, visualisez comment vous vous préparez. Puis, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "efficacite-rituelle",
            "description": "Lorsque vous effectuez un rituel, vous pouvez subir une pénalité de -1 provisions en échange d'un ajout de +1 (décidez-en avant de faire votre jet).",
            "requiresInput": false
          },
          {
            "id": "tatouages-rituels",
            "description": "Lorsque vous tatouez l'essence d'un nouveau rituel sur votre peau, visualisez la marque que vous dessinez. Vous pouvez ensuite acquérir et améliorer cet atout rituel pour 1 point d'expérience de moins.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "peuple-des-ombres",
        "name": "Peuple des Ombres",
        "type": "path",
        "description": "Une fois que vous êtes corrompu...",
        "abilities": [
          {
            "id": "coeur-endurci",
            "description": "Votre cœur s'endurcit : Réduisez votre caractéristique cœur de 1 et ajoutez +2 en ombre (votre score d'ombre ne peut pas dépasser +4).",
            "requiresInput": false
          },
          {
            "id": "harmonie-ombres",
            "description": "Vous êtes en harmonie avec le royaume des ombres. Lorsque vous effectuez un rituel, ajoutez +1.",
            "requiresInput": false
          },
          {
            "id": "familier-mort",
            "description": "Vous êtes familier des espiègleries de la mort : Lorsque vous Faites Face à la Mort, vous pouvez faire un jet +ombre (au lieu de +cœur). Sur un coup faible, si vous choisissez d'accomplir une quête funèbre, vous pouvez Jurer un Vœu de Fer +ombre (au lieu de +cœur) et relancer n'importe quel dés. Lorsque vous Réalisez votre Vœu relatif à cette quête et que vous marquez votre expérience, vous gagnez +2 expérience.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "medium",
        "name": "Médium",
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "detection-mystique",
            "description": "Lorsque vous Faites Face au Danger ou que vous Récoltez des Informations afin d'identifier ou de détecter des forces mystiques, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "connexion-mystique",
            "description": "Lorsque vous Contraignez, Forgez un Lien ou Testez votre Lien avec un autre mystique ou une créature mystique, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "perception-profonde",
            "description": "Lorsque vous vous Emparez d'un Avantage en étudiant une personne ou un objet dans une situation tendue, ajoutez +1 et gagnez +1 élan sur un succès. Lorsque vous le faites en perçant le voile pour explorer des vérités plus profondes (décidez-en avant votre jet), vous pouvez relancer n'importe quel dé. Si vous le faites, considérez un coup faible comme un échec.",
            "requiresInput": false
          }
        ]
      }
  ,
      {
        "id": "tueur",
        "name": "Tueur",
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "chasseur-monstre",
            "description": "Lorsque vous Récoltez des Informations en traquant une bête ou une horreur, ou que vous vous Emparez d'un Avantage en vous préparant à affronter ces créatures, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "voeu-tueur",
            "description": "Lorsque vous Jurez un Vœu de Fer visant à tuer une horreur ou une bête, relancez n'importe quel dé. Quand vous Réalisez votre Vœu et notez votre expérience, vous gagnez +1 expérience.",
            "requiresInput": false
          },
          {
            "id": "trophee",
            "description": "Lorsque vous tuez une horreur ou une bête (au minimum de rang redoutable) vous pouvez prélever un trophée et retenir l'une de ces options : Alimenter un rituel : Lorsque vous ou l'un de vos alliés déclenchez une action de rituel, relancez n'importe quel dé (une fois seulement). Prouver votre valeur : Lorsque vous Séjournez, relancez n'importe quel dé (une fois seulement).",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "hante",
        "name": "Hanté",
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "consultation-esprit",
            "description": "Vous êtes hanté par l'esprit d'une personne dont vous avez causé la mort par vos actions ou vos défaillances. Lorsque vous consultez l'esprit afin de vous Emparer d'un Avantage ou de Récolter des Informations, ajoutez +1 et gagnez +2 élan sur un succès. Sur un coup faible, vous Subissez un Stress (1 stress).",
            "requiresInput": false
          },
          {
            "id": "guide-spectral",
            "description": "Lorsque vous Faites Face à la Mort en étant guidé par l'esprit, ajoutez +1. Sur un coup fort, visualisez ce que vous apprenez, et gagnez +1 expérience.",
            "requiresInput": false
          },
          {
            "id": "redemption-esprit",
            "description": "Une fois seulement, sur un succès lorsque vous Réalisez votre Vœu (de rang redoutable ou plus) au service de l'esprit, retenez l'une des options suivantes : Le laisser partir : gagnez +2 expérience pour chaque capacité notée sur cet atout, puis défaussez cet atout. Approfondir votre connexion : ajoutez +1 supplémentaire aux ajouts octroyés lorsque vous utilisez cet atout.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "paria",
        "name": "Paria",
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "survie-desespoir",
            "description": "Lorsque vos provisions tombent à 0, subissez tout reliquat de pénalité de provisions en pénalité d'élan. Puis, faites un jet +astuce. Sur un coup fort, visualisez comment vous parvenez à vous en sortir et gagnez +1 provisions. Sur un coup faible, vous pouvez subir -2 élan en échange de +1 provisions. Sur un échec, vous êtes À Court de Provisions.",
            "requiresInput": false
          },
          {
            "id": "solitude",
            "description": "Lorsque vous Séjournez, vous pouvez relancer n'importe quel dé. Si vous le faites (décidez-en avant votre premier jet), vos besoins sont menus, mais votre isolement vous distingue des autres. Un coup fort est considéré comme un coup faible.",
            "requiresInput": false
          },
          {
            "id": "memoire-lieux",
            "description": "Lorsque vous Atteignez votre Destination et obtenez un coup fort, vous vous rappelez ou reconnaissez quelque-chose d'utile sur ce lieu. Visualisez de quoi il s'agit et gagnez +2 élan.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "farceur",
        "name": "Farceur",
        "type": "path",
        "description": "",
        "abilities": [
          {
            "id": "ruse-tromperie",
            "description": "Lorsque vous Faites Face au Danger, que vous vous Emparez d'un Avantage ou que vous Contraignez quelqu'un en mentant, en bluffant, en volant ou en trichant, ajoutez +1.",
            "requiresInput": false
          },
          {
            "id": "enquete-machination",
            "description": "Lorsque vous Récoltez des Informations en enquêtant sur une intrigue machiavélique, vous pouvez faire un jet +ombre (au lieu de +astuce). Si vous le faites, vous gagnez +2 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "liens-mensonges",
            "description": "Lorsque vous Forgez un Lien en rapport à une relation basée sur un mensonge, retenez l'une de ces options : Garder le secret : faites un jet +ombre (au lieu de +coeur) ou Révéler la vérité : faites un jet +cœur. Sur un coup fort, notez deux coches sur votre jauges de Liens et gagnez 1 expérience. Un coup faible est considéré comme un échec.",
            "requiresInput": false
          }
        ]
      }
  ,
      {
        "id": "archer",
        "name": "Archer",
        "type": "combat",
        "description": "Lorsque vous maniez un arc...",
        "abilities": [
          {
            "id": "visee",
            "description": "Lorsque vous vous Emparez d'un Avantage en prenant le temps de viser, ajoutez +1 et retenez l'une de ces approches : Faire confiance à votre instinct : faites un jet +astuce, et gagnez +2 élan sur un coup fort. Préparer votre tir : faites un jet +vivacité, et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "pluie-de-fleches",
            "description": "Une fois par combat, lorsque vous Frappez ou Ripostez, vous pouvez décocher des flèches supplémentaires en subissant une pénalité de -1 provisions (choisissez avant de jeter les dés). Si vous le faites, relancez n'importe quel dé. Sur un succès, vous infligez +2 dégâts et gagnez +1 élan.",
            "requiresInput": false
          },
          {
            "id": "chasseur",
            "description": "Lorsque vous vous Ravitaillez en chassant, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "berserk",
        "name": "Berserk",
        "type": "combat",
        "description": "Si vous n'êtes couvert que de peaux de bête...",
        "abilities": [
          {
            "id": "nature-sauvage",
            "description": "Lorsque vous vous Emparez d'un Avantage ou que vous Contraignez en incarnant votre nature sauvage, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "rage-combative",
            "description": "Lorsque vous Frappez ou Ripostez en laissant libre court à votre rage (décidez-en avant votre jet), infligez +1 dégât sur un succès. Puis, retenez l'une des options suivantes : Dépassez-vous : Subissez des Dégâts (1 dégât) ou Abandonnez-vous : Subissez un Stress (1 stress).",
            "requiresInput": false
          },
          {
            "id": "embrasser-douleur",
            "description": "Lorsque vous Subissez des Dégâts lors d'un combat, et que votre santé est supérieure à zéro, vous pouvez laisser la douleur attiser votre sauvagerie (décidez-en avant votre jet). Sur un coup fort, si vous choisissez d'épouser la douleur, vous gagnez +élan équivalent à votre score de santé restant. Considérez un coup faible comme un échec.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "bagarreur",
        "name": "Bagarreur",
        "type": "combat",
        "description": "Lorsque vous êtes désarmé ou que vous combattez avec une arme non létale...",
        "abilities": [
          {
            "id": "corps-a-corps",
            "description": "Lorsque vous vous Emparez d'un Avantage avec +fer en vous bagarrant au corps à corps (en frappant, renversant ou agrippant) ajoutez +1. Sur un succès, vous pouvez également infliger 1 dégât.",
            "requiresInput": false
          },
          {
            "id": "frappe-mortelle",
            "description": "Lorsque vous Frappez à mains nues ou à l'aide d'une arme simple avec l'intention de donner la mort, ajoutez +2 et infligez 2 dégâts sur un succès (au lieu de 1). Sur un coup faible ou un échec, subissez une pénalité de -1 élan (en plus de toutes autres conséquences de l'action).",
            "requiresInput": false
          },
          {
            "id": "combat-desarmé",
            "description": "Lorsque vous Faites Face au Danger ou que vous Ripostez contre une attaque sans arme au corps à corps, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "bras-long",
        "name": "Bras Long",
        "type": "combat",
        "description": "Lorsque vous maniez un bâton...",
        "abilities": [
          {
            "id": "baton-mortel",
            "description": "Dans vos mains, un simple bâton devient une arme mortelle (2 dégâts). Si vous décidez au contraire de l'utiliser comme une arme simple (1 dégât), vous pouvez Frapper ou Riposter avec +vivacité (au lieu de +fer). Si vous le faites, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "technique-baton",
            "description": "Quand vous vous Emparez d'un Avantage avec +vivacité en utilisant votre bâton pour désarmer, renverser, pousser ou étourdir votre ennemi, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "baton-voyageur",
            "description": "Lorsque vous Entreprenez un Voyage et obtenez un succès fort, ou lorsque vous accompagnez un allié qui obtient un coup fort en déclenchant cette action, vous gagnez +1 élan tandis que votre bâton vous apporte soutien et réconfort lors de vos déplacements.",
            "requiresInput": false
          }
        ]
      }
  ,
      {
        "id": "duelliste",
        "name": "Duelliste",
        "type": "combat",
        "description": "Lorsque vous maniez une arme blanche dans chaque main...",
        "abilities": [
          {
            "id": "double-lame",
            "description": "Quand vous Frappez ou Ripostez, vous pouvez ajouter +2 (décidez-en avant de faire votre jet). Si vous le faites, infligez +1 dégât sur un coup fort, mais considérez un coup faible comme un échec.",
            "requiresInput": false
          },
          {
            "id": "demonstration",
            "description": "Une fois par combat, lorsque vous vous Emparez d'un Avantage avec +vivacité en faisant une éclatante démonstration de vos talents de combattant, vous pouvez relancer n'importe quel dé.",
            "requiresInput": false
          },
          {
            "id": "duelliste-confirme",
            "description": "Lorsque vous Tracez le Cercle, retenez l'une des options suivantes (avant de faire votre jet): Ajoutez +2 ou Gagnez +2 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "egorgeur",
        "name": "Égorgeur",
        "type": "combat",
        "description": "Lorsque vous maniez une dague ou un couteau...",
        "abilities": [
          {
            "id": "coup-sournois",
            "description": "Quand vous êtes en position de Frapper un ennemi qui ne se doute de rien, retenez l'une de ces deux options (avant de faire votre jet) : Ajouter +2 et gagner +1 élan sur un succès ou Infliger +2 dégâts sur un succès.",
            "requiresInput": false
          },
          {
            "id": "menace-lame",
            "description": "Lorsque vous Contraignez quelqu'un à la pointe de votre lame, ou lorsque vous comptez sur votre lame pour Faire Face au Danger, ajoutez +1.",
            "requiresInput": false
          },
          {
            "id": "feinte",
            "description": "Une fois par combat, lorsque vous vous Emparez d'un Avantage avec +ombre grâce à une feinte ou une diversion, relancez n'importe quel dé et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "escarmoucheur",
        "name": "Escarmoucheur",
        "type": "combat",
        "description": "Lorsque vous maniez une lance...",
        "abilities": [
          {
            "id": "garde-distance",
            "description": "Quand vous Faites Face au Danger en tenant un ennemi en respect grâce à l'allonge de votre lance, faites un jet +fer ou +vivacité. Si vous obtenez un coup fort, retenez l'option adéquate : Avec Fer : Frappez (si vous avez l'initiative) ou Ripostez immédiatement, et ajoutez +1. Avec Vivacité : Gagnez +1 élan.",
            "requiresInput": false
          },
          {
            "id": "embrocher",
            "description": "Quand vous Frappez au corps à corps, vous pouvez tenter d'embrocher votre adversaire (décidez-en avant de faire votre jet). Si vous le faites, ajoutez +1 et infligez +2 dégâts sur un succès. Si le combat continue et que vous avez obtenu un succès, vous devrez Faire Face au Danger avec +fer pour retirer votre lance avant de pouvoir la réutiliser.",
            "requiresInput": false
          },
          {
            "id": "reception-charge",
            "description": "Quand vous vous Emparez d'un Avantage en braquant votre lance sur un ennemi qui vous charge, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "fer-vetu",
        "name": "Fer-Vêtu",
        "type": "combat",
        "description": "Si vous portez une armure...",
        "abilities": [
          {
            "id": "choix-armure",
            "description": "Lorsque vous revêtissez ou ajustez votre armure, retenez l'une des options suivantes : Armure légère : Lorsque vous Subissez des Dégâts au cours d'un combat, ajoutez +1 et gagnez +1 élan sur un succès. Armure de guerre : Notez le handicap encombré. Lorsque vous Subissez des Dégâts au cours d'un combat, ajoutez +2 et gagnez +1 élan sur un succès.",
            "requiresInput": true,
            "inputLabel": "Type d'armure"
          },
          {
            "id": "riposte-blindee",
            "description": "Lorsque vous Ripostez en portant votre armure de guerre, ajoutez +1.",
            "requiresInput": false
          },
          {
            "id": "force-armure",
            "description": "Lorsque vous Contraignez dans une situation où la force physique est un facteur, ajoutez +2.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "fendeur",
        "name": "Fendeur",
        "type": "combat",
        "description": "Lorsque vous maniez une hache...",
        "abilities": [
          {
            "id": "coup-brutal",
            "description": "Quand vous Frappez ou Ripostez au corps à corps, vous pouvez choisir de subir -1 élan pour infliger +1 dégât sur un succès (décidez-en avant de faire votre jet).",
            "requiresInput": false
          },
          {
            "id": "intimidation-hache",
            "description": "Lorsque vous tenez votre hache en main et que vous menacez d'être violent pour Contraindre ou vous Emparer d'un Avantage, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "rune-hache",
            "description": "Quand vous rendez hommage à un ennemi vaincu (de rang redoutable ou plus) en gravant une rune sur le manche de votre hache, faites un jet +cœur. Sur un coup fort, vous pouvez infliger +1d6 dégâts (une seule fois) lorsque vous Frappez ou Ripostez. Sur un coup faible, comme précédemment, mais cette mort vous pèse ; vous Subissez un Stress (2 stress).",
            "requiresInput": false
          }
        ]
      }
  ,
      {
        "id": "frondeur",
        "name": "Frondeur",
        "type": "combat",
        "description": "Lorsque vous maniez une fronde...",
        "abilities": [
          {
            "id": "pierre-mortelle",
            "description": "Lorsque vous projetez une simple pierre avec une fronde, celle-ci devient une arme mortelle (infligeant 2 dégâts). Lorsque vous Plongez dans la Mêlée en mitraillant votre adversaire de balles de fronde, vous infligez des dégâts sur un coup fort.",
            "requiresInput": false
          },
          {
            "id": "tir-tactique",
            "description": "Lorsque vous Frappez en lançant des pierres sur un adversaire qui avance vers vous, retenez l'une des options suivantes (décidez-en avant votre jet) : Tenir à distance : Vous gardez l'initiative sur un coup faible, mais n'infligez que 1 dégât ou Frapper fort : Vous infligez +1 dégât sur un succès, mais subissez une pénalité de -1 élan.",
            "requiresInput": false
          },
          {
            "id": "munitions-choisies",
            "description": "Lorsque vous vous Emparez d'un Avantage en préparant de pierres d'une qualité ou d'un matériau particulier, ajoutez +1. Vous gagnez +1 élan ou +1 provisions sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "maitre-epeiste",
        "name": "Maître-Épéiste",
        "type": "combat",
        "description": "Lorsque vous maniez une épée...",
        "abilities": [
          {
            "id": "maitrise-lame",
            "description": "Quand vous Frappez ou Ripostez et brûlez de l'élan pour améliorer votre résultat, vous infligez +2 dégâts. Si le combat continue, ajoutez +1 à votre prochaine action.",
            "requiresInput": false
          },
          {
            "id": "enchainement",
            "description": "Quand vous Ripostez et obtenez un coup fort, vous pouvez ajouter +1 si vous enchaînez immédiatement en déclenchant l'action Frapper.",
            "requiresInput": false
          },
          {
            "id": "voeu-epee",
            "description": "Quand vous Jurez un Vœu de Fer en vous agenouillant et en saisissant la lame de votre épée, ajoutez +1 et gagnez +1 élan sur un succès. Si vous serrez votre lame pour entailler vos paumes jusqu'au sang, vous Subissez des Dégâts (1 dégât) en échange de +1 élan supplémentaire sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "frappe-tonnerre",
        "name": "Frappe-Tonnerre",
        "type": "combat",
        "description": "Si vous maniez un puissant marteau...",
        "abilities": [
          {
            "id": "force-brute",
            "description": "Lorsque vous Faites Face au Danger, que vous vous Emparez d'un Avantage ou que vous Contraignez en tapant ou en brisant un objet inanimé, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          },
          {
            "id": "coup-etourdissant",
            "description": "Lorsque vous Frappez un ennemi afin de le repousser, l'assommer ou le déséquilibrer, vous infligez 1 dégât (au lieu de 2) et vous gagnez +2 élan sur un succès. Sur un coup fort, vous créez également une ouverture et ajoutez +1 à votre prochaine action.",
            "requiresInput": false
          },
          {
            "id": "coup-devastateur",
            "description": "Lorsque vous Renversez la Situation, vous pouvez Frapper avec toute la rage et la puissance qu'il vous reste. Si vous le faites (décidez-en avant votre jet), vous pouvez relancer n'importe quel dé et infliger +2 dégâts sur un coup fort, mais un coup faible sera considéré comme un échec.",
            "requiresInput": false
          }
        ]
      }
  ,
      {
        "id": "communion",
        "name": "Communion",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "appel-esprit",
            "description": "Lorsque vous placez des bougies allumées autour du corps d'une créature intelligente récemment décédée, vous pouvez invoquer son esprit en faisant un jet +cœur. Ajoutez +1 si vous partagiez un lien. Sur un coup fort, son esprit vous apparaît et vous pouvez converser pendant quelques minutes. Déclenchez les actions appropriées (ajoutez +1). Sur un coup faible, comme précédemment, mais l'esprit vous révèle une nouvelle troublante, sans lien avec votre intention. Visualisez ce qu'il vous révèle (Consultez l'Oracle en cas de doute) et Subissez un Stress (1 stress).",
            "requiresInput": false
          },
          {
            "id": "medium-puissant",
            "description": "Comme précédemment, mais vous pouvez également communiquer avec les personnes disparues depuis longtemps.",
            "requiresInput": false
          },
          {
            "id": "maitre-communion",
            "description": "Lorsque vous effectuez ce rituel, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "divination",
        "name": "Divination",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "lecture-runes",
            "description": "Lorsque vous prélevez une goutte de sang sur un sujet consentant (vous exclu) puis que vous lancez vos pierres de divination runiques, faites un jet +cœur. Sur un coup fort, vous pouvez lire les runes afin d'en apprendre plus sur cette personne et ceux qui lui sont proches (y compris sur des détails dont ni vous, ni votre sujet, n'ont connaissance). Si vous lisez les runes afin de Récolter des Informations, de Contraindre ou de Forger un Lien, ajoutez +1. Sur un coup faible, comme précédemment, mais la divination vous demandera plus de temps et de concentration ; vous subissez une pénalité de -2 élan.",
            "requiresInput": false
          },
          {
            "id": "visions-futures",
            "description": "Comme précédemment, mais votre divination peut également révéler des informations sur l'avenir de cette personne.",
            "requiresInput": false
          },
          {
            "id": "maitre-divination",
            "description": "Lorsque vous effectuez ce rituel, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "eveil",
        "name": "Éveil",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "creation-simulacre",
            "description": "Lorsque vous créez un simulacre, faites un jet +cœur. Sur un coup fort, votre création s'anime d'une vie surnaturelle. Si vous déclenchez une action en utilisant votre simulacre pour attaquer ou surmonter un obstacle par la force, ajoutez +2. Votre simulacre possède 3 points de santé et subit des dégâts normalement, mais ce n'est pas un compagnon et il ne peut être soigné. Une fois tombé à 0 santé, il meurt. Sur un coup faible, comme précédemment, mais si vous obtenez un résultat de 1 sur votre dé d'action en étant aidé par votre simulacre, vous devez Faire Face au Danger +cœur pour l'empêcher de se retourner contre vous (considérez-le comme un ennemi de rang redoutable).",
            "requiresInput": false
          },
          {
            "id": "simulacre-ameliore",
            "description": "Votre simulacre possède 6 points de santé.",
            "requiresInput": false
          },
          {
            "id": "maitre-eveil",
            "description": "Lorsque vous accomplissez ce rituel, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ],
        "requiresTrack": true,
        "trackMax": 6
      },
      {
        "id": "augure",
        "name": "Augure",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "vol-corbeaux",
            "description": "Lorsque vous invoquez un vol de corbeaux et posez une unique question, faites un jet +astuce. Sur un coup fort, vous interprétez leurs croassements comme étant un présage utile. Visualisez en quoi consiste leur réponse (Consultez l'Oracle en cas de doute) et gagnez +2 élan. Sur un coup faible, les corbeaux ignorent votre question et vous offrent un indice lié à un problème ou une opportunité en rapport avec la zone alentours. Visualisez ce que vous apprenez (Consultez l'Oracle en cas de doute) et gagnez +1 élan.",
            "requiresInput": false
          },
          {
            "id": "guides-ailes",
            "description": "Comme précédemment, mais les corbeaux vous guideront également sur le bon chemin. Sur un succès, ajoutez +1 lors de la prochaine étape quand vous Entreprenez un Voyage.",
            "requiresInput": false
          },
          {
            "id": "maitre-augure",
            "description": "Lorsque vous effectuez ce rituel, ajoutez +1.",
            "requiresInput": false
          }
        ]
      }
  ,
      {
        "id": "pacte",
        "name": "Pacte",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "peau-animal",
            "description": "Lorsque vous dansez au clair de lune en portant la fourrure d'un animal, faites un jet +astuce. Sur un coup fort, vous ou l'un de vos alliés peut porter cette fourrure et ajouter +1 lorsqu'il déclenche une action basée sur la caractéristique associée (loup-vivacité ; ours-fer ; cerf-cœur ; renard-ombre ; sanglier-astuce). Si le porteur obtient un résultat de 1 sur son jet d'action lorsqu'il déclenche une action utilisant la peau de l'animal, alors la magie est épuisée. Sur un coup faible, comme précédemment, mais vous ressentez l'appel de la nature durant votre danse ; vous Subissez un Stress (2 stress).",
            "requiresInput": false
          },
          {
            "id": "peau-bete",
            "description": "Comme précédemment, mais vous pouvez opter pour effectuer ce rituel en utilisant la peau d'une bête. Si vous le faites, choisissez la caractéristique associée et ajoutez +2 au lieu de +1.",
            "requiresInput": false
          },
          {
            "id": "maitre-pacte",
            "description": "Lorsque vous effectuez ce rituel, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "pyromancie",
        "name": "Pyromancie",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "lecture-flammes",
            "description": "Lorsque vous plongez votre regard dans les flammes pour étudier un lieu ou une personne à distance, faites un jet +ombre. Vous ou quelqu'un en votre présence doit obligatoirement connaitre votre cible. Sur un coup fort, vous pouvez Récolter des Informations par le biais de l'observation, en utilisant +ombre ou +astuce. Sur un coup faible, comme précédemment, mais les flammes sont voraces ; sacrifiez l'un des éléments suivants : Votre sang : Subissez des Dégâts (2 dégâts), Un objet précieux : Subissez un Stress (2 stress), Des provisions : Vous subissez -2 provisions.",
            "requiresInput": false
          },
          {
            "id": "vision-passee",
            "description": "Comme précédemment, mais vous pouvez plutôt étudier un événement passé.",
            "requiresInput": false
          },
          {
            "id": "maitre-pyromancie",
            "description": "Lorsque vous effectuez ce rituel, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "invocation",
        "name": "Invocation",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "absorption-essence",
            "description": "Lorsque vous absorbez l'essence mystique autour de vous, faites un jet avec +astuce. Sur un coup fort, ajoutez le résultat de votre dé d'action à votre jauge d'essence (score maximum 6). Vous pouvez alors vous Emparer d'un Avantage ou Faire Face au Danger avec +essence afin de créer des effets mystiques mineurs ou des illusions. Si vous le faites, vous subissez -1 essence et gagnez +1 élan sur un succès. Sur un coup faible, comme précédemment, mais capturer les énergies est très éprouvant : vous Subissez un Stress (2 stress).",
            "requiresInput": false
          },
          {
            "id": "manifestation-pouvoir",
            "description": "Vous pouvez Contraindre avec +essence (vous subissez alors une pénalité de -1 essence) à travers un étalage de puissance.",
            "requiresInput": false
          },
          {
            "id": "maitre-invocation",
            "description": "Lorsque vous effectuez ce rituel, ajoutez +1 et gagnez +1 essence sur un succès.",
            "requiresInput": false
          }
        ],
        "requiresTrack": true,
        "trackMax": 6,
        "trackLabel": "Essence"
      },
      {
        "id": "porteur-lumiere",
        "name": "Porteur de Lumière",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "absorption-lumiere",
            "description": "Lorsque vous vous concentrez sur une source de lumière et absorbez son essence, faites un jet avec +astuce. Sur un coup fort, mettez votre jauge de lumière à +6. Sur un coup faible, mettez-la à +3. Puis, lorsque vous déclenchez une action visant à surmonter l'obscurité ou à vous orienter dans l'obscurité, vous pouvez ajouter +2 et subir une pénalité de -1 lumière.",
            "requiresInput": false
          },
          {
            "id": "frappe-lumineuse",
            "description": "Vous pouvez utiliser votre lumière pour Frapper ou Riposter contre un adversaire vivant dans l'obscurité. Choisissez la quantité de lumière que vous souhaitez libérer, et faites un jet avec +lumière (au lieu de +fer ou +vivacité), puis subissez une pénalité de -lumière équivalente à la quantité libérée. Sur un succès, votre niveau de dégâts par défaut est de 1+la quantité de lumière libérée.",
            "requiresInput": false
          },
          {
            "id": "maitre-lumiere",
            "description": "Lorsque vous effectuez ce rituel, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ],
        "requiresTrack": true,
        "trackMax": 6,
        "trackLabel": "Lumière"
      }
  ,
      {
        "id": "sangsue",
        "name": "Sangsue",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "rune-sang",
            "description": "Lorsque vous marquez vos mains ou une arme d'une rune de sang complexe, faites un jet avec +fer. Sur un coup fort, la rune a soif de sang frais. Une fois seulement, lorsque vous déclenchez une action pour infliger des dégâts, relancez n'importe quel dé et infligez +2 dégâts sur un succès. Puis, pour chaque dégât infligé, vous gagnez +1 santé ou +1 élan. Sur un coup faible, comme précédemment, mais cet atout compte comme un handicap jusqu'à ce que la soif de la rune soit étanchée.",
            "requiresInput": false
          },
          {
            "id": "transfert-benefices",
            "description": "Comme précédemment, et vous pouvez également toucher un allié ou un compagnon afin de lui transférer tout ou partie des bénéfices reçus en gain de +santé ou +élan.",
            "requiresInput": false
          },
          {
            "id": "maitre-sangsue",
            "description": "Lorsque vous effectuez ce rituel, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "talisman",
        "name": "Talisman",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "creation-talisman",
            "description": "Lorsque vous fabriquez un talisman, visualisez celui-ci et désignez la personne ou la créature spécifique contre laquelle il confère une protection. Puis, faites un jet +astuce. Sur un coup fort, lorsque le porteur s'oppose à la cible par le biais d'une action, ajoutez +2. Si un résultat de 1 est obtenu sur le dé d'action en utilisant ce talisman, la magie est épuisée. Sur un coup faible, comme précédemment, mais le porteur ajoute +1 (au lieu de +2).",
            "requiresInput": false
          },
          {
            "id": "talisman-surnaturel",
            "description": "Comme précédemment, mais vous pouvez également fabriquer un talisman qui aide son porteur à lutter contre toutes les menaces surnaturelles, telles que les rituels mystiques ou les horreurs.",
            "requiresInput": false
          },
          {
            "id": "maitre-talisman",
            "description": "Lorsque vous effectuez ce rituel, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "attache",
        "name": "Attache",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "communion-lieu",
            "description": "Lorsque vous communiez avec les esprits d'un endroit, faites un jet avec +cœur. Si vous partagez un lien avec une personne de cet endroit, ajoutez +1. Sur un coup fort, vous êtes attaché à ce lieu. Lorsque vous Entreprenez un Voyage pour y retourner, vous pouvez faire un jet avec +esprit ou +cœur (au lieu de +astuce), et gagner +1 élan sur un succès. Lorsque vous Atteignez votre Destination, vous gagnez +2 élan sur un coup fort. L'attache est perdue si vous effectuez ce rituel ailleurs, ou si vous Faites Face à la Désolation. Sur un coup faible, comme précédemment, mais les esprits vous révèlent un aspect inquiétant de cet endroit : vous Subissez un Stress (2 stress).",
            "requiresInput": false
          },
          {
            "id": "attache-profonde",
            "description": "Comme précédemment, et vous pouvez également relancer n'importe quel dé lorsque vous Séjournez dans l'endroit où vous avez votre attache.",
            "requiresInput": false
          },
          {
            "id": "maitre-attache",
            "description": "Lorsque vous effectuez ce rituel, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "traversee-ombres",
        "name": "Traversée des Ombres",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "dissimulation-ombres",
            "description": "Lorsque vous vous dissimulez dans le voile ténu du royaume des ombres, faites un jet +ombre. Sur un coup fort, vous gagnez +1 élan. Puis, relancez n'importe quel dé (une seule fois) quand vous déclenchez une action en tendant une embuscade, en vous cachant ou en étant discret. Sur un coup faible, comme précédemment, mais les ombres tentent de vous égarer. Vous devez d'abord Faire Face au Danger pour trouver votre chemin.",
            "requiresInput": false
          },
          {
            "id": "voyage-ombres",
            "description": "Comme précédemment, mais vous pouvez également voyager le long des sentiers secrets du royaume des ombres, ce qui vous permet d'Entreprendre un Voyage avec un jet +ombre (au lieu de +astuce). Si vous le faites, vous Subissez un Stress (1 stress) et notez le double de votre progression sur un coup fort.",
            "requiresInput": false
          },
          {
            "id": "maitre-ombres",
            "description": "Lorsque vous effectuez ce rituel, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "emprise",
        "name": "Emprise",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "murmures-vents",
            "description": "Lorsque vous dites aux vents le nom d'une personne à trois reprises, faites un jet +astuce. Sur un coup fort, les vents vous murmurent ce dont cette personne a besoin. Visualisez ce que vous apprenez (Consultez l'Oracle en cas de doute). Si vous utilisez cette information ou répondez à ce besoin lorsque vous tentez de la Contraindre, alors vous pouvez relancer n'importe quel dé (une seule fois). Sur un coup faible, comme précédemment, mais le besoin de cette personne crée un dilemme troublant ou une complication ; vous Subissez un Stress (1 stress).",
            "requiresInput": false
          },
          {
            "id": "emprise-renforcee",
            "description": "Comme précédemment, mais sur un coup fort de l'action Contraindre, vous pouvez également relancer n'importe quel dé (une seule fois) lorsque vous Récoltez des Informations de cette personne.",
            "requiresInput": false
          },
          {
            "id": "maitre-emprise",
            "description": "Lorsque vous effectuez ce rituel, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "grimage",
        "name": "Grimage",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "masque-sang",
            "description": "Lorsque vous appliquez un mélange de sang et de cendres sur votre visage, faites un jet +astuce. Sur un coup fort, vous pouvez ajouter +2 et gagner +1 élan sur un succès lorsque vous vous Emparez d'un Avantage ou que vous Contraignez en usant de la peur ou de l'intimidation. Si vous obtenez un résultat de 1 sur votre dé d'action lorsque vous déclenchez une action aidée par votre grimage, la magie est épuisée. Sur un coup faible, comme précédemment, mais le sang doit être le vôtre ; vous Subissez des Dégâts (2 dégâts).",
            "requiresInput": false
          },
          {
            "id": "grimage-combat",
            "description": "Comme précédemment, mais vous pouvez aussi ajouter +1 lorsque vous Frappez, Ripostez ou Bataillez.",
            "requiresInput": false
          },
          {
            "id": "maitre-grimage",
            "description": "Lorsque vous effectuez ce rituel, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "totem",
        "name": "Totem",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "connexion-totem",
            "description": "Lorsque vous tenez le totem de votre compagnon (animal ou bête) en vous concentrant sur celui-ci, faites un jet +cœur. Sur un coup fort, vous êtes connectés. Ajoutez +1 et gagnez +1 élan sur un succès lorsque vous utilisez une capacité de compagnon. Si vous obtenez un résultat de 1 sur votre dé d'action lorsque vous utilisez une capacité de compagnon, la magie est épuisée. Sur un coup faible, comme précédemment, mais cette connexion est perturbante ; vous Subissez un Stress (1 stress).",
            "requiresInput": false
          },
          {
            "id": "sens-partages",
            "description": "Comme précédemment, mais vous pouvez aussi percevoir le monde par le biais des sens de votre compagnon lorsque vous déclenchez des actions en étant aidé de celui-ci (y compris lorsque vous êtes séparés).",
            "requiresInput": false
          },
          {
            "id": "maitre-totem",
            "description": "Lorsque vous effectuez ce rituel, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "lamentation",
        "name": "Lamentation",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "chant-funebre",
            "description": "Lorsque vous brandissez une arme en chantant une lamentation adressée à tous ceux qu'elle a tué, faites un jet +cœur. Sur un coup fort son porteur inflige +1 dégât lorsqu'il Frappe ou Riposte à l'aide de celle-ci. Si le porteur obtient un résultat de 1 sur son jet d'action lorsqu'il déclenche une action pour infliger des dégâts, alors la magie est épuisée. Sur un coup faible, comme précédemment, mais les voix des défunts se joignent à votre chant ; vous Subissez un Stress (2 stress).",
            "requiresInput": false
          },
          {
            "id": "lamentation-combat",
            "description": "Comme précédemment, mais le porteur de cette arme peut également (une fois seulement) ajouter +1 et gagner +2 élan sur un succès lorsqu'il Trace le Cercle, Plonge dans la Mêlée ou Bataille.",
            "requiresInput": false
          },
          {
            "id": "maitre-lamentation",
            "description": "Lorsque vous effectuez ce rituel, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      },
      {
        "id": "conjuration",
        "name": "Conjuration",
        "type": "ritual",
        "description": "",
        "abilities": [
          {
            "id": "cercle-protection",
            "description": "Lorsque vous tracez un large cercle en répandant du sel sur le sol, faites un jet +astuce. Sur un coup fort, retenez deux options. Sur un coup faible retenez-en une seule. La première fois qu'un ennemi entre dans le cercle, vous gagnez +1 élan. La première fois que vous infligez des dégâts à un ennemi se trouvant dans le cercle, infligez +1 dégât. Il est « probable » (Consultez l'Oracle) que votre cercle de conjuration parvienne à piéger un ennemi dans sa circonférence.",
            "requiresInput": false
          },
          {
            "id": "cercle-puissant",
            "description": "Comme précédemment, mais vous améliorez l'effet de votre cercle de conjuration (+2 élan, 2 dégâts ou « presque certain »).",
            "requiresInput": false
          },
          {
            "id": "maitre-conjuration",
            "description": "Lorsque vous effectuez ce rituel, ajoutez +1 et gagnez +1 élan sur un succès.",
            "requiresInput": false
          }
        ]
      }
];
