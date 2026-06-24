/**
 * useAuth
 *
 * Clean hook to consume AuthContext anywhere in the app.
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import { useAuth } from '@/modules/auth'
 *
 *  const { user, isAuthenticated, isLoading } = useAuth()
 *  const { signIn, signOut, signUp } = useAuth()
 *
 * ─── Error ──────────────────────────────────────────────────────
 *  Throws if used outside AuthProvider
 */

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
