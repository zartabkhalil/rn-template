/**
 * Colors Demo
 *
 * Shows the full color palette for current theme.
 * Switch device theme to see light/dark values update.
 */
import { ScrollView, View, StyleSheet } from 'react-native';
import { ThemedView, ThemedText } from '@/components';
import { useTheme } from '@/hooks/useTheme';
import { Spacing } from '@/constants';
import { Stack } from 'expo-router';

const COLOR_KEYS = [
  'primary', 'secondary', 'background', 'surface',
  'textPrimary', 'textSecondary', 'border',
  'error', 'success', 'warning',
] as const;

export default function ColorsDemo() {
  const { colors, isDark } = useTheme();

  return (
    <>
      <Stack.Screen options={{ title: 'Colors' }} />
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={styles.content}
      >
        <ThemedText variant="titleLarge" style={styles.title}>
          {isDark ? 'Colors — Dark Mode' : 'Colors — Light Mode'}
        </ThemedText>

        <ThemedView style={[styles.card, { backgroundColor: colors.surface }]}>
          {COLOR_KEYS.map((key) => {
            const colorValue = colors[key];
            return (
              <View key={key} style={styles.itemContainer}>
                <View
                  style={[
                    styles.swatch,
                    {
                      backgroundColor: colorValue,
                      borderColor: colors.border,
                    },
                  ]}
                />
                <View style={styles.metaContainer}>
                  <ThemedText variant="labelMedium">
                    {key}
                  </ThemedText>
                  <ThemedText variant="labelSmall" color={colors.textSecondary}>
                    {colorValue.toUpperCase()}
                  </ThemedText>
                </View>
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
    gap: Spacing.lg,
  },
  itemContainer: {
    gap: Spacing.xs,
  },
  swatch: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.xxs,
  },
});
