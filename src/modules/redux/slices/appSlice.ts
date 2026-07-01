/**
 * App Slice
 *
 * Manages global app-level state — theme, language, UI flags.
 * Follow this pattern when creating new slices.
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import { useAppSelector, useAppDispatch } from '@/modules/redux'
 *  import { setTheme, setLanguage } from '@/modules/redux'
 *
 *  const dispatch = useAppDispatch()
 *  const theme = useAppSelector(state => state.app.theme)
 *
 *  dispatch(setTheme('dark'))
 *  dispatch(setLanguage('ar'))
 *
 * ─── Adding new state ───────────────────────────────────────────
 *  1. Add key to AppState interface
 *  2. Add default value to initialState
 *  3. Add reducer to reducers object
 *  4. Export the action
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  theme: 'light' | 'dark' | 'system';
  language: 'en' | 'ar' | 'fr';
  isOnboarded: boolean;
}

const initialState: AppState = {
  theme: 'system',
  language: 'en',
  isOnboarded: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<AppState['theme']>) {
      state.theme = action.payload;
    },
    setLanguage(state, action: PayloadAction<AppState['language']>) {
      state.language = action.payload;
    },
    setOnboarded(state, action: PayloadAction<boolean>) {
      state.isOnboarded = action.payload;
    },
  },
});

export const { setTheme, setLanguage, setOnboarded } = appSlice.actions;
export default appSlice.reducer;
