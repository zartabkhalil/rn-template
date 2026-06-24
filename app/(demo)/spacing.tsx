/**
 * Spacing Demo
 *
 * Visual reference for the 4pt spacing scale.
 * Use these values for all margins, paddings and gaps.
 */
import { ScrollView, View, StyleSheet } from 'react-native';
import { ThemedView, ThemedText } from '@/components';
import { Spacing, SpacingKey } from '@/constants';
import { useTheme } from '@/hooks/useTheme';
import { Stack } from 'expo-router';

const SPACING_KEYS: SpacingKey[] = [
  'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'huge'
];

export default function SpacingDemo() {
  const { colors } = useTheme();

  return (
    <>
      <Stack.Screen options={{ title: 'Spacing' }} />
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={styles.content}
      >
        <ThemedText variant="titleLarge" style={styles.title}>
          Spacing Scale
        </ThemedText>

        <ThemedView style={[styles.card, { backgroundColor: colors.surface }]}>
          {SPACING_KEYS.map((key) => {
            const spacingVal = Spacing[key];
            return (
              <View key={key} style={styles.row}>
                <ThemedText variant="labelMedium" style={styles.tokenName}>
                  {key}
                </ThemedText>
                <ThemedText
                  variant="labelSmall"
                  color={colors.textSecondary}
                  style={styles.pixelValue}
                >
                  {`${spacingVal}px`}
                </ThemedText>
                <View
                  style={[
                    styles.bar,
                    {
                      backgroundColor: colors.primary,
                      width: spacingVal * 2,
                    },
                  ]}
                />
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
  title: {
    marginBottom: Spacing.lg,
  },
  card: {
    borderRadius: 12,
    padding: Spacing.lg,
    flex: 0,
    gap: Spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tokenName: {
    width: 60,
  },
  pixelValue: {
    width: 40,
  },
  bar: {
    height: 12,
    borderRadius: 4,
  },
});
