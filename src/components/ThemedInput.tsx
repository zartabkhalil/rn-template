/**
 * ThemedInput
 *
 * Base text input component that respects the app theme.
 * Supports focus, error, disabled states and password toggle.
 *
 * ─── States ─────────────────────────────────────────────────────
 *  default   → base style with theme border color
 *  focus     → border changes to colors.primary on focus
 *  error     → border changes to colors.error + shows error message below
 *  disabled  → reduced opacity, not editable
 *  password  → shows eye icon to toggle password visibility
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import { ThemedInput } from '@/components'
 *
 *  <ThemedInput
 *    label="Email"
 *    placeholder="Enter your email"
 *    value={value}
 *    onChangeText={onChange}
 *    keyboardType="email-address"
 *  />
 *
 *  <ThemedInput
 *    label="Password"
 *    placeholder="Enter your password"
 *    value={value}
 *    onChangeText={onChange}
 *    secureTextEntry
 *  />
 *
 *  <ThemedInput
 *    label="Email"
 *    error="Invalid email address"
 *    value={value}
 *    onChangeText={onChange}
 *  />
 *
 * ─── Props ──────────────────────────────────────────────────────
 *  label           → input label shown above (optional)
 *  error           → error message shown below (optional)
 *  disabled        → disables input when true
 *  secureTextEntry → enables password mode with toggle eye icon
 *  containerStyle  → override outer container style
 *  inputStyle      → override input style
 *  + all standard React Native TextInput props
 */

import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Spacing } from '@/constants/spacing';
import { FontSizes } from '@/constants/typography';
import { AppIcons } from '@/constants';

export interface ThemedInputProps extends TextInputProps {
  label?: string;
  error?: string;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

const ThemedInput = ({
  label,
  error,
  disabled = false,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  ...rest
}: ThemedInputProps) => {
  const { colors } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const getBorderColor = () => {
    if (error) return colors.error;
    if (isFocused) return colors.primary;
    return colors.border;
  };

  const containerBaseStyle: ViewStyle = {
    marginBottom: Spacing.md,
  };

  const labelStyle: TextStyle = {
    fontSize: FontSizes.sm,
    color: colors.textSecondary,
    marginBottom: Spacing.xs,
  };

  const inputWrapperStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: getBorderColor(),
    backgroundColor: colors.surface,
    opacity: disabled ? 0.5 : 1,
    paddingHorizontal: Spacing.md,
  };

  const inputBaseStyle: TextStyle = {
    flex: 1,
    paddingVertical: Spacing.md,
    fontSize: FontSizes.md,
    color: colors.textPrimary,
  };

  const errorStyle: TextStyle = {
    fontSize: FontSizes.xs,
    color: colors.error,
    marginTop: Spacing.xs,
  };

  return (
    <View style={[containerBaseStyle, containerStyle]}>
      {label && <Text style={labelStyle}>{label}</Text>}
      <View style={inputWrapperStyle}>
        <TextInput
          style={[inputBaseStyle, inputStyle]}
          placeholderTextColor={colors.textSecondary}
          editable={!disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          {...rest}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setIsPasswordVisible(prev => !prev)}>
            {isPasswordVisible ? (
              <AppIcons.eyeOff width={20} height={20} fill={colors.textSecondary} />
            ) : (
              <AppIcons.eye width={20} height={20} fill={colors.textSecondary} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={errorStyle}>{error}</Text>}
    </View>
  );
};

export default ThemedInput;
