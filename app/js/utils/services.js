import * as HTTP from './network'
import { APIRoot} from './constants'

export const getUserInfos = () => HTTP.get(`${APIRoot}/users/show`)
export const getTweets = () => HTTP.get(`${APIRoot}/statuses/tweets`)
export const getSuggestions = () => HTTP.get(`${APIRoot}/users/suggestions`)
export const getTrends = () => HTTP.get(`${APIRoot}/trends/place`)