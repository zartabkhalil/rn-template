// Replace primary and secondary font names to match your useFonts() keys in _layout.tsx
export const FontKeys = {
  primary: {
    regular: 'SwitzerRegular',
    medium: 'SwitzerMedium',
    semibold: 'SwitzerSemibold',
    bold: 'SwitzerBold',
  },
  secondary: {
    regular: 'RobotoRegular',
    medium: 'RobotoMedium',
    semibold: 'RobotoSemiBold',
    bold: 'RobotoBold',
  },
}

export type FontFamily = keyof typeof FontKeys
export type FontWeight = keyof typeof FontKeys.primary
