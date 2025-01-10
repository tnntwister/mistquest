import { HeroSection } from "@/components/ui/hero-section";
import { SystemDescription } from "@/components/system-description";
import { ItemsLog } from "@/components/item-log";
import { CharactersList } from "@/components/characters-list";
import { Metadata } from 'next';
import { SITE_NAME } from '../../config';

export const metadata: Metadata = {
  title: `Archipels - ${SITE_NAME}`,
  description: "Un hack d'Ironsworn pour des aventures maritimes dans un monde d'îles mystérieuses."
};

export default function ArchipelsPage() {

  const islands = [
    {
      id: "1",
      title: "Brillance",
      summary: "Une île principale entourée de trois satellites: Perh le port principal, Besqwel aux collines vertes, et Savel la montagneuse. Brillance est une terre accueillante aux vallées clémentes. Sa capitale Khol Minaria a été récemment détruite et l'île est menacée par les sahuagins."
    },
    {
      id: "2", 
      title: "Besqwel",
      summary: "Une île aux paysages reposants alternant plaines et collines verdoyantes, principalement habitée par des gnomes bergers à peine civilisés. Une commanderie de l'ordre Janite y veille à la sécurité."
    },
    {
      id: "3",
      title: "Aberrande",
      summary: "L'île mystérieuse des danseurs-visages, maîtres espions craints dans tous les Archipels. Dans sa capitale Port Aberrande règnent d'étranges coutumes et la nuit, tous craignent les Double-Face assoiffés de sang."
    },
    {
      id: "4",
      title: "Celyan",
      summary: "Un petit îlot paisible entouré d'un lagon, abritant quelques embarcadères, un village sommaire et le Grand Temple. Un lieu propice à la réflexion et l'introspection."
    },
    {
      id: "5",
      title: "Vendrest", 
      summary: "Une île riche et prospère, plaque tournante du commerce. Elle dispose de plusieurs dominions et présente des reliefs variés. Son système politique s'apparente à une ploutocratie démocratique."
    },
    {
      id: "6",
      title: "Fulmine",
      summary: "Une île marécageuse dont la principale ressource est l'extraction et l'exportation de gaz naturel."
    },
    {
      id: "7",
      title: "Houlemorte",
      summary: "Une île mystérieuse où les navires peuvent se retrouver piégés dans une mer intérieure après que la mer se soulève étrangement."
    },
    {
      id: "8",
      title: "Perh",
      summary: "Autrefois simple île de pêcheurs, Perh est devenue le principal port commercial de Brillance, sa côte extérieure étant entièrement occupée par des installations portuaires."
    },
    {
      id: "9",
      title: "Gorode",
      summary: "Une île recouverte d'une jungle épaisse aux reflets émeraude. Sous ses abords calmes et tranquilles se cachent de nombreux secrets et des forces mystérieuses."
    },
    {
      id: "10",
      title: "Imersine",
      summary: "Une île des Archipels."
    },
    {
      id: "11",
      title: "Kargir",
      summary: "L'île des pirates, réputée pour être un repaire de flibustiers."
    },
    {
      id: "12",
      title: "Crachefer",
      summary: "Une forteresse cyclopéenne de métal habitée par des nains, maîtres inégalés des machines et de la vapeur. Les marchands du monde entier viennent y acheter des merveilles mécaniques."
    },
    {
      id: "13",
      title: "Korilenn",
      summary: "Une île marquée par la Césure, avec un désert de rouille central et des montagnes en périphérie. Les habitants survivent grâce au commerce maritime et à la récolte de roses de fer magiques."
    },
    {
      id: "14",
      title: "Mortaille",
      summary: "Une île créée artificiellement par le druide Dorakan, divisée entre trois ducs. Le territoire est instable à cause des forces élémentaires qui y ont été invoquées."
    },
    {
      id: "15",
      title: "Nemedia",
      summary: "Un atoll habité par une société matriarcale de guerrières montant des guêpes géantes. L'île est protégée par des brumes magiques et dirigée par une reine assistée d'un conseil d'Aïeules."
    },
    {
      id: "16",
      title: "Quandionne",
      summary: "Une île commerçante surnommée l'Île Étoilée pour ses cinq ports creusés dans d'anciens pics rocheux. C'est un important carrefour commercial des Archipels."
    },
    {
      id: "17",
      title: "Jytt la pacifique",
      summary: "Une île des Archipels."
    },
    {
      id: "18", 
      title: "Montmoorh",
      summary: "Une île des Archipels."
    },
    {
      id: "19",
      title: "Ogremont",
      summary: "Une île des Archipels."
    },
    {
      id: "20",
      title: "Savel",
      summary: "Une des trois îles satellites de Brillance, constituée uniquement de montagnes inhospitalières avec une orbite si chaotique que personne n'ose approcher ses côtes."
    },
    {
      id: "21",
      title: "Unterlakken", 
      summary: "Une île mentionnée dans les Carnets de Voyages."
    },
    {
      id: "22",
      title: "Yundalk",
      summary: "Une île des Archipels."
    },
    {
      id: "23",
      title: "Zarouse",
      summary: "Une île des Archipels."
    }
  ];

  const ships = [
    {
      "id": "bargetournelle", 
      "name": "Barge Tournelle",
      "title": "Galère à éperon",
      "description": "Un long navire équipé de nombreux avirons et d'un large plateau circulaire au centre. Sa proue est dotée d'un éperon imposant.",
      "tags": ["Militaire", "Éperon", "Avirons"],
      "imagePath": "/images/archipels/bateaux/bargetournelle.jpg"
    },
    {
      "id": "barkass",
      "name": "Barkass",
      "title": "Navire à voile simple",
      "description": "Un navire classique à la coque robuste, équipé d'un grand mât central portant une large voile. Sa proue est relevée dans un style traditionnel.",
      "tags": ["Transport", "Simple", "Voilier"],
      "imagePath": "/images/archipels/bateaux/barkass.jpg"
    },
    {
      "id": "behemoth",
      "name": "Behemoth",
      "title": "Transport blindé",
      "description": "Un navire à la structure géométrique et anguleuse, avec une superstructure massive faite de panneaux assemblés.",
      "tags": ["Blindé", "Transport", "Massif"],
      "imagePath": "/images/archipels/bateaux/behemoth.jpg"
    },
    {
      "id": "carnace",
      "name": "Carnace",
      "title": "Forteresse flottante",
      "description": "Une imposante structure navale aux formes anguleuses, semblable à un bâtiment fortifié flottant sur l'eau.",
      "tags": ["Défensif", "Massif", "Forteresse"],
      "imagePath": "/images/archipels/bateaux/carnace.jpg"
    },
    {
      "id": "dracoptere",
      "name": "Dracoptère",
      "title": "Aéronef naval",
      "description": "Un vaisseau hybride doté d'ailes mécaniques et d'une coque navale, conçu pour le vol et la navigation.",
      "tags": ["Volant", "Hybride", "Innovation"],
      "imagePath": "/images/archipels/bateaux/dracoptere.jpg"
    },
    {
      "id": "eperonneur",
      "name": "Éperonneur",
      "title": "Navire de combat",
      "description": "Un vaisseau de guerre équipé de voiles imposantes et d'un éperon proéminent à la proue.",
      "tags": ["Militaire", "Éperon", "Combat"],
      "imagePath": "/images/archipels/bateaux/eperonneur.jpg"
    },
    {
      "id": "galereguerre",
      "name": "Galère de Guerre",
      "title": "Porte-nefs",
      "description": "Un immense vaisseau-plateforme avec une large surface plane sur le pont, équipé de mâts multiples.",
      "tags": ["Support", "Massif", "Militaire"],
      "imagePath": "/images/archipels/bateaux/galereguerre.jpg"
    },
    {
      "id": "naviremarchand",
      "name": "Navire Marchand",
      "title": "Navire marchand",
      "description": "Un navire traditionnel aux lignes élégantes, doté de multiples voiles et d'une coque bien proportionnée.",
      "tags": ["Commerce", "Élégant", "Voilier"],
      "imagePath": "/images/archipels/bateaux/naviremarchand.jpg"
    },
    {
      "id": "nefartillere",
      "name": "Nef Artillère",
      "title": "Galion de guerre",
      "description": "Un imposant navire de guerre à deux mâts, avec une proue renforcée et une construction robuste.",
      "tags": ["Guerre", "Artillerie", "Imposant"],
      "imagePath": "/images/archipels/bateaux/nefartillere.jpg"
    },
    {
      "id": "radeaumeduse",
      "name": "Radeau Méduse",
      "title": "Plateforme flottante",
      "description": "Une structure surélevée sur pilotis ou flotteurs, ressemblant à une plateforme maritime stationnaire.",
      "tags": ["Stationnaire", "Support", "Infrastructure"],
      "imagePath": "/images/archipels/bateaux/radeaumeduse.jpg"
    },
    {
      "id": "sournoise",
      "name": "Sournoise",
      "title": "Voilier rapide",
      "description": "Un navire à voiles élancé avec une coque bien dessinée, conçu pour la vitesse et l'agilité.",
      "tags": ["Rapide", "Agile", "Voilier"],
      "imagePath": "/images/archipels/bateaux/sournoise.jpg"
    },
    {
      "id": "trimarorque",
      "name": "Trimarorque",
      "title": "Navire-créature",
      "description": "Un navire inhabituel utilisant des créatures marines comme moyen de propulsion.",
      "tags": ["Exotique", "Hybride", "Unique"],
      "imagePath": "/images/archipels/bateaux/trimarorque.jpg"
    },
    {
      "id": "vapeurcrachefer",
      "name": "Vapeur Crachefer",
      "title": "Navire à vapeur",
      "description": "Un vaisseau massif propulsé par la vapeur, reconnaissable à sa cheminée et sa construction métallique.",
      "tags": ["Vapeur", "Métallique", "Moderne"],
      "imagePath": "/images/archipels/bateaux/vapeurcrachefer.jpg"
    },
    {
      "id": "yole",
      "name": "Yole",
      "title": "Chaloupe armée",
      "description": "Une embarcation légère à rames avec un équipage visible, équipée d'une arme à la proue.",
      "tags": ["Léger", "Rapide", "Armé"],
      "imagePath": "/images/archipels/bateaux/yole.jpg"
    }
  ];

  return (
    <div className="space-y-8">
      <HeroSection 
        imagePrefix="archipels"
        title="Archipels"
        description="Un monde d'îles mystérieuses et d'aventures maritimes, où chaque horizon cache de nouveaux secrets."
      />

      <div className="container mx-auto space-y-12">
        <SystemDescription 
          name="Sundered Isles pour découvrir les Archipels"
          description={`
            <p class='mb-2'>Sundered Isles adapte le système de jeu Starforged en le recentrant sur des voyages maritimes et des intrigues de piraterie dans un cadre fantasy. Le cœur du système repose sur des jets de dés d'action où l'on compare des d6 avec un ou plusieurs dés de défi (d10), créant ainsi une mécanique qui génère naturellement des complications et des rebondissements narratifs. Les personnages sont définis par des statistiques classiques (Edge, Heart, Iron, Shadow, Wits) qui reflètent leur capacité à naviguer tant les dangers physiques que sociaux de l'archipel.</p>
            <p class='mb-2'>Le jeu se distingue par sa gestion des promesses (vows) et des voyages maritimes. Chaque traversée est une aventure en soi, rythmée par des mouvements spécifiques qui simulent les aléas de la navigation, la gestion de l'équipage et les rencontres en mer. Le système de momentum, hérité de Starforged, représente l'élan et la fortune du personnage, pouvant être dépensé pour améliorer ses chances de succès ou éviter le pire dans les moments critiques.</p>
            <p class='mb-2'>L'aspect narratif est soutenu par des tables de génération qui aident à créer des îles, des factions pirates, des trésors légendaires et des conflits politiques. Ces outils permettent au jeu de fonctionner aussi bien en solo qu'en groupe, avec ou sans meneur, tandis que les liens (bonds) entre le personnage et les PNJ créent un réseau d'alliances et de rivalités qui enrichit la narration. Le système encourage une progression organique des personnages à travers leurs exploits et leurs échecs, débloquant de nouvelles capacités qui reflètent leur maîtrise croissante de la vie de pirate.</p>
          `}
          imagePath="/images/sections/archipels-section.webp"
          MoreLink="https://tomkinpress.com/pages/sundered-isles"
        />

        <ItemsLog 
          title="Les Îles"
          items={islands}
        />

        <CharactersList 
          title="Les Bateaux"
          characters={ships}
          tagTitle="Caractéristiques"
        />
      </div>
    </div>
  );
} 