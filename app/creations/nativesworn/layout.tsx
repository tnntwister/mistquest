'use client';

import { CampaignLogProvider } from '@/contexts/campaign-log-context';

export default function NativeswornLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CampaignLogProvider>
      {children}
    </CampaignLogProvider>
  );
} 