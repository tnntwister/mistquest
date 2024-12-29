"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FaelCharacterSheet() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-cinzel">Fael Barsandra des Hazat</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <strong>Nom :</strong> Fael Bursandra des Hazat<br />
            <strong>Classe :</strong> Commandant (2), Prêtre (1)<br />
            <strong>Blessing :</strong> Discipliné
          </div>
          <div>
            <strong>Niveau :</strong> 3<br />
            <strong>Espèce :</strong> Humaine<br />
            <strong>Curse :</strong> Vindicatif
          </div>
          <div>
            <strong>Faction :</strong> Hazat
          </div>
        </div>

        <h2 className="text-2xl font-cinzel">Caractéristiques</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold">BODY</h3>
            </CardHeader>
            <CardContent>
              <p><strong>STR :</strong> 5</p>
              <p><strong>DEX :</strong> 8</p>
              <p><strong>END :</strong> 4</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold">MIND</h3>
            </CardHeader>
            <CardContent>
              <p><strong>WIT :</strong> 9</p>
              <p><strong>PER :</strong> 4</p>
              <p><strong>WIL :</strong> 5</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold">SPIRIT</h3>
            </CardHeader>
            <CardContent>
              <p><strong>PRE :</strong> 9</p>
              <p><strong>INT :</strong> 3</p>
              <p><strong>FAI :</strong> 4</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-cinzel">Compétences</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <p><strong>Academia :</strong> 6</p>
            <p><strong>Animalia :</strong> 4</p>
            <p><strong>Arts :</strong> 4</p>
            <p><strong>Crafts :</strong> 3</p>
            <p><strong>Remedy :</strong> 6</p>
            <p><strong>Tech Redemption :</strong> 3</p>
          </div>
          <div>
            <p><strong>Charm :</strong> 7</p>
            <p><strong>Empathy :</strong> 6</p>
            <p><strong>Focus :</strong> 4</p>
            <p><strong>Impress :</strong> 6</p>
            <p><strong>Perform :</strong> 3</p>
          </div>
          <div>
            <p><strong>Fight :</strong> 4</p>
            <p><strong>Melee :</strong> 9</p>
            <p><strong>Shoot :</strong> 4</p>
            <p><strong>Vigor :</strong> 5</p>
            <p><strong>Drive :</strong> 3</p>
            <p><strong>Sneak :</strong> 3</p>
          </div>
          <div>
            <p><strong>Survival :</strong> 4</p>
            <p><strong>Knavery :</strong> 3</p>
            <p><strong>Observe :</strong> 4</p>
            <p><strong>Disguise :</strong> 3</p>
            <p><strong>Intrusion :</strong> 3</p>
            <p><strong>Sleight of Hand :</strong> 3</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-cinzel">Capabilities</h2>
            <ul className="list-disc pl-4">
              <li>Beastback</li>
              <li>Court Customs</li>
              <li>Homeworld Lore</li>
              <li>Military Weapons</li>
              <li>Lire/Parler Teyrrien</li>
              <li>Armes cinétiques</li>
              <li>Connaissance des Hazat</li>
              <li>Warfare Lore</li>
              <li>Warcraft</li>
              <li>Streetwise</li>
              <li>Surgery Lore</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-cinzel">Avantages</h2>
            <ul className="list-disc pl-4">
              <li>Nimble (Noble)</li>
              <li>Titre de noblesse : Chevalier</li>
              <li>Strategic Mind (Commander)</li>
              <li>Veteran (Open)</li>
              <li>Forthright (Open)</li>
              <li>Invigorate (Priest)</li>
              <li>Church Ordination : Novice</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-cinzel">Équipement</h2>
            <ul className="list-disc pl-4">
              <li>Armure +3 Body Resistance TL5</li>
              <li>Arme de duel</li>
              <li>Uniforme d'officier élégant</li>
              <li>Epée d'apparat</li>
              <li>Destrier</li>
              <li>300 fb</li>
              <li>Tekkit misericordieux (kit de chirurgie TL5)</li>
              <li>2 doses d'Exilir</li>
              <li>Kit de secours low tech</li>
              <li>+2 Remedy</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-cinzel">Saints Patrons</h2>
          <ul className="list-disc pl-4">
            <li className="line-through">Darius le résolu</li>
            <li className="line-through">Edward Wyrmslayer</li>
            <li className="line-through">Rohit le Spagyre</li>
            <li>Sainte Jivanta</li>
          </ul>
          <div className="bg-muted/50 p-4 rounded-lg mt-4">
            <p className="italic">Saint Jivanta —Chosen as her mother's successor, Amalthea's daughter, Jivanta (2722-2951), became Kecharch of Sanctuary Aeon. The Miracle of the Demon-Plague Cleansing of Artemis (2918?) is attributed to her; it tells of when she healed the world from the infection of fallen entities. So devoted was Jivanta to healing that she stepped down as Kecharch (2929, some Church histories give 2932), stating that the Amaltheans did not need a royal caste; instead, she said they should choose their leaders. Then she left for Holy Terra, where she tended the poor.</p>
          </div>
        </div>

        <div className="mt-8">
          <p><strong>Points de vie restants :</strong> 4 PV</p>
          <p><strong>Points de Wyld :</strong> 1 point</p>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/fael">
            <Button variant="outline" size="lg">
              Retour à la page de Fael
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 