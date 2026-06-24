/**
 * Icons Demo
 *
 * Shows all registered AppIcons and TabIcons.
 * Replace placeholder SVGs with real Figma exports.
 */
import { ScrollView, View, StyleSheet } from 'react-native';
import { ThemedView, ThemedText } from '@/components';
import { AppIcons, TabIcons } from '@/constants';
import { useTheme } from '@/hooks/useTheme';
import { Spacing } from '@/constants';
import { Stack } from 'expo-router';

const APP_ICON_KEYS = Object.keys(AppIcons) as (keyof typeof AppIcons)[];

export default function IconsDemo() {
  const { colors, isDark } = useTheme();

  return (
    <>
      <Stack.Screen options={{ title: 'Icons' }} />
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={styles.content}
      >
        <ThemedText variant="titleLarge" style={styles.sectionTitle}>
          App Icons
        </ThemedText>
        <ThemedView style={[styles.card, { backgroundColor: colors.surface }]}>
          {APP_ICON_KEYS.length === 0 ? (
            <ThemedText variant="bodyMedium" color={colors.textSecondary}>
              No app icons registered yet. Add SVG icons to src/constants/icons.ts.
            </ThemedText>
          ) : (
            <View style={styles.grid}>
              {APP_ICON_KEYS.map((key) => {
                const IconComponent = AppIcons[key];
                return (
                  <View key={key} style={styles.iconItem}>
                    <IconComponent width={32} height={32} fill={colors.textPrimary} />
                    <ThemedText variant="labelSmall" style={styles.iconName} numberOfLines={1}>
                      {key}
                    </ThemedText>
                  </View>
                );
              })}
            </View>
          )}
        </ThemedView>

        <ThemedText variant="titleLarge" style={[styles.sectionTitle, styles.sectionGap]}>
          Tab Icons
        </ThemedText>
        <ThemedView style={[styles.card, { backgroundColor: colors.surface }]}>
          <View style={styles.grid}>
            {(Object.keys(TabIcons.light) as Array<keyof typeof TabIcons.light>).map((key) => {
              const LightIcon = TabIcons.light[key];
              const DarkIcon = TabIcons.dark[key];
              const IconComponent = isDark ? DarkIcon : LightIcon;
              return (
                <View key={key} style={styles.iconItem}>
                  <IconComponent width={32} height={32} />
                  <ThemedText variant="labelSmall" style={styles.iconName} numberOfLines={1}>
                    {key}
                  </ThemedText>
                </View>
              );
            })}
          </View>
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.lg,
  },
  iconItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
  },
  iconName: {
    marginTop: Spacing.xs,
    textAlign: 'center',
  },
});
