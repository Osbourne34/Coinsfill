import { http } from '@/http/http'

export const AccountService = {
  uploadAvatar: (avatar: string) => {
    return http.put<{ ok: boolean }>('/account/image', {
      image: avatar,
    })
  },

  getAvatar: async () => {
    const { data } = await http<{ ok: boolean; image: string }>(
      '/account/image'
    )

    return data
  },
}
