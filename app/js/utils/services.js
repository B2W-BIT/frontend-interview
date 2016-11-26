import * as HTTP from './network'
import { APIRoot} from './constants'
export const getUserInfos = () => HTTP.get(`${APIRoot}/users/show`)