import * as HTTP from '../utils/network'
const baseUrl = 'http://localhost:3000'
export const getUserInfos = () => HTTP.get(`${baseUrl}/users/show`)