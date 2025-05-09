
import React from 'react';
import '../../styles/components/hero/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Elements */}
      <div className="hero-bg-element hero-bg-purple"></div>
      <div className="hero-bg-element hero-bg-pink"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">✨ La skincare réinventée</span>
            <h1 className="hero-title">
              Des routines <span className="gradient-text">personnalisées</span> pour votre bien-être matinal
            </h1>
            <p className="hero-description">
              Découvrez GlowGuide, l'application qui révolutionne vos matins avec des routines sur mesure combinant soins de peau, méditation et playlists personnalisées.
            </p>
            <div className="hero-buttons">
              <button className="glow-button">Commencer maintenant</button>
              <button className="outline-button">En savoir plus</button>
            </div>
          </div>
          <div className="hero-image-section">
            <div className="hero-image-frame">
              <div className="hero-image-container">
                <div className="hero-image-overlay"></div>
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  alt="GlowGuide Morning Routine"
                  className="hero-image"
                />
                <div className="hero-image-card">
                  <h3 className="hero-image-card-title">Votre routine matinale</h3>
                  <p className="hero-image-card-text">5 min méditation • 10 min soins • 15 min yoga</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="hero-floating-card hero-floating-card-top">
              <p className="hero-floating-card-text">Analyse IA de votre peau</p>
            </div>
            <div className="hero-floating-card hero-floating-card-bottom">
              <p className="hero-floating-card-text">Timer & playlist intégrés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
