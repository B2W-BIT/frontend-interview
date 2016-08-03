import { TIMELINE_REQUEST, TIMELINE_SUCCESS, TIMELINE_FAILURE } from '../constants/ActionTypes';

const initialState = {
  loading: false,
  error: '',
  tweets: []
};

export default function timeline(state = initialState, action) {
  switch (action.type) {
  case TIMELINE_REQUEST:
    return Object.assign({}, state, { loading: true, error: '' });

  case TIMELINE_SUCCESS:
    return Object.assign({}, state, { loading: false, tweets: action.response.payload });

  case TIMELINE_FAILURE:
    return Object.assign({}, state, { loading: false, error: action.error });

  default:
    return state;
  }
}
