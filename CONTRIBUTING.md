# Contributing to rn-template

Thank you for your interest in contributing. This document explains how to work with this repository.

---

## Repository structure

```
main              ← stable, always working, never commit directly here
base-template     ← base template changes go here
modules/auth      ← auth module changes go here
modules/redux     ← redux module changes go here
```

---

## Before you start

1. Fork the repository
2. Clone your fork:

```bash
git clone https://github.com/YOUR_USERNAME/rn-template.git
cd rn-template
```

3. Install dependencies:

```bash
npm install
```

4. Run on simulator to verify everything works:

```bash
npx expo start --ios
```

---

## How to contribute

### Fixing a bug in the base template

1. Branch off `base-template`:

```bash
git checkout base-template
git checkout -b fix/your-fix-name
```

2. Make your fix
3. Test on both iOS and Android
4. Open a PR to merge into `base-template`
5. After review and merge — maintainer merges `base-template` into `main`

### Fixing a bug in a module

1. Branch off the relevant module branch:

```bash
git checkout modules/auth
git checkout -b fix/auth-your-fix-name
```

2. Make your fix
3. Test the module end to end
4. Open a PR to merge into `modules/auth`
5. After review and merge — maintainer merges into `main`

### Adding a new module

1. Branch off `base-template`:

```bash
git checkout base-template
git checkout -b modules/your-module-name
```

2. Build the module inside `src/modules/your-module-name/`
3. Follow the existing module structure:

```
src/modules/your-module/
  context/        ← if needed
  hooks/          ← typed hooks
  services/       ← API calls, all placeholder
  storage/        ← local storage helpers
  types/          ← TypeScript interfaces
  index.ts        ← barrel export
```

4. Add demo screen in `app/(demo)/your-module.tsx`
5. Add link to demo home in `app/(demo)/index.tsx`
6. Open a PR to merge into `main`

---

## Code standards

Please follow these rules — PRs that don't follow them will be asked to revise:

**TypeScript**

- Strict mode — no `any` types
- All props must have explicit types
- Export types from `index.ts` barrel

**Documentation**

- JSDoc comment block at the top of every file
- Follow the existing format:

```ts
/**
 * File Name
 *
 * One line description of what this file does.
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import { something } from '@/path'
 *
 *  usage example here
 */
```

**Styling**

- No hardcoded colors — always use `colors` from `useTheme()`
- No hardcoded spacing — always use `Spacing` from `@/constants`
- No hardcoded strings — always use `t()` from `useTranslation()`
- No third party UI libraries in base components

**Components**

- All base components must support light and dark mode
- All base components must accept a `style` prop override
- Follow ThemedText / ThemedView / ThemedButton patterns

---

## Commit message format

```
feat: add push notifications module
fix: correct RTL layout in ThemedInput
docs: update localization guide
chore: upgrade expo to 52
refactor: simplify ThemeContext logic
test: add auth flow tests
```

---

## Opening a PR

- Target the correct branch — never open a PR directly to `main`
- Describe what the PR adds or fixes
- Include screenshots for any UI changes
- Test on both iOS and Android before opening
- Make sure demo screens still work
- Keep PRs focused — one fix or feature per PR

---

## Reporting bugs

Open a GitHub issue with:

- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Expo version, iOS/Android version
- Screenshots if relevant

---

## Suggesting features

Open a GitHub issue with:

- What problem it solves
- How you'd expect it to work
- Any examples or references

---

## Questions

Open a GitHub discussion or issue — we're happy to help.
