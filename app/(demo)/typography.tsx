/**
 * Typography Demo
 *
 * Shows all ThemedText variants with both font families.
 * Reference this when choosing text styles in your app.
 */
import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedView, ThemedText } from '@/components';
import { Spacing } from '@/constants';
import { useTheme } from '@/hooks/useTheme';
import { Stack } from 'expo-router';

const VARIANTS = [
  'displayLarge', 'displayMedium', 'displaySmall',
  'headlineLarge', 'headlineMedium', 'headlineSmall',
  'titleLarge', 'titleMedium', 'titleSmall',
  'bodyLarge', 'bodyMedium', 'bodySmall',
  'labelLarge', 'labelMedium', 'labelSmall',
] as const;

export default function TypographyDemo() {
  const { colors } = useTheme();

  return (
    <>
      <Stack.Screen options={{ title: 'Typography' }} />
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={styles.content}
      >
        <ThemedText variant="titleLarge" style={styles.sectionTitle}>
          Primary Font
        </ThemedText>
        <ThemedView style={[styles.card, { backgroundColor: colors.surface }]}>
          {VARIANTS.map((variant, index) => {
            const isLast = index === VARIANTS.length - 1;
            return (
              <View key={`primary-${variant}`}>
                <View style={styles.itemContainer}>
                  <ThemedText
                    variant="labelSmall"
                    color={colors.textSecondary}
                    style={styles.variantLabel}
                  >
                    {variant}
                  </ThemedText>
                  <ThemedText variant={variant} family="primary">
                    The quick brown fox
                  </ThemedText>
                </View>
                {!isLast && <View style={[styles.divider, { backgroundColor: colors.border }]} />}
              </View>
            );
          })}
        </ThemedView>

        <ThemedText variant="titleLarge" style={[styles.sectionTitle, styles.sectionGap]}>
          Secondary Font
        </ThemedText>
        <ThemedView style={[styles.card, { backgroundColor: colors.surface }]}>
          {VARIANTS.map((variant, index) => {
            const isLast = index === VARIANTS.length - 1;
            return (
              <View key={`secondary-${variant}`}>
                <View style={styles.itemContainer}>
                  <ThemedText
                    variant="labelSmall"
                    color={colors.textSecondary}
                    style={styles.variantLabel}
                  >
                    {variant}
                  </ThemedText>
                  <ThemedText variant={variant} family="secondary">
                    The quick brown fox
                  </ThemedText>
                </View>
                {!isLast && <View style={[styles.divider, { backgroundColor: colors.border }]} />}
              </View>
            );
          })}
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
  },
  itemContainer: {
    paddingVertical: Spacing.md,
  },
  variantLabel: {
    marginBottom: Spacing.xs,
  },
  divider: {
    height: 1,
  },
});
