import { NextAuthOptions } from 'next-auth';
import { NextAuthMiddlewareOptions, NextRequestWithAuth } from 'next-auth/middleware';
import CredentialsProvider from 'next-auth/providers/credentials';
import { NextResponse } from 'next/server';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials, req) {
        // TODO: Just a dummy user to pass authorize
        const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };

        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
};

export const authMiddlewareOptions: NextAuthMiddlewareOptions = {
  callbacks: {
    // Always return true so that we can handle logic on below middleware function
    authorized() {
      return true;
    },
  },
};

export const authMiddleware = async (req: NextRequestWithAuth) => {
  const authPages = ['/login'];
  const isAuth = req.nextauth.token;
  const isAuthPage = authPages.some((page) => req.nextUrl.pathname.startsWith(page));

  if (isAuthPage) {
    if (isAuth) {
      const protectedUrl = new URL('/protect', req.url);
      return NextResponse.redirect(protectedUrl);
    }
    return null;
  }

  if (!isAuth) {
    const loginUrl = new URL('/login', req.url);
    const params = encodeURIComponent(req.nextUrl.search || '');
    loginUrl.searchParams.set('from', `${req.nextUrl.pathname}${params}`);
    return NextResponse.redirect(loginUrl);
  }

  return null;
};

export default null;
