import axios from 'axios'
import { BASE64_KEY } from '../twitter.config'

export const handleError = (res, reason, message, code) => {
  console.log(reason)
  res.status(code || 500).json({'error': message})
}

const request = axios.create({
  baseURL: 'https://api.twitter.com',
  timeout: 10000,
  params: {
    screen_name: 'americanascom',
    include_rts: 1,
    trim_user: 1
  }
})

async function keygen(key) {
  const options = {
    url: 'https://api.twitter.com/oauth2/token',
    method: 'post',
    headers: {
      Authorization: `Basic ${key}`
    },
    data: 'grant_type=client_credentials'
  }

  try {
    const response = await axios(options)
    return Promise.resolve(response)
  } catch (e) {
    return Promise.reject(e)
  }
}

const key = keygen(BASE64_KEY)
key.then(res => {
  request.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`
})

export default request
