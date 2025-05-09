import React, { useState } from 'react';
import { Play } from 'lucide-react';
import '../styles/RoutinesShowcase.css';

const RoutinesShowcase = () => {
  const [activeTab, setActiveTab] = useState("skincare");

  const routines = {
    skincare: {
      title: "Routine de soins",
      description: "Une routine personnalisée adaptée à votre type de peau et à vos besoins spécifiques.",
      steps: [
        { name: "Nettoyant doux", time: "1 min", desc: "Pour éliminer les impuretés" },
        { name: "Sérum à la niacinamide", time: "30 sec", desc: "Pour réduire les pores et l'excès de sébum" },
        { name: "Crème hydratante", time: "1 min", desc: "Non comédogène et légère" },
        { name: "Protection solaire", time: "30 sec", desc: "SPF 50 pour une protection optimale" },
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    },
    morning: {
      title: "Routine matinale",
      description: "Une approche holistique pour démarrer votre journée avec énergie et positivité.",
      steps: [
        { name: "Méditation guidée", time: "5 min", desc: "Pour un esprit calme et centré" },
        { name: "Routine de soins", time: "5 min", desc: "Pour une peau éclatante" },
        { name: "Yoga doux", time: "10 min", desc: "Pour réveiller le corps en douceur" },
        { name: "Affirmations positives", time: "2 min", desc: "Pour un état d'esprit positif" },
      ],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    },
    self: {
      title: "Développement personnel",
      description: "Prenez soin de votre bien-être mental et émotionnel avec cette routine apaisante.",
      steps: [
        { name: "Journaling", time: "5 min", desc: "Pour exprimer vos pensées et émotions" },
        { name: "Lecture inspirante", time: "10 min", desc: "Pour nourrir votre esprit" },
        { name: "Visualisation", time: "3 min", desc: "Pour définir vos intentions" },
        { name: "Gratitude", time: "2 min", desc: "Pour cultiver la reconnaissance" },
      ],
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    },
  };

  const currentRoutine = routines[activeTab];

  return (
    <section id="routines" className="routines-showcase">
      <div className="routines-container">
        <h2 className="routines-title">
          Des routines <span className="gradient-text">adaptées à vos besoins</span>
        </h2>
        <p className="routines-subtitle">
          Découvrez nos routines personnalisées qui s'adaptent à votre style de vie, à vos préférences et à vos objectifs de bien-être.
        </p>

        <div className="tabs-container">
          <div className="tabs-list">
            <button 
              className={`tab-button ${activeTab === "skincare" ? "active" : ""}`}
              onClick={() => setActiveTab("skincare")}
            >
              Soins de la peau
            </button>
            <button 
              className={`tab-button ${activeTab === "morning" ? "active" : ""}`}
              onClick={() => setActiveTab("morning")}
            >
              Routine matinale
            </button>
            <button 
              className={`tab-button ${activeTab === "self" ? "active" : ""}`}
              onClick={() => setActiveTab("self")}
            >
              Développement personnel
            </button>
          </div>
          
          <div className="tabs-content">
            <div className={`tab-content ${activeTab === currentRoutine.title ? "active" : ""}`}>
              <div className="routine-content">
                <div className="routine-info">
                  <h3 className="routine-title">{currentRoutine.title}</h3>
                  <p className="routine-description">{currentRoutine.description}</p>
                  
                  <div className="routine-steps">
                    {currentRoutine.steps.map((step, index) => (
                      <div key={index} className="routine-step">
                        <div className="step-number">{index + 1}</div>
                        <div className="step-content">
                          <div className="step-header">
                            <h4 className="step-name">{step.name}</h4>
                            <span className="step-time">{step.time}</span>
                          </div>
                          <p className="step-description">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="glow-button">
                    <Play size={18} className="button-icon" /> Essayer cette routine
                  </button>
                </div>
                <div className="routine-image-container">
                  <div className="routine-image-wrapper">
                    <img
                      src={currentRoutine.image}
                      alt={currentRoutine.title}
                      className="routine-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoutinesShowcase;
