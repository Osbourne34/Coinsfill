import { NextRequest, NextResponse } from 'next/server'
import { isTokenValid } from './utils/jwt'

const PUBLIC_FILE = /\.(.*)$/

export const middleware = (req: NextRequest) => {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }

  const { pathname } = req.nextUrl

  const token = req.cookies?.get('token')?.value || null
  const tokenIsValid = isTokenValid(token)

  if (pathname === '/') {
    if (tokenIsValid) return NextResponse.redirect(new URL('/account', req.url))
  }

  if (pathname.includes('/account')) {
    if (!tokenIsValid) {
      const response = NextResponse.redirect(new URL('/', req.url))
      response.cookies.delete('token')

      return response
    }
  }

  return NextResponse.next()
}
