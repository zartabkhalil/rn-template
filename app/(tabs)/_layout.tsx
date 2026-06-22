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

const HomeIcon = TabIcons.home
const SettingsIcon = TabIcons.settings


export default function TabsLayout() {
  const { colors } = useTheme()

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

      <Tabs.Screen
        key={"Home"}
        name={'index'}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <HomeIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        key={"Settings"}
        name={'settings'}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <SettingsIcon width={size} height={size} fill={color} />
          ),
        }}
      />

    </Tabs>
  )
}
