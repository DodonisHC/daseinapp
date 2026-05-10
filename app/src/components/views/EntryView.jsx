import BalanceCard from '../ui/BalanceCard';

const EntryView = ({ onStartRitual, onStartDialogue }) => {
  return (
    <div className="view-container active fade-in">
      <div className="content-wrapper">
        <h1 className="title">Chegue ao seu corpo.</h1>
        
        <BalanceCard />
        
        <div className="actions">
          <button className="btn-primary" onClick={onStartRitual}>
            Iniciar ritual
          </button>
          <button className="btn-secondary" onClick={onStartDialogue}>
            Diálogo interno
          </button>
        </div>
        
        <div className="actions-bottom">
          <button type="button" className="btn-text">
            Ver equilíbrio
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntryView;
