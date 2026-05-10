import { useTranslation } from 'react-i18next';
import BalanceCard from '../ui/BalanceCard';

const EntryView = ({ onStartRitual, onStartDialogue }) => {
  const { t } = useTranslation();

  return (
    <div className="view-container active fade-in">
      <div className="content-wrapper">
        <h1 className="title">{t('entry.headline')}</h1>
        
        <BalanceCard />
        
        <div className="actions">
          <button type="button" className="btn-primary" onClick={onStartRitual}>
            {t('entry.startRitual')}
          </button>
          <button type="button" className="btn-secondary" onClick={onStartDialogue}>
            {t('entry.internalDialogue')}
          </button>
        </div>
        
        <div className="actions-bottom">
          <button type="button" className="btn-text">
            {t('entry.checkBalance')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntryView;
