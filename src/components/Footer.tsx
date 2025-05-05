
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-serif font-bold gradient-text">GlowGuide</span>
            </Link>
            <p className="text-glow-gray mb-4">
              Des routines matinales personnalisées pour votre bien-être et votre peau.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Fonctionnalités</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-glow-gray hover:text-glow-purple transition-colors">Analyse de peau IA</Link></li>
              <li><Link to="#" className="text-glow-gray hover:text-glow-purple transition-colors">Routines personnalisées</Link></li>
              <li><Link to="#" className="text-glow-gray hover:text-glow-purple transition-colors">Timers intelligents</Link></li>
              <li><Link to="#" className="text-glow-gray hover:text-glow-purple transition-colors">Playlists musicales</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">À propos</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-glow-gray hover:text-glow-purple transition-colors">Notre mission</Link></li>
              <li><Link to="#" className="text-glow-gray hover:text-glow-purple transition-colors">Équipe</Link></li>
              <li><Link to="#" className="text-glow-gray hover:text-glow-purple transition-colors">Partenaires</Link></li>
              <li><Link to="#" className="text-glow-gray hover:text-glow-purple transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-glow-gray hover:text-glow-purple transition-colors">Support</Link></li>
              <li><Link to="#" className="text-glow-gray hover:text-glow-purple transition-colors">FAQ</Link></li>
              <li><Link to="#" className="text-glow-gray hover:text-glow-purple transition-colors">Communauté</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-glow-gray mb-4 md:mb-0">
              © 2025 GlowGuide. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link to="#" className="text-sm text-glow-gray hover:text-glow-purple transition-colors">
                Confidentialité
              </Link>
              <Link to="#" className="text-sm text-glow-gray hover:text-glow-purple transition-colors">
                Conditions d'utilisation
              </Link>
              <Link to="#" className="text-sm text-glow-gray hover:text-glow-purple transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
