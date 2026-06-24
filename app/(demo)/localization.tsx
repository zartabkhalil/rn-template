/**
 * Localization Demo
 *
 * Shows language switching between English, Arabic and French.
 * Arabic switches the app to RTL layout (requires app restart).
 */
import { View, StyleSheet, ScrollView } from 'react-native';
import { ThemedView, ThemedText, ThemedButton } from '@/components';
import useLocale, { Language } from '@/hooks/useLocale';
import { useTranslation } from 'react-i18next';
import { Spacing } from '@/constants';
import { useTheme } from '@/hooks/useTheme';
import { Stack } from 'expo-router';

const LANGUAGES = [
  { label: 'English', code: 'en' },
  { label: 'العربية', code: 'ar' },
  { label: 'Français', code: 'fr' },
];

export default function LocalizationDemo() {
  const { language, changeLanguage, isRTL } = useLocale();
  const { t } = useTranslation('auth');
  const { colors } = useTheme();

  return (
    <>
      <Stack.Screen options={{ title: 'Localization' }} />
      <ScrollView
        style={[styles.container, { backgroundColor: colors.background }]}
        contentContainerStyle={styles.content}
      >
        <ThemedText variant="titleLarge" style={styles.sectionTitle}>
          Current Language
        </ThemedText>
        <ThemedView style={[styles.card, { backgroundColor: colors.surface }]}>
          <ThemedText variant="titleLarge">
            {language?.toUpperCase()}
          </ThemedText>
          <ThemedText variant="bodyMedium">
            RTL: {isRTL ? 'Yes' : 'No'}
          </ThemedText>
        </ThemedView>

        <ThemedText variant="titleLarge" style={[styles.sectionTitle, styles.sectionGap]}>
          Switch Language
        </ThemedText>
        <ThemedView style={[styles.card, { backgroundColor: colors.surface }]}>
          {LANGUAGES.map((lang) => {
            const isActive = language === lang.code;
            return (
              <View key={lang.code} style={styles.buttonGroup}>
                <ThemedButton
                  label={lang.label}
                  variant={isActive ? 'primary' : 'outline'}
                  onPress={() => changeLanguage(lang.code as Language)}
                />
                {lang.code === 'ar' && (
                  <ThemedText
                    variant="labelSmall"
                    color={colors.textSecondary}
                    style={styles.rtlNote}
                  >
                    RTL requires app restart to apply
                  </ThemedText>
                )}
              </View>
            );
          })}
        </ThemedView>

        <ThemedText variant="titleLarge" style={[styles.sectionTitle, styles.sectionGap]}>
          Translation Preview
        </ThemedText>
        <ThemedView style={[styles.card, { backgroundColor: colors.surface }]}>
          <View style={styles.previewGroup}>
            <ThemedText variant="labelSmall" color={colors.textSecondary} style={styles.previewLabel}>
              login.title
            </ThemedText>
            <ThemedText variant="bodyLarge">
              {t('login.title')}
            </ThemedText>
          </View>

          <View style={styles.previewGroup}>
            <ThemedText variant="labelSmall" color={colors.textSecondary} style={styles.previewLabel}>
              login.submitButton
            </ThemedText>
            <ThemedText variant="bodyLarge">
              {t('login.submitButton')}
            </ThemedText>
          </View>

          <View style={styles.previewGroup}>
            <ThemedText variant="labelSmall" color={colors.textSecondary} style={styles.previewLabel}>
              register.title
            </ThemedText>
            <ThemedText variant="bodyLarge">
              {t('register.title')}
            </ThemedText>
          </View>

          <View style={styles.previewGroup}>
            <ThemedText variant="labelSmall" color={colors.textSecondary} style={styles.previewLabel}>
              forgotPassword.title
            </ThemedText>
            <ThemedText variant="bodyLarge">
              {t('forgotPassword.title')}
            </ThemedText>
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
    gap: Spacing.md,
  },
  buttonGroup: {
    width: '100%',
  },
  rtlNote: {
    marginTop: Spacing.xs,
    paddingHorizontal: Spacing.xxs,
  },
  previewGroup: {
    gap: Spacing.xxs,
  },
  previewLabel: {
    textTransform: 'none',
  },
});
