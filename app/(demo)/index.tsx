/**
 * Demo Home
 *
 * Entry point for the demo section. Links to all feature demos.
 * Delete app/(demo)/ folder when starting a real project.
 */
import { ThemedButton, ThemedText, ThemedView } from "@/components";
import { Spacing } from "@/constants";
import { useTheme } from "@/hooks/useTheme";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Switch, View } from "react-native";

const DEMO_SECTIONS = [
  { label: "Typography", route: "/(demo)/typography" },
  { label: "Colors", route: "/(demo)/colors" },
  { label: "Buttons", route: "/(demo)/buttons" },
  { label: "Inputs", route: "/(demo)/inputs" },
  { label: "Icons", route: "/(demo)/icons" },
  { label: "Spacing", route: "/(demo)/spacing" },
  { label: "Localization", route: "/(demo)/localization" },
  { label: "Redux Store", route: "/(demo)/redux" },
];

export default function DemoHome() {
  const router = useRouter();

  const { colors, isDark, setThemeMode } = useTheme();

  const handleThemeToggle = () => {
    setThemeMode(isDark ? "light" : "dark");
  };

  return (
    <ScrollView
      style={[{ backgroundColor: colors.background }, styles.container]}
      contentContainerStyle={styles.content}
    >
      <ThemedText variant="headlineMedium" style={styles.title}>
        Template Demo
      </ThemedText>
      <ThemedText variant="bodyMedium" style={styles.subtitle}>
        Explore all base template features
      </ThemedText>

      <View style={styles.toggleRow}>
        <ThemedText variant="labelMedium">
          {isDark ? "Dark Mode" : "Light Mode"}
        </ThemedText>
        <Switch
          value={isDark}
          onValueChange={handleThemeToggle}
          trackColor={{ false: colors.border, true: colors.primary }}
          thumbColor={isDark ? colors.surface : colors.background}
        />
      </View>

      <ThemedView
        style={{ backgroundColor: colors.background, ...styles.list }}
      >
        {DEMO_SECTIONS.map((section) => (
          <ThemedButton
            key={section.route}
            label={section.label}
            variant="outline"
            onPress={() => router.push(section.route as any)}
            style={styles.button}
          />
        ))}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Spacing.lg,
  },
  content: {
    padding: Spacing.lg,
  },
  title: {
    marginBottom: Spacing.xs,
  },
  subtitle: {
    marginBottom: Spacing.xl,
  },
  list: {
    gap: Spacing.md,
  },
  button: {
    width: "100%",
  },
});
