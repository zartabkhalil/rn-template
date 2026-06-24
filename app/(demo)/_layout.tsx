/**
 * Demo Layout
 *
 * Layout for the demo screens. Shows a back button to return
 * to the home screen.
 *
 * ─── How to delete demo ─────────────────────────────────────────
 *  1. Delete app/(demo)/ folder entirely
 *  2. Remove the "View Demo" button from app/(tabs)/index.tsx
 *  Zero impact on the rest of the app.
 */
import { Stack } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';

export default function DemoLayout() {
  const { colors } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.textPrimary,
        headerShadowVisible: false,
        headerTitle: 'Demo',
        contentStyle: { backgroundColor: colors.background },
      }}
    />
  );
}
