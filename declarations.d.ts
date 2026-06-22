/**
 * SVG Type Declaration
 *
 * Tells TypeScript how to handle .svg file imports.
 * This allows importing SVG files directly as React components:
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import HomeSvg from '@/assets/icons/home.svg'
 *  <HomeSvg width={24} height={24} fill={colors.primary} />
 *
 * ─── Adding new icons ───────────────────────────────────────────
 *  1. Export SVG from Figma
 *  2. Drop the .svg file into assets/icons/
 *  3. Import and use it directly — no other config needed
 */

declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
