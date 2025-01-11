import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CharactersList } from "@/components/characters-list";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function EquipagePage() {
  const ancienneUnite = [
    { id: "1", name: "Pedro Mendez", title: "Caporal", description: "Caporal", tags: [] },
    { id: "2", name: "Manuela Ortiz", title: "Tireuse d'élite", description: "Tireuse d'élite", tags: [] },
    { id: "3", name: "Juan-Franco Mendez", title: "Tireur d'élite", description: "Tireur d'élite (frère aîné de Pedro)", tags: [] },
    { id: "4", name: "Anna-Maria Ozu", title: "Spécialiste", description: "Spécialiste en démolition", tags: [] },
    { id: "5", name: "Luz", title: "Agent", description: "Reconnaissance/Infiltration", tags: [] },
    { id: "6", name: "Joaquin", title: "Agent", description: "Reconnaissance/Infiltration", tags: [] },
    { id: "7", name: "Evaristo Tekazu", title: "Infirmier", description: "Infirmier", tags: [] },
    { id: "8", name: "Blas Taman", title: "Logisticien", description: "Logistique", tags: [] },
    { id: "9", name: "Dolores Hernandez", title: "Pilote", description: "Pilote de véhicules terrestres", tags: [] },
    { id: "10", name: "Nerea Aza", title: "Mécanicienne", description: "Mecano", tags: [] },
    { id: "11", name: "Isabela Aza", title: "Soldat", description: "Femme de rang (sœur jumelle de Nerea)", tags: [] },
    { id: "12", name: "Tulio", title: "Soldat", description: "Homme de rang", tags: [] },
    { id: "13", name: "Victor", title: "Soldat", description: "Homme de rang", tags: [] },
    { id: "14", name: "Horacio", title: "Soldat", description: "Homme de rang", tags: [] }
  ];

  const equipageActuel = [
    { id: "15", name: "Capitaine de corvette Ernestine Hazenwald", title: "Capitaine", description: "Officier expérimentée et loyale", tags: ["Commandement"] },
    { id: "16", name: "Commandeure Vanessa Bortchuk", title: "Commandeure", description: "Pilote et aurige talentueuse", tags: ["Commandement"] },
    { id: "17", name: "Ingénieure Dariya Ma'Haifa", title: "Ingénieure", description: "Experte en systèmes de propulsion", tags: ["Équipe Technique"] },
    { id: "18", name: "Neria Aza", title: "Mécanicienne", description: "Mécanicienne et responsable des communications", tags: ["Équipe Technique"] },
    { id: "19", name: "Marines", title: "Marines", description: "Force d'intervention et sécurité du vaisseau", tags: ["Personnel Militaire"], count: 5 },
    { id: "20", name: "Canonniers", title: "Canonniers", description: "Équipe d'artillerie expérimentée", tags: ["Personnel Militaire"], count: 7 }
  ];

  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Fael", href: "/fael" },
    { label: "Équipage" }
  ];

  return (
    <div className="container mx-auto py-8 space-y-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-cinzel mb-8">Mon Équipage</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-cinzel">Mes Vaisseaux</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-cinzel">Le Pèlerin</h3>
                <div className="grid grid-cols-3 gap-4 my-4">
                  <Image 
                    src="/images/sections/vaisseau1.webp" 
                    alt="Le Pèlerin - Vue intérieure"
                    width={800}
                    height={400}
                    className="rounded-lg col-span-2 w-full h-96 object-cover"
                    style={{ objectPosition: 'top' }}
                  />
                  <Image 
                    src="/images/sections/vaisseau2.webp" 
                    alt="Le Pèlerin - Vue extérieure"
                    width={400}
                    height={400}
                    className="rounded-lg w-full h-96 object-cover"
                    style={{ objectPosition: 'bottom' }}
                  />
                </div>
                <p>Mon vaisseau personnel...</p>
              </div>

              <div>
                <h3 className="text-xl font-cinzel">L'autre vaisseau</h3>
                <p>L'autre vaisseau.</p>
              </div>
            </div>
          </section>

          <section>
            <p>L'équipage fonctionne comme une unité soudée, chaque membre apportant son expertise unique. La hiérarchie est claire mais flexible, permettant une adaptation rapide aux situations d'urgence. La loyauté et l'efficacité sont les maîtres mots de notre fonctionnement.</p>
          </section>

          <CharactersList title="Mon ancienne unité" characters={ancienneUnite} />
          <CharactersList title="Les autres" characters={equipageActuel} />
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/personnages/fael">
            <Button variant="outline" size="lg">
              Retour à la page de Fael
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 