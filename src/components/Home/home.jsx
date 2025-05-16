
import React, { useState } from 'react';
import { Award, Clock, ChartBar, Smile, Play, Music, Timer } from 'lucide-react';
import { toast } from '../../components/ui/sonner';
import './home.css';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=600&fit=crop&q=80",
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
      image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&h=600&fit=crop&q=80",
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
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=600&fit=crop&q=80",
    },
  };

  const currentRoutine = routines[activeTab];
  
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
  
  const stats = [
    {
      icon: Clock,
      value: "45%",
      label: "Gain de temps",
      description: "Sur votre routine matinale"
    },
    {
      icon: ChartBar,
      value: "87%",
      label: "Efficacité",
      description: "Organisation optimisée des tâches"
    },
    {
      icon: Award,
      value: "98%",
      label: "Satisfaction",
      description: "Des utilisateurs actifs"
    },
    {
      icon: Smile,
      value: "3x",
      label: "Bien-être",
      description: "Amélioration du bien-être quotidien"
    }
  ];

  const handleButtonClick = (message) => {
    toast.success(message);
  };

  return (
    <div className="main-layout">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <a href="/">
              <span className="logo-text">Glow<span className="logo-accent">Guide</span></span>
            </a>
          </div>
          
          <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
          </button>
          
          <nav className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
            <ul className="navbar-links">
              <li><a href="#routines" className="navbar-link">Routines</a></li>
              <li><a href="#features" className="navbar-link">Fonctionnalités</a></li>
              <li><a href="#" className="navbar-link">Tarifs</a></li>
              <li><a href="#" className="navbar-link">Blog</a></li>
            </ul>
            <div className="navbar-actions">
              <a href="#" className="navbar-link-secondary">Se connecter</a>
              <a href="#" className="navbar-button">S'inscrire</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
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
                  <button 
                    className="glow-button"
                    onClick={() => handleButtonClick("Commencer maintenant")}
                  >
                    Commencer maintenant
                  </button>
                  <button 
                    className="outline-button"
                    onClick={() => handleButtonClick("En savoir plus")}
                  >
                    En savoir plus
                  </button>
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

        {/* Features Section */}
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

        {/* Routines Showcase */}
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
                      
                      <button 
                        className="glow-button"
                        onClick={() => handleButtonClick(`Essayer la routine ${currentRoutine.title}`)}
                      >
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

        {/* Statistics Section */}
        <section className="statistics-section">
          <div className="statistics-container">
            <h2 className="statistics-title">
              L'impact <span className="gradient-text">GlowGuide</span>
            </h2>
            <p className="statistics-subtitle">
              Notre application transforme votre quotidien avec des résultats concrets et mesurables.
            </p>

            <div className="statistics-grid">
              {stats.map((stat, index) => (
                <div key={index} className="statistic-card">
                  <div className="statistic-icon">
                    <stat.icon size={32} />
                  </div>
                  <h3 className="statistic-value">{stat.value}</h3>
                  <h4 className="statistic-label">{stat.label}</h4>
                  <p className="statistic-description">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
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
                <button 
                  className="glow-button"
                  onClick={() => handleButtonClick("Commencer gratuitement")}
                >
                  Commencer gratuitement
                </button>
                <button 
                  className="outline-button"
                  onClick={() => handleButtonClick("En savoir plus sur CTA")}
                >
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-text">Glow<span className="logo-accent">Guide</span></span>
              </div>
              <p className="footer-description">
                Transformez votre routine matinale avec notre approche holistique du bien-être.
              </p>
            </div>
            
            <div className="footer-links-container">
              <div className="footer-links-group">
                <h4 className="footer-links-title">Produit</h4>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">Fonctionnalités</a></li>
                  <li><a href="#" className="footer-link">Tarifs</a></li>
                  <li><a href="#" className="footer-link">FAQ</a></li>
                  <li><a href="#" className="footer-link">Témoignages</a></li>
                </ul>
              </div>
              
              <div className="footer-links-group">
                <h4 className="footer-links-title">Ressources</h4>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">Blog</a></li>
                  <li><a href="#" className="footer-link">Guides</a></li>
                  <li><a href="#" className="footer-link">Tutoriels</a></li>
                  <li><a href="#" className="footer-link">Support</a></li>
                </ul>
              </div>
              
              <div className="footer-links-group">
                <h4 className="footer-links-title">Entreprise</h4>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">À propos</a></li>
                  <li><a href="#" className="footer-link">Carrières</a></li>
                  <li><a href="#" className="footer-link">Contact</a></li>
                  <li><a href="#" className="footer-link">Presse</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">© 2023 GlowGuide. Tous droits réservés.</p>
            <div className="footer-legal">
              <a href="#" className="footer-legal-link">Conditions d'utilisation</a>
              <a href="#" className="footer-legal-link">Politique de confidentialité</a>
              <a href="#" className="footer-legal-link">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
