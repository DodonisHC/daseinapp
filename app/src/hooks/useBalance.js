import { useState, useEffect } from 'react';
import { STORAGE_METADATA_KEY } from '../storageKeys.js';

const useBalance = () => {
  const [counts, setCounts] = useState({ body: 0, mind: 0, purpose: 0 });
  const [balance, setBalance] = useState({ body: 0, mind: 0, purpose: 0 });

  useEffect(() => {
    const calculate = () => {
      try {
        const metadata = JSON.parse(localStorage.getItem(STORAGE_METADATA_KEY) || '[]');
        if (!Array.isArray(metadata)) return;

        const newCounts = metadata.reduce((acc, entry) => {
          if (entry.type === 'morning_ritual') acc.body++;
          if (entry.type === 'nightly_reflection') acc.mind++;
          if (entry.type === 'interruption_response' && entry.choice !== 'deferred') acc.purpose++;
          return acc;
        }, { body: 0, mind: 0, purpose: 0 });

        setCounts(newCounts);

        // Normalize balance (0-100) based on some threshold (e.g. 5 activities = 100%)
        const THRESHOLD = 5;
        setBalance({
          body: Math.min(100, (newCounts.body / THRESHOLD) * 100),
          mind: Math.min(100, (newCounts.mind / THRESHOLD) * 100),
          purpose: Math.min(100, (newCounts.purpose / THRESHOLD) * 100),
        });
      } catch (e) {
        console.error('Balance calculation error:', e);
      }
    };

    calculate();
    // In a real app, we might want to listen to storage events or trigger this manually
  }, []);

  return { counts, balance };
};

export default useBalance;
