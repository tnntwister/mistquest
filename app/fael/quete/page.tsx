"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Metadata } from 'next';
import { SITE_NAME } from '../../config';

export const metadata: Metadata = {
  title: `La Quête de Fael - ${SITE_NAME}`,
  description: "Découvrez les éléments de la quête de Fael Bursandra, les prophéties qui le guident et les mystères qui l'entourent."
};

export default function QuetePage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Fael", href: "/fael" },
    { label: "Éléments de ma Quête" }
  ];

  return (
    <div className="container mx-auto py-8 space-y-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="prose dark:prose-invert max-w-none text-sm">
        <h1 className="text-4xl font-cinzel mb-8">Éléments de ma Quête</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-secondary/30 p-6 rounded-lg">
            <h2 className="text-2xl font-cinzel">Les Prophéties</h2>
            <q className="italic mb-2 block">
              Tu seras celui par qui arrivera la disgrâce. Tu seras celui qui apportera la réconciliation. Tu sèmeras la mort dans les rangs des croyants et des hérétiques. Tu guideras les justes vers les tombeaux des secrets, car ta double hélice est ainsi faite. Mais dans ces tombeaux tu marcheras en aveugle. Tu es la torche et la clé, mais ni les yeux ni la main. Tu es l'ouvreur des chemins.
            </q>
            <p className="mb-2">- Relique annunaki, Seconde rencontre</p>
            <q className="italic mb-2 block">
              Un grand mal se lèvera et les étoiles s'éteindront.<br />
              les morts reviennent sur Malignatius<br />
              l'eau s'empoisonne sur Cadavus<br />
              le prophète se creve les yeux sur Severus<br />
              les ombres complotent sur Cadiz<br />
              le mal règne sur Pandemonium<br />
              un mort en sursis cherche sa fille qui lui a été arraché<br />
              une duchesse pleure la perte de sa bien aimée<br />
              un prêtre a trahi les siens et s'est détourné du pancreateur pour sombrer...
            </q>
          </section>

          <section className="bg-primary/10 p-6 rounded-lg">
            <h2 className="text-2xl font-cinzel">Le Club des 5</h2>
            <ul>
              <li>Yervani</li>
              <li>Thedoros</li>
              <li>L'obun qui est mort</li>
              <li>La fille d'Anton Malevick</li>
            </ul>
          </section>

          <section className="bg-secondary/30 p-6 rounded-lg">
            <h2 className="text-2xl font-cinzel">L'Intérêt des Al-Malik</h2>
            <ul>
              <li>Exposition à des reliques par Theafana et Izaïa</li>
              <li>Effacement de souvenirs</li>
              <li>Incitation à marcher dans leurs traces</li>
            </ul>
          </section>

          <section className="bg-primary/10 p-6 rounded-lg">
            <h2 className="text-2xl font-cinzel">Histoires Familiales</h2>
            <ul>
              <li>Coup de foudre entre mes parents</li>
              <li>Ma conception 3-4 ans plus tard</li>
              <li>Départ de ma mère quand j'avais 11 ans</li>
              <li>Possible assassinat par mon grand-père paternel</li>
            </ul>
          </section>

          <section className="bg-secondary/30 p-6 rounded-lg">
            <h2 className="text-2xl font-cinzel">Les Races Avancées</h2>
            <p className="italic">Je dois poursuivre un mal, marcher sur les pas d'Izaïa.</p>
          </section>

          <section className="bg-primary/10 p-6 rounded-lg">
            <h2 className="text-2xl font-cinzel">Sauver les Soleils</h2>
            <p className="italic">Pour l'instant, je n'ai pas d'informations.</p>
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