import { useCallback } from 'react';
import {
  STORAGE_CONTENT_KEY,
  STORAGE_METADATA_KEY,
} from '../storageKeys.js';

const useStorage = () => {
  const saveReflection = useCallback((content, isEphemeral = false) => {
    try {
      const id = Date.now().toString();
      const timestamp = new Date().toISOString();

      // Always save metadata
      let metadataStore = JSON.parse(localStorage.getItem(STORAGE_METADATA_KEY) || '[]');
      if (!Array.isArray(metadataStore)) metadataStore = [];
      
      metadataStore.push({ 
        id, 
        timestamp, 
        type: 'nightly_reflection',
        ephemeral: isEphemeral 
      });
      localStorage.setItem(STORAGE_METADATA_KEY, JSON.stringify(metadataStore));

      // Save content ONLY if NOT ephemeral
      if (!isEphemeral) {
        let contentStore = JSON.parse(localStorage.getItem(STORAGE_CONTENT_KEY) || '[]');
        if (!Array.isArray(contentStore)) contentStore = [];
        contentStore.push({ id, content });
        localStorage.setItem(STORAGE_CONTENT_KEY, JSON.stringify(contentStore));
      }

      return true;
    } catch (e) {
      console.error('Storage error:', e);
      return false;
    }
  }, []);

  const saveInterruption = useCallback((choice) => {
    try {
      const id = Date.now().toString();
      const timestamp = new Date().toISOString();
      let metadataStore = JSON.parse(localStorage.getItem(STORAGE_METADATA_KEY) || '[]');
      if (!Array.isArray(metadataStore)) metadataStore = [];
      metadataStore.push({ id, timestamp, type: 'interruption_response', choice });
      localStorage.setItem(STORAGE_METADATA_KEY, JSON.stringify(metadataStore));
      return true;
    } catch (e) {
      console.error('Storage error (interruption):', e);
      return false;
    }
  }, []);

  const saveRitual = useCallback(() => {
    try {
      const id = Date.now().toString();
      const timestamp = new Date().toISOString();
      let metadataStore = JSON.parse(localStorage.getItem(STORAGE_METADATA_KEY) || '[]');
      if (!Array.isArray(metadataStore)) metadataStore = [];
      metadataStore.push({ id, timestamp, type: 'morning_ritual' });
      localStorage.setItem(STORAGE_METADATA_KEY, JSON.stringify(metadataStore));
      return true;
    } catch (e) {
      console.error('Storage error (ritual):', e);
      return false;
    }
  }, []);

  return { saveReflection, saveInterruption, saveRitual };
};

export default useStorage;
