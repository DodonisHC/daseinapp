import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import InternalDialogue from '../InternalDialogue';
import React from 'react';

// Mocking useStorage hook
vi.mock('../../hooks/useStorage', () => ({
  default: () => ({
    saveReflection: vi.fn(() => true),
  }),
}));

describe('InternalDialogue Component', () => {
  const mockOnFinish = vi.fn();
  const mockShowToast = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly with default state', () => {
    render(<InternalDialogue onFinish={mockOnFinish} showToast={mockShowToast} />);
    expect(screen.getByText('Diálogo interno')).toBeDefined();
    expect(screen.getByPlaceholderText('Escreva com liberdade…')).toBeDefined();
    expect(screen.getByText('Salvar reflexão')).toBeDefined();
  });

  it('toggles ephemeral mode when button is clicked', () => {
    render(<InternalDialogue onFinish={mockOnFinish} showToast={mockShowToast} />);
    
    const toggleBtn = screen.getByText('Usar modo efêmero');
    fireEvent.click(toggleBtn);
    
    expect(screen.getByText('Modo efêmero ativo')).toBeDefined();
    expect(screen.getByText('Soltar')).toBeDefined();
    expect(screen.getByText('Salvar de forma permanente')).toBeDefined();
  });

  it('calls onFinish after saving non-ephemeral reflection', async () => {
    render(<InternalDialogue onFinish={mockOnFinish} showToast={mockShowToast} />);
    
    const textarea = screen.getByPlaceholderText('Escreva com liberdade…');
    fireEvent.change(textarea, { target: { value: 'Deep thoughts' } });
    
    const saveBtn = screen.getByText('Salvar reflexão');
    fireEvent.click(saveBtn);
    
    expect(mockShowToast).toHaveBeenCalledWith('Salvo neste dispositivo.');
    expect(mockOnFinish).toHaveBeenCalled();
  });
});
