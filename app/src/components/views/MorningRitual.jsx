import React, { useState } from 'react';
import { Mic } from 'lucide-react';
import useStorage from '../../hooks/useStorage';

const MorningRitual = ({ onFinish, showToast }) => {
  const { saveRitual } = useStorage();
  const [step, setStep] = useState('breathing'); // breathing, recording, prompt
  const [isBreathingPaused, setIsBreathingPaused] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const handleBreathingClick = () => {
    setIsBreathingPaused(!isBreathingPaused);
    if (!isBreathingPaused) {
      showToast('Em pausa. Note o silêncio.');
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      setGeneratedPrompt('Qual é a qualidade da sua presença neste momento?');
      setStep('prompt');
    }, 3000);
  };

  return (
    <div className="view-container active">
      <div className="content-wrapper">
        {step === 'breathing' && (
          <>
            <h1 className="title">Respire.</h1>
            <p className="subtitle">Siga o círculo. Permaneça neste instante.</p>
            <div className="breathing-container">
              <div 
                className={`breathing-circle ${isBreathingPaused ? 'paused' : ''}`}
                onClick={handleBreathingClick}
              />
            </div>
            <div className="actions">
              <button type="button" className="btn-primary" onClick={() => setStep('recording')}>
                Estou aqui
              </button>
              <button type="button" className="btn-text" onClick={onFinish}>Cancelar</button>
            </div>
          </>
        )}

        {step === 'recording' && (
          <>
            <h1 className="title">Fale.</h1>
            <p className="subtitle">Perceba o que está aqui agora. Fale sem planejar.</p>
            <div className="recording-container">
              {isRecording && <div className="pulse-ring" />}
              <button 
                type="button"
                className={`btn-mic ${isRecording ? 'recording' : ''}`}
                onClick={startRecording}
                disabled={isRecording}
                aria-label={isRecording ? 'Gravando' : 'Iniciar gravação'}
              >
                <Mic size={32} />
              </button>
            </div>
            <p className="privacy-note">O áudio é processado localmente e nunca é armazenado.</p>
            <div className="actions">
              {!isRecording && (
                <button type="button" className="btn-text" onClick={onFinish}>Cancelar</button>
              )}
            </div>
          </>
        )}

        {step === 'prompt' && (
          <div className="fade-in">
            <h1 className="title">Repare nisto.</h1>
            <p className="subtitle">Sua reflexão trouxe uma pergunta:</p>
            <p className="generated-prompt">&ldquo;{generatedPrompt}&rdquo;</p>
            <div className="actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                saveRitual();
                onFinish();
              }}
              >
                Levo isso comigo
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MorningRitual;
