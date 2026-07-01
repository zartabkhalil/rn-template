/**
 * Redux Module
 *
 * Single entry point for the Redux module.
 * Import everything Redux related from here.
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import { store, persistor } from '@/modules/redux'
 *  import { useAppDispatch, useAppSelector } from '@/modules/redux'
 *  import { setTheme, setLanguage, setOnboarded } from '@/modules/redux'
 *  import { setUser, clearUser } from '@/modules/redux'
 *  import type { RootState, AppDispatch } from '@/modules/redux'
 */

export { store, persistor } from './store';
export { useAppDispatch } from './hooks/useAppDispatch';
export { useAppSelector } from './hooks/useAppSelector';
export { setTheme, setLanguage, setOnboarded } from './slices/appSlice';
export { setUser, clearUser, setUserLoading, setUserError } from './slices/userSlice';
export type { RootState, AppDispatch } from './types/redux.types';
