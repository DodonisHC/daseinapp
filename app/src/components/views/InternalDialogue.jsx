import { useState, useMemo } from 'react';
import { RefreshCw, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useStorage from '../../hooks/useStorage';

const InternalDialogue = ({ onFinish, showToast }) => {
  const { t, i18n } = useTranslation();
  const [text, setText] = useState('');
  const [shuffleCount, setShuffleCount] = useState(0);
  const [isEphemeral, setIsEphemeral] = useState(false);
  const [isBurning, setIsBurning] = useState(false);
  const { saveReflection } = useStorage();

  const lng = i18n.resolvedLanguage || 'pt-BR';

  const prompts = useMemo(() => {
    const tn = i18n.getFixedT(lng);
    const raw = tn('dialogue.prompts', { returnObjects: true });
    return Array.isArray(raw) ? raw : [];
  }, [i18n, lng]);

  const promptIndex = useMemo(() => {
    if (!prompts.length) return 0;
    let hash = shuffleCount ^ (lng.length * 997);
    for (let i = 0; i < prompts.length; i++) {
      const line = prompts[i];
      for (let j = 0; j < line.length; j++) {
        hash = ((hash << 5) - hash + line.charCodeAt(j)) | 0;
      }
    }
    return Math.abs(hash) % prompts.length;
  }, [prompts, lng, shuffleCount]);

  const currentPrompt = prompts[promptIndex] ?? '';

  const shufflePrompt = () => setShuffleCount((c) => c + 1);

  const handleSave = () => {
    if (!text.trim()) return;
    
    const success = saveReflection(text, isEphemeral);
    if (success) {
      if (isEphemeral) {
        setIsBurning(true);
        showToast(t('dialogue.toastEphemeral'));
        setTimeout(() => {
          onFinish();
        }, 1600);
      } else {
        showToast(t('dialogue.toastSaved'));
        onFinish();
      }
    }
  };

  return (
    <div className="view-container active">
      <div className="content-wrapper">
        <h1 className="title">{t('dialogue.title')}</h1>
        
        {isEphemeral && (
          <div className="privacy-badge">
            <ShieldCheck size={14} style={{ marginRight: 6 }} />
            {t('dialogue.ephemeralBadge')}
          </div>
        )}

        <div className="prompt-helper">
          <p className="helper-text">{currentPrompt}</p>
          <button type="button" className="btn-icon" onClick={shufflePrompt} title={t('dialogue.newPrompt')}>
            <RefreshCw size={18} />
          </button>
        </div>

        <textarea
          className={`low-pressure-input ${isBurning ? 'text-burn' : ''}`}
          placeholder={t('dialogue.placeholder')}
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={isBurning}
        />

        <div className="actions">
          <button type="button" className="btn-primary" onClick={handleSave} disabled={!text.trim() || isBurning}>
            {isEphemeral ? t('dialogue.release') : t('dialogue.savePermanent')}
          </button>
          <button 
            type="button"
            className="btn-secondary" 
            onClick={() => setIsEphemeral(!isEphemeral)}
            disabled={isBurning}
          >
            {isEphemeral ? t('dialogue.savePermanentMode') : t('dialogue.useEphemeral')}
          </button>
          <button type="button" className="btn-text" onClick={onFinish} disabled={isBurning}>
            {t('dialogue.cancel')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternalDialogue;
