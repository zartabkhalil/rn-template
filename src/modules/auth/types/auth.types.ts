/**
 * Auth Types
 *
 * All TypeScript types used across the auth module.
 * Update these to match your backend response shape.
 *
 * ─── Types ──────────────────────────────────────────────────────
 *  User            → logged in user data
 *  Profile         → extended user info fetched after login
 *  Session         → token pair returned from API
 *  LoginPayload    → what you send to login endpoint
 *  RegisterPayload → what you send to register endpoint
 *  AuthState       → shape of AuthContext value
 */

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface Profile {
  id: string;
  userId: string;
  avatar: string | null;
  bio: string | null;
}

export interface Session {
  accessToken: string;
  refreshToken: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (payload: LoginPayload) => Promise<void>;
  signUp: (payload: RegisterPayload) => Promise<void>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}
