import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type StatType = 'edge' | 'heart' | 'iron' | 'shadow' | 'wits';

type Roll = {
  action: number;
  challenge: number[];
  score: number;
  result: string;
  stat: StatType;
  timestamp: number;
};

type StoryEntry = {
  roll: Roll;
  description: string;
  timestamp: number;
};

const IronswornSoloSystem = () => {
  const [story, setStory] = useState<StoryEntry[]>([]);
  const [currentScene, setCurrentScene] = useState({
    description: "",
    momentum: 2,
    stats: {
      edge: 1,
      heart: 2,
      iron: 2,
      shadow: 1,
      wits: 1
    },
    health: 5,
    spirit: 5,
    supply: 5
  });

  const [lastRoll, setLastRoll] = useState<Roll | null>(null);

  // Fonction pour lancer les dés d'action
  const rollAction = (stat: StatType) => {
    const actionDie = Math.floor(Math.random() * 6) + 1;
    const challengeDie1 = Math.floor(Math.random() * 10) + 1;
    const challengeDie2 = Math.floor(Math.random() * 10) + 1;
    
    const score = Math.min(actionDie + currentScene.stats[stat], 10);
    
    let result = '';
    if (score > challengeDie1 && score > challengeDie2) {
      result = 'Strong Hit!';
    } else if (score > challengeDie1 || score > challengeDie2) {
      result = 'Weak Hit';
    } else {
      result = 'Miss';
    }

    const roll = {
      action: actionDie,
      challenge: [challengeDie1, challengeDie2],
      score,
      result,
      stat,
      timestamp: Date.now()
    };

    setLastRoll(roll);
    addToStory(roll);
  };

  // Ajouter un événement à l'histoire
  const addToStory = (roll: Roll) => {
    const newEntry = {
      roll,
      description: currentScene.description,
      timestamp: Date.now()
    };
    
    setStory(prev => [...prev, newEntry]);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      {/* Stats et ressources */}
      <Card>
        <CardHeader>
          <CardTitle>État du Personnage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold">Stats</h3>
              <div>Edge: {currentScene.stats.edge}</div>
              <div>Heart: {currentScene.stats.heart}</div>
              <div>Iron: {currentScene.stats.iron}</div>
              <div>Shadow: {currentScene.stats.shadow}</div>
              <div>Wits: {currentScene.stats.wits}</div>
            </div>
            <div>
              <h3 className="font-bold">Resources</h3>
              <div>Health: {currentScene.health}</div>
              <div>Spirit: {currentScene.spirit}</div>
              <div>Supply: {currentScene.supply}</div>
              <div>Momentum: {currentScene.momentum}</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <Button onClick={() => rollAction('edge')}>Face Danger (Edge)</Button>
            <Button onClick={() => rollAction('heart')}>Secure an Advantage (Heart)</Button>
            <Button onClick={() => rollAction('iron')}>Strike (Iron)</Button>
            <Button onClick={() => rollAction('shadow')}>Face Desolation (Shadow)</Button>
            <Button onClick={() => rollAction('wits')}>Gather Information (Wits)</Button>
          </div>
        </CardContent>
      </Card>

      {/* Dernier jet */}
      {lastRoll && (
        <Card>
          <CardHeader>
            <CardTitle>Dernier Jet</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p>Action Die: {lastRoll.action} + {lastRoll.stat} = {lastRoll.score}</p>
              <p>Challenge Dice: {lastRoll.challenge[0]}, {lastRoll.challenge[1]}</p>
              <p className="font-bold">{lastRoll.result}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Journal */}
      <Card>
        <CardHeader>
          <CardTitle>Journal d'Aventure</CardTitle>
        </CardHeader>
        <CardContent>
          {story.map((entry, index) => (
            <div key={index} className="border-b border-gray-200 pb-4 mb-4">
              <div className="text-sm text-gray-500">
                {new Date(entry.timestamp).toLocaleString()}
              </div>
              <div>{entry.description}</div>
              {entry.roll && (
                <div className="mt-2 text-sm">
                  {entry.roll.stat.toUpperCase()}: {entry.roll.action} + {currentScene.stats[entry.roll.stat]} = {entry.roll.score} vs {entry.roll.challenge[0]}, {entry.roll.challenge[1]}
                  <div className="font-bold">{entry.roll.result}</div>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default IronswornSoloSystem;