'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import type { ActionLog } from '@/types/action';

interface CampaignLogContextType {
  logs: ActionLog[];
  addLog: (log: Omit<ActionLog, 'chapter'>) => void;
  currentChapter: number;
  setCurrentChapter: (value: number | ((prev: number) => number)) => void;
}

export const CampaignLogContext = createContext<CampaignLogContextType>({
  logs: [],
  addLog: () => {},
  currentChapter: 1,
  setCurrentChapter: () => {},
});

export function CampaignLogProvider({ children }: { children: React.ReactNode }) {
  const [logs, setLogs] = useState<ActionLog[]>([]);
  const [currentChapter, setCurrentChapter] = useState(1);

  // Charger les logs au montage
  useEffect(() => {
    const savedLogs = localStorage.getItem('campaignLogs');
    const savedChapter = localStorage.getItem('currentChapter');
    
    if (savedLogs) {
      setLogs(JSON.parse(savedLogs));
    }
    if (savedChapter) {
      setCurrentChapter(Number(savedChapter));
    }
  }, []);

  // Sauvegarder les logs à chaque modification
  useEffect(() => {
    localStorage.setItem('campaignLogs', JSON.stringify(logs));
  }, [logs]);

  // Sauvegarder le chapitre courant
  useEffect(() => {
    localStorage.setItem('currentChapter', String(currentChapter));
  }, [currentChapter]);

  const addLog = (log: Omit<ActionLog, 'chapter'>) => {
    setLogs(prev => [...prev, { ...log, chapter: currentChapter }]);
  };

  return (
    <CampaignLogContext.Provider value={{ 
      logs, 
      addLog, 
      currentChapter, 
      setCurrentChapter 
    }}>
      {children}
    </CampaignLogContext.Provider>
  );
}

export function useCampaignLog() {
  const context = useContext(CampaignLogContext);
  if (!context) {
    throw new Error('useCampaignLog must be used within a CampaignLogProvider');
  }
  return context;
} 