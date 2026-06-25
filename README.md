# rn-base-template

A production-ready React Native + Expo starter template for freelancers and teams who want to skip the boilerplate and ship faster.

Built with TypeScript, Expo Router, a full theming system, localization, and a CLI that scaffolds everything in seconds.

---

## What's included

| Feature | Details |
|---|---|
| Navigation | Expo Router (file-based) with Stack + Tabs pre-wired |
| Theming | Light / dark / system mode with manual override |
| Typography | Material Design 3 type scale with dual font family support |
| Localization | English, Arabic (RTL), French via i18next + expo-localization |
| Icons | SVG icons from Figma via react-native-svg-transformer |
| Components | ThemedText, ThemedView, ThemedButton, ThemedInput |
| Demo screens | Visual reference for every base feature — delete before shipping |
| CLI | `npx @yourname/expo-kit` scaffolds a new project in seconds |

---

## Getting started

### Prerequisites

- Node.js 18+
- Expo CLI
- iOS Simulator or Android Emulator

### Create a new project

```bash
npx @yourname/expo-kit
```

The CLI will ask:

```
? Project name: my-app
? Bundle ID: com.yourname.myapp
? Need auth module? Yes / No
? Need Redux module? Yes / No
```

Then it will:
1. Clone this template
2. Update app name and bundle ID
3. Reset git history
4. Install dependencies
5. Print next steps

### Run the project

```bash
cd my-app
npx expo start --ios
```

---

## Project structure

```
my-app/
├── app/                          # Expo Router — screens and layouts
│   ├── index.tsx                 # Entry point — handles initial redirect
│   ├── _layout.tsx               # Root layout — fonts, splash, theme
│   ├── (tabs)/                   # Bottom tab navigator
│   │   ├── _layout.tsx           # Tab bar config — edit TAB_SCREENS here
│   │   ├── index.tsx             # Home screen
│   │   └── settings.tsx          # Settings screen
│   └── (demo)/                   # Demo screens — delete before shipping
│       ├── index.tsx             # Demo home
│       ├── typography.tsx        # All ThemedText variants
│       ├── colors.tsx            # Full color palette
│       ├── buttons.tsx           # All ThemedButton variants
│       ├── inputs.tsx            # ThemedInput states
│       ├── icons.tsx             # All registered icons
│       ├── spacing.tsx           # Spacing scale visual
│       └── localization.tsx      # Language switcher demo
├── src/
│   ├── components/               # Shared UI components
│   │   ├── ThemedText.tsx
│   │   ├── ThemedView.tsx
│   │   ├── ThemedButton.tsx
│   │   ├── ThemedInput.tsx
│   │   └── index.ts
│   ├── constants/                # Design tokens and registries
│   │   ├── colors.ts             # LightColors + DarkColors
│   │   ├── fonts.ts              # Font family keys
│   │   ├── fontAssets.ts         # Font file requires
│   │   ├── typography.ts         # Material Design 3 type scale
│   │   ├── spacing.ts            # 4pt grid spacing scale
│   │   ├── icons.ts              # AppIcons + TabIcons registry
│   │   └── index.ts              # Barrel export
│   ├── context/
│   │   └── ThemeContext.tsx      # Theme provider + light/dark/system
│   ├── hooks/
│   │   ├── useTheme.ts           # Consume theme anywhere
│   │   └── useLocale.ts          # Language switcher hook
│   ├── locales/                  # Translation files
│   │   ├── i18n.ts               # i18next config
│   │   ├── en/                   # English
│   │   ├── ar/                   # Arabic (RTL)
│   │   └── fr/                   # French
│   ├── modules/                  # Installable modules (added by CLI)
│   │   ├── auth/                 # Auth module
│   │   └── redux/                # Redux module
│   ├── services/                 # API and external services
│   ├── types/                    # Global TypeScript types
│   └── utils/                    # Helper functions
├── assets/
│   ├── fonts/                    # Custom font files (.ttf / .otf)
│   └── images/
│       ├── svgs/                 # General SVG icons from Figma
│       └── tab/                  # Tab bar icons
│           ├── light/            # Light mode tab icons
│           └── dark/             # Dark mode tab icons
├── declarations.d.ts             # SVG type declarations
└── app.json                      # Expo config
```

---

## Theme system

### How it works

The theme system provides app-wide light and dark mode with automatic device detection and manual override.

`ThemeProvider` wraps the entire app in `app/_layout.tsx`. Any component can access the current theme via `useTheme()`.

### Using the theme

```tsx
import { useTheme } from '@/hooks/useTheme'

const { colors, isDark, setThemeMode } = useTheme()

// Use colors in styles
<View style={{ backgroundColor: colors.background }}>
  <Text style={{ color: colors.textPrimary }}>Hello</Text>
</View>
```

### Switching theme mode

```tsx
setThemeMode('dark')    // force dark mode
setThemeMode('light')   // force light mode
setThemeMode('system')  // follow device setting (default)
```

### Customizing colors

Edit `src/constants/colors.ts`:

```ts
export const LightColors = {
  primary:       '#0066FF',   // ← change your brand color here
  secondary:     '#7B2FBE',
  background:    '#FFFFFF',
  surface:       '#F5F5F5',
  textPrimary:   '#111111',
  textSecondary: '#666666',
  border:        '#E0E0E0',
  error:         '#FF3B30',
  success:       '#34C759',
  warning:       '#FF9500',
}

export const DarkColors = {
  primary:       '#4D9FFF',   // ← dark mode variant
  // ...
}
```

### Adding a new color token

1. Add the key to both `LightColors` and `DarkColors` in `colors.ts`
2. It is immediately available via `colors.yourNewToken` anywhere in the app

---

## Typography

### Type scale

The template uses the Material Design 3 type scale via `ThemedText`.

```tsx
import { ThemedText } from '@/components'

<ThemedText variant="displayLarge">Big Title</ThemedText>
<ThemedText variant="headlineMedium">Section Header</ThemedText>
<ThemedText variant="bodyMedium">Body text</ThemedText>
<ThemedText variant="labelSmall">Caption</ThemedText>
```

### Available variants

| Variant | Size | Use for |
|---|---|---|
| displayLarge | 57 | Hero text |
| displayMedium | 45 | Large headings |
| displaySmall | 36 | Section titles |
| headlineLarge | 32 | Screen titles |
| headlineMedium | 28 | Card headings |
| headlineSmall | 24 | Sub-headings |
| titleLarge | 22 | List titles |
| titleMedium | 16 | Emphasized body |
| titleSmall | 14 | Small titles |
| bodyLarge | 16 | Primary body text |
| bodyMedium | 14 | Default body text |
| bodySmall | 12 | Secondary body text |
| labelLarge | 14 | Button labels |
| labelMedium | 12 | Tags, chips |
| labelSmall | 11 | Captions |

### Font families

The template supports two font families — primary and secondary.

```tsx
<ThemedText variant="bodyMedium" family="primary">Primary font</ThemedText>
<ThemedText variant="bodyMedium" family="secondary">Secondary font</ThemedText>
<ThemedText variant="titleLarge" weight="bold">Bold title</ThemedText>
```

### Changing fonts

1. Drop font files into `assets/fonts/`
2. Update font keys in `src/constants/fonts.ts`:

```ts
export const FontKeys = {
  primary: {
    regular:  'YourFont_400Regular',
    medium:   'YourFont_500Medium',
    semibold: 'YourFont_600SemiBold',
    bold:     'YourFont_700Bold',
  },
  // ...
}
```

3. Update file requires in `src/constants/fontAssets.ts`:

```ts
export const FontAssets = {
  YourFont_400Regular: require('../../assets/fonts/YourFont-Regular.ttf'),
  // ...
}
```

---

## Components

### ThemedText

```tsx
<ThemedText variant="headlineLarge">Title</ThemedText>
<ThemedText variant="bodyMedium" family="secondary">Subtitle</ThemedText>
<ThemedText variant="labelMedium" weight="bold" color={colors.primary}>Label</ThemedText>
```

### ThemedView

```tsx
<ThemedView>                           // full screen, auto background
<ThemedView style={{ padding: 16 }}>  // with custom padding
<ThemedView style={{ flex: 0 }}>      // override flex
```

### ThemedButton

```tsx
<ThemedButton label="Sign In" onPress={handleSignIn} />
<ThemedButton label="Cancel" variant="outline" onPress={handleCancel} />
<ThemedButton label="Delete" variant="destructive" onPress={handleDelete} />
<ThemedButton label="Loading" loading={isLoading} onPress={handleSubmit} />
<ThemedButton label="Disabled" disabled={true} />
```

| Variant | Use for |
|---|---|
| primary | Main CTA |
| secondary | Secondary actions |
| outline | Alternative actions |
| ghost | Subtle actions |
| destructive | Delete, remove, danger |

### ThemedInput

```tsx
<ThemedInput
  label="Email"
  placeholder="Enter your email"
  value={value}
  onChangeText={setValue}
  keyboardType="email-address"
/>

<ThemedInput
  label="Password"
  placeholder="Enter your password"
  secureTextEntry
  error={errors.password?.message}
/>
```

---

## Localization

### Supported languages

| Code | Language | Direction |
|---|---|---|
| en | English | LTR |
| ar | Arabic | RTL |
| fr | French | LTR |

### Using translations

```tsx
import { useTranslation } from 'react-i18next'

const { t } = useTranslation('common')
const { t: tAuth } = useTranslation('auth')

t('actions.confirm')        // "Confirm"
tAuth('login.title')        // "Welcome Back"
```

### Switching language at runtime

```tsx
import { useLocale } from '@/hooks/useLocale'

const { language, changeLanguage, isRTL } = useLocale()

changeLanguage('ar')   // switch to Arabic + enable RTL
changeLanguage('en')   // switch to English + disable RTL
changeLanguage('fr')   // switch to French
```

> **Note:** RTL layout change for Arabic requires an app restart to fully apply.

### Adding a new language

1. Create a folder under `src/locales/` (e.g. `src/locales/es/`)
2. Add `common.json` and `auth.json` with translated strings
3. Import and register in `src/locales/i18n.ts`:

```ts
import esCommon from './es/common.json'
import esAuth from './es/auth.json'

resources: {
  // ...existing languages
  es: { common: esCommon, auth: esAuth },
}
```

4. Add `'es'` to `supportedLanguages` array
5. Add `'es'` to the `Language` type in `src/hooks/useLocale.ts`

### Adding a new namespace

1. Create a new JSON file in each language folder (e.g. `profile.json`)
2. Import and register in `i18n.ts`
3. Use it: `const { t } = useTranslation('profile')`

---

## Icons

### Structure

```
assets/images/
  svgs/          ← general UI icons
  tab/
    light/       ← tab bar icons for light mode
    dark/        ← tab bar icons for dark mode
```

### Adding a general icon

1. Export SVG from Figma
2. Drop into `assets/images/svgs/`
3. Register in `src/constants/icons.ts`:

```ts
import MyIconSvg from '../../assets/images/svgs/my-icon.svg'

export const AppIcons = {
  // ...existing icons
  myIcon: MyIconSvg,
}
```

4. Use anywhere:

```tsx
import { AppIcons } from '@/constants'
<AppIcons.myIcon width={24} height={24} fill={colors.primary} />
```

### Adding a tab icon

1. Export two SVGs from Figma — one for light mode, one for dark mode
2. Drop into `assets/images/tab/light/` and `assets/images/tab/dark/`
3. Register in `src/constants/icons.ts`:

```ts
export const TabIcons = {
  light: {
    // ...existing
    myTab: require('../../assets/images/tab/light/my-tab.svg'),
  },
  dark: {
    // ...existing
    myTab: require('../../assets/images/tab/dark/my-tab.svg'),
  },
}
```

4. Add to `TAB_SCREENS` in `app/(tabs)/_layout.tsx`

---

## Demo screens

The `app/(demo)/` folder contains a visual reference of every base template feature:

| Screen | Shows |
|---|---|
| Typography | All ThemedText variants and font families |
| Colors | Full color palette for current theme |
| Buttons | All ThemedButton variants and states |
| Inputs | All ThemedInput states |
| Icons | All registered AppIcons and TabIcons |
| Spacing | 4pt spacing scale visual grid |
| Localization | Language switcher and translation preview |

### Deleting demo screens

When starting a real project:

```bash
rm -rf app/(demo)
```

Then remove the demo button from `app/(tabs)/index.tsx`. Zero impact on the rest of the app.

---

## Modules

Modules are optional layers installed by the CLI on top of the base template. Each module lives in `src/modules/` and has its own Git branch.

### Available modules

| Module | Branch | What it adds |
|---|---|---|
| Auth | `modules/auth` | Login, register, forgot password, token storage |
| Redux | `modules/redux` | Redux Toolkit store, base slice, async thunk pattern |

### Installing a module

Modules are installed automatically by the CLI during project creation:

```bash
npx @yourname/expo-kit
? Need auth module? Yes
? Need Redux module? Yes
```

### Module branches

Each module has its own branch for isolated development:

```
main              ← always clone this, contains everything
base-template     ← base template code only
modules/auth      ← auth module development
modules/redux     ← redux module development
```

---

## Adding a new tab

1. Create a screen file in `app/(tabs)/`:

```tsx
// app/(tabs)/profile.tsx
import { ThemedView, ThemedText } from '@/components'

export default function ProfileScreen() {
  return (
    <ThemedView>
      <ThemedText variant="titleLarge">Profile</ThemedText>
    </ThemedView>
  )
}
```

2. Add SVG icons to `assets/images/tab/light/` and `assets/images/tab/dark/`

3. Register icons in `src/constants/icons.ts`

4. Add to `TAB_SCREENS` in `app/(tabs)/_layout.tsx`:

```ts
const TAB_SCREENS = [
  // ...existing tabs
  {
    name: 'profile',
    label: 'Profile',
    lightIcon: TabIcons.light.profile,
    darkIcon: TabIcons.dark.profile,
  },
]
```

---

## Contributing

Contributions are welcome. Please follow these guidelines:

### Branch strategy

```
main              ← stable, always working
base-template     ← base template changes go here
modules/auth      ← auth module changes go here
modules/redux     ← redux module changes go here
```

Never commit directly to `main`. Open a PR from your working branch.

### Adding a new module

1. Branch off `base-template`:

```bash
git checkout base-template
git checkout -b modules/your-module
```

2. Build the module inside `src/modules/your-module/`
3. Follow the existing module structure:

```
src/modules/your-module/
  context/
  hooks/
  services/
  storage/
  types/
  index.ts       ← barrel export
```

4. Add JSDoc documentation at the top of every file
5. Open a PR to merge into `main`

### Code style

- TypeScript strict mode — no `any` types
- JSDoc comment block at the top of every file
- Barrel exports via `index.ts` in every folder
- No hardcoded colors — always use `colors` from `useTheme()`
- No hardcoded spacing — always use `Spacing` from `@/constants`
- No hardcoded strings — always use `t()` from `useTranslation()`

### Commit message format

```
feat: add push notifications module
fix: correct RTL layout in ThemedInput
docs: update localization guide
chore: upgrade expo to 52
```

### Opening a PR

- Describe what the PR adds or fixes
- Include screenshots for UI changes
- Make sure the demo screens still work
- Test on both iOS and Android

---

## License

MIT — free to use in personal and commercial projects.
