/**
 * useAppDispatch
 *
 * Typed version of useDispatch. Always use this instead
 * of the raw useDispatch hook to get full TypeScript support.
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import { useAppDispatch } from '@/modules/redux'
 *
 *  const dispatch = useAppDispatch()
 *  dispatch(setTheme('dark'))
 */

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../types/redux.types';

export const useAppDispatch = () => useDispatch<AppDispatch>();
