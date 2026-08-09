import type { NextAuthConfig } from "next-auth"

// Ensure AUTH_URL is correctly formatted on Vercel to prevent "TypeError: Invalid URL" in Middleware
if (!process.env.AUTH_URL && process.env.VERCEL_URL) {
  process.env.AUTH_URL = `https://${process.env.VERCEL_URL}`;
} else if (process.env.AUTH_URL && !process.env.AUTH_URL.startsWith('http')) {
  process.env.AUTH_URL = `https://${process.env.AUTH_URL}`;
}

export const authConfig = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [], // Providers are added in auth.ts to avoid Edge runtime issues with Prisma
  trustHost: true,
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
