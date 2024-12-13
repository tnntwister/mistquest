'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DiscIcon as Discord, Menu, X } from 'lucide-react'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <header className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <Link href="/" className="text-4xl font-bold hover:text-gold-200 transition-colors">
              mist.quest
            </Link>
            <p className="text-sm text-gray-300 mt-1">contenus fanmade pour Mage</p>
          </div>
          <button
            className="md:hidden text-gray-300 hover:text-gold-200 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      <nav className="bg-[#2a2a2a] border-b border-purple-700/20 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <ul className="hidden md:flex space-x-8">
              <li>
                <Link 
                  href="/the-missing-5th-edition" 
                  className="text-gray-300 hover:text-gold-200 transition-colors"
                >
                  The Missing 5th Edition
                </Link>
              </li>
              <li>
                <Link 
                  href="/campagne-en-cours" 
                  className="text-gray-300 hover:text-gold-200 transition-colors"
                >
                  Campagne en cours
                </Link>
              </li>
              <li>
                <Link 
                  href="/breves-du-mdt" 
                  className="text-gray-300 hover:text-gold-200 transition-colors"
                >
                  Brèves du MdT
                </Link>
              </li>
            </ul>
            <Link 
              href="https://discord.gg/VcXnZ6Mnzu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:inline-flex bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-2 rounded-md items-center transition-colors"
            >
              <Discord className="w-5 h-5 mr-2" />
              Discord
            </Link>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`md:hidden bg-[#2a2a2a] ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-2">
          <ul className="space-y-2">
            <li>
              <Link 
                href="/the-missing-5th-edition" 
                className="block text-gray-300 hover:text-gold-200 transition-colors py-2"
                onClick={toggleMenu}
              >
                The Missing 5th Edition
              </Link>
            </li>
            <li>
              <Link 
                href="/campagne-en-cours" 
                className="block text-gray-300 hover:text-gold-200 transition-colors py-2"
                onClick={toggleMenu}
              >
                Campagne en cours
              </Link>
            </li>
            <li>
              <Link 
                href="/breves-du-mdt" 
                className="block text-gray-300 hover:text-gold-200 transition-colors py-2"
                onClick={toggleMenu}
              >
                Brèves du MdT
              </Link>
            </li>
            <li>
              <Link 
                href="https://discord.gg/VcXnZ6Mnzu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex bg-[#5865F2] hover:bg-[#4752C4] text-white px-4 py-2 rounded-md items-center transition-colors"
                onClick={toggleMenu}
              ><Discord className="w-5 h-5 mr-2" />
                Discord
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-[#2a2a2a] text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>&copy; 2024 mist.quest. Tous droits réservés.</p>
            <div className="mt-2 space-x-4">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-gold-200 inline-block transition-colors">
                Mentions légales et CGU
              </Link>
              <Link href="/credits-et-contact" className="text-gray-400 hover:text-gold-200 inline-block transition-colors">
                Crédits & Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

