/**
 * User Slice
 *
 * Manages logged in user data in Redux store.
 * Works alongside auth module — sync user data here
 * after successful login for app-wide access.
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import { useAppSelector, useAppDispatch } from '@/modules/redux'
 *  import { setUser, clearUser } from '@/modules/redux'
 *
 *  const dispatch = useAppDispatch()
 *  const user = useAppSelector(state => state.user.data)
 *
 *  dispatch(setUser(userData))   → after login
 *  dispatch(clearUser())         → after logout
 *
 * ─── Note ───────────────────────────────────────────────────────
 *  This slice stores user data for UI access.
 *  Auth tokens are managed separately by the auth module
 *  in expo-secure-store — not in Redux.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

interface UserState {
  data: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.data = action.payload;
      state.error = null;
    },
    clearUser(state) {
      state.data = null;
      state.error = null;
    },
    setUserLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setUserError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { setUser, clearUser, setUserLoading, setUserError } = userSlice.actions;
export default userSlice.reducer;
