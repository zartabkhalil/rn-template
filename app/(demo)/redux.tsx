/**
 * Redux Demo
 *
 * Live view of Redux store state.
 * Test dispatching actions and persistence.
 * Delete app/(demo)/ folder before shipping.
 */

import { ThemedButton, ThemedText, ThemedView } from "@/components";
import { Spacing } from "@/constants";
import { useTheme } from "@/hooks/useTheme";
import {
  clearUser,
  setLanguage,
  setOnboarded,
  setTheme,
  setUser,
  useAppDispatch,
  useAppSelector,
} from "@/modules/redux";
import { ScrollView, StyleSheet, View } from "react-native";

const MOCK_USER = {
  id: "1",
  email: "test@example.com",
  name: "Test User",
  createdAt: new Date().toISOString(),
};

export default function ReduxDemo() {
  const dispatch = useAppDispatch();
  const { colors } = useTheme();
  const appState = useAppSelector((state) => state.app);
  const userState = useAppSelector((state) => state.user);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <ThemedText variant="headlineMedium" style={styles.title}>
        Redux Store
      </ThemedText>

      <ThemedView style={styles.card}>
        <ThemedText variant="titleLarge">App Slice State</ThemedText>

        <ThemedText variant="labelSmall" color={colors.textSecondary}>
          theme
        </ThemedText>
        <ThemedText variant="bodyMedium">{appState.theme}</ThemedText>

        <ThemedText variant="labelSmall" color={colors.textSecondary}>
          language
        </ThemedText>
        <ThemedText variant="bodyMedium">{appState.language}</ThemedText>

        <ThemedText variant="labelSmall" color={colors.textSecondary}>
          isOnboarded
        </ThemedText>
        <ThemedText variant="bodyMedium">
          {appState.isOnboarded.toString()}
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText variant="titleLarge">App Slice Actions</ThemedText>

        <View style={styles.row}>
          <ThemedButton
            label="Light"
            variant="outline"
            onPress={() => dispatch(setTheme("light"))}
          />
          <ThemedButton
            label="Dark"
            variant="outline"
            onPress={() => dispatch(setTheme("dark"))}
          />
          <ThemedButton
            label="System"
            variant="outline"
            onPress={() => dispatch(setTheme("system"))}
          />
        </View>

        <View style={styles.row}>
          <ThemedButton
            label="EN"
            variant="outline"
            onPress={() => dispatch(setLanguage("en"))}
          />
          <ThemedButton
            label="AR"
            variant="outline"
            onPress={() => dispatch(setLanguage("ar"))}
          />
          <ThemedButton
            label="FR"
            variant="outline"
            onPress={() => dispatch(setLanguage("fr"))}
          />
        </View>

        <ThemedButton
          label="Toggle Onboarded"
          variant="outline"
          onPress={() => dispatch(setOnboarded(!appState.isOnboarded))}
        />
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText variant="titleLarge">User Slice State</ThemedText>

        {userState.data ? (
          <>
            <ThemedText variant="labelSmall" color={colors.textSecondary}>
              id
            </ThemedText>
            <ThemedText variant="bodyMedium">{userState.data.id}</ThemedText>

            <ThemedText variant="labelSmall" color={colors.textSecondary}>
              email
            </ThemedText>
            <ThemedText variant="bodyMedium">{userState.data.email}</ThemedText>

            <ThemedText variant="labelSmall" color={colors.textSecondary}>
              name
            </ThemedText>
            <ThemedText variant="bodyMedium">{userState.data.name}</ThemedText>
          </>
        ) : (
          <ThemedText variant="bodyMedium">No user in store</ThemedText>
        )}
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText variant="titleLarge">User Slice Actions</ThemedText>

        <ThemedButton
          label="Set Mock User"
          variant="outline"
          onPress={() => dispatch(setUser(MOCK_USER))}
        />
        <ThemedButton
          label="Clear User"
          variant="destructive"
          onPress={() => dispatch(clearUser())}
        />
      </ThemedView>

      <ThemedText variant="labelSmall" color={colors.textSecondary}>
        State persists across app restarts via redux-persist + AsyncStorage
      </ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: Spacing.lg,
    gap: Spacing.lg,
  },
  title: {
    marginBottom: Spacing.sm,
  },
  card: {
    borderRadius: 12,
    padding: Spacing.lg,
    gap: Spacing.md,
  },
  row: {
    gap: Spacing.sm,
  },
});
