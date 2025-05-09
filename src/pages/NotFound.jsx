
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page non trouvée</h2>
        <p className="not-found-message">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="not-found-button">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
