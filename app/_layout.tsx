/**
 * Root Layout
 *
 * App entry point managed by Expo Router. Handles three things
 * before rendering any screen:
 * 1. Loads all custom fonts from assets/fonts/
 * 2. Hides splash screen once fonts are ready
 * 3. Wraps entire app in ThemeProvider for global theme access
 *
 * ─── Adding new fonts ───────────────────────────────────────────
 *  1. Drop font file into assets/fonts/
 *  2. Add entry in src/constants/fontAssets.ts
 *  3. Add matching key in src/constants/fonts.ts
 *  Font will be available automatically on next app start.
 *
 * ─── Theme ──────────────────────────────────────────────────────
 *  ThemeProvider wraps everything here so useTheme() works
 *  in any screen or component in the app.
 *
 * ─── Splash screen ──────────────────────────────────────────────
 *  SplashScreen.preventAutoHideAsync() is called at module level
 *  so it runs before any render. It is hidden only after fonts
 *  finish loading to prevent flash of unstyled text.
 */

import { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeProvider from '@/context/ThemeContext';
import { FontAssets } from '@/constants/fontAssets';
import { useTheme } from '@/hooks/useTheme';

SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const { colors } = useTheme();

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.textPrimary,
          headerShadowVisible: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      />
    </SafeAreaProvider>
  );
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts(FontAssets);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <ThemeProvider>
      <RootLayoutNav />
    </ThemeProvider>
  );
}
