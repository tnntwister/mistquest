import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface SystemDescriptionProps {
  name: string;
  description: string;
  imagePath: string;
  MoreLink: string | null;
}

export function SystemDescription({ name, description, imagePath, MoreLink }: SystemDescriptionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{ name }</CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6">
        <div className="prose prose-invert font-sans">
          <div dangerouslySetInnerHTML={{ __html: description }} />
          {MoreLink && (
            <Button asChild className="mt-4">
              <Link href={MoreLink}>En savoir plus</Link>
            </Button>
          )}
        </div>
        {imagePath && (
          MoreLink ? (
            <Link 
              href={MoreLink}
              className="relative h-full rounded-lg overflow-hidden transition-transform hover:scale-[1.02]"
            >
              <Image
                src={imagePath}
                alt={`Portrait de ${name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </Link>
          ) : (
            <div className="relative h-full rounded-lg overflow-hidden">
              <Image
                src={imagePath}
                alt={`Portrait de ${name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )
        )}
      </CardContent>
    </Card>
  );
} 