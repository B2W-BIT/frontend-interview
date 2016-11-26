import * as HTTP from '../utils/network'
import { APIRoot} from '../utils/constants'
export const getUserInfos = () => HTTP.get(`${APIRoot}/users/show`)