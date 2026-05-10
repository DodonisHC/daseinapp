import { useState } from 'react';
import { Mic } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useStorage from '../../hooks/useStorage';

const MorningRitual = ({ onFinish, showToast }) => {
  const { t, i18n } = useTranslation();
  const { saveRitual } = useStorage();
  const [step, setStep] = useState('breathing'); // breathing, recording, prompt
  const [isBreathingPaused, setIsBreathingPaused] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState('');

  const handleBreathingClick = () => {
    setIsBreathingPaused(!isBreathingPaused);
    if (!isBreathingPaused) {
      showToast(t('ritual.pausedToast'));
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      setGeneratedPrompt(i18n.t('ritual.generatedPrompt'));
      setStep('prompt');
    }, 3000);
  };

  return (
    <div className="view-container active">
      <div className="content-wrapper">
        {step === 'breathing' && (
          <>
            <h1 className="title">{t('ritual.breatheTitle')}</h1>
            <p className="subtitle">{t('ritual.breatheSubtitle')}</p>
            <div className="breathing-container">
              <div 
                className={`breathing-circle ${isBreathingPaused ? 'paused' : ''}`}
                onClick={handleBreathingClick}
              />
            </div>
            <div className="actions">
              <button type="button" className="btn-primary" onClick={() => setStep('recording')}>
                {t('ritual.imHere')}
              </button>
              <button type="button" className="btn-text" onClick={onFinish}>{t('ritual.cancel')}</button>
            </div>
          </>
        )}

        {step === 'recording' && (
          <>
            <h1 className="title">{t('ritual.speakTitle')}</h1>
            <p className="subtitle">{t('ritual.speakSubtitle')}</p>
            <div className="recording-container">
              {isRecording && <div className="pulse-ring" />}
              <button 
                type="button"
                className={`btn-mic ${isRecording ? 'recording' : ''}`}
                onClick={startRecording}
                disabled={isRecording}
                aria-label={isRecording ? t('a11y.micRecording') : t('a11y.micStart')}
              >
                <Mic size={32} />
              </button>
            </div>
            <p className="privacy-note">{t('ritual.audioPrivacy')}</p>
            <div className="actions">
              {!isRecording && (
                <button type="button" className="btn-text" onClick={onFinish}>{t('ritual.cancel')}</button>
              )}
            </div>
          </>
        )}

        {step === 'prompt' && (
          <div className="fade-in">
            <h1 className="title">{t('ritual.promptTitle')}</h1>
            <p className="subtitle">{t('ritual.promptSubtitle')}</p>
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
                {t('ritual.carryOn')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MorningRitual;
