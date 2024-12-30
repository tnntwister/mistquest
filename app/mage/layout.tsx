import { Metadata } from 'next';
import { SITE_NAME } from '../config';

export const metadata: Metadata = {
  title: `Chroniques de Mage l'Ascension - ${SITE_NAME}`,
  description: "Découvrez les chroniques de Mage l'Ascension, entre mystère et magie dans un monde contemporain sombre et fascinant."
};

export default function MageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 