
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-4 md:px-8 absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold gradient-text">GlowGuide</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-glow-dark hover:text-glow-purple transition-colors font-medium">
            Accueil
          </Link>
          <Link to="#features" className="text-glow-dark hover:text-glow-purple transition-colors font-medium">
            Fonctionnalités
          </Link>
          <Link to="#routines" className="text-glow-dark hover:text-glow-purple transition-colors font-medium">
            Routines
          </Link>
          <Link to="#about" className="text-glow-dark hover:text-glow-purple transition-colors font-medium">
            À propos
          </Link>
          <Button className="glow-button">S'inscrire</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-glow-dark hover:text-glow-purple transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white p-4 shadow-lg rounded-b-2xl animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-glow-dark hover:text-glow-purple transition-colors font-medium py-2">
              Accueil
            </Link>
            <Link to="#features" className="text-glow-dark hover:text-glow-purple transition-colors font-medium py-2">
              Fonctionnalités
            </Link>
            <Link to="#routines" className="text-glow-dark hover:text-glow-purple transition-colors font-medium py-2">
              Routines
            </Link>
            <Link to="#about" className="text-glow-dark hover:text-glow-purple transition-colors font-medium py-2">
              À propos
            </Link>
            <Button className="glow-button w-full">S'inscrire</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
