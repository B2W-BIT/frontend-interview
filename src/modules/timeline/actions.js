import { fetchTweetsRequests } from './requests'

export const fetchTimelineAction = (fetchType, screen_name, cursor) => ({
  type: 'FETCH_TIMELINE',
  fetchType,
  payload: fetchTweetsRequests[fetchType](screen_name, cursor)
})
