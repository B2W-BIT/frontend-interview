import axios from 'axios'
const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api'

export const fetchUserData = (id = '') => {
  if (id.length > 0) {
    console.log('aqui caralho')
  }
  const req = axios({
    method: 'get',
    url: `${ ROOT_URL }/user`
  })
  return {
    type: 'FETCH_USER_DATA',
    payload: req
  }
}

export const fetchUserDataSuccess = (user) => {
  return {
    type: 'FETCH_USER_DATA_SUCCEES',
    payload: user
  }
}
