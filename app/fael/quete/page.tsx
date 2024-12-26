"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function QuetePage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Fael", href: "/fael" },
    { label: "Éléments de ma Quête" }
  ];

  return (
    <div className="container mx-auto py-8 space-y-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-cinzel mb-8">Éléments de ma Quête</h1>

        <div className="space-y-12">
          <section>
            <h3>La prophétie</h3>
            <q>« Tu seras celui par qui arrivera la disgrâce. Tu seras celui qui apportera la réconciliation. Tu sèmeras la mort dans les rangs des croyants et des hérétiques. Tu guideras les justes vers les tombeaux des secrets, car ta double hélice est ainsi faite. Mais dans ces tombeaux tu marcheras en aveugle. Tu es la torche et la clé, mais ni les yeux ni la main. Tu es l&apos;ouvreur des chemins. »</q>

            <h2 className="text-2xl font-cinzel">Les Révélations de la Légiste</h2>
            <h3 className="text-xl font-cinzel">Izaïa et ses Pouvoirs</h3>
            <ul>
              <li>Pouvoir de masquer les souvenirs (peut-être uniquement les siens)</li>
              <li>L'ordre eskatonique étudie les gens qui ont des pouvoirs</li>
              <li>Présente pendant le voyage, s'est éclipsée après</li>
            </ul>

            <h3 className="text-xl font-cinzel">Mes Souvenirs Altérés</h3>
            <ul>
              <li>Première altération : dans le vaisseau</li>
              <li>Deuxième altération : par Izaïa à la sortie</li>
              <li>Troisième altération : par les amalthéens pendant ma dépression</li>
              <li>Le palais du rêve est celui de ma grand-mère maternelle (raison de présence inconnue)</li>
            </ul>

            <h3 className="text-xl font-cinzel">Histoire Familiale</h3>
            <ul>
              <li>Coup de foudre entre mes parents</li>
              <li>Ma conception 3-4 ans plus tard</li>
              <li>Départ de ma mère quand j'avais 11 ans</li>
              <li>Possible assassinat par mon grand-père paternel</li>
            </ul>

            <h3 className="text-xl font-cinzel">La Vérité sur Anton</h3>
            <ul>
              <li>Sa fille éjectée dans une capsule de sauvetage</li>
              <li>Actuellement en caisson cryogénique</li>
              <li>Anton devient fou pour essayer de la sauver</li>
              <li>Nous a envoyés sur Stigmata pour l'artefact Annunaki</li>
              <li>Artefact potentiellement capable de la ramener à la vie</li>
              <li>L'artefact serait dans son palais sur Malignatius</li>
            </ul>

            <h3 className="text-xl font-cinzel">Ma Mission</h3>
            <p className="italic">Je dois poursuivre un mal, marcher sur les pas d'Izaïa.</p>
          </section>

          <section>
            <h2 className="text-2xl font-cinzel">Le Mystère d'Izaia</h2>
            <ul>
              <li>Corps retrouvé possiblement pas celui d'Izaia</li>
              <li>Machine pensante (lecteur d'ADN) confisquée par les Avesti</li>
              <li>Trois corps trouvés sur Criticorum dans une capsule de sauvetage</li>
              <li>Un homme inconnu en livrée Hawkwood, Izaia en tenue al-Malik</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-cinzel">L'Énigme Theafana</h2>
            <ul>
              <li>Mission secrète derrière les lignes ennemies sur Stigmata</li>
              <li>Opérations sur Stigmata, Pandemonium et Nowhere</li>
              <li>Phénomène étrange sur Nowhere au moment de l'action</li>
              <li>Temple eskatonique sur De Molley contenant peut-être des indices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-cinzel">La Prophétie</h2>
            <p className="italic">
              "les morts reviennent sur Malignatius<br />
              l'eau s'empoisonne sur Cadavus<br />
              le prophète se creve les yeux sur Severus<br />
              les ombres complotent sur Cadiz<br />
              le mal règne sur Pandemonium<br />
              un mort en sursis cherche sa fille qui lui a été arraché (anton malevik)<br />
              une duchesse pleure la perte de sa bien aimée (salandra)<br />
              un prêtre a trahi les siens et s'est détourné du pancreateur pour sombrer..."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-cinzel">Indices Récents</h2>
            <ul>
              <li>Rêves troublants et fatigue physique au réveil (possible conditionnement)</li>
              <li>L'antinomie ne peut pas être séparée du corps - c'est un choix de l'hôte</li>
              <li>Connexion possible avec les artefacts Annunaki et leurs guerres anciennes</li>
            </ul>
          </section>
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