import { createContext, useContext, useState } from 'react';
import type { ActionLog } from '@/types/action';

interface CampaignLogContextType {
  logs: ActionLog[];
  addLog: (log: ActionLog) => void;
}

const CampaignLogContext = createContext<CampaignLogContextType | undefined>(undefined);

export function CampaignLogProvider({ children }: { children: React.ReactNode }) {
  const [logs, setLogs] = useState<ActionLog[]>([]);

  const addLog = (log: ActionLog) => {
    setLogs(prev => [...prev, log]);
  };

  return (
    <CampaignLogContext.Provider value={{ logs, addLog }}>
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