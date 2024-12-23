import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  allies: Character[];
  rivals: Character[];
}

export function CharactersList({ allies, rivals }: CharactersListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Who's Who</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Alliés */}
          <div>
            <h3 className="font-semibold mb-4">Alliés</h3>
            <div className="relative">
              <Accordion type="single" collapsible>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {allies.map((char) => (
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
          </div>

          {/* Rivaux */}
          <div>
            <h3 className="font-semibold mb-4">Rivaux</h3>
            <div className="relative">
              <Accordion type="single" collapsible>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {rivals.map((char) => (
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
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 