import { NextRequest, NextResponse } from 'next/server'

const PROTECTED = ['/dashboard']
const AUTH_ROUTES = ['/login', '/register']

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const token = req.cookies.get('whink_session')?.value

  const isProtected = PROTECTED.some(p => pathname.startsWith(p))
  const isAuth = AUTH_ROUTES.some(p => pathname.startsWith(p))

  if (isProtected && !token) {
    const url = req.nextUrl.clone()
    url.pathname = '/login'
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }

  if (isAuth && token) {
    const url = req.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  return NextResponse.next({ request: req })
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
}
