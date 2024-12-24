import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function CGUPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <h1 className="text-3xl font-bold">Conditions Générales d'Utilisation</h1>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Acceptation des Conditions</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>En accédant à ce site, vous acceptez d'être lié par ces conditions d'utilisation, toutes les lois et réglementations applicables.</p>
          <p>Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser ce site.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Utilisation du Contenu</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Le contenu de ce site est fourni à titre informatif et pour un usage personnel uniquement.</p>
          <p>Vous pouvez télécharger les ressources mises à disposition explicitement, mais vous ne pouvez pas :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modifier ou copier les contenus</li>
            <li>Utiliser les contenus à des fins commerciales</li>
            <li>Redistribuer le contenu sur d'autres plateformes</li>
            <li>Tenter de décompiler ou d'extraire le code source du site</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Contenu Utilisateur</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>En soumettant du contenu sur notre Discord ou nos espaces communautaires, vous :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Garantissez que vous avez le droit de partager ce contenu</li>
            <li>Accordez une licence non-exclusive d'utilisation de ce contenu</li>
            <li>Acceptez que ce contenu puisse être modéré</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Limitation de Responsabilité</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Le site est fourni "tel quel" sans aucune garantie, expresse ou implicite.</p>
          <p>Nous ne pourrons en aucun cas être tenus responsables de dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser ce site.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Modifications</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Nous nous réservons le droit de modifier ces conditions à tout moment.</p>
          <p>Les modifications entrent en vigueur dès leur publication sur le site.</p>
          <p>Dernière mise à jour : Mars 2024</p>
        </CardContent>
      </Card>
    </div>
  );
} 