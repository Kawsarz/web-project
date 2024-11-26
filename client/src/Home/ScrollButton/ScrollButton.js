import React, { useState, useEffect } from 'react';
import './ScrollButton.css'; // Assure-toi que le CSS est bien importé

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour afficher/masquer le bouton selon la position de défilement
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true); // Afficher le bouton
    } else {
      setIsVisible(false); // Cacher le bouton
    }
  };

  // Fonction pour revenir en haut de la page
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Nettoyer l'événement à la destruction du composant
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="btns"
          onClick={backToTop}
          aria-label="Retour en haut"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        >
           ᐃ
        </button>
      )}
    </>
  );
};

export default ScrollButton;
