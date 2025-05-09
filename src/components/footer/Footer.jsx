
import React from 'react';
import '../../styles/components/footer/Footer.css';

const Footer = () => {
  return (
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
  );
};

export default Footer;
