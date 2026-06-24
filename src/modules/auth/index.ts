/**
 * Auth Module
 *
 * Single entry point for the auth module.
 * Import everything auth related from here.
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import { AuthProvider, useAuth } from '@/modules/auth'
 *  import type { User, Session, AuthState } from '@/modules/auth'
 */

export { default as AuthProvider } from './context/AuthContext';
export { AuthContext } from './context/AuthContext';
export { useAuth } from './hooks/useAuth';
export * from './types/auth.types';
