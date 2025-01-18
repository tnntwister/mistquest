import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SITE_NAME } from '@/app/config';
import type { Metadata } from 'next';
import { quete } from "@/data/taylor";

export const metadata: Metadata = {
  title: `La Quête de la Pureté - ${SITE_NAME}`,
  description: "L'obsession de Jerome Sarrac pour la pureté de l'air et sa quête de vengeance."
};

export default function TaylorQuestPage() {
  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden">
        <HeroSection 
          imagePrefix="taylor" 
          title="La Quête de la Pureté" 
          description="Une obsession qui traverse les siècles."
        />
      </div>
      
      <div className="container mx-auto px-4 space-y-8">
        <Breadcrumbs 
          items={[
            { label: "Jerome Sarrac", href: "/personnages/taylor" },
            { label: "La Quête de la Pureté" }
          ]} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quete.map((section) => (
            <Card key={section.id} className="h-full">
              <CardHeader>
                <h3 className="text-2xl font-cinzel text-foreground">{section.titre}</h3>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: section.contenu }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 