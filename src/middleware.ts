import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Handle product details route
  if (pathname.startsWith('/products/')) {
    const id = pathname.split('/').pop();

    // Product ID 1 always fails
    if (id === '1') {
      return NextResponse.redirect(
        new URL('/500', request.url)
      );
    }
  }

  return NextResponse.next();
}
