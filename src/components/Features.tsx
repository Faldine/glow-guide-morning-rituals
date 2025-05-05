
import React from "react";
import { Timer, Music, Play, Pause } from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <div className="w-12 h-12 rounded-full bg-glow-purple/20 flex items-center justify-center text-glow-purple">🧠</div>,
      title: "Analyse IA personnalisée",
      description: "Notre intelligence artificielle analyse vos besoins spécifiques pour créer des routines adaptées à votre peau et à vos préférences.",
    },
    {
      icon: <div className="w-12 h-12 rounded-full bg-glow-pink/20 flex items-center justify-center text-glow-purple-dark">🧘</div>,
      title: "Routines holistiques",
      description: "Des routines complètes qui combinent soins de la peau, méditation, yoga, prière et affirmations positives.",
    },
    {
      icon: <div className="w-12 h-12 rounded-full bg-glow-blue/20 flex items-center justify-center text-glow-blue-bright"><Timer size={24} /></div>,
      title: "Timers intelligents",
      description: "Suivez facilement vos activités avec des timers personnalisés qui vous guident tout au long de votre routine matinale.",
    },
    {
      icon: <div className="w-12 h-12 rounded-full bg-glow-purple-light/20 flex items-center justify-center text-glow-purple"><Music size={24} /></div>,
      title: "Playlists personnalisées",
      description: "Créez l'ambiance parfaite avec des playlists adaptées à chaque activité de votre routine matinale.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-white to-glow-purple/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center">
          Des fonctionnalités <span className="gradient-text">innovantes</span>
        </h2>
        <p className="section-subtitle text-center">
          GlowGuide combine technologie de pointe et approche holistique pour transformer vos matins en moments de bien-être complet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif font-semibold mb-2">{feature.title}</h3>
              <p className="text-glow-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
