import React, { useState, useEffect } from 'react';
import { RefreshCw, ShieldCheck } from 'lucide-react';
import useStorage from '../../hooks/useStorage';

const PROMPTS = [
  'O que eu estou me dizendo agora?',
  'Que história estou usando para me proteger?',
  'O que eu diria se não tivesse medo da resposta?',
  'Que sentimento estou evitando ao ficar só na cabeça?',
  'Essa explicação é verdade ou só me dá uma saída mais fácil?',
];

const InternalDialogue = ({ onFinish, showToast }) => {
  const [text, setText] = useState('');
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [isEphemeral, setIsEphemeral] = useState(false);
  const [isBurning, setIsBurning] = useState(false);
  const { saveReflection } = useStorage();

  useEffect(() => {
    shufflePrompt();
  }, []);

  const shufflePrompt = () => {
    const others = PROMPTS.filter(p => p !== currentPrompt);
    const next = others[Math.floor(Math.random() * others.length)];
    setCurrentPrompt(next);
  };

  const handleSave = () => {
    if (!text.trim()) return;
    
    const success = saveReflection(text, isEphemeral);
    if (success) {
      if (isEphemeral) {
        setIsBurning(true);
        showToast('Processado. Nada foi salvo.');
        setTimeout(() => {
          onFinish();
        }, 1600);
      } else {
        showToast('Salvo neste dispositivo.');
        onFinish();
      }
    }
  };

  return (
    <div className="view-container active">
      <div className="content-wrapper">
        <h1 className="title">Diálogo interno</h1>
        
        {isEphemeral && (
          <div className="privacy-badge">
            <ShieldCheck size={14} style={{ marginRight: 6 }} />
            Modo efêmero ativo
          </div>
        )}

        <div className="prompt-helper">
          <p className="helper-text">{currentPrompt}</p>
          <button type="button" className="btn-icon" onClick={shufflePrompt} title="Nova pergunta">
            <RefreshCw size={18} />
          </button>
        </div>

        <textarea
          className={`low-pressure-input ${isBurning ? 'text-burn' : ''}`}
          placeholder="Escreva com liberdade…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={isBurning}
        />

        <div className="actions">
          <button type="button" className="btn-primary" onClick={handleSave} disabled={!text.trim() || isBurning}>
            {isEphemeral ? 'Soltar' : 'Salvar reflexão'}
          </button>
          <button 
            type="button"
            className="btn-secondary" 
            onClick={() => setIsEphemeral(!isEphemeral)}
            disabled={isBurning}
          >
            {isEphemeral ? 'Salvar de forma permanente' : 'Usar modo efêmero'}
          </button>
          <button type="button" className="btn-text" onClick={onFinish} disabled={isBurning}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternalDialogue;
