import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('adminToken')?.value;
  const { pathname } = request.nextUrl;

  // Redirect to login if no token and trying to access protected routes
  if (!token && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirect to dashboard if logged in and trying to access login
  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login']
};