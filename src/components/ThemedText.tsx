// Usage examples:
// <ThemedText variant="headlineLarge">Title</ThemedText>
// <ThemedText variant="bodyMedium" family="secondary">Body</ThemedText>
// <ThemedText variant="labelMedium" weight="bold" color={Colors.primary}>Label</ThemedText>

import React from 'react';
import { Text, TextStyle, StyleProp, TextProps } from 'react-native';
import { TypeScale, TextVariant } from '@/constants/typography';
import { FontKeys, FontFamily, FontWeight } from '@/constants/fonts';
import Colors from '@/constants/colors';

interface ThemedTextProps extends Omit<TextProps, 'style'> {
  variant?: TextVariant;
  family?: FontFamily;
  weight?: FontWeight;
  color?: string;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export default function ThemedText({
  variant = 'bodyMedium',
  family = 'primary',
  weight = 'regular',
  color = Colors.textPrimary,
  style,
  children,
  ...rest
}: ThemedTextProps) {
  const { fontSize, lineHeight, letterSpacing } = TypeScale[variant];

  const baseStyle: TextStyle = {
    fontSize,
    lineHeight,
    letterSpacing,
  };

  const customStyle: TextStyle = {
    fontFamily: FontKeys[family][weight],
    color,
  };

  return (
    <Text style={[baseStyle, customStyle, style]} {...rest}>
      {children}
    </Text>
  );
}
