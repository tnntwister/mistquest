import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollText, Sword, BookOpen, Compass, Sparkles, Flame, FlameKindling, Wind } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FeatureCard } from "../components/FeatureCard";

const features = [
  {
    title: "Fael Bursandra des Hazat",
    description: "Suivez le voyage d'un noble guerrier dans un univers d'intrigues et d'honneur.",
    iconName: "⚔️",
    href: "/fael",
    image: "/images/features/fael-hero.webp"
  },
  {
    title: "Mage",
    description: "Explorez les mystères de la magie et des pouvoirs qui altèrent la réalité.",
    iconName: "✨",
    href: "/mage",
    image: "/images/features/mage-hero.webp"
  },
  {
    title: "LNS",
    description: "Plongez dans la dark fantasy et les aventures épiques.",
    iconName: "📖",
    href: "/nouveau-soleil",
    image: "/images/features/lns-hero.webp"
  },
  {
    title: "Tokyo:Otherscape",
    description: "Explorez le mystère de Tokyo, une ville où les lignes entre le monde réel et le monde des esprits sont floues.",
    iconName: "✨",
    href: "/otherscape",
    image: "/images/features/otherscape-hero.webp"
  },
  {
    title: "Ironsworn",
    description: "Forgez votre chemin à travers des terres dangereuses en solo ou en groupe.",
    iconName: "🗡️",
    href: "/ironsworn",
    image: "/images/features/ironsworn-hero.webp"
  },
  {
    title: "LitM",
    description: "Créez vos propres récits dans un monde enveloppé de mystère.",
    iconName: "📜",
    href: "/legends",
    image: "/images/features/litm-hero.webp"
  }
];

export default function Home() {
  return (
    <>
      {/* Hero section en dehors du container */}
      <div className="relative w-screen h-[60vh] -mx-4 -mt-8">
        <Image
          src="/images/hero/main-hero.webp"
          alt="Façade moderne d'un musée"
          fill
          className="object-cover brightness-90 object-center"
          priority
        />
        {/* Overlay avec un dégradé subtil */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark/80" />
        
        {/* Contenu superposé */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 p-6 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-text-light">
              Zone de développement roliste
            </h1>
            <p className="mx-auto max-w-[700px] text-text-light/90 md:text-xl">
              Retrouvez mes notes et mes idées de PJ/MJ sur les univers qui me plaisent en ce moment.<br />
              Pour les sujets les plus développés, j&apos;en fais des documents que je publie sur itch.io.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button asChild size="lg">
                <Link href="https://discord.gg/VcXnZ6Mnzu" target="_blank">Rejoindre une partie</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://fxguillois.itch.io/" target="_blank">Mes publications</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal dans le container */}
      <div className="flex flex-col items-center">
        <div className="space-y-12 w-full max-w-[1440px] px-4">
          <section className="w-full max-w-5xl mx-auto">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  {...feature}
                />
              ))}
            </div>
          </section>

          <section className="w-full max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold">Dernières Mises à Jour</h2>
            <Card>
              <CardHeader>
                <CardTitle>Nouvelle Entrée du Journal</CardTitle>
                <CardDescription>Mis à jour il y a 2 jours</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Dernière entrée dans le journal de Fael Bursandra, détaillant les récentes intrigues politiques dans les maisons nobles.</p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      {/* Section Discord CTA */}
      <section className="w-full bg-deep-blue/50 mt-12 relative">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/backgrounds/discord-background.webp"
            alt="Background Discord"
            fill
            className="object-cover brightness-50"
          />
        </div>

        {/* Contenu avec overlay */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl font-bold text-text-light">
              Rejoignez la Communauté
            </h2>
            <p className="text-text-light/80 max-w-2xl">
              Participez aux discussions sur Discord, partagez vos expériences de jeu et rencontrez d'autres passionnés de dark fantasy et de jeux de rôle narratifs.
            </p>
            <Button 
              size="lg" 
              className="bg-[#5865F2] hover:bg-[#4752C4] transition-colors"
              asChild
            >
              <Link href="https://discord.gg/VcXnZ6Mnzu" target="_blank" rel="noopener noreferrer">
                Rejoindre le Discord
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}