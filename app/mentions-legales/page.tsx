import Layout from '@/components/layout'

export default function MentionsLegales() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6 text-center text-white">
        Mentions Légales et Conditions Générales d'Utilisation
      </h1>
      
      <section className="bg-[#2a2a2a] p-6 rounded shadow mb-6">
        <h2 className="text-2xl font-bold mb-4 text-white">1. Mentions Légales</h2>
        <p className="mb-4 text-gray-300">
          Ce site web est édité par [Votre Nom ou le nom de votre organisation], domicilié à [Votre adresse].
        </p>
        <p className="mb-4 text-gray-300">
          Directeur de la publication : [Nom du directeur de publication]
        </p>
        <p className="mb-4 text-gray-300">
          Hébergeur du site : [Nom et adresse de l'hébergeur]
        </p>
        <p className="text-gray-300">
          Contact : [Votre email de contact]
        </p>
      </section>

      <section className="bg-[#2a2a2a] p-6 rounded shadow mb-6">
        <h2 className="text-2xl font-bold mb-4 text-white">2. Conditions Générales d'Utilisation</h2>
        <h3 className="text-xl font-bold mb-2 text-white">2.1 Acceptation des conditions</h3>
        <p className="mb-4 text-gray-300">
          L'utilisation de ce site implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment.
        </p>

        <h3 className="text-xl font-bold mb-2 text-white">2.2 Description des services fournis</h3>
        <p className="mb-4 text-gray-300">
          Le site [Votre nom de domaine] a pour objet de fournir des informations concernant la campagne de jeu de rôle Mage l'Ascension, incluant des règles homebrew, du contenu de jeu et un calendrier fictif.
        </p>

        <h3 className="text-xl font-bold mb-2 text-white">2.3 Propriété intellectuelle</h3>
        <p className="mb-4 text-gray-300">
          Tous les éléments de ce site, y compris les textes, images, et code source, sont la propriété exclusive de [Votre Nom ou le nom de votre organisation], sauf mention contraire. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
        </p>

        <h3 className="text-xl font-bold mb-2 text-white">2.4 Limitations de responsabilité</h3>
        <p className="mb-4 text-gray-300">
          [Votre Nom ou le nom de votre organisation] ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
        </p>

        <h3 className="text-xl font-bold mb-2 text-white">2.5 Gestion des données personnelles</h3>
        <p className="mb-4 text-gray-300">
          Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, l'utilisateur dispose d'un droit d'accès, de modification et de suppression des informations collectées. Pour exercer ce droit, veuillez nous contacter à l'adresse : [Votre email de contact].
        </p>
      </section>
    </Layout>
  )
}

