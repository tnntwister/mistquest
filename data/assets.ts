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
];
