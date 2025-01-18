import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SITE_NAME } from '@/app/config';
import type { Metadata } from 'next';
import Image from "next/image";
import { identites } from "@/data/taylor";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Les Trois Vies - ${SITE_NAME}`,
  description: "Geoffrey Taylor, Gottfried Scheiner, Jerome Sarrac : trois identités, trois époques de la vie d'un même vampire."
};

export default function TaylorIdentitesPage() {
  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden">
        <HeroSection 
          imagePrefix="taylor" 
          title="Les Trois Vies" 
          description="Geoffrey Taylor, Gottfried Scheiner, Jerome Sarrac : trois identités, trois époques."
        />
      </div>
      
      <div className="container mx-auto px-4 space-y-8">
        <Breadcrumbs 
          items={[
            { label: "Jerome Sarrac", href: "/personnages/taylor" },
            { label: "Les Trois Vies" }
          ]} 
        />

        <div className="grid md:grid-cols-3 gap-6">
          {identites.map((identite) => (
            <Card key={identite.id}>
              <CardContent className="space-y-4">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={identite.image}
                    alt={identite.nom}
                    fill
                    className="object-cover my-4 rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-cinzel text-foreground mb-2">{identite.nom}</h3>
                  <p className="text-muted-foreground mb-4">({identite.periode})</p>
                  <div 
                    className="prose dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: identite.description }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/personnages/taylor">Retour</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 