import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import InternalDialogue from '../InternalDialogue';
import i18n from '../../../i18n/config.js';

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
    void i18n.changeLanguage('pt-BR');
  });

  it('renders correctly with default state', () => {
    render(<InternalDialogue onFinish={mockOnFinish} showToast={mockShowToast} />);
    expect(screen.getByText(i18n.t('dialogue.title'))).toBeDefined();
    expect(screen.getByPlaceholderText(i18n.t('dialogue.placeholder'))).toBeDefined();
    expect(screen.getByText(i18n.t('dialogue.savePermanent'))).toBeDefined();
  });

  it('toggles ephemeral mode when button is clicked', () => {
    render(<InternalDialogue onFinish={mockOnFinish} showToast={mockShowToast} />);
    
    const toggleBtn = screen.getByText(i18n.t('dialogue.useEphemeral'));
    fireEvent.click(toggleBtn);
    
    expect(screen.getByText(i18n.t('dialogue.ephemeralBadge'))).toBeDefined();
    expect(screen.getByText(i18n.t('dialogue.release'))).toBeDefined();
    expect(screen.getByText(i18n.t('dialogue.savePermanentMode'))).toBeDefined();
  });

  it('calls onFinish after saving non-ephemeral reflection', async () => {
    render(<InternalDialogue onFinish={mockOnFinish} showToast={mockShowToast} />);
    
    const textarea = screen.getByPlaceholderText(i18n.t('dialogue.placeholder'));
    fireEvent.change(textarea, { target: { value: 'Deep thoughts' } });
    
    const saveBtn = screen.getByText(i18n.t('dialogue.savePermanent'));
    fireEvent.click(saveBtn);
    
    expect(mockShowToast).toHaveBeenCalledWith(i18n.t('dialogue.toastSaved'));
    expect(mockOnFinish).toHaveBeenCalled();
  });

  it('usa copy em inglês quando o idioma está em EN', async () => {
    await i18n.changeLanguage('en');
    render(<InternalDialogue onFinish={mockOnFinish} showToast={mockShowToast} />);
    expect(screen.getByText(i18n.t('dialogue.title'))).toHaveTextContent(/Internal dialogue/i);
  });
});
