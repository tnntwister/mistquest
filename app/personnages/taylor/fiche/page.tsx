import { HeroSection } from "@/components/ui/hero-section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { caracteristiques, predation, objectifs } from "@/data/taylor";
import { Metadata } from 'next';
import { SITE_NAME } from '@/app/config';
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: `Fiche de Jerome Sarrac - ${SITE_NAME}`,
  description: "Caractéristiques et capacités de Jerome Sarrac, vampire Malkavien."
};

export default function TaylorSheetPage() {
  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden">
        <HeroSection 
          imagePrefix="taylor" 
          title="Fiche de Personnage" 
          description="Caractéristiques et capacités d'un Malkavien pas comme les autres."
        />
      </div>
      
      <div className="container mx-auto px-4 space-y-8">
        <Breadcrumbs
          items={[
            { label: "Jerome Sarrac", href: "/personnages/taylor" },
            { label: "Fiche de Personnage" }
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Attributs */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Attributs</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Physiques</h3>
                  <ul className="space-y-2">
                    <li>Force : {caracteristiques.attributs.physiques.force}</li>
                    <li>Dextérité : {caracteristiques.attributs.physiques.dexterite}</li>
                    <li>Vigueur : {caracteristiques.attributs.physiques.vigueur}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sociaux</h3>
                  <ul className="space-y-2">
                    <li>Charisme : {caracteristiques.attributs.sociaux.charisme}</li>
                    <li>Manipulation : {caracteristiques.attributs.sociaux.manipulation}</li>
                    <li>Sang-froid : {caracteristiques.attributs.sociaux.sangfroid}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mentaux</h3>
                  <ul className="space-y-2">
                    <li>Intelligence : {caracteristiques.attributs.mentaux.intelligence}</li>
                    <li>Astuce : {caracteristiques.attributs.mentaux.astuce}</li>
                    <li>Résolution : {caracteristiques.attributs.mentaux.resolution}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compétences */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Compétences</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {Object.entries(caracteristiques.competences).map(([key, value]) => (
                  <li key={key} className="capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()} : {value}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Disciplines */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Disciplines</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {Object.entries(caracteristiques.disciplines).map(([key, value]) => (
                  <li key={key} className="capitalize">
                    {key} : {value}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Avantages et Handicaps */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Avantages et Handicaps</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Avantages</h3>
                  <ul className="space-y-2">
                    {Object.entries(caracteristiques.avantages).map(([key, value]) => (
                      <li key={key} className="capitalize">
                        {key} : {value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Handicaps</h3>
                  <ul className="space-y-2">
                    {caracteristiques.handicaps.map((handicap, index) => (
                      <li key={index}>{handicap}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prédation */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Prédation</h2>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: predation }} />
            </CardContent>
          </Card>

          {/* Objectifs */}
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Objectifs</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Objectif Principal</h3>
                  <p>{objectifs.principal}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Désir</h3>
                  <p>{objectifs.desire}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 