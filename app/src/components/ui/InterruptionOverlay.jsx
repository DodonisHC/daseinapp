import React, { useState, useEffect } from 'react';
import useStorage from '../../hooks/useStorage';

const IDLE_THRESHOLD = 45000;

const InterruptionOverlay = ({ activeView, showToast }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { saveInterruption } = useStorage();

  useEffect(() => {
    if (activeView !== 'entry' || isVisible) return;

    let timer = setTimeout(() => {
      setIsVisible(true);
    }, IDLE_THRESHOLD);

    const handleActivity = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsVisible(true);
      }, IDLE_THRESHOLD);
    };

    window.addEventListener('mousedown', handleActivity);
    window.addEventListener('touchstart', handleActivity);
    window.addEventListener('keydown', handleActivity);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousedown', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      window.removeEventListener('keydown', handleActivity);
    };
  }, [activeView, isVisible]);

  const handleChoice = (choice) => {
    if (choice !== 'deferred') {
      saveInterruption(choice);
      showToast(choice === 'drifting'
        ? 'Percebido. Foco atualizado.'
        : 'A honestidade é o primeiro passo.');
    }
    setIsVisible(false);
  };

  return (
    <div className={`interruption-card ${isVisible ? 'visible' : ''}`}>
      <div className="interruption-content">
        <p className="interruption-text">
          Você está aqui há um tempo. O que você está notando?
        </p>
        <div className="interruption-choices">
          <button type="button" className="btn-choice" onClick={() => handleChoice('drifting')}>
            Estou divagando
          </button>
          <button type="button" className="btn-choice" onClick={() => handleChoice('avoiding')}>
            Estou evitando algo
          </button>
          <button 
            type="button"
            className="btn-text" 
            style={{ marginTop: 8, textDecoration: 'none' }}
            onClick={() => handleChoice('deferred')}
          >
            Agora não
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterruptionOverlay;
