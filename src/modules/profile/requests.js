import { Config } from '../../config'
import Axios from 'axios'

const { apiUrl } = Config.url

export const getUserProfile = (screen_name) => {
    return Axios
        .get(`${apiUrl}/twitter/user/${screen_name}`)
        .then(resp => {
            console.log(resp)
            return resp.data
        })
}
