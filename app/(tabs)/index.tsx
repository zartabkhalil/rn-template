import { useRouter } from 'expo-router';
import { ThemedView, ThemedText, ThemedButton } from '@/components';
import { useTheme } from '@/hooks/useTheme';
import { Spacing } from '@/constants';
import { StyleSheet, Switch, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const { colors, isDark, setThemeMode } = useTheme();


  return (
    <ThemedView style={styles.container}>

      <View style={styles.content}>
        <ThemedText variant="headlineMedium" style={styles.title}>
          Welcome
        </ThemedText>
        <ThemedText
          variant="bodyMedium"
          color={colors.textSecondary}
          style={styles.subtitle}
        >
          Your project is ready. Explore the template features below.
        </ThemedText>
        <ThemedButton
          label="View Template Demo"
          variant="outline"
          onPress={() => router.push('/(demo)')}
          style={{ marginTop: Spacing.xl }}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.huge, // Nudge the centered content slightly upward for better balance
  },
  title: {
    marginBottom: Spacing.xs,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: Spacing.xxl,
    textAlign: 'center',
  },
});
