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
  setThemeMode: () => {},
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
