/**
 * Buttons Demo
 *
 * Shows all ThemedButton variants and states.
 * Reference this when choosing button styles in your app.
 */
import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedView, ThemedText, ThemedButton } from '@/components';
import { Spacing } from '@/constants';
import { useTheme } from '@/hooks/useTheme';
import { Stack } from 'expo-router';
import { useState } from 'react';

const VARIANTS = [
  { label: 'Primary',     variant: 'primary'     },
  { label: 'Secondary',   variant: 'secondary'   },
  { label: 'Outline',     variant: 'outline'     },
  { label: 'Ghost',       variant: 'ghost'       },
  { label: 'Destructive', variant: 'destructive' },
] as const;

export default function ButtonsDemo() {
  const { colors } = useTheme();
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Buttons' }} />
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={styles.content}
      >
        <ThemedText variant="titleLarge" style={styles.sectionTitle}>
          All Variants
        </ThemedText>
        <ThemedView style={[styles.card, { backgroundColor: colors.surface }]}>
          {VARIANTS.map((item) => (
            <View key={item.variant} style={styles.buttonWrapper}>
              <ThemedText
                variant="labelSmall"
                color={colors.textSecondary}
                style={styles.buttonLabel}
              >
                {item.label}
              </ThemedText>
              <ThemedButton
                label={item.label}
                variant={item.variant}
              />
            </View>
          ))}
        </ThemedView>

        <ThemedText variant="titleLarge" style={[styles.sectionTitle, styles.sectionGap]}>
          States
        </ThemedText>
        <ThemedView style={[styles.card, { backgroundColor: colors.surface }]}>
          <ThemedButton
            label="Loading Demo"
            loading={loading}
            onPress={handleLoadingDemo}
          />
          <ThemedButton
            label="Disabled"
            disabled={true}
          />
          <ThemedButton
            label="Full Width"
            fullWidth={true}
          />
        </ThemedView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: Spacing.lg,
  },
  sectionTitle: {
    marginBottom: Spacing.md,
  },
  sectionGap: {
    marginTop: Spacing.xxl,
  },
  card: {
    borderRadius: 12,
    padding: Spacing.lg,
    flex: 0,
    gap: Spacing.md,
  },
  buttonWrapper: {
    gap: Spacing.xs,
  },
  buttonLabel: {
    paddingHorizontal: Spacing.xxs,
  },
});
