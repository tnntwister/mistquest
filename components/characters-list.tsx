import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  relationship: string;
}

interface CharactersListProps {
  title?: string;
  characters: Character[];
}

export function CharactersList({ title = "Who's Who", characters }: CharactersListProps) {
  return (
    <Card>
      <CardHeader>
        <h4 className="text-xl font-semibold">{title}</h4>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <Accordion type="single" collapsible>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {characters.map((char) => (
                <AccordionItem key={char.id} value={char.id} className="border-none">
                  <AccordionTrigger className="hover:bg-secondary/50 rounded-lg px-3 py-2">
                    <div className="text-left">
                      <h4 className="font-medium block">{char.name}</h4>
                      <span className="text-sm text-muted-foreground">
                        {char.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="absolute z-10 left-0 right-0 mt-2 bg-card p-4 rounded-lg border shadow-lg">
                    <div className="max-w-prose font-sans">
                      <p className="text-muted-foreground">{char.description}</p>
                      <p className="mt-2 text-sm font-medium">Relation : {char.relationship}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
} 