import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SITE_NAME } from '@/app/config';
import type { Metadata } from 'next';
import Image from "next/image";
import { identites } from "@/data/taylor";

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

        {identites.map((identite) => (
          <Card key={identite.id}>
            <CardHeader>
              <h3 className="text-2xl font-cinzel text-foreground">{identite.nom} ({identite.periode})</h3>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div 
                  className="prose dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: identite.description }}
                />
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={identite.image}
                    alt={identite.nom}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 