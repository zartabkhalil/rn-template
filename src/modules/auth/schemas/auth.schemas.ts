/**
 * Auth Schemas
 *
 * Zod validation schemas for all auth forms.
 * Used with React Hook Form via zodResolver.
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import { loginSchema, LoginFormData } from '@/modules/auth/schemas/auth.schemas'
 *  import { zodResolver } from '@hookform/resolvers/zod'
 *  import { useForm } from 'react-hook-form'
 *
 *  const { control, handleSubmit } = useForm<LoginFormData>({
 *    resolver: zodResolver(loginSchema)
 *  })
 *
 * ─── Schemas ────────────────────────────────────────────────────
 *  loginSchema         → email + password
 *  registerSchema      → name + email + password + confirmPassword
 *  forgotPasswordSchema → email only
 */

import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('auth.errors.invalidEmail'),
  password: z.string().min(8, 'auth.errors.invalidPassword'),
});

export const registerSchema = z
  .object({
    name: z.string().min(1, 'auth.errors.invalidName'),
    email: z.string().email('auth.errors.invalidEmail'),
    password: z.string().min(8, 'auth.errors.invalidPassword'),
    confirmPassword: z.string().min(8, 'auth.errors.invalidPassword'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().email('auth.errors.invalidEmail'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
