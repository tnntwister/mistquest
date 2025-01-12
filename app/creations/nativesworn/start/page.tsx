'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { HeroSection } from '@/components/ui/hero-section';
import { Button } from '@/components/ui/button';
import { StartingGuide } from '@/components/game/starting-guide';
import { CharacterSheetIronsworn } from '@/components/game/character-sheet-ironsworn';
import type { Character } from '@/types/character';
import type { StartingGuide as StartingGuideType } from '@/types/task';
import type { BasicAction } from '@/types/action';
import { BasicActions } from '@/components/game/basic-actions';
import { DEFAULT_CHARACTER_VALIDATION } from '@/types/character';
import type { Quest } from '@/types/quest';
import type { FulfillResult } from '@/types/quest';
import type { Asset } from '@/types/asset';
import type { Action } from '@/types/action';
import type { ActionLog } from '@/types/action';

export default function StartPage() {
  const [character, setCharacter] = useState<Character>({
    id: crypto.randomUUID(),
    name: 'Nouveau Personnage',
    userId: '',
    background: '',
    stats: {
      edge: { name: 'Edge', value: 1, description: 'Rapidité et agilité' },
      heart: { name: 'Heart', value: 2, description: 'Empathie et volonté' },
      iron: { name: 'Iron', value: 2, description: 'Force et endurance' },
      shadow: { name: 'Shadow', value: 1, description: 'Discrétion et ruse' },
      wits: { name: 'Wits', value: 1, description: 'Intelligence et perception' }
    },
    resources: {
      health: { name: 'Santé', current: 5, max: 5 },
      spirit: { name: 'Esprit', current: 5, max: 5 },
      supply: { name: 'Ressources', current: 5, max: 5 },
      momentum: { name: 'Élan', current: 2, max: 10 }
    },
    assets: [],
    quests: [],
    validation: DEFAULT_CHARACTER_VALIDATION,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  const [startingTasks, setStartingTasks] = useState<StartingGuideType>({
    title: "Guide de Démarrage",
    description: "Bienvenue dans votre nouvelle aventure Nativesworn. Avant de commencer, prenez le temps de définir :",
    tasks: [
      {
        id: "tribe",
        label: "Votre tribu d'origine et ses traditions",
        description: "Choisissez parmi les tribus disponibles ou créez la vôtre",
        completed: false,
        required: true
      },
      {
        id: "role",
        label: "Votre rôle au sein de la communauté",
        description: "Définissez votre position sociale et vos responsabilités",
        completed: false,
        required: true
      },
      {
        id: "totem",
        label: "Votre animal totem et votre lien spirituel",
        description: "Choisissez un animal qui représente votre esprit",
        completed: false,
        required: true
      },
      {
        id: "oath",
        label: "Le serment sacré qui guide votre quête",
        description: "Formulez le serment qui motivera vos actions",
        completed: false,
        required: true
      }
    ]
  });

 

  const [actionLogs, setActionLogs] = useState<ActionLog[]>([]);

  const handleActionClick = (action: Action) => {
    const results = ['strongHit', 'weakHit', 'miss'];
    const result = results[Math.floor(Math.random() * results.length)] as ActionLog['result'];
    
    setActionLogs(prev => [...prev, {
      action,
      timestamp: Date.now(),
      result
    }]);
  };

  const toggleTask = (taskId: string) => {
    setStartingTasks(prev => ({
      ...prev,
      tasks: prev.tasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    }));
  };

  const handleQuestAdd = (quest: Quest) => {
    setCharacter(prev => ({
      ...prev,
      quests: [...prev.quests, quest]
    }));
  };

  const handleQuestProgress = (questId: string, progress: number) => {
    setCharacter(prev => ({
      ...prev,
      quests: prev.quests.map(quest => 
        quest.id === questId 
          ? { 
              ...quest, 
              progress: Math.min(10, quest.progress + progress) 
            }
          : quest
      )
    }));
  };

  const handleQuestFulfill = (questId: string, result: FulfillResult) => {
    setCharacter(prev => ({
      ...prev,
      quests: prev.quests.map(quest => 
        quest.id === questId 
          ? { 
              ...quest, 
              status: result.outcome === 'miss' ? 'active' : 'fulfilled',
              progress: result.outcome === 'miss' ? quest.progress : 10,
              updatedAt: new Date()
            }
          : quest
      )
    }));
  };

  const handleQuestForsake = (questId: string) => {
    setCharacter(prev => ({
      ...prev,
      quests: prev.quests.map(quest => 
        quest.id === questId 
          ? { 
              ...quest, 
              status: 'forsaken' as const
            }
          : quest
      )
    }));
  };

  const handleAssetAdd = (assetTemplate: Asset) => {
    if (character.assets.some(existing => existing.name === assetTemplate.name)) {
      return;
    }

    const newAsset: Character['assets'][number] = {
      ...assetTemplate,
      id: crypto.randomUUID(),
      experience: 0,
      abilities: assetTemplate.abilities.map((ability, index) => ({
        ...ability,
        enabled: index === 0,
        trackValue: ability.requiresTrack ? 0 : undefined
      }))
    };

    setCharacter(prev => ({
      ...prev,
      assets: [...prev.assets, newAsset]
    }));
  };

  const handleAssetRemove = (assetId: string) => {
    setCharacter(prev => ({
      ...prev,
      assets: prev.assets.filter(asset => asset.id !== assetId)
    }));
  };

  return (
    <div className="space-y-8">
      <HeroSection 
        imagePrefix="nativesworn" 
        title="Nouvelle Aventure" 
        description="Créez votre personnage et commencez votre voyage dans les terres amérindiennes." 
      />

      <div className="container mx-auto space-y-12">
        <Breadcrumbs items={[
          { label: "Accueil", href: "/" },
          { label: "Nativesworn", href: "/creations/nativesworn" },
          { label: "Nouvelle Aventure" }
        ]} />

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <BasicActions />
          </div>

          <div className="col-span-12 lg:col-span-4 space-y-8">
            <StartingGuide 
              guide={startingTasks} 
              onTaskToggle={toggleTask}
            />

            <CharacterSheetIronsworn 
              character={character}
              onNameChange={(name) => {
                setCharacter(prev => ({ ...prev, name }));
              }}
              onStatChange={(statKey, value) => {
                setCharacter(prev => ({
                  ...prev,
                  stats: {
                    ...prev.stats,
                    [statKey]: { ...prev.stats[statKey], value }
                  }
                }));
              }}
              onResourceChange={(resourceKey, value) => {
                setCharacter(prev => ({
                  ...prev,
                  resources: {
                    ...prev.resources,
                    [resourceKey]: { ...prev.resources[resourceKey], current: value }
                  }
                }));
              }}
              onQuestAdd={handleQuestAdd}
              onQuestProgress={handleQuestProgress}
              onQuestFulfill={handleQuestFulfill}
              onQuestForsake={handleQuestForsake}
              onAssetAdd={handleAssetAdd}
              onAssetRemove={handleAssetRemove}
            />


          </div>
        </div>
      </div>
    </div>
  );
}
