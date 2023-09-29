import axios from 'axios'
import Cookies from 'js-cookie'

export const http = axios.create({
  baseURL: 'https://test-task.test211.workers.dev',
})

http.interceptors.request.use((config) => {
  config.headers['token-tt'] = Cookies.get('token')

  return config
})

http.interceptors.response.use(
  (data) => {
    if (!data.data.ok) {
      return Promise.reject(Object.values(data.data.errors)[0])
    }
    return data
  },
  (error) => {
    return Promise.reject(error.message)
  }
)
