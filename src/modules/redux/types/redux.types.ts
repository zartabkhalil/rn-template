/**
 * Redux Types
 *
 * RootState and AppDispatch are inferred from the store.
 * Always import these types from here — never define them manually.
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import type { RootState, AppDispatch } from '@/modules/redux/types/redux.types'
 *
 *  const dispatch: AppDispatch = useDispatch()
 *  const state: RootState = store.getState()
 */

import { store } from '../store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
