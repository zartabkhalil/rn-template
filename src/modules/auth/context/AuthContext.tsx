/**
 * AuthContext
 *
 * Provides app-wide auth state. Handles session persistence,
 * user and profile caching, and auth actions.
 *
 * ─── What it provides ───────────────────────────────────────────
 *  user            → logged in user or null
 *  profile         → user profile or null
 *  session         → token pair or null
 *  isLoading       → true while checking cached session on start
 *  isAuthenticated → true when user and session exist
 *  signIn          → login with email + password
 *  signUp          → register new account
 *  signOut         → clear session and user data
 *  refreshProfile  → re-fetch profile from API
 *
 * ─── Setup (app/_layout.tsx) ────────────────────────────────────
 *  import { AuthProvider } from '@/modules/auth'
 *
 *  <AuthProvider>
 *    <App />
 *  </AuthProvider>
 *
 * ─── Usage in any component ─────────────────────────────────────
 *  import { useAuth } from '@/modules/auth'
 *
 *  const { user, isAuthenticated, signIn, signOut } = useAuth()
 */

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { authService } from '../services/authService';
import { authStorage } from '../storage/authStorage';
import { AuthState, LoginPayload, RegisterPayload, User, Profile, Session } from '../types/auth.types';

export const AuthContext = createContext<AuthState | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedSession = await authStorage.getSession();
        if (storedSession) {
          setSession(storedSession);
          const storedUser = await authStorage.getUser();
          if (storedUser) {
            setUser(storedUser);
            const storedProfile = await authStorage.getProfile();
            if (storedProfile) {
              setProfile(storedProfile);
            }
          }
        }
      } catch (error) {
        console.error('Error initializing auth state:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const signIn = useCallback(async (payload: LoginPayload) => {
    try {
      const { user: loggedInUser, session: newSession } = await authService.login(payload);
      await authStorage.saveSession(newSession);
      await authStorage.saveUser(loggedInUser);

      const userProfile = await authService.fetchProfile(loggedInUser.id);
      await authStorage.saveProfile(userProfile);

      setSession(newSession);
      setUser(loggedInUser);
      setProfile(userProfile);
    } catch (error) {
      throw error;
    }
  }, []);

  const signUp = useCallback(async (payload: RegisterPayload) => {
    try {
      const { user: registeredUser, session: newSession } = await authService.register(payload);
      await authStorage.saveSession(newSession);
      await authStorage.saveUser(registeredUser);

      const userProfile = await authService.fetchProfile(registeredUser.id);
      await authStorage.saveProfile(userProfile);

      setSession(newSession);
      setUser(registeredUser);
      setProfile(userProfile);
    } catch (error) {
      throw error;
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      await authService.logout();
      await authStorage.clearAll();
      setSession(null);
      setUser(null);
      setProfile(null);
    } catch (error) {
      throw error;
    }
  }, []);

  const refreshProfile = useCallback(async () => {
    try {
      if (user) {
        const updatedProfile = await authService.fetchProfile(user.id);
        await authStorage.saveProfile(updatedProfile);
        setProfile(updatedProfile);
      }
    } catch (error) {
      throw error;
    }
  }, [user]);

  const isAuthenticated = !!user && !!session;

  const value: AuthState = {
    user,
    profile,
    session,
    isLoading,
    isAuthenticated,
    signIn,
    signUp,
    signOut,
    refreshProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
