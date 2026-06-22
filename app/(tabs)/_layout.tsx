import { Tabs } from 'expo-router';
import { useTheme } from '@/hooks/useTheme';

export default function TabsLayout() {
  const { colors, isDark } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.textPrimary,
        headerShadowVisible: false,
        tabBarStyle: { backgroundColor: colors.background },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarShowLabel: true,
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
    </Tabs>
  );
}
