import { getUserProfile } from './requests'

export const fetchProfileAction = screen_name => ({
  type: 'FETCH_PROFILE',
  payload: getUserProfile(screen_name)
})
