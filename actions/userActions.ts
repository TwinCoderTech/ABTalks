'use server';

import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { auth, signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

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
    if (isRedirectError(error)) {
      throw error;
    }
    
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials.' };
        default:
          return { error: 'Something went wrong during authentication.' };
      }
    }
    
    console.error("Login Error:", error);
    return { error: 'Internal Server Error. Please try again later.' };
  }
}

export async function registerUser(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Email and password are required.' };
  }

  try {
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
  } catch (error) {
    console.error("Database Error during Registration:", error);
    return { error: 'Database error. Please try again.' };
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: '/dashboard',
    });
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    if (error instanceof AuthError) {
      return { error: 'Registration successful, but auto-login failed.' };
    }
    
    console.error("Login after Registration Error:", error);
    return { error: 'Registration successful, but an unexpected error occurred during login.' };
  }
}

export async function logoutUser() {
  try {
    await signOut({ redirectTo: '/' });
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.error("Logout Error:", error);
  }
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
  try {
    await signIn(provider, { redirectTo: '/dashboard' });
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.error("Provider Login Error:", error);
  }
}
