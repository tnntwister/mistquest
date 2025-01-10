import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";

export default function RencontresPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Fael", href: "/fael" },
    { label: "Les Trois Rencontres" }
  ];

  return (
    <div className="container mx-auto py-8 space-y-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-cinzel mb-8">Les Trois Rencontres</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-cinzel">Première Rencontre</h2>
            <p>À venir...</p>
          </section>

          <section>
            <h2 className="text-2xl font-cinzel">Deuxième Rencontre</h2>
            <p>À venir...</p>
          </section>

          <section>
            <h2 className="text-2xl font-cinzel">Troisième Rencontre</h2>
            <p>À venir...</p>
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