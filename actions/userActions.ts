'use server';

import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { auth, signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';

export async function loginUser(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: '/dashboard',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials.' };
        default:
          return { error: 'Something went wrong.' };
      }
    }
    throw error; // Rethrow to allow Next.js redirect to work
  }
}

export async function registerUser(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required.' };
  }

  const existingUser = await db.user.findUnique({ where: { email } });
  if (existingUser) {
    return { error: 'Email already in use.' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
    }
  });

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: '/dashboard',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: 'Registration successful, but auto-login failed.' };
    }
    throw error;
  }
}

export async function logoutUser() {
  await signOut({ redirectTo: '/' });
}

export async function getCurrentUser() {
  try {
    const session = await auth();
    if (!session?.user?.email) return null;

    return await db.user.findUnique({
      where: { email: session.user.email }
    });
  } catch (error) {
    console.error("Error in getCurrentUser:", error);
    return null;
  }
}

export async function loginWithProvider(provider: 'google' | 'github') {
  await signIn(provider, { redirectTo: '/dashboard' });
}
