export type TextVariant =
  | 'displayLarge'
  | 'displayMedium'
  | 'displaySmall'
  | 'headlineLarge'
  | 'headlineMedium'
  | 'headlineSmall'
  | 'titleLarge'
  | 'titleMedium'
  | 'titleSmall'
  | 'bodyLarge'
  | 'bodyMedium'
  | 'bodySmall'
  | 'labelLarge'
  | 'labelMedium'
  | 'labelSmall';

export interface TypeScaleEntry {
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
}

export const TypeScale: Record<TextVariant, TypeScaleEntry> = {
  displayLarge:  { fontSize: 57, lineHeight: 64, letterSpacing: -0.25 },
  displayMedium: { fontSize: 45, lineHeight: 52, letterSpacing: 0    },
  displaySmall:  { fontSize: 36, lineHeight: 44, letterSpacing: 0    },
  headlineLarge:  { fontSize: 32, lineHeight: 40, letterSpacing: 0    },
  headlineMedium: { fontSize: 28, lineHeight: 36, letterSpacing: 0    },
  headlineSmall:  { fontSize: 24, lineHeight: 32, letterSpacing: 0    },
  titleLarge:  { fontSize: 22, lineHeight: 28, letterSpacing: 0    },
  titleMedium: { fontSize: 16, lineHeight: 24, letterSpacing: 0.15 },
  titleSmall:  { fontSize: 14, lineHeight: 20, letterSpacing: 0.1  },
  bodyLarge:  { fontSize: 16, lineHeight: 24, letterSpacing: 0.5  },
  bodyMedium: { fontSize: 14, lineHeight: 20, letterSpacing: 0.25 },
  bodySmall:  { fontSize: 12, lineHeight: 16, letterSpacing: 0.4  },
  labelLarge:  { fontSize: 14, lineHeight: 20, letterSpacing: 0.1  },
  labelMedium: { fontSize: 12, lineHeight: 16, letterSpacing: 0.5  },
  labelSmall:  { fontSize: 11, lineHeight: 16, letterSpacing: 0.5  },
};
