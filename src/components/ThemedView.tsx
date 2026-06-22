// Usage examples:
// <ThemedView>                          — full screen background
// <ThemedView style={{ padding: 16 }}> — with custom padding
// <ThemedView style={{ flex: 0 }}>     — override flex when needed

import React from 'react';
import { View, ViewStyle, StyleProp, ViewProps } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

interface ThemedViewProps extends Omit<ViewProps, 'style'> {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export default function ThemedView({
  style,
  children,
  ...rest
}: ThemedViewProps) {
  const { colors } = useTheme();

  const baseStyle: ViewStyle = {
    flex: 1,
    backgroundColor: colors.background,
  };

  return (
    <View style={[baseStyle, style]} {...rest}>
      {children}
    </View>
  );
}
