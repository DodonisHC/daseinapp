import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import useStorage from '../useStorage';
import { STORAGE_CONTENT_KEY, STORAGE_METADATA_KEY } from '../../storageKeys.js';

describe('useStorage', () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  it('separates metadata and content when saving reflection', () => {
    const { result } = renderHook(() => useStorage());
    
    act(() => {
      result.current.saveReflection('Test content', false);
    });

    const metadata = JSON.parse(window.localStorage.getItem(STORAGE_METADATA_KEY));
    const content = JSON.parse(window.localStorage.getItem(STORAGE_CONTENT_KEY));

    expect(metadata).toHaveLength(1);
    expect(metadata[0]).toHaveProperty('timestamp');
    expect(metadata[0]).toHaveProperty('type', 'nightly_reflection');
    expect(metadata[0]).toHaveProperty('ephemeral', false);

    expect(content).toHaveLength(1);
    expect(content[0]).toHaveProperty('content', 'Test content');
    expect(content[0].id).toBe(metadata[0].id);
  });

  it('does NOT save content in ephemeral mode', () => {
    const { result } = renderHook(() => useStorage());
    
    act(() => {
      result.current.saveReflection('Secret content', true);
    });

    const metadata = JSON.parse(window.localStorage.getItem(STORAGE_METADATA_KEY));
    const content = window.localStorage.getItem(STORAGE_CONTENT_KEY);

    expect(metadata).toHaveLength(1);
    expect(metadata[0].ephemeral).toBe(true);
    expect(content).toBeNull(); // Should be null or empty if it was null before
  });

  it('saves interruption choices to metadata', () => {
    const { result } = renderHook(() => useStorage());
    
    act(() => {
      result.current.saveInterruption('drifting');
    });

    const metadata = JSON.parse(window.localStorage.getItem(STORAGE_METADATA_KEY));
    expect(metadata).toHaveLength(1);
    expect(metadata[0]).toHaveProperty('type', 'interruption_response');
    expect(metadata[0]).toHaveProperty('choice', 'drifting');
  });
});
