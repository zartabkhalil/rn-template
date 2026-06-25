/**
 * App Entry Point
 *
 * Watches auth state and navigates automatically.
 * No manual reload needed on login or logout.
 *
 * ─── How it works ───────────────────────────────────────────────
 *  useEffect watches isAuthenticated — any change triggers
 *  navigation automatically via router.replace()
 *  replace() is used instead of push() so user can't
 *  go back to the previous auth state screen
 */

import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '@/modules/auth';
import { View, ActivityIndicator } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export default function Index() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  const { colors } = useTheme();

  useEffect(() => {
    if (isLoading) return;

    if (isAuthenticated) {
      router.replace('/(tabs)');
    } else {
      router.replace('/(auth)/login');
    }
  }, [isAuthenticated, isLoading]);

  // Show spinner while checking cached session
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
      }}
    >
      <ActivityIndicator color={colors.primary} />
    </View>
  );
}
