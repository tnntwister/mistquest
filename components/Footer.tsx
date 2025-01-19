'use client'

import Link from "next/link"
import { developmentZones } from "@/data/footer-menu"

export function Footer() {
  return (
    <footer className="bg-card mt-8">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* À propos */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div>
                <Link href="/" className="text-foreground hover:text-primary transition-colors">
                  MIST.QUEST
                </Link>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Vieux joueur et MJ de jeu de rôle, je partage mes expériences et mes créations sur ce site. J&apos;essaie de poster sur ce site les évolutions et les détails de maîtrise, tandis que les ressources sont publiées sur ma page itch.io. 
            </p>
            <p className="text-sm text-muted-foreground">
              Le domaine Mist.quest vient de mon penchant pour les univers mystérieux, la dark fantasy, le futur proche, mais aussi les paysages de campagne et de nature (je vis dans une petite ville en province).
            </p>
            <p className="text-sm text-muted-foreground">
              Je vous souhaite une agréable lecture !
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Zones en développement</h4>
            <ul className="space-y-2 text-sm">
              {developmentZones.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    {item.role} à {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dernières mises à jour */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Dernières mises à jour</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                <span className="text-foreground">18/01/2025</span> - Fiche de Jérome Sarrac
              </li>
              <li className="text-muted-foreground">
                <span className="text-foreground">10/01/2025</span> - Fiche de Nicole
              </li>
              <li className="text-muted-foreground">
                <span className="text-foreground">04/01/2025</span> - Création de Nativesworn
              </li>
              <li className="text-muted-foreground">
                <span className="text-foreground">30/12/2024</span> - Description de Fael
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-4 text-xs font-sans">
            <p>© 2024 François-Xavier Guillois. Tous droits réservés.</p>
            <span>•</span>
            <Link
              href="/legal/mentions-legales"
              className="hover:text-foreground transition-colors"
            >
              Mentions Légales
            </Link>
            <span>•</span>
            <Link
              href="/legal/cgu" 
              className="hover:text-foreground transition-colors"
            >
              Conditions d'Utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 