/**
 * Login Screen
 *
 * Email + password login form with Zod validation.
 * Connects to authService via useAuth hook.
 *
 * ─── Navigation ─────────────────────────────────────────────────
 *  On success    → app/index.tsx redirects to /(tabs)
 *  Register link → navigates to /(auth)/register
 *  Forgot link   → navigates to /(auth)/forgot-password
 *
 * ─── Connecting to your backend ─────────────────────────────────
 *  Update authService.login() in:
 *  src/modules/auth/services/authService.ts
 */

import { ThemedButton, ThemedInput, ThemedText } from "@/components";
import { Spacing } from "@/constants";
import { useTheme } from "@/hooks/useTheme";
import { useAuth } from "@/modules/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet, View } from "react-native";
import { LoginFormData, loginSchema } from "../schemas/auth.schemas";

export default function LoginScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const { t } = useTranslation("auth");
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      setServerError(null);
      await signIn(data);
    } catch (error) {
      setServerError(t("errors.loginFailed"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { padding: Spacing.lg }]}
    >
      <ThemedText variant="headlineLarge">{t("login.title")}</ThemedText>
      <ThemedText variant="bodyMedium" color={colors.textSecondary}>
        {t("login.subtitle")}
      </ThemedText>

      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <ThemedInput
            label={t("login.emailLabel")}
            placeholder={t("login.emailPlaceholder")}
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
            label={t("login.passwordLabel")}
            placeholder={t("login.passwordPlaceholder")}
            secureTextEntry
            value={value}
            onChangeText={onChange}
            error={errors.password?.message}
          />
        )}
      />

      {serverError && (
        <ThemedText variant="bodySmall" color={colors.error}>
          {serverError}
        </ThemedText>
      )}

      <ThemedButton
        variant="ghost"
        label={t("login.forgotPassword")}
        onPress={() => router.push("/(auth)/forgot-password")}
      />

      <ThemedButton
        label={t("login.submitButton")}
        loading={isLoading}
        onPress={handleSubmit(onSubmit)}
      />

      <View style={styles.row}>
        <ThemedText variant="bodySmall">{t("login.noAccount")}</ThemedText>
        <ThemedButton
          variant="ghost"
          label={t("login.signUpLink")}
          onPress={() => router.push("/(auth)/register")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
