// Usage examples:
// const { colors, isDark, setThemeMode } = useTheme()
// setThemeMode('dark')   — force dark
// setThemeMode('light')  — force light
// setThemeMode('system') — follow device

import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
