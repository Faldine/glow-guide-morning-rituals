
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-glow-purple-light/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-glow-pink/30 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <span className="inline-block px-4 py-1 bg-glow-purple/10 text-glow-purple-dark rounded-full text-sm font-medium">
              ✨ La skincare réinventée
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Des routines <span className="gradient-text">personnalisées</span> pour votre bien-être matinal
            </h1>
            <p className="text-lg md:text-xl text-glow-gray max-w-lg mx-auto lg:mx-0">
              Découvrez GlowGuide, l'application qui révolutionne vos matins avec des routines sur mesure combinant soins de peau, méditation et playlists personnalisées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="glow-button text-lg px-8 py-6">Commencer maintenant</Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-glow-purple text-glow-purple hover:bg-glow-purple/5">
                En savoir plus
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="p-2 bg-gradient-to-br from-glow-purple to-glow-pink rounded-3xl shadow-xl">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-glow-purple to-glow-pink opacity-20" />
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  alt="GlowGuide Morning Routine"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 glass-card m-4 text-center">
                  <h3 className="font-serif text-lg mb-1">Votre routine matinale</h3>
                  <p className="text-sm text-glow-gray">5 min méditation • 10 min soins • 15 min yoga</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="glass-card absolute -top-6 -left-10 animate-float hidden md:block">
              <p className="text-sm font-medium">Analyse IA de votre peau</p>
            </div>
            <div className="glass-card absolute -bottom-4 -right-4 animate-float animation-delay-1000 hidden md:block">
              <p className="text-sm font-medium">Timer & playlist intégrés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
