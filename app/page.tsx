import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FeatureCard } from "../components/FeatureCard";
import { Timeline } from "@/components/timeline";
import { Achievements } from "@/components/Achievements";
import homeData from "@/data/home.json";

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
              {homeData.features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  {...feature}
                />
              ))}
            </div>
          </section>

          {/* Nouvelle section profil */}
          <section className="w-full max-w-5xl mx-auto space-y-12">
            {/* Profil */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Qui suis-je ?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionné de jeux de rôle narratifs et de dark fantasy, je crée des hacks et des contenus pour enrichir vos parties. 
                Mon objectif est de partager des outils qui facilitent l'immersion et la narration.
              </p>
            </div>

            {/* Timeline et Achievements */}
            <div className="grid gap-8 md:grid-cols-2">
              <Timeline 
                title="Parcours" 
                events={homeData.timelineEvents} 
              />
              <Achievements 
                achievements={homeData.achievements}
              />
            </div>
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