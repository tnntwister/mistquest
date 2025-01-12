import { useCampaignLog } from '@/contexts/campaign-log-context';

export function CampaignLog() {
  const { logs } = useCampaignLog();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Journal de Campagne</h3>
      <div className="space-y-2">
        {logs.map((log, index) => (
          <div key={log.timestamp} className="p-2 border rounded">
            <p className="font-medium">{log.action.label}</p>
            <p className="text-sm text-gray-600">
              Résultat: {log.result}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 