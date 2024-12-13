'use client'

import { useState } from 'react'
import Layout from '@/components/layout'

export default function CreditsEtContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Formulaire soumis:', formData)
    // Réinitialiser le formulaire après soumission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Crédits & Contact</h1>
        
        <section className="mb-12 bg-[#2a2a2a] p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-white">Crédits</h2>
          <p className="mb-4 text-gray-300">
            Mage l'Ascension est un jeu édité par White Wolf Publishing et Onyx Path Publishing. Nous tenons à exprimer notre gratitude pour la création de cet univers riche et captivant.
          </p>
          <p className="mb-4 text-gray-300">
            La version française du jeu est traduite et publiée par Arkhane Asylum Publishing. Nous les remercions pour leur travail de qualité qui permet aux francophones de profiter pleinement de ce jeu extraordinaire.
          </p>
          <p className="mb-4 text-gray-300">
            Notre site et notre version homebrew sont des créations de fans, réalisées avec amour et respect pour l'œuvre originale. Nous ne prétendons pas détenir les droits sur Mage l'Ascension ou le Monde des Ténèbres.
          </p>
          <p className="text-gray-300">
            Nous encourageons tous les visiteurs à soutenir les éditeurs officiels en achetant les livres et suppléments originaux.
          </p>
        </section>

        <section className="bg-[#2a2a2a] p-6 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-white">Contactez-nous</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Envoyer
              </button>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  )
}

