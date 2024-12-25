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
            <h3 className="text-xl font-bold text-text-light">Mist.Quest</h3>
            <p className="text-text-muted">
              Vieux joueur et MJ de jeu de rôle, je partage mes expériences et mes créations sur ce site. J&apos;essaie de poster sur ce site les évolutions et les détails de maîtrise, tandis que les ressources sont publiées sur ma page itch.io. 
            </p>
            <p className="text-text-muted">
              Le domaine Mist.quest vient de mon penchant pour les univers mystérieux, la dark fantasy, le futur proche, mais aussi les paysages de campagne et de nature (je vis dans une petite ville en province).
            </p>
            <p className="text-text-muted">
              Je vous souhaite une agréable lecture !
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-light">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/fael" className="text-text-muted hover:text-text-light transition-colors">
                  Fael Bursandra des Hazat
                </Link>
              </li>
              <li>
                <Link href="/otherscape" className="text-text-muted hover:text-text-light transition-colors">
                  Otherscape
                </Link>
              </li>
              <li>
                <Link href="/mage" className="text-text-muted hover:text-text-light transition-colors">
                  Mage
                </Link>
              </li>
              <li>
                <Link href="/nouveau-soleil" className="text-text-muted hover:text-text-light transition-colors">
                  LNS
                </Link>
              </li>
              <li>
                <Link href="/ironsworn" className="text-text-muted hover:text-text-light transition-colors">
                  Ironsworn
                </Link>
              </li>
              <li>
                <Link href="/legends" className="text-text-muted hover:text-text-light transition-colors">
                  LitM
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens Sociaux */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-light">Communauté</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://discord.gg/VcXnZ6Mnzu" 
                  className="text-text-muted hover:text-text-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-text-muted hover:text-text-light transition-colors">
                  À propos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-text-muted/10 mt-8 pt-8 text-center text-text-muted">
          <div className="flex items-center justify-center gap-4 text-sm font-sans">
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