"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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

  return (
    <Card>
      <CardHeader>
        <h4 className="text-xl font-semibold">{title}</h4>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {characters.map((char) => (
            <Popover key={char.id}>
              <PopoverTrigger asChild>
                <button
                  className={`text-left p-3 rounded-lg transition-colors hover:bg-secondary/50 w-full
                    ${selectedCharacter === char.id ? 'bg-primary/10' : 'bg-secondary/30'}
                  `}
                  onClick={() => setSelectedCharacter(selectedCharacter === char.id ? null : char.id)}
                >
                  <h4 className="font-medium block">{char.name}</h4>
                  <span className="text-sm text-muted-foreground">
                    {char.title}
                  </span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[calc(100vw-2rem)] max-w-[450px] mx-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">{char.name}</h4>
                    <p className="text-sm text-muted-foreground">{char.title}</p>
                  </div>
                  <div className="flex flex-wrap gap-6">
                    <div className="flex-1 min-w-[280px] space-y-4">
                      <p className="text-muted-foreground">
                        {char.description}
                      </p>
                      {char.tags && (
                        <div>
                          <h5 className="text-sm font-medium mb-2">{tagTitle}</h5>
                          <div className="flex flex-wrap gap-2">
                            {char.tags.map((tag, index) => (
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
                    {char.imagePath && (
                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={char.imagePath}
                          alt={char.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 