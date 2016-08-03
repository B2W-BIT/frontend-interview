import * as types from '../constants/ActionTypes';
import { CALL_API } from '../middlewares/api';

export function getTimeline() {
  return {
    [CALL_API]: {
      types: [types.TIMELINE_REQUEST, types.TIMELINE_SUCCESS, types.TIMELINE_FAILURE],
      method: 'GET',
      endpoint: `/timeline`
    }
  }
}

export function getProfile() {
  return {
    [CALL_API]: {
      types: [types.PROFILE_REQUEST, types.PROFILE_SUCCESS, types.PROFILE_FAILURE],
      method: 'GET',
      endpoint: `/profile`
    }
  }
}
