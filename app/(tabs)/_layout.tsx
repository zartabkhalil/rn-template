/**
 * Tabs Layout
 *
 * Bottom tab navigator shell. All tab screens live inside
 * the app/(tabs)/ folder.
 *
 * ─── Adding a new tab ───────────────────────────────────────────
 *  1. Create a new screen file inside app/(tabs)/
 *  2. Add a new entry in TAB_SCREENS constant below
 *  3. Add the icon to AppIcons in src/constants/icons.ts
 *
 * ─── To change icon or label ────────────────────────────────────
 *  Only edit the TAB_SCREENS constant at the top of this file.
 *  Do not touch the navigator code below.
 *
 * ─── Theming ────────────────────────────────────────────────────
 *  Tab bar and header colors come from useTheme()
 *  They update automatically on light/dark mode change.
 */

import { Tabs } from 'expo-router'
import { useTheme } from '@/hooks/useTheme'
import { TabIcons } from '@/constants'


const TAB_SCREENS = [
  { name: 'index', label: 'Home', lightIcon: TabIcons.light.home, darkIcon: TabIcons.dark.home },
  { name: 'settings', label: 'Settings', lightIcon: TabIcons.light.settings, darkIcon: TabIcons.dark.settings },
]


export default function TabsLayout() {
  const { colors, isDark } = useTheme()

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

      {TAB_SCREENS.map(({ name, label, lightIcon: LightIcon, darkIcon: DarkIcon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: label,
            tabBarIcon: ({ size }) => (
              isDark
                ? <DarkIcon width={size} height={size} />
                : <LightIcon width={size} height={size} />
            ),
          }}
        />
      ))}
    </Tabs>
  )
}
