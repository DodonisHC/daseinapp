import { renderHook } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import useBalance from '../useBalance';
import { STORAGE_METADATA_KEY } from '../../storageKeys.js';

describe('useBalance', () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  it('returns zero balance when no data exists', () => {
    const { result } = renderHook(() => useBalance());
    expect(result.current.balance).toEqual({ body: 0, mind: 0, purpose: 0 });
  });

  it('calculates balance correctly based on metadata types', () => {
    const metadata = [
      { type: 'morning_ritual', timestamp: new Date().toISOString() },
      { type: 'morning_ritual', timestamp: new Date().toISOString() },
      { type: 'nightly_reflection', timestamp: new Date().toISOString() },
      { type: 'interruption_response', choice: 'avoiding', timestamp: new Date().toISOString() },
      { type: 'interruption_response', choice: 'drifting', timestamp: new Date().toISOString() },
      { type: 'interruption_response', choice: 'deferred', timestamp: new Date().toISOString() },
    ];
    window.localStorage.setItem(STORAGE_METADATA_KEY, JSON.stringify(metadata));

    const { result } = renderHook(() => useBalance());
    
    // Body = 2 ritual
    // Mind = 1 reflection
    // Purpose = 2 responses (deferred doesn't count as engagement)
    expect(result.current.counts).toEqual({ body: 2, mind: 1, purpose: 2 });
  });
});
