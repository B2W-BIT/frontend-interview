const INITIAL_STATE = { user: { info: [], error: null, loading:false } }

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_USER_DATA':
      return { ...state, user: { info: [], error: null, loading: true} }
    case 'FETCH_USER_DATA_SUCCEES':
      return { ...state, user: {
          info: action.payload,
          error: null,
          loading: false }
      }
    default:
      return state
  }
}
 export default user
