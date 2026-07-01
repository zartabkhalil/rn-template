/**
 * useAppSelector
 *
 * Typed version of useSelector. Always use this instead
 * of the raw useSelector hook to get full TypeScript support.
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import { useAppSelector } from '@/modules/redux'
 *
 *  const theme = useAppSelector(state => state.app.theme)
 *  const user = useAppSelector(state => state.user.data)
 */

import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../types/redux.types';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
