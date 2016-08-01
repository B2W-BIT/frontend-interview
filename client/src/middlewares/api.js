import axios from 'axios';

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let {
    endpoint,
    method,
    data,
    params,
    headers,
    payload
  } = callAPI;

  const { types } = callAPI;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType }));

  return callApi(endpoint, method, data, payload).then(
    response => next(actionWith({
      type: successType,
      response
    })),
    error => next(actionWith({
      type: failureType,
      error: error.statusText || 'Something bad happened'
    }))
  );
};

function callApi(endpoint, method, data, payload) {
  const requestOptions = {
    url: endpoint,
    method,
    data
  }

  return axios(requestOptions)
    .then(response => {
      if(response.status < 200 || response.status >= 300) {
        return Promise.reject(response);
      }

      if(typeof response.data !== 'object' && payload) {
        return {
          message: response.data,
          payload
        };
      }

      return {
        message: response.statusText,
        payload: response.data
      }
    });
}
