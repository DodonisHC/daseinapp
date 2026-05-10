export const STORAGE_METADATA_KEY = 'dasein_metadata';
export const STORAGE_CONTENT_KEY = 'dasein_content';

/** Chaves legacy (pré-marca DASEIN); só usadas pela migração. */
export const LEGACY_METADATA_KEY = 'ontoapp_metadata';
export const LEGACY_CONTENT_KEY = 'ontoapp_content';

/**
 * Copia dados das chaves legacy para as chaves DASEIN quando estas ainda não existem.
 * Idempotente e não-apagadora: não remove as chaves antigas para evitar surpresas em rollback manual.
 */
export function migrateOntoKeysToDasein() {
  try {
    if (!localStorage.getItem(STORAGE_METADATA_KEY)) {
      const legacy = localStorage.getItem(LEGACY_METADATA_KEY);
      if (legacy) localStorage.setItem(STORAGE_METADATA_KEY, legacy);
    }
    if (!localStorage.getItem(STORAGE_CONTENT_KEY)) {
      const legacy = localStorage.getItem(LEGACY_CONTENT_KEY);
      if (legacy) localStorage.setItem(STORAGE_CONTENT_KEY, legacy);
    }
  } catch {
    /* quota / modo privado / indisponibilidade */
  }
}
