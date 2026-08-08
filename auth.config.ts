import type { NextAuthConfig } from "next-auth"

export const authConfig = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [], // Providers are added in auth.ts to avoid Edge runtime issues with Prisma
} satisfies NextAuthConfig;
