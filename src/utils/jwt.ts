export type TokenGeneric = {
  exp: number
}

export const parseJWT = (token: string): TokenGeneric | null => {
  try {
    return JSON.parse(atob(token.split('.')[1]))
  } catch (error) {
    return null
  }
}

export const isTokenValid = (token: string | null): boolean => {
  if (!token) return false
  const nowUnix = (+new Date() / 1e3) | 0
  const decodedToken = parseJWT(token)
  if (decodedToken === null) return false
  return decodedToken.exp > nowUnix
}
