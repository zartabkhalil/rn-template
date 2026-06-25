/**
 * Auth Service
 *
 * Handles all auth API calls. All functions are placeholders
 * ready to connect to any backend — REST, Supabase, Firebase etc.
 *
 * ─── How to connect to your backend ────────────────────────────
 *  Replace the placeholder comments with your real API calls.
 *  The function signatures and return types stay the same.
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import { authService } from '@/modules/auth/services/authService'
 *
 *  const { user, session } = await authService.login(payload)
 *  const { user, session } = await authService.register(payload)
 *  await authService.logout()
 *  const profile = await authService.fetchProfile(userId)
 *  const session = await authService.refreshToken(refreshToken)
 */

import { LoginPayload, RegisterPayload, User, Session, Profile } from '../types/auth.types';

export const authService = {
  login: async (payload: LoginPayload): Promise<{ user: User; session: Session }> => {
    // TODO: replace with your API call e.g. POST /auth/login
    return {
      user: {
        id: '1',
        email: payload.email,
        name: 'Test User',
        createdAt: new Date().toISOString(),
      },
      session: {
        accessToken: 'mock_access_token',
        refreshToken: 'mock_refresh_token',
      },
    };
  },

  register: async (payload: RegisterPayload): Promise<{ user: User; session: Session }> => {
    // TODO: replace with your API call e.g. POST /auth/register
    return {
      user: {
        id: '1',
        email: payload.email,
        name: payload.name,
        createdAt: new Date().toISOString(),
      },
      session: {
        accessToken: 'mock_access_token',
        refreshToken: 'mock_refresh_token',
      },
    };
  },

  logout: async (): Promise<void> => {
    // TODO: replace with your API call e.g. POST /auth/logout
    return Promise.resolve();
  },

  fetchProfile: async (userId: string): Promise<Profile> => {
    // TODO: replace with your API call e.g. GET /users/:id/profile
    return {
      id: '1',
      userId,
      avatar: null,
      bio: null,
    };
  },

  refreshToken: async (refreshToken: string): Promise<Session> => {
    // TODO: replace with your API call e.g. POST /auth/refresh
    return {
      accessToken: 'new_mock_access_token',
      refreshToken,
    };
  },

  forgotPassword: async (email: string): Promise<void> => {
    // TODO: replace with your API call e.g. POST /auth/forgot-password
    return Promise.resolve();
  },
};
