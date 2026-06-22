/**
 * Spacing
 *
 * Centralized 4pt grid spacing scale used for margins, paddings,
 * gaps and layout across the entire app.
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import { Spacing } from '@/constants'
 *
 *  <View style={{ padding: Spacing.md, marginBottom: Spacing.lg }}>
 *
 * ─── Scale reference ────────────────────────────────────────────
 *  xxs → 2
 *  xs  → 4
 *  sm  → 8
 *  md  → 12
 *  lg  → 16
 *  xl  → 24
 *  xxl → 32
 *  xxxl→ 48
 *  huge→ 64
 */

export const Spacing = {
  xxs:  2,
  xs:   4,
  sm:   8,
  md:   12,
  lg:   16,
  xl:   24,
  xxl:  32,
  xxxl: 48,
  huge: 64,
} as const;

export type SpacingKey = keyof typeof Spacing;
