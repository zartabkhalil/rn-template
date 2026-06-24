/**
 * App Entry Point
 *
 * Handles initial routing logic.
 * Currently redirects to (tabs) home.
 *
 * ─── Auth module ────────────────────────────────────────────────
 * When auth module is added, update this file to:
 * - Redirect authenticated users → /(tabs)
 * - Redirect unauthenticated users → /(auth)/login
 */
import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="/(tabs)" />;
}