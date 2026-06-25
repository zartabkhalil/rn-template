/**
 * Register Screen
 *
 * New account creation form with Zod validation.
 * Connects to authService via useAuth hook.
 *
 * ─── Navigation ─────────────────────────────────────────────────
 *  On success  → app/index.tsx redirects to /(tabs)
 *  Login link  → navigates back to /(auth)/login
 *
 * ─── Connecting to your backend ─────────────────────────────────
 *  Update authService.register() in:
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
import { registerSchema, RegisterFormData } from '../schemas/auth.schemas';

export default function RegisterScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const { t } = useTranslation('auth');
  const { signUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      setServerError(null);
      await signUp(data);
    } catch (error) {
      setServerError(t('errors.registerFailed'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { padding: Spacing.lg }]}>
      <ThemedText variant="headlineLarge">{t('register.title')}</ThemedText>
      <ThemedText variant="bodyMedium" color={colors.textSecondary}>
        {t('register.subtitle')}
      </ThemedText>

      <Controller
        control={control}
        name="name"
        render={({ field: { value, onChange } }) => (
          <ThemedInput
            label={t('register.nameLabel')}
            placeholder={t('register.namePlaceholder')}
            autoCapitalize="words"
            value={value}
            onChangeText={onChange}
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <ThemedInput
            label={t('register.emailLabel')}
            placeholder={t('register.emailPlaceholder')}
            keyboardType="email-address"
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
            error={errors.email?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { value, onChange } }) => (
          <ThemedInput
            label={t('register.passwordLabel')}
            placeholder={t('register.passwordPlaceholder')}
            secureTextEntry
            value={value}
            onChangeText={onChange}
            error={errors.password?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { value, onChange } }) => (
          <ThemedInput
            label="Confirm Password"
            placeholder="Re-enter your password"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            error={errors.confirmPassword?.message}
          />
        )}
      />

      {serverError && (
        <ThemedText variant="bodySmall" color={colors.error}>
          {serverError}
        </ThemedText>
      )}

      <ThemedButton
        label={t('register.submitButton')}
        loading={isLoading}
        onPress={handleSubmit(onSubmit)}
      />

      <View style={styles.row}>
        <ThemedText variant="bodySmall">{t('register.hasAccount')}</ThemedText>
        <ThemedButton
          variant="ghost"
          label={t('register.signInLink')}
          onPress={() => router.back()}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
