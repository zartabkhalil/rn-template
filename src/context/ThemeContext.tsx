/**
 * ThemeContext
 *
 * Provides app-wide theme support with automatic light/dark mode
 * and manual override capability.
 *
 * ─── What it provides ───────────────────────────────────────────
 *  colors       → current color palette (updates on theme change)
 *  isDark       → boolean, true when dark mode is active
 *  themeMode    → current mode: 'light' | 'dark' | 'system'
 *  setThemeMode → function to manually override the theme
 *
 * ─── Setup (app/_layout.tsx) ────────────────────────────────────
 *  import ThemeProvider from '@/context/ThemeContext'
 *
 *  <ThemeProvider>
 *    <App />
 *  </ThemeProvider>
 *
 * ─── Usage in any component ─────────────────────────────────────
 *  import { useTheme } from '@/hooks/useTheme'
 *
 *  const { colors, isDark, setThemeMode } = useTheme()
 *
 *  <View style={{ backgroundColor: colors.background }}>
 *    <Text style={{ color: colors.textPrimary }}>Hello</Text>
 *  </View>
 *
 * ─── Manual theme override ───────────────────────────────────────
 *  setThemeMode('dark')    → force dark mode
 *  setThemeMode('light')   → force light mode
 *  setThemeMode('system')  → follow device setting (default)
 *
 * ─── ThemeMode options ──────────────────────────────────────────
 *  'light'  — always use LightColors regardless of device setting
 *  'dark'   — always use DarkColors regardless of device setting
 *  'system' — automatically match the device's appearance (default)
 */
import { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { LightColors, DarkColors } from '@/constants/colors';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  colors: typeof LightColors;
  themeMode: ThemeMode;
  isDark: boolean;
  setThemeMode: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  colors: LightColors,
  themeMode: 'system',
  isDark: false,
  setThemeMode: () => { },
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');
  const deviceScheme = useColorScheme();

  const isDark: boolean =
    themeMode === 'system'
      ? deviceScheme === 'dark'
      : themeMode === 'dark';

  const colors = isDark ? DarkColors : LightColors;

  return (
    <ThemeContext.Provider value={{ colors, themeMode, isDark, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
