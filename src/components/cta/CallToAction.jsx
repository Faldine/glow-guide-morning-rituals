
import React from 'react';
import '../../styles/components/cta/CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-card">
          {/* Background elements */}
          <div className="cta-bg cta-bg-purple"></div>
          <div className="cta-bg cta-bg-pink"></div>
          
          <h2 className="cta-title">
            Prêt à transformer vos <span className="gradient-text">matins</span> ?
          </h2>
          <p className="cta-description">
            Rejoignez GlowGuide dès aujourd'hui et découvrez une approche personnalisée du bien-être matinal qui combine soins de la peau, méditation et musique.
          </p>
          <div className="cta-buttons">
            <button className="glow-button">Commencer gratuitement</button>
            <button className="outline-button">En savoir plus</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
