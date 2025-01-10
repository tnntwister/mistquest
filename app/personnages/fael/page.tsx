import { HeroSection } from "@/components/ui/hero-section";
import { CharacterDescription } from "@/components/character-description";
import { CampaignLog } from "@/components/campaign-log";
import { CharactersList } from "@/components/characters-list";
import { Timeline } from "@/components/timeline";
import { sessions, characters, timelineEvents, recentEvents } from "@/data/fael";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { SITE_NAME } from '../../config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Fael Bursandra des Hazat - ${SITE_NAME}`,
  description: "Découvrez l'histoire de Fael Bursandra, un jeune chevalier de la maison Hazat, et suivez ses aventures et quêtes."
};

export default function FaelPage() {
  return (
    <>
      <div className="space-y-8">
        <div className="relative overflow-hidden">
          <HeroSection 
            imagePrefix="fael" 
            title="Fael Bursandra des Hazat" 
            description="Éduqué pour la guerre, face à l'horreur j'ai préféré rejoindre les ordres du Sanctuaire Aeon, avant d'être rappelé par mon destin"
          />
        </div>
        
        <div className="container mx-auto px-4 space-y-8">
          <CharacterDescription
            name="Fael Bursandra"
            description="<p class='mb-2'>Fael, jeune chevalier de vingt-cinq ans, se distingue par une allure à la fois noble et pragmatique, le reflet parfait de son appartenance à la maison Hazat, et plus précisément à la branche Bursandra. Sa chevelure d'un noir de jais, légèrement ondulée, encadre un visage au teint doré par le soleil des mondes arides qu'il a traversés. Ses yeux sombres, presque noirs, brillent d'une intensité magnétique, trahissant une vivacité d'esprit et une détermination inébranlable. Une barbe courte et soignée souligne la mâchoire ferme de ce jeune homme déjà marqué par les défis de la guerre et du devoir.</p>
            <p class='mb-2'>Son armure, à mille lieues des cuirasses rigides de ses ancêtres, est faite d'un matériau exceptionnel, à mi-chemin entre la soie et l'acier, alliant souplesse et protection. De couleur sombre, presque anthracite, elle épouse ses mouvements avec une fluidité naturelle, idéale pour les missions de reconnaissance qu'il affectionne. Cette tenue élégante et fonctionnelle est sublimée par un tabard immaculé, frappé de l'emblème du phénix, symbole de renouveau et d'espoir, qu'il porte fièrement en tant que chevalier questeur.</p>
            <p class='mb-2'>Fael arbore à sa ceinture un sabre finement ouvragé, véritable chef-d'œuvre d'artisanat. La lame, légèrement incurvée, est gravée de motifs évoquant les flammes et les ailes, symboles de sa maison. Ce n'est pas qu'une arme : c'est l'extension de son bras, une alliée fidèle dans les combats rapprochés qu'il préfère. Sur son avant-bras gauche, un bouclier énergétique personnel projette une lueur subtile, prêt à le protéger contre les dangers imprévisibles des champs de bataille.</p>
            <p class='mb-2'>Sous ses airs calmes et réfléchis, Fael est un stratège, un esprit aiguisé par des années d'entraînement et d'observation. Il possède cette rare capacité de s'adapter à toute situation, guidé par une foi profonde dans sa mission et une fidélité indéfectible à sa maison. Pourtant, derrière cette façade de chevalier impeccable se cache un homme en quête de sens, tiraillé entre son devoir envers les Hazat et ses propres aspirations d'humanité et de justice.</p>
            <p class='mb-2'>Chaque mouvement de Fael, chaque regard, trahit une grâce innée et une autorité naturelle. Il est l'incarnation du jeune noble idéal : courageux, compétent et profondément ancré dans un monde où la survie dépend autant de la maîtrise des armes que de la compréhension des subtilités politiques et humaines.</p>"
            imagePath="/images/sections/fael.webp"
            characterSheetLink="/personnages/fael/fiche"
          />

          <CampaignLog sessions={sessions} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Timeline 
              title="Histoire"
              events={timelineEvents} 
            />
            <Timeline 
              title="Événements Récents (5020)"
              events={recentEvents} 
            />
          </div>

          <CharactersList title="Famille" characters={characters.famille} />
          <CharactersList title="Nobles Rencontrés" characters={characters.nobles} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/personnages/fael/rencontres" className="block">
              <Card className="h-full hover:bg-secondary/50 transition-colors">
                <CardHeader>
                  <h3 className="text-xl font-cinzel">Les Trois Rencontres</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Les moments clés qui ont façonné mon destin à travers les années.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/personnages/fael/equipage" className="block">
              <Card className="h-full hover:bg-secondary/50 transition-colors">
                <CardHeader>
                  <h3 className="text-xl font-cinzel">Mon Équipage</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Les fidèles compagnons qui m'accompagnent dans mes voyages.</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/personnages/fael/quete" className="block">
              <Card className="h-full hover:bg-secondary/50 transition-colors">
                <CardHeader>
                  <h3 className="text-xl font-cinzel">Éléments de ma Quête</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Les indices et mystères qui guident ma mission.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}