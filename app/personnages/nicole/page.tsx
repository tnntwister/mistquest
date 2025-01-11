import { HeroSection } from "@/components/ui/hero-section";
import { CharacterDescription } from "@/components/character-description";
import { SITE_NAME } from '../../config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Nicole - ${SITE_NAME}`,
  description: "Nicole va sauver le monde ! Nicole va tuer Hilter ! Et vous savez quoi ? Nicole est une vampire !"
};

export default function NicolePage() {
  return (
    <>
      <div className="space-y-8">
        <div className="relative overflow-hidden">
          <HeroSection 
            imagePrefix="nicole" 
            title="Nicole" 
            description="Nicole va sauver le monde ! Nicole va tuer Hilter ! Et vous savez quoi ? Nicole est une vampire !"
          />
        </div>
        
        <div className="container mx-auto px-4 space-y-8">
          <CharacterDescription
            name="Nicole"
            description="<p class='mb-2'>Nicole est une figure légendaire de la Résistance française, dont l'histoire a pris un tournant tragique et surnaturel. Experte en démolition et guérilla urbaine, elle menait une cellule de résistants dans Paris occupé jusqu'à ce que les forces nazies ne déciment son groupe. C'est lors de ces événements que sa petite amie vampire, en lui donnant son sang avant de périr, l'a transformée en créature de la nuit.</p>
            <p class='mb-2'>Aujourd'hui, Nicole est une combattante impitoyable qui cache une profonde amertume. Maniant explosifs et pouvoirs vampiriques avec une égale expertise, elle peut aussi bien commander une horde de rats que se fondre dans les ombres. Son arsenal impressionnant et ses capacités surnaturelles font d'elle une menace redoutable, équivalente à un peloton entier. Mais derrière cette puissance se cache un désir ardent : celui d'une fin glorieuse au combat, une dernière mission suicide qui la mènera jusqu'au cœur du Reich pour accomplir sa vengeance.</p>"
            imagePath="/images/sections/nicole.webp"
            characterSheetLink="https://minimalroleplay.com/hub/games/77f392d0-3645-4b6e-b697-f6261d79584e"
          />

        </div>
      </div>
    </>
  );
}