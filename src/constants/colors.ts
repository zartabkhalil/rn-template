export interface ColorPalette {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  error: string;
  success: string;
  warning: string;
}

export const LightColors: ColorPalette = {
  primary: '#6C63FF',
  secondary: '#FF6584',
  background: '#F8F9FA',
  surface: '#FFFFFF',
  textPrimary: '#1A1A2E',
  textSecondary: '#6B7280',
  border: '#E5E7EB',
  error: '#EF4444',
  success: '#22C55E',
  warning: '#F59E0B',
};

export const DarkColors: ColorPalette = {
  primary: '#7C73FF',
  secondary: '#FF6584',
  background: '#0F0F1A',
  surface: '#1C1C2E',
  textPrimary: '#F1F5F9',
  textSecondary: '#94A3B8',
  border: '#2D2D44',
  error: '#F87171',
  success: '#4ADE80',
  warning: '#FBBF24',
};

const Colors: ColorPalette = LightColors;

export default Colors;
