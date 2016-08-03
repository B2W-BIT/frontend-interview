import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILURE } from '../constants/ActionTypes';

const initialState = {
  loading: false,
  error: '',
  data: []
};

export default function profile(state = initialState, action) {
  switch (action.type) {
  case PROFILE_REQUEST:
    return Object.assign({}, state, { loading: true, error: '' });

  case PROFILE_SUCCESS:
    return Object.assign({}, state, { loading: false, data: action.response.payload });

  case PROFILE_FAILURE:
    return Object.assign({}, state, { loading: false, error: action.error });

  default:
    return state;
  }
}
