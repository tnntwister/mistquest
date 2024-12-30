import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Metadata } from 'next';
import { SITE_NAME } from '../../config';

export const metadata: Metadata = {
  title: `Mentions Légales - ${SITE_NAME}`,
  description: "Mentions légales et informations juridiques concernant le site Mist.Quest."
};

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold">Mentions Légales</h1>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Éditeur du Site</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Le site Mist.Quest est un site personnel non commercial.</p>
          <p>Contact : contact@mist.quest</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Hébergement</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Ce site est hébergé par GitHub Pages</p>
          <p>GitHub, Inc.</p>
          <p>88 Colin P Kelly Jr St, San Francisco, CA 94107, United States</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Propriété Intellectuelle</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>L'ensemble du contenu de ce site est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
          <p>Les marques et logos présents sur ce site sont la propriété de leurs détenteurs respectifs.</p>
          <p>Mage: The Ascension est une marque déposée de Paradox Interactive.</p>
          <p>Fading Suns est une marque déposée de Holistic Design Inc.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Protection des Données</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Ce site ne collecte aucune donnée personnelle.</p>
          <p>Aucun cookie n'est utilisé pour le tracking ou la publicité.</p>
        </CardContent>
      </Card>
    </div>
  );
} 