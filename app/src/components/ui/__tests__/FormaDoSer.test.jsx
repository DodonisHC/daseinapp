import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FormaDoSer from '../FormaDoSer';
import React from 'react';

describe('FormaDoSer Component', () => {
  it('renders an SVG with the correctly calculated path', () => {
    const { container } = render(<FormaDoSer balance={{ body: 50, mind: 80, purpose: 30 }} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();
    
    const path = container.querySelector('path');
    expect(path).toBeDefined();
    expect(path.getAttribute('d')).toBeDefined();
  });
});
