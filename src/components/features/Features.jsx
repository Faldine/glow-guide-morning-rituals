
import React from 'react';
import { Timer, Music } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <div className="feature-icon feature-icon-emoji">🧠</div>,
      title: "Analyse IA personnalisée",
      description: "Notre intelligence artificielle analyse vos besoins spécifiques pour créer des routines adaptées à votre peau et à vos préférences.",
    },
    {
      icon: <div className="feature-icon feature-icon-emoji">🧘</div>,
      title: "Routines holistiques",
      description: "Des routines complètes qui combinent soins de la peau, méditation, yoga, prière et affirmations positives.",
    },
    {
      icon: <div className="feature-icon feature-icon-timer"><Timer size={24} /></div>,
      title: "Timers intelligents",
      description: "Suivez facilement vos activités avec des timers personnalisés qui vous guident tout au long de votre routine matinale.",
    },
    {
      icon: <div className="feature-icon feature-icon-music"><Music size={24} /></div>,
      title: "Playlists personnalisées",
      description: "Créez l'ambiance parfaite avec des playlists adaptées à chaque activité de votre routine matinale.",
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <h2 className="section-title">
          Des fonctionnalités <span className="gradient-text">innovantes</span>
        </h2>
        <p className="section-subtitle">
          GlowGuide combine technologie de pointe et approche holistique pour transformer vos matins en moments de bien-être complet.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrapper">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
