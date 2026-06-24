/**
 * Inputs Demo
 *
 * Shows all ThemedInput states.
 * Reference this when building forms in your app.
 */
import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedView, ThemedText, ThemedInput } from '@/components';
import { Spacing } from '@/constants';
import { useTheme } from '@/hooks/useTheme';
import { Stack } from 'expo-router';
import { useState } from 'react';

export default function InputsDemo() {
  const { colors } = useTheme();
  const [value, setValue] = useState('');

  return (
    <>
      <Stack.Screen options={{ title: 'Inputs' }} />
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={styles.content}
      >
        <ThemedText variant="titleLarge" style={styles.sectionTitle}>
          Input States
        </ThemedText>
        <ThemedView style={[styles.card, { backgroundColor: colors.surface }]}>
          <View style={styles.inputGroup}>
            <ThemedText variant="labelSmall" color={colors.textSecondary} style={styles.stateLabel}>
              Default
            </ThemedText>
            <ThemedInput
              label="Email"
              placeholder="Enter your email"
              containerStyle={styles.inputContainer}
            />
          </View>

          <View style={styles.inputGroup}>
            <ThemedText variant="labelSmall" color={colors.textSecondary} style={styles.stateLabel}>
              With Value
            </ThemedText>
            <ThemedInput
              label="Email"
              value={value}
              onChangeText={setValue}
              placeholder="Type something..."
              containerStyle={styles.inputContainer}
            />
          </View>

          <View style={styles.inputGroup}>
            <ThemedText variant="labelSmall" color={colors.textSecondary} style={styles.stateLabel}>
              Error State
            </ThemedText>
            <ThemedInput
              label="Email"
              placeholder="Enter your email"
              error="Please enter a valid email address"
              containerStyle={styles.inputContainer}
            />
          </View>

          <View style={styles.inputGroup}>
            <ThemedText variant="labelSmall" color={colors.textSecondary} style={styles.stateLabel}>
              Disabled
            </ThemedText>
            <ThemedInput
              label="Email"
              placeholder="Not editable"
              disabled={true}
              containerStyle={styles.inputContainer}
            />
          </View>

          <View style={styles.inputGroup}>
            <ThemedText variant="labelSmall" color={colors.textSecondary} style={styles.stateLabel}>
              Password Toggle
            </ThemedText>
            <ThemedInput
              label="Password"
              placeholder="Enter your password"
              secureTextEntry={true}
              containerStyle={styles.inputContainer}
            />
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
  card: {
    borderRadius: 12,
    padding: Spacing.lg,
    flex: 0,
    gap: Spacing.lg,
  },
  inputGroup: {
    gap: Spacing.xs,
  },
  stateLabel: {
    paddingHorizontal: Spacing.xxs,
  },
  inputContainer: {
    marginBottom: 0,
  },
});
