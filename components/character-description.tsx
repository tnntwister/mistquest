import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface CharacterDescriptionProps {
  name: string;
  description: string;
  imagePath: string;
  characterSheetLink: string;
}

export function CharacterDescription({ name, description, imagePath, characterSheetLink }: CharacterDescriptionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Description du Personnage</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6">
        <div className="prose prose-invert font-sans">
          <p>{description}</p>
          <Button asChild className="mt-4">
            <Link href={characterSheetLink}>Voir la Fiche Complète</Link>
          </Button>
        </div>
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
          <Image
            src={imagePath}
            alt={`Portrait de ${name}`}
            fill
            className="object-cover"
          />
        </div>
      </CardContent>
    </Card>
  );
} 