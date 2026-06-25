/**
 * Forgot Password Screen
 *
 * Sends a password reset link to the user's email.
 * Shows success message after submission.
 *
 * ─── Navigation ─────────────────────────────────────────────────
 *  Back to login → navigates back to /(auth)/login
 *
 * ─── Connecting to your backend ─────────────────────────────────
 *  Add a forgotPassword() method to:
 *  src/modules/auth/services/authService.ts
 */

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ThemedView, ThemedText, ThemedButton, ThemedInput } from '@/components';
import { useTheme } from '@/hooks/useTheme';
import { Spacing } from '@/constants';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useAuth } from '@/modules/auth';
import { authService } from '../services/authService';
import {
  forgotPasswordSchema,
  ForgotPasswordFormData,
} from '../schemas/auth.schemas';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const { t } = useTranslation('auth');
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      setIsLoading(true);
      setServerError(null);
      await authService.forgotPassword(data.email);
      setIsSuccess(true);
    } catch (error) {
      setServerError(t('errors.generic'));
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <ScrollView
        contentContainerStyle={[styles.container, { padding: Spacing.lg }]}
      >
        <ThemedText variant="headlineMedium">Check your email</ThemedText>
        <ThemedText variant="bodyMedium" color={colors.textSecondary}>
          We sent a password reset link to your email address.
        </ThemedText>
        <ThemedButton
          label={t('forgotPassword.backToLogin')}
          variant="outline"
          onPress={() => router.back()}
        />
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={[styles.container, { padding: Spacing.lg }]}>
      <ThemedText variant="headlineLarge">
        {t('forgotPassword.title')}
      </ThemedText>
      <ThemedText variant="bodyMedium">{t('forgotPassword.subtitle')}</ThemedText>

      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <ThemedInput
            label={t('forgotPassword.emailLabel')}
            placeholder={t('forgotPassword.emailPlaceholder')}
            keyboardType="email-address"
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
            error={errors.email?.message}
          />
        )}
      />

      {serverError && (
        <ThemedText variant="bodySmall" color={colors.error}>
          {serverError}
        </ThemedText>
      )}

      <ThemedButton
        label={t('forgotPassword.submitButton')}
        loading={isLoading}
        onPress={handleSubmit(onSubmit)}
      />

      <ThemedButton
        variant="ghost"
        label={t('forgotPassword.backToLogin')}
        onPress={() => router.back()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
