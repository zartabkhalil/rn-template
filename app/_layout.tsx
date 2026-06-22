import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAssets } from '@/constants/fontAssets';
import ThemeProvider from '@/context/ThemeContext';
import { useTheme } from '@/hooks/useTheme';

function RootLayoutNav() {
  const { colors, isDark } = useTheme();

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.textPrimary,
          headerShadowVisible: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  const [loaded] = useFonts(FontAssets);
  return (
    <ThemeProvider >
      <SafeAreaProvider>
        <RootLayoutNav />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
