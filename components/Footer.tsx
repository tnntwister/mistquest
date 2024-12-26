'use client'

import Link from "next/link"
import { ScrollText, Sword, BookOpen, Compass, Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-background-darker mt-16">
      <div className="max-w-[1440px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-text-light">Mist.Quest</h3>
              <div className="flex items-center gap-2">
                <Link
                  href="https://discord.gg/VcXnZ6Mnzu" 
                  className="text-text-muted hover:text-text-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </Link>
                <Link
                  href="https://fxguillois.itch.io/" 
                  className="text-text-muted hover:text-text-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.13 1.338C2.08 1.96 2 2.755 2 3.219v2.164H22V3.22c0-.464-.08-1.259-1.13-1.881C19.522.433 17.646 0 16.07 0H7.93C6.354 0 4.478.433 3.13 1.338zm19.852 5.145H1.018c-.04.95 0 1.945 0 2.91 0 1.66 1.736 3.125 3.5 3.125h2.504c1.547 0 2.478-1.283 2.478-2.72 0 1.437 1.008 2.72 2.555 2.72h2.494c1.547 0 2.555-1.283 2.555-2.72 0 1.437.931 2.72 2.478 2.72h2.504c1.764 0 3.5-1.465 3.5-3.125 0-.965.04-1.96 0-2.91zM2 21.978c0 .975.38 2.022 2.303 2.022h15.394c1.923 0 2.303-1.047 2.303-2.022l-.014-9.291c-.816.73-2.082 1.228-3.482 1.228h-2.504c-1.276 0-1.478-.909-1.478-1.72h-1v1.72c0 .811-.202 1.72-1.478 1.72H9.55c-1.276 0-1.478-.909-1.478-1.72h-1v1.72c0 .811-.202 1.72-1.478 1.72H3.086c-1.4 0-2.666-.498-3.482-1.228L2 21.978z"/>
                  </svg>
                </Link>
              </div>
            </div>
            <p className="text-sm text-text-muted">
              Vieux joueur et MJ de jeu de rôle, je partage mes expériences et mes créations sur ce site. J&apos;essaie de poster sur ce site les évolutions et les détails de maîtrise, tandis que les ressources sont publiées sur ma page itch.io. 
            </p>
            <p className="text-sm text-text-muted">
              Le domaine Mist.quest vient de mon penchant pour les univers mystérieux, la dark fantasy, le futur proche, mais aussi les paysages de campagne et de nature (je vis dans une petite ville en province).
            </p>
            <p className="text-sm text-text-muted">
              Je vous souhaite une agréable lecture !
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-light">Navigation</h4>
            <ul className="space-y-2 text-sm">
            
              <li>
                <Link href="/fael" className="text-text-muted hover:text-text-light transition-colors">
                  PJ à Fading Suns
                </Link>
              </li>
              <li>
                <Link href="/otherscape" className="text-text-muted hover:text-text-light transition-colors">
                  MJ à Tokyo:Otherscape
                </Link>
              </li>
              <li>
                <Link href="/mage" className="text-text-muted hover:text-text-light transition-colors">
                  MJ à Mage l'Ascension
                </Link>
              </li>
              <li>
                <Link href="/nouveau-soleil" className="text-text-muted hover:text-text-light transition-colors">
                  MJ à Légendes du Nouveau Soleil
                </Link>
              </li>
              <li>
                <Link href="/ironsworn" className="text-text-muted hover:text-text-light transition-colors">
                  MJ à Archipels, Pax Elfica
                </Link>
              </li>
              <li>
                <Link href="/obojima" className="text-text-muted hover:text-text-light transition-colors">
                  MJ dans Obojima 
                </Link>
              </li>
              <li>
                <Link href="/reflexions" className="text-text-muted hover:text-text-light transition-colors">
                  Réflexions sur le JdR
                </Link>
              </li>
            </ul>
          </div>

          {/* Dernières mises à jour */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-light">Dernières mises à jour</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-text-muted">
                <span className="text-text-light">10/04/2024</span> - Combat contre le Chevalier Questeur
              </li>
              <li className="text-text-muted">
                <span className="text-text-light">03/04/2024</span> - Le Dîner de la Marquise
              </li>
              <li className="text-text-muted">
                <span className="text-text-light">27/03/2024</span> - Création du site
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-text-muted/10 mt-8 pt-8 text-center text-text-muted">
          <div className="flex items-center justify-center gap-4 text-xs font-sans">
            <p>© 2024 François-Xavier Guillois. Tous droits réservés.</p>
            <span>•</span>
            <Link
              href="/legal/mentions-legales"
              className="hover:text-text-light transition-colors"
            >
              Mentions Légales
            </Link>
            <span>•</span>
            <Link
              href="/legal/cgu" 
              className="hover:text-text-light transition-colors"
            >
              Conditions d'Utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 