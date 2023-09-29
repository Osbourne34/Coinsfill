import { http } from '@/http/http'

export const AuthService = {
  register: (body: { email: string; password: string }) => {
    return http.post<{ ok: boolean; token: string }>('/user', body)
  },

  login: (body: { email: string; password: string }) => {
    return http.post<{ ok: boolean; token: string }>('/login', body)
  },
}
