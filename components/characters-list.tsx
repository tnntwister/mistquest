import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";

interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  tags: string[];
  imagePath?: string;
}

interface CharactersListProps {
  title?: string;
  characters: Character[];
  tagTitle?: string;
}

export function CharactersList({ 
  title = "Who's Who", 
  characters,
  tagTitle = "Tags"
}: CharactersListProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const selectedChar = characters.find(c => c.id === selectedCharacter);

  return (
    <Card>
      <CardHeader>
        <h4 className="text-xl font-semibold">{title}</h4>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {characters.map((char) => (
              <button
                key={char.id}
                onClick={() => setSelectedCharacter(selectedCharacter === char.id ? null : char.id)}
                className={`text-left p-3 rounded-lg transition-colors hover:bg-secondary/50
                  ${selectedCharacter === char.id ? 'bg-primary/10' : 'bg-secondary/30'}
                `}
              >
                <h4 className="font-medium block">{char.name}</h4>
                <span className="text-sm text-muted-foreground">
                  {char.title}
                </span>
              </button>
            ))}
          </div>

          {/* Popover unique */}
          {selectedChar && (
            <div className="absolute z-10 left-0 right-0 mt-2 bg-card p-4 rounded-lg border shadow-lg">
              <div className="flex flex-wrap gap-6">
                <div className="flex-1 min-w-[280px] space-y-4">
                  <p className="text-muted-foreground">
                    {selectedChar.description}
                  </p>
                  {selectedChar.tags && (
                    <div>
                      <h5 className="text-sm font-medium mb-2">{tagTitle}</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedChar.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-secondary/50 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {selectedChar.imagePath && (
                  <div className="relative w-[200px] h-[200px] rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={selectedChar.imagePath}
                      alt={selectedChar.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 