export const actions = [
    {
      id: "faire_face_au_danger",
      label: "Faire Face au Danger",
      description: "Lorsque vous tentez quelque-chose de risqué ou que vous réagissez à une menace imminente",
      category: "aventure",
      trigger: "Lorsque vous tentez quelque-chose de risqué ou que vous réagissez à une menace imminente",
      stats: {
        vigueur: "Avec rapidité, agilité ou précision",
        coeur: "En usant de votre charme, par loyauté ou avec courage",
        fer: "En agissant agressivement, en vous défendant brutalement, en testant votre force ou votre endurance",
        ombre: "En ayant recours à de la tromperie, à la discrétion ou à la ruse",
        astuce: "En tirant parti de votre expertise, de votre inspiration ou d'observation"
      },
      outcomes: {
        strongHit: ["Vous obtenez un succès et gagnez +1 élan"],
        weakHit: [
          "Vous y parvenez, mais il vous en coûte. Choisissez l'une des options suivantes:",
          "Vous êtes épuisé ou blessé : Subissez des Dégâts (1 dégât)",
          "Vous êtes démoralisé ou effrayé : Subissez du Stress (1 Stress)",
          "Vous sacrifiez des ressources : vous subissez -1 provisions"
        ],
        miss: ["Vous échouez ou vos progrès sont minés par un rebondissement dramatique ou coûteux. Vous devez en Payer le Prix"]
      }
    },
    {
      id: "s_emparer_d_un_avantage",
      label: "S'emparer d'un Avantage",
      description: "Lorsque vous évaluez une situation, que vous faites des préparatifs ou que vous tentez d'obtenir un moyen de pression",
      category: "aventure",
      trigger: "Lorsque vous évaluez une situation, que vous faites des préparatifs ou que vous tentez d'obtenir un moyen de pression",
      stats: {
        vigueur: "Avec rapidité, agilité ou précision",
        coeur: "En usant de votre charme, par loyauté ou avec courage",
        fer: "En agissant agressivement, en vous défendant brutalement, en testant votre force ou votre endurance",
        ombre: "En ayant recours à de la tromperie, à la discrétion ou à la ruse",
        astuce: "En tirant parti de votre expertise, de votre inspiration ou d'observation"
      },
      outcomes: {
        strongHit: [
          "Vous obtenez un avantage. Choisissez l'un des deux bénéfices suivants:",
          "Vous prenez le contrôle : Déclenchez une autre action immédiatement (sauf une action de progrès) ; vous gagnez +1 sur cette dernière",
          "Vous vous préparez à agir : Vous gagnez +2 élan"
        ],
        weakHit: ["Votre avantage est de courte durée. Vous gagnez +1 élan"],
        miss: ["Votre tentative échoue ou vos suppositions vous égarent. Vous devez en Payer le Prix"]
      }
    },
  ,
    {
      id: "recolter_des_informations",
      label: "Récolter des Informations",
      description: "Lorsque vous fouillez une zone, posez des questions, menez une investigation ou remontez une piste",
      category: "aventure",
      trigger: "Lorsque vous fouillez une zone, posez des questions, menez une investigation ou remontez une piste",
      stats: {
        astuce: "Utilisez votre astuce pour récolter des informations"
      },
      outcomes: {
        strongHit: [
          "Vous découvrez quelque-chose d'utile et de spécifique. Le chemin que vous devez suivre ou votre prochaine action vous apparaissent clairement. Vous gagnez +2 élan"
        ],
        weakHit: [
          "L'information obtenue complique votre quête ou introduit un nouveau danger. Vous gagnez +1 élan"
        ],
        miss: [
          "Votre investigation révèle une terrible menace ou met au jour une vérité indésirable qui mine votre quête. Vous devez en Payer le Prix"
        ]
      },
      additionalEffects: {
        withBond: "Si vous agissez au sein d'une communauté ou que vous posez des questions concernant une personne avec laquelle vous partagez un lien, ajoutez +1"
      }
    },
    {
      id: "guerir",
      label: "Guérir",
      description: "Lorsque vous tentez de traiter une blessure ou une maladie",
      category: "aventure",
      trigger: "Lorsque vous tentez de traiter une blessure ou une maladie",
      stats: {
        astuce: "Utilisez votre astuce pour soigner"
      },
      outcomes: {
        strongHit: [
          "Vos soins sont utiles. Si vous (ou l'allié que vous soignez) souffre de l'état blessé, vous pouvez l'effacer. Puis, gagnez ou donnez +2 santé"
        ],
        weakHit: [
          "Comme précédemment, mais vous devez subir -1 provision ou -1 élan (au choix)"
        ],
        miss: [
          "Votre aide est inefficace. Vous en Payez le Prix"
        ]
      }
    },
    {
      id: "ravitaillement",
      label: "Ravitaillement",
      description: "Lorsque vous chassez, que vous cueillez ou que vous fouillez",
      category: "aventure",
      trigger: "Lorsque vous chassez, que vous cueillez ou que vous fouillez",
      stats: {
        astuce: "Utilisez votre astuce pour trouver des ressources"
      },
      outcomes: {
        strongHit: ["Vous augmentez vos provisions de +2"],
        weakHit: [
          "Vous gagnez jusqu'à +2 provisions, mais vous subissez -1 élan pour chaque point gagné"
        ],
        miss: [
          "Vous ne trouvez rien d'utile. Vous en Payez le Prix"
        ]
      }
    },
    {
      id: "monter_le_camp",
      label: "Monter le Camp",
      description: "Lorsque vous vous reposez et récupérez pendant plusieurs heures dans la nature",
      category: "aventure",
      trigger: "Lorsque vous vous reposez et récupérez pendant plusieurs heures dans la nature",
      outcomes: {
        strongHit: [
          "Vos alliés et vous pouvez retenir chacun jusqu'à deux des options suivantes"
        ],
        weakHit: [
          "Retenez-en une seule"
        ],
        miss: [
          "Vous ne bénéficiez d'aucun confort. Vous en Payez le Prix"
        ]
      },
      options: [
        {
          name: "Récupérer",
          description: "Vous gagnez +1 santé pour vous-même et pour chacun de vos compagnons"
        },
        {
          name: "Festoyer",
          description: "Vous subissez -1 provisions et gagnez +1 santé pour vous-même et pour chacun de vos compagnons"
        },
        {
          name: "Se Relaxer",
          description: "Vous gagnez +1 esprit"
        },
        {
          name: "Se Concentrer",
          description: "Vous gagnez +1 élan"
        },
        {
          name: "Se Préparer",
          description: "Lorsque vous levez le camp, ajoutez +1 si vous Entreprenez un Voyage"
        }
      ]
    },
    {
      id: "entreprendre_un_voyage",
      label: "Entreprendre un Voyage",
      description: "Lorsque vous voyagez en territoire hostile ou inconnu",
      category: "aventure",
      stats: {
        astuce: "Jet +astuce"
      },
      trigger: "Lorsque vous voyagez en territoire hostile ou inconnu",
      rank: {
        pénible: "Cochez entièrement trois cases de progrès à chaque escale",
        dangereux: "Cochez entièrement deux cases de progrès à chaque escale",
        redoutable: "Cochez entièrement une case de progrès à chaque escale",
        extrême: "Notez deux coches par escale",
        épique: "Notez un coche par escale"
      },
      outcomes: {
        strongHit: [
          "Vous atteignez une nouvelle escale. Retenez l'une de ces deux options:",
          "Vous faites bon usage de vos ressources : Notez votre progression",
          "Vous vous hâtez : Notez votre progression et gagnez +1 élan, mais vous subissez -1 provisions"
        ],
        weakHit: [
          "Vous atteignez une escale et notez votre progression, mais vous subissez -1 provisions"
        ],
        miss: [
          "Vous êtes interrompu par un événement périlleux. Vous en Payez le Prix"
        ]
      },
      additionalEffects: {
        withBond: "Si vous partez d'une communauté avec laquelle vous partagez un lien, ajoutez +1 à votre jet initial"
      }
    },
    {
      id: "plonger_dans_la_melee",
      label: "Plonger dans la Mêlée",
      description: "Quand vous engagez le combat",
      category: "combat",
      trigger: "Quand vous engagez le combat",
      rank: {
        pénible: "3 progrès par blessure ; inflige 1 dégât",
        dangereux: "2 progrès par blessure ; inflige 2 dégâts",
        redoutable: "1 progrès par blessure ; inflige 3 dégâts",
        extrême: "2 coches par blessure ; inflige 4 dégâts",
        épique: "1 coche par blessure ; inflige 5 dégâts"
      },
      stats: {
        coeur: "Face à votre ennemi",
        ombre: "En train de vous glisser dans le dos d'un ennemi ou que vous frappez sans prévenir",
        astuce: "Pris en embuscade"
      },
      outcomes: {
        strongHit: [
          "Vous gagnez +2 élan. Vous avez l'initiative"
        ],
        weakHit: [
          "Choisissez l'une des deux options:",
          "Vous renforcez votre position : Vous gagnez +2 élan",
          "Vous vous préparez à agir : Vous prenez l'initiative"
        ],
        miss: [
          "Le combat s'engage alors que vous êtes désavantagé. Vous devez en Payer le Prix. Votre ennemi gagne l'initiative"
        ]
      }
    },
    {
      id: "frapper",
      label: "Frapper",
      description: "Lorsque vous avez l'initiative et que vous attaquez",
      category: "combat",
      trigger: "Lorsque vous avez l'initiative et que vous attaquez",
      stats: {
        fer: "Au corps à corps",
        vigueur: "À distance"
      },
      outcomes: {
        strongHit: [
          "Vous infligez +1 dégât. Vous conservez l'initiative"
        ],
        weakHit: [
          "Vous infligez vos dégâts et perdez l'initiative"
        ],
        miss: [
          "Votre attaque échoue et vous devez en Payer le Prix. L'ennemi possède l'initiative"
        ]
      }
    },
    {
      id: "fracasser",
      label: "Fracasser",
      description: "Lorsque votre ennemi a l'initiative et que vous combattez",
      category: "combat",
      trigger: "Lorsque votre ennemi a l'initiative et que vous combattez",
      stats: {
        fer: "Au corps à corps",
        vigueur: "Lorsque vous échangez des projectiles ou que vous visez un ennemi qui approche"
      },
      outcomes: {
        strongHit: [
          "Vous infligez vos dégâts et retenez l'une des deux options suivantes. Vous avez l'initiative:",
          "Vous renforcez votre position : Vous gagnez +1 élan",
          "Vous trouvez une ouverture : Vous infligez +1 dégât"
        ],
        weakHit: [
          "Vous infligez vos dégâts, mais vous devez ensuite en Payer le Prix. Votre ennemi possède l'initiative"
        ],
        miss: [
          "Vous êtes dépassé et devez en Payer le Prix. Votre ennemi possède l'initiative"
        ]
      }
    },
    {
      id: "batailler",
      label: "Batailler",
      description: "Lorsque vous êtes au cœur de la bataille et que tout est chaotique",
      category: "combat",
      trigger: "Lorsque vous êtes au cœur de la bataille et que tout est chaotique",
      stats: {
        vigueur: "À distance ou en tirant parti de votre vitesse et que le terrain est à votre avantage",
        coeur: "En n'écoutant que votre courage ou en vous reposant sur vos alliés ou vos compagnons",
        fer: "Au corps à corps pour dominer vos adversaires",
        ombre: "En usant de tromperie pour confondre vos adversaires",
        astuce: "En ayant recours à des tactiques prudentes pour déjouer vos adversaires"
      },
      outcomes: {
        strongHit: [
          "Vous atteignez pleinement votre objectif. Faites un jet +2 élan"
        ],
        weakHit: [
          "Vous atteignez votre objectif, mais pas sans un certain coût. Vous devez en Payer le Prix"
        ],
        miss: [
          "Vous êtes vaincu et votre objectif vous échappe. Vous devez en Payer le Prix"
        ]
      }
    }
  ,
    {
      id: "renverser_la_situation",
      label: "Renverser la Situation",
      description: "Lorsque vous jouez le tout pour le tout",
      category: "combat",
      trigger: "Une fois par combat, lorsque vous jouez le tout pour le tout",
      outcomes: {
        effect: [
          "Vous pouvez voler l'initiative à votre ennemi afin de déclencher une action (sauf une action de progrès)",
          "Lorsque vous le faites, ajoutez +1 et gagnez +1 élan sur un succès",
          "Si vous obtenez un échec sur cette action, vous devez subir un sort terrible. Vous en Payez le Prix"
        ]
      }
    },
    {
      id: "mettre_fin_au_combat",
      label: "Mettre Fin au Combat",
      description: "Lorsque vous déclenchez une action décisive",
      category: "combat",
      mechanicType: "action_de_progres",
      trigger: "Lorsque vous déclenchez une action décisive, et que vous obtenez un coup fort",
      outcomes: {
        strongHit: [
          "Cet ennemi n'est plus engagé au combat. Il est tué, hors d'état de nuire, il fuit ou se rend, selon la situation et vos intentions"
        ],
        weakHit: [
          "Comme ci-dessus, mais vous devez aussi retenir l'une de ces options:",
          {
            name: "C'est pire que vous ne le pensiez",
            description: "Vous Subissez des Dégâts"
          },
          {
            name: "Vous êtes dépassé",
            description: "Vous Subissez un Stress"
          },
          "Votre victoire est de courte durée : Un nouveau danger ou un nouvel ennemi apparaît, ou un danger existant empire",
          "Vous subissez des dégâts collatéraux : Un objet de valeur est perdu ou brisé, ou quelqu'un d'important vous en payer le prix",
          "Vous allez le payer : L'un de vos objectifs est désormais hors d'atteinte",
          "Les autres ne l'oublieront pas : Vous faites l'objet d'une vendetta"
        ],
        miss: [
          "Vous avez perdu ce combat. Vous devez en Payer le Prix"
        ]
      }
    },
    {
      id: "contraindre",
      label: "Contraindre",
      description: "Lorsque vous tentez de persuader quelqu'un de faire quelque-chose",
      category: "relation",
      trigger: "Lorsque vous tentez de persuader quelqu'un de faire quelque-chose",
      stats: {
        coeur: "Le charmez, l'apaisez, que vous tentez de le convaincre ou de faire du troc avec lui",
        fer: "Le menacez ou le provoquez",
        ombre: "Lui mentez ou que vous l'arnaquez"
      },
      outcomes: {
        strongHit: [
          "Cette personne fera ce que vous souhaitez ou vous révélera ce qu'elle sait. Vous gagnez +1 élan",
          "Si vous utilisez cet échange pour Récolter des Informations, déclenchez immédiatement cette action et ajoutez +1"
        ],
        weakHit: [
          "Comme ci-dessus, mais cette personne exigera quelque-chose de vous en retour"
        ],
        miss: [
          "La personne refuse, ou elle vous fait une demande qui vous sera très coûteuse. Vous devez en Payer le Prix"
        ]
      },
      additionalEffects: {
        withBond: "Ajoutez +1 si vous partagez un lien"
      }
    },
    {
      id: "tracer_le_cercle",
      label: "Tracer le Cercle",
      description: "Lorsque vous défiez quelqu'un en duel cérémoniel ou que vous acceptez un défi",
      category: "relation",
      stats: {
        coeur: "Jet +coeur"
      },
      trigger: "Lorsque vous défiez quelqu'un en duel cérémoniel ou que vous acceptez un défi",
      outcomes: {
        strongHit: [
          "Vous gagnez +1 élan",
          "Vous pouvez aussi choisir jusqu'à trois vantardises et gagnez +1 élan pour chacune d'entre elles"
        ],
        weakHit: [
          "Vous pouvez choisir une vantardise pour gagner +1 élan"
        ],
        miss: [
          "Vous engagez en duel en étant désavantagé. Votre ennemi a l'initiative. Vous devez en Payer le Prix"
        ]
      },
      additionalEffects: {
        withBond: "Si vous partagez un lien avec cette communauté, ajoutez +1",
        vantardises: [
          {
            name: "Accorder le premier coup",
            description: "Votre ennemi a l'initiative"
          },
          {
            name: "À découvert",
            description: "Vous ne bénéficiez d'aucune armure ou bouclier ; les dégâts de votre adversaire sont à +1"
          },
          {
            name: "Renier le fer",
            description: "Vous ne bénéficiez d'aucune arme ; vos dégâts sont de 1"
          },
          {
            name: "Scarification",
            description: "Vous Subissez des Dégâts (1 dégât)"
          },
          {
            name: "À la mort",
            description: "D'une façon ou d'une autre, ce combat doit se conclure par la mort"
          }
        ]
      }
    },
    {
      id: "sejourner",
      label: "Séjourner",
      description: "Lorsque vous passez du temps dans une communauté à demander assistance",
      category: "relation",
      stats: {
        coeur: "Jet +coeur"
      },
      trigger: "Lorsque vous passez du temps dans une communauté à demander assistance",
      outcomes: {
        strongHit: [
          "Vos alliés et vous pouvez chacun retenir deux options dans une même catégorie ci-dessous"
        ],
        weakHit: [
          "N'en retenez qu'une seule"
        ],
        miss: [
          "Vous ne trouvez aucune aide en ces lieux. Vous devez en Payer le Prix"
        ]
      },
      additionalEffects: {
        withBond: "Si vous partagez un lien avec cette communauté, alors vous pouvez retenir une option supplémentaire",
        options: {
          eliminer_un_etat: [
            {
              name: "Soigner",
              description: "Vous éliminez le handicap blessé et gagnez +1 santé"
            },
            {
              name: "Encourager",
              description: "Vous éliminez le handicap secoué et gagnez +1 esprit"
            },
            {
              name: "Équiper",
              description: "Vous éliminez le handicap mal préparé et gagnez +1 provisions"
            }
          ],
          recuperer: [
            {
              name: "Rétablir",
              description: "Vous gagnez +2 santé pour vous-même ou pour n'importe lequel de vos compagnons"
            },
            {
              name: "Fréquenter",
              description: "Vous gagnez +2 esprit"
            },
            {
              name: "Approvisionner",
              description: "Vous gagnez +2 provisions"
            },
            {
              name: "Planifier",
              description: "Vous gagnez +2 élan"
            }
          ],
          venir_en_aide: [
            {
              name: "Accepter une quête",
              description: "Visualisez ce dont cette communauté a besoin, ou à quel problème ils sont confrontés. Si vous choisissez de les aider, Jurez un Vœu de Fer et ajoutez +1"
            }
          ]
        }
      }
    }
  ,
    {
      id: "aider_votre_allie",
      label: "Aider votre Allié",
      description: "Lorsque vous vous Emparez d'un Avantage afin d'aider directement un allié",
      category: "relation",
      trigger: "Lorsque vous vous Emparez d'un Avantage afin d'aider directement un allié",
      outcomes: {
        effect: [
          "Si vous obtenez un succès, alors c'est lui (au lieu de vous) qui profitera les bénéfices de cette action",
          "Si vous êtes engagé dans un combat et que vous obtenez un coup fort, alors votre allié et vous avez l'initiative"
        ]
      }
    },
    {
      id: "forger_un_lien",
      label: "Forger un Lien",
      description: "Lorsque vous avez passé un certain temps en compagnie d'une personne ou au sein d'une communauté",
      category: "relation",
      stats: {
        coeur: "Jet +coeur"
      },
      trigger: "Lorsque vous avez passé un certain temps en compagnie d'une personne ou au sein d'une communauté, que vous avez fait face ensemble aux mêmes épreuves, ou que vous avez consenti à des sacrifices pour faire avancer leur cause",
      outcomes: {
        strongHit: [
          "Notez ce lien, ajoutez une coche dans la jauge de celui-ci, puis choisissez l'une de ces deux options:",
          "Vous gagnez +1 esprit",
          "Vous gagnez +2 élan"
        ],
        weakHit: [
          "La personne ou la communauté exige d'abord quelque-chose de vous. Faites-le (ou Jurez un Vœu de Fer), puis notez ce lien"
        ],
        miss: [
          "Vous êtes rembarré. Vous devez en Payer le Prix"
        ]
      },
      additionalEffects: {
        realiserVoeu: "Si vous déclenchez cette action juste après avoir réussi à Réaliser votre Vœu à leur profit, alors vous pouvez relancer n'importe quel dé"
      }
    },
    {
      id: "tester_votre_lien",
      label: "Tester votre Lien",
      description: "Lorsque votre lien est mis à l'épreuve par un conflit, une trahison ou les circonstances",
      category: "relation",
      stats: {
        coeur: "Jet +coeur"
      },
      trigger: "Lorsque votre lien est mis à l'épreuve par un conflit, une trahison ou les circonstances",
      outcomes: {
        strongHit: [
          "Cette épreuve a renforcé votre lien. Retenez l'une des options suivantes:",
          "Vous gagnez +1 esprit",
          "Vous gagnez +2 élan"
        ],
        weakHit: [
          "Votre lien est fragile et vous devez prouver votre loyauté. Visualisez ce que cette personne ou cette communauté exige de votre part et faites-le (ou Jurez un Vœu de Fer)",
          "Si vous déclinez ou que vous échouez, effacez votre lien et Payez le Prix"
        ],
        miss: [
          "Effacez le lien et Payez le Prix"
        ]
      }
    },
    {
      id: "subir_des_degats",
      label: "Subir des Dégâts",
      description: "Lorsque vous devez faire face à des dégâts physiques",
      category: "souffrance",
      stats: {
        sante: "Jet +sante",
        fer: "Jet +fer"
      },
      trigger: "Lorsque vous devez faire face à des dégâts physiques",
      outcomes: {
        strongHit: [
          "Retenez l'une de ces deux options:",
          "Serrer les dents : Si votre santé est supérieure à 0, vous pouvez échanger -1 élan contre +1 santé",
          "Épouser la douleur : Vous gagnez +1 élan"
        ],
        weakHit: [
          "Vous allez de l'avant"
        ],
        miss: [
          "Vous subissez également une pénalité de -1 élan",
          "Si vous tombez à 0 santé, vous devez noter le handicap blessé ou mutilé (si vous ne l'avez pas déjà) ou faire un jet dans le tableau des blessures graves"
        ]
      },
      additionalEffects: {
        degatsInitiaux: "Vous subissez une pénalité de santé égale au rang de votre adversaire ou appropriée à la situation",
        sante0: "Si votre santé tombe à 0, vous subissez une pénalité d'élan égale au reliquat des dégâts subis",
        tableauBlessuresGraves: [
          {
            name: "1-10",
            description: "Les dégâts sont mortels. Faites Face à la Mort"
          },
          {
            name: "11-20",
            description: "Vous êtes mourant. Vous devrez parvenir à Guérir dans les deux heures qui suivent, pour ne pas Faire Face à la Mort"
          },
          {
            name: "21-35",
            description: "Vous tombez inconscient et êtes hors-jeu"
          },
          {
            name: "36-50",
            description: "Vous êtes sous le choc et vous luttez pour garder conscience"
          },
          {
            name: "51-100",
            description: "Vous êtes tuméfié mais toujours debout"
          }
        ]
      }
    },
    {
      id: "faire_face_a_la_mort",
      label: "Faire Face à la Mort",
      description: "Lorsque vous êtes à l'article de la mort et que vous avez un aperçu de l'au-delà",
      category: "souffrance",
      trigger: "Lorsque vous êtes à l'article de la mort et que vous avez un aperçu de l'au-delà",
      stats: {
        coeur: "Jet +coeur"
      },
      outcomes: {
        strongHit: [
          "La mort vous rejette. Vous revenez dans le monde des vivants"
        ],
        weakHit: [
          "Choisissez l'une des deux options suivantes:",
          "Vous mourez, mais pas avant d'avoir accompli un noble sacrifice",
          "La mort désire quelque-chose de votre part en échange de votre vie. Jurez un Vœu de Fer (de rang redoutable ou extrême) pour mener cette quête à bien"
        ],
        miss: [
          "Vous êtes mort"
        ]
      }
    },
    {
      id: "degats_au_compagnon",
      label: "Dégâts au Compagnon",
      description: "Lorsque l'un de vos compagnons subit des dégâts physiques",
      category: "souffrance",
      stats: {
        coeur: "Jet +coeur",
        sante_compagnon: "Jet +sante du compagnon"
      },
      trigger: "Lorsque l'un de vos compagnons subit des dégâts physiques",
      outcomes: {
        strongHit: [
          "Votre compagnon se reprend. Donnez-lui +1 santé"
        ],
        weakHit: [
          "Votre compagnon est battu",
          "Si sa santé tombe à 0, il ne pourra plus vous assister jusqu'à ce que qu'il récupère au moins +1 santé"
        ],
        miss: [
          "Vous subissez également -1 élan",
          "Si la santé de votre compagnon tombe à 0, alors il est gravement blessé et considéré comme étant hors-jeu",
          "Sans assistance, celui-ci décèdera dans une heure ou deux"
        ]
      }
    }
  ,
    {
      id: "subir_un_stress",
      label: "Subir un Stress",
      description: "Lorsque vous faites face à un choc émotionnel ou au désespoir",
      category: "souffrance",
      stats: {
        coeur: "Jet +coeur",
        esprit: "Jet +esprit"
      },
      trigger: "Lorsque vous faites face à un choc émotionnel ou au désespoir",
      outcomes: {
        strongHit: [
          "Retenez l'une de ces deux options:",
          "Serrer les dents : Si votre esprit est supérieur à 0, vous pouvez échanger -1 élan contre +1 esprit",
          "Épouser les ténèbres : Vous gagnez +1 élan"
        ],
        weakHit: [
          "Vous allez de l'avant"
        ],
        miss: [
          "Vous subissez également une pénalité de -1 élan",
          "Si vous tombez à 0 esprit, vous devez noter le handicap secoué ou corrompu (si vous n'en souffrez pas déjà) ou faire un jet dans le tableau de désespoir"
        ]
      },
      additionalEffects: {
        tableauDesespoir: [
          {
            name: "1-10",
            description: "Le désespoir vous submerge. Faites Face à la Désolation"
          },
          {
            name: "11-25",
            description: "Vous renoncez : Abandonnez votre Vœu (si possible, celui en lien avec votre crise actuelle)"
          },
          {
            name: "26-50",
            description: "Vous cédez à la peur ou à vos pulsions et agissez à l'encontre de vos propres intérêts"
          },
          {
            name: "51-100",
            description: "Vous persévérez"
          }
        ]
      }
    },
    {
      id: "faire_face_a_la_desolation",
      label: "Faire Face à la Désolation",
      description: "Lorsque vous êtes amené au seuil de la désolation",
      category: "souffrance",
      trigger: "Lorsque vous êtes amené au seuil de la désolation",
      outcomes: {
        strongHit: [
          "Vous résistez et allez de l'avant"
        ],
        weakHit: [
          "Retenez l'une des deux options suivantes:",
          "Votre esprit ou votre raison se brise, mais pas avant de vous avoir permis d'accomplir un noble sacrifice",
          "Vous avez une vision d'un terrible événement à venir. Jurez un Vœu de Fer (redoutable ou extrême) visant à l'éviter"
        ],
        miss: [
          "Vous succombez au désespoir ou à l'horreur. Vous êtes perdu"
        ]
      }
    },
    {
      id: "a_court_de_provisions",
      label: "À Court de Provisions",
      description: "Lorsque vos provisions sont épuisées",
      category: "souffrance",
      trigger: "Lorsque vos provisions sont épuisées (réduites à 0)",
      outcomes: {
        effect: [
          "Notez le handicap mal préparé",
          "Si vous subissez de nouveau une pénalité de provisions en étant mal préparé, alors vous devez déduire cette valeur de vos jauges de santé, d'esprit ou d'élan, selon ce qui correspond le mieux aux circonstances"
        ]
      }
    },
    {
      id: "jurer_un_voeu_de_fer",
      label: "Jurer un Vœu de Fer",
      description: "Lorsque vous jurez sur le fer d'accomplir une quête",
      category: "quete",
      trigger: "Lorsque vous jurez sur le fer d'accomplir une quête",
      outcomes: {
        strongHit: [
          "Vous êtes enhardi et vous voyez clairement quelle est la prochaine chose à faire",
          "Vous gagnez +2 élan"
        ],
        weakHit: [
          "Vous êtes déterminé mais vous entamez votre quête en ayant plus de questions que de réponses",
          "Vous gagnez +1 élan"
        ],
        miss: [
          "Vous faites face à un obstacle important avant de pouvoir entamer votre quête",
          "Retenez l'une des deux options suivantes:",
          "Vous allez de l'avant : Vous subissez une pénalité de -2 élan, en faisant tout votre possible pour surmonter cet obstacle",
          "Vous renoncez : Abandonnez votre Vœu"
        ]
      },
      additionalEffects: {
        withBond: "Si vous jurez ce vœu au profit d'une personne ou d'une communauté avec laquelle vous partagez un lien, ajoutez +1"
      }
    },
    {
      id: "atteindre_un_jalon",
      label: "Atteindre un Jalon",
      description: "Lorsque vous faites des progrès significatifs dans votre quête",
      category: "quete",
      trigger: "Lorsque vous faites des progrès significatifs dans votre quête",
      rank: {
        pénible: "Notez 3 cases de progrès",
        dangereux: "Notez 2 cases de progrès",
        redoutable: "Notez 1 case de progrès",
        extrême: "Ajoutez 2 coches",
        épique: "Ajoutez 1 coche"
      }
    },
    {
      id: "progresser",
      label: "Progresser",
      description: "Lorsque vous affinez vos compétences",
      category: "quete",
      trigger: "Lorsque vous affinez vos compétences, que vous recevez un entraînement, que vous trouvez l'inspiration, que vous obtenez une récompense ou que vous gagnez un compagnon",
      outcomes: {
        effect: [
          "Vous pouvez dépenser 3 points d'expérience pour acquérir un nouvel atout",
          "Vous pouvez dépenser 2 points d'expérience pour améliorer un atout existant"
        ]
      }
    },
    {
      id: "abandonner_votre_voeu",
      label: "Abandonner votre Vœu",
      description: "Lorsque vous renoncez à votre quête",
      category: "quete",
      trigger: "Lorsque vous renoncez à votre quête, que vous reniez votre promesse ou que votre objectif devient inaccessible",
      outcomes: {
        effect: [
          "Vous effacez votre vœu et vous Subissez un Stress",
          "Vous subissez une pénalité d'esprit égale au rang de votre quête (pénible=1 ; dangereuse=2 ; redoutable=3 ; extrême=4 ; épique=5)"
        ]
      },
      additionalEffects: {
        withBond: "Si votre vœu a été prononcé envers une personne ou une communauté avec laquelle vous partagez un lien, alors Testez votre Lien la prochaine fois que vous le rencontrez"
      }
    },
    {
      id: "realiser_votre_voeu",
      label: "Réaliser votre Vœu",
      description: "Lorsque vous accomplissez ce que vous estimez être la réalisation de votre vœu",
      category: "quete",
      trigger: "Lorsque vous accomplissez ce que vous estimez être la réalisation de votre vœu",
      mechanicType: "action_de_progres",
      outcomes: {
        strongHit: [
          "Votre quête est menée à bien",
          "Notez votre expérience (pénible = 1 ; dangereux = 2 ; redoutable = 3 ; extrême = 4 ; épique = 5)"
        ],
        weakHit: [
          "Il vous reste du chemin à faire ou vous réalisez la véritable nature de votre quête",
          "Notez votre expérience (pénible = 0 ; dangereux = 1 ; redoutable = 2 ; extrême = 3 ; épique = 4)",
          "Vous pouvez de nouveau Jurer un Vœu de Fer pour mener cette quête à bien. Si c'est bien le cas, ajoutez +1"
        ],
        miss: [
          "Votre quête est en déroute",
          "Retenez l'une de ces deux options:",
          "Vous renouvelez votre vœu : Effacez toutes vos cases de progrès à l'exception de la première, puis relevez le rang de votre quête d'un cran",
          "Vous renoncez : Abandonnez votre Vœu"
        ]
      }
    },
    {
      id: "consulter_l_oracle",
      label: "Consulter l'Oracle",
      description: "Lorsque vous cherchez à découvrir des détails du monde",
      category: "destin",
      trigger: "Lorsque vous cherchez à découvrir des détails du monde, à déterminer comment les autres personnages répondent ou à déclencher des confrontations et des événements",
      options: [
        {
          name: "Tirer une conclusion",
          description: "Décidez d'une réponse en vous basant sur le résultat le plus intéressant et évident"
        },
        {
          name: "Poser une question dont la réponse est oui ou non",
          description: "Décidez des probabilités du 'oui', puis faites un jet dans le tableau des probabilités"
        },
        {
          name: "Retenez-en deux",
          description: "Visualisez deux options. Qualifiez l'une d'elle de 'probable' puis faites un jet dans le tableau pour voir si elle s'avère véridique"
        },
        {
          name: "Trouver une idée",
          description: "Faites un tour de table pour trouver de nouvelles idées ou utilisez une incitation au hasard"
        }
      ],
      additionalEffects: {
        tableauProbabilites: {
          "Presque Certain": "11 ou plus",
          "Probable": "26 ou plus",
          "50/50": "51 ou plus",
          "Improbable": "76 ou plus",
          "Chance Infime": "91 ou plus"
        }
      }
    },
    {
      id: "payer_le_prix",
      label: "Payer le Prix",
      description: "Lorsque vous subissez le résultat d'une action",
      category: "destin",
      trigger: "Lorsque vous subissez le résultat d'une action",
      options: [
        {
          name: "Résultat évident",
          description: "Faites survenir le résultat négatif le plus évident"
        },
        {
          name: "Deux résultats",
          description: "Visualisez deux résultats négatifs. Évaluez l'une des deux comme 'probable', puis Consultez l'Oracle"
        },
        {
          name: "Table aléatoire",
          description: "Faites un jet dans le tableau des résultats"
        }
      ],
      additionalEffects: {
        tableauResultats: {
          "1-2": "Refaites un jet et appliquez son résultat mais en pire",
          "3-5": "Une personne ou une communauté en laquelle vous aviez confiance perd sa foi en vous ou œuvre contre vous",
          "6-9": "Une personne ou une communauté qui vous tient à cœur est exposée au danger",
          "10-16": "Quelque-chose de valeur est perdu ou détruit",
          "17-24": "Vous êtes séparé de quelque-chose ou de quelqu'un",
          "24-32": "Quelque-chose de valeur est perdu ou détruit",
          "33-41": "La situation actuelle se met à empirer",
          "42-50": "Un nouveau danger ou un nouvel ennemi se révèle",
          "51-59": "Cela vous demande un délai ou vous impose un désavantage",
          "60-68": "C'est nocif",
          "69-77": "C'est stressant",
          "78-85": "Un développement surprenant complique votre quête",
          "86-90": "C'est un gaspillage de ressources",
          "91-94": "Cela vous force a agir à l'encontre de vos intérêts",
          "95-98": "Un ami, un compagnon ou un allié est mis en danger",
          "99-100": "Refaites un jet dans ce tableau. Les deux résultats s'appliquent"
        }
      }
    },
    {
      id: "soigner_un_compagnon",
      label: "Soigner un Compagnon",
      description: "Lorsque vous souhaitez soigner un compagnon",
      category: "relation",
      trigger: "Lorsque vous souhaitez soigner un compagnon",
      options: [
        {
          name: "Soigner",
          description: "Vous pouvez effacer l'état blessé de votre compagnon"
        },
        {
          name: "Stabiliser",
          description: "Donnez +2 santé à votre compagnon"
        }
      ]
    }
  ];

