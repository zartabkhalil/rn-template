/**
 * ThemedButton
 *
 * Base button component that respects the app theme.
 * Supports 5 variants and loading + disabled states.
 *
 * ─── Variants ───────────────────────────────────────────────────
 *  primary     → filled, uses colors.primary background
 *  secondary   → filled, uses colors.secondary background
 *  outline     → transparent with colored border
 *  ghost       → no border, no background, text only
 *  destructive → filled, uses colors.error background
 *
 * ─── States ─────────────────────────────────────────────────────
 *  loading     → shows ActivityIndicator, disables press
 *  disabled    → reduced opacity, disables press
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import { ThemedButton } from '@/components'
 *
 *  <ThemedButton label="Sign In" onPress={handleSignIn} />
 *  <ThemedButton label="Cancel" variant="outline" onPress={handleCancel} />
 *  <ThemedButton label="Delete" variant="destructive" onPress={handleDelete} />
 *  <ThemedButton label="Loading" loading={true} />
 *  <ThemedButton label="Disabled" disabled={true} />
 *
 * ─── Props ──────────────────────────────────────────────────────
 *  label       → button text (required)
 *  variant     → 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
 *  onPress     → press handler
 *  loading     → shows spinner when true
 *  disabled    → disables interaction when true
 *  style       → override container style
 *  labelStyle  → override label style
 *  fullWidth   → takes full width when true (default: true)
 */

import {
  TouchableOpacity,
  ActivityIndicator,
  Text,
  ViewStyle,
  TextStyle,
  StyleSheet,
  StyleProp,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Spacing } from '@/constants/spacing';
import { FontSizes, FontWeights } from '@/constants/typography';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';

export interface ThemedButtonProps {
  label: string;
  variant?: ButtonVariant;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  fullWidth?: boolean;
}

const ThemedButton = ({
  label,
  variant = 'primary',
  onPress,
  loading = false,
  disabled = false,
  style,
  labelStyle,
  fullWidth = true,
}: ThemedButtonProps) => {
  const { colors } = useTheme();

  const getVariantStyles = (variant: ButtonVariant) => {
    switch (variant) {
      case 'primary':
        return {
          container: { backgroundColor: colors.primary, borderWidth: 0 },
          labelColor: '#FFFFFF',
        };
      case 'secondary':
        return {
          container: { backgroundColor: colors.secondary, borderWidth: 0 },
          labelColor: '#FFFFFF',
        };
      case 'outline':
        return {
          container: { backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.primary },
          labelColor: colors.primary,
        };
      case 'ghost':
        return {
          container: { backgroundColor: 'transparent', borderWidth: 0 },
          labelColor: colors.primary,
        };
      case 'destructive':
        return {
          container: { backgroundColor: colors.error, borderWidth: 0 },
          labelColor: '#FFFFFF',
        };
      default:
        return {
          container: { backgroundColor: colors.primary, borderWidth: 0 },
          labelColor: '#FFFFFF',
        };
    }
  };

  const { container: variantStyle, labelColor } = getVariantStyles(variant);

  const baseStyle: ViewStyle = {
    borderRadius: 12,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    opacity: disabled || loading ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
  };

  const labelBaseStyle: TextStyle = {
    fontSize: FontSizes.md,
    fontWeight: FontWeights.semibold as TextStyle['fontWeight'],
  };

  return (
    <TouchableOpacity
      style={[baseStyle, variantStyle, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={labelColor} size="small" />
      ) : (
        <Text style={[labelBaseStyle, { color: labelColor }, labelStyle]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ThemedButton;
