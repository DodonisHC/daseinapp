import useBalance from '../../hooks/useBalance';
import FormaDoSer from './FormaDoSer';

const BalanceCard = () => {
  const { balance } = useBalance();

  const Pillar = ({ label, value, color }) => (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: '0.85rem' }}>
        <span>{label}</span>
        <span style={{ color: 'var(--text-secondary)' }}>{Math.round(value)}%</span>
      </div>
      <div style={{ 
        width: '100%', 
        height: 6, 
        backgroundColor: 'rgba(0,0,0,0.05)', 
        borderRadius: 3,
        overflow: 'hidden'
      }}>
        <div style={{ 
          width: `${value}%`, 
          height: '100%', 
          backgroundColor: color,
          transition: 'width 1s ease-out'
        }} />
      </div>
    </div>
  );

  return (
    <div className="fade-in" style={{ 
      background: 'rgba(255, 255, 255, 0.5)', 
      padding: 24, 
      borderRadius: 24,
      marginBottom: 32,
      border: '1px solid rgba(0,0,0,0.03)'
    }}>
      <h3 style={{ fontSize: '1rem', fontWeight: 400, marginBottom: 20, textAlign: 'left' }}>
        Estado atual
      </h3>
      
      <FormaDoSer balance={balance} />
      
      <Pillar label="Corpo (ritual)" value={balance.body} color="#8C9A8E" />
      <Pillar label="Mente (diálogo)" value={balance.mind} color="#A7A294" />
      <Pillar label="Propósito (presente)" value={balance.purpose} color="#D4A373" />
      
      <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textAlign: 'left', marginTop: 12, fontStyle: 'italic' }}>
        {balance.body + balance.mind + balance.purpose === 300 
          ? 'Você está em profundo alinhamento.' 
          : 'Continue cuidando dos seus pilares.'}
      </p>
    </div>
  );
};

export default BalanceCard;
