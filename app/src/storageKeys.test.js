import { describe, it, expect, beforeEach } from 'vitest';
import {
  migrateOntoKeysToDasein,
  LEGACY_METADATA_KEY,
  LEGACY_CONTENT_KEY,
  STORAGE_METADATA_KEY,
  STORAGE_CONTENT_KEY,
} from './storageKeys.js';

describe('migrateOntoKeysToDasein', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('copia metadados legacy quando a chave DASEIN está vazia', () => {
    const meta = JSON.stringify([{ type: 'morning_ritual' }]);
    window.localStorage.setItem(LEGACY_METADATA_KEY, meta);
    migrateOntoKeysToDasein();
    expect(window.localStorage.getItem(STORAGE_METADATA_KEY)).toBe(meta);
  });

  it('copia content legacy quando a chave DASEIN está vazia', () => {
    const body = JSON.stringify([{ id: '1', content: 'hello' }]);
    window.localStorage.setItem(LEGACY_CONTENT_KEY, body);
    migrateOntoKeysToDasein();
    expect(window.localStorage.getItem(STORAGE_CONTENT_KEY)).toBe(body);
  });

  it('não sobrescreve valores já existentes em DASEIN', () => {
    window.localStorage.setItem(STORAGE_METADATA_KEY, JSON.stringify([{ type: 'nightly_reflection' }]));
    window.localStorage.setItem(LEGACY_METADATA_KEY, JSON.stringify([{ type: 'morning_ritual' }]));
    migrateOntoKeysToDasein();
    const kept = JSON.parse(window.localStorage.getItem(STORAGE_METADATA_KEY));
    expect(kept).toHaveLength(1);
    expect(kept[0].type).toBe('nightly_reflection');
  });
});
