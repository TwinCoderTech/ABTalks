import { NextResponse } from 'next/server'
import NextAuth from 'next-auth'
import { authConfig } from "./auth.config"

const { auth } = NextAuth(authConfig)

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/mastery/:path*']
}

export default auth((req) => {
  const isLoggedIn = !!req.auth
  
  if (!isLoggedIn) {
    const loginUrl = req.nextUrl.clone()
    loginUrl.pathname = '/login'
    return NextResponse.redirect(loginUrl)
  }
  
  return NextResponse.next()
})
