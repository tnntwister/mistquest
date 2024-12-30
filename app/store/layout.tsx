import { Metadata } from 'next';
import { SITE_NAME } from '../config';

export const metadata: Metadata = {
  title: `Mes petites ventes - ${SITE_NAME}`,
  description: 'Achat et vente en cryptomonnaies',
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 