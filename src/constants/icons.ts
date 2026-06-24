/**
 * AppIcons & TabIcons
 *
 * Central registry for all SVG icons used in the app.
 * Icons are exported from Figma and stored in:
 *
 * ─── Icon locations ─────────────────────────────────────────────
 *  General icons  → assets/images/svgs/
 *  Tab bar icons  → assets/images/tab/
 *
 * ─── Adding a general icon ──────────────────────────────────────
 *  1. Export SVG from Figma
 *  2. Drop into assets/images/svgs/
 *  3. Import and add to AppIcons below
 *
 * ─── Adding a tab icon ──────────────────────────────────────────
 *  1. Export SVG from Figma
 *  2. Drop into assets/images/tab/
 *  3. Import and add to TabIcons below
 *  4. Reference it in TAB_SCREENS in app/(tabs)/_layout.tsx
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import { AppIcons, TabIcons } from '@/constants'
 *
 *  <AppIcons.home width={24} height={24} fill={colors.primary} />
 *  <TabIcons.home width={24} height={24} fill={colors.primary} />
 */

import EyeSvg from '../../assets/images/svgs/eye.svg';
import EyeOffSvg from '../../assets/images/svgs/eye-off.svg';

export const AppIcons = {
    eye: EyeSvg,
    eyeOff: EyeOffSvg,
}

import HomeTabSvg from '../../assets/images/tab/mira.svg'
import SettingsTabSvg from '../../assets/images/tab/search.svg'

export const TabIcons = {
    home: HomeTabSvg,
    settings: SettingsTabSvg,
}
