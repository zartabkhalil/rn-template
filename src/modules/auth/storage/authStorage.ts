/**
 * Auth Storage
 *
 * Handles all local storage for the auth module.
 * Uses two storage layers:
 *
 * ─── Storage layers ─────────────────────────────────────────────
 *  expo-secure-store  → tokens (encrypted, iOS Keychain + Android Keystore)
 *  AsyncStorage       → user + profile cache (non-sensitive)
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import { authStorage } from '@/modules/auth/storage/authStorage'
 *
 *  await authStorage.saveSession(session)
 *  await authStorage.getSession()
 *  await authStorage.saveUser(user)
 *  await authStorage.getUser()
 *  await authStorage.saveProfile(profile)
 *  await authStorage.getProfile()
 *  await authStorage.clearAll()
 *
 * ─── When to use ────────────────────────────────────────────────
 *  saveSession  → after successful login or token refresh
 *  clearAll     → on sign out
 *  getSession   → on app start to check if user is logged in
 */

import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Session, User, Profile } from '../types/auth.types';

const KEYS = {
  ACCESS_TOKEN: 'auth_access_token',
  REFRESH_TOKEN: 'auth_refresh_token',
  USER: 'auth_user',
  PROFILE: 'auth_profile',
};

export const authStorage = {
  saveSession: async (session: Session): Promise<void> => {
    try {
      await SecureStore.setItemAsync(KEYS.ACCESS_TOKEN, session.accessToken);
      await SecureStore.setItemAsync(KEYS.REFRESH_TOKEN, session.refreshToken);
    } catch (error) {
      // Return null implicitly on error by catching
    }
  },

  getSession: async (): Promise<Session | null> => {
    try {
      const accessToken = await SecureStore.getItemAsync(KEYS.ACCESS_TOKEN);
      const refreshToken = await SecureStore.getItemAsync(KEYS.REFRESH_TOKEN);

      if (accessToken && refreshToken) {
        return { accessToken, refreshToken };
      }
      return null;
    } catch (error) {
      return null;
    }
  },

  clearSession: async (): Promise<void> => {
    try {
      await SecureStore.deleteItemAsync(KEYS.ACCESS_TOKEN);
      await SecureStore.deleteItemAsync(KEYS.REFRESH_TOKEN);
    } catch (error) {
    }
  },

  saveUser: async (user: User): Promise<void> => {
    try {
      await AsyncStorage.setItem(KEYS.USER, JSON.stringify(user));
    } catch (error) {
    }
  },

  getUser: async (): Promise<User | null> => {
    try {
      const userJson = await AsyncStorage.getItem(KEYS.USER);
      if (userJson) {
        return JSON.parse(userJson) as User;
      }
      return null;
    } catch (error) {
      return null;
    }
  },

  saveProfile: async (profile: Profile): Promise<void> => {
    try {
      await AsyncStorage.setItem(KEYS.PROFILE, JSON.stringify(profile));
    } catch (error) {
    }
  },

  getProfile: async (): Promise<Profile | null> => {
    try {
      const profileJson = await AsyncStorage.getItem(KEYS.PROFILE);
      if (profileJson) {
        return JSON.parse(profileJson) as Profile;
      }
      return null;
    } catch (error) {
      return null;
    }
  },

  clearAll: async (): Promise<void> => {
    try {
      await authStorage.clearSession();
      await AsyncStorage.removeItem(KEYS.USER);
      await AsyncStorage.removeItem(KEYS.PROFILE);
    } catch (error) {
    }
  },
};
