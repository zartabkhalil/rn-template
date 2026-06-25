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

import { FontAssets } from "@/constants/fontAssets";
import ThemeProvider from "@/context/ThemeContext";
import { useTheme } from "@/hooks/useTheme";
import "@/locales/i18n";
import { AuthProvider } from "@/modules/auth";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

function RootLayoutNav() {
  const { colors } = useTheme();

  return (
    <SafeAreaProvider>
      <Stack
        initialRouteName="(tabs)"
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.textPrimary,
          headerShadowVisible: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(demo)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      </Stack>
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
      <AuthProvider>
        <RootLayoutNav />
      </AuthProvider>
    </ThemeProvider>
  );
}
