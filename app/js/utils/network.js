const METHOD_POST = 'POST'
const METHOD_DELETE = 'DELETE'
const METHOD_PUT = 'PUT'
const METHOD_PATCH = 'PATCH'

const fetchWithErrors = async (url, options) => {
  const response = await fetch(url, options)
  if (response.status >= 400) {
    throw response.json()
  }
  return response
}

const interceptAuthHeaders = async options => {
  return options
}

export const fetchJSON = async (url, options = {}) => {
  await interceptAuthHeaders(options)
  const response = await fetchWithErrors(url, {
      ...options,
      headers: new Headers({
      ...options.headers,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  })
  if (response.status === 204) {
    return response.statusText
  }
  return await response.json()
}
export const get = (url, options) => fetchJSON(url, options)
export const post = async (url, body, options = {}) => await fetchJSON(url, {
  ...options,
  method: METHOD_POST,
  body: JSON.stringify(body),
})
export const put = async (url, body, options = {}) => await fetchJSON(url, {
  ...options,
  method: METHOD_PUT,
  body: JSON.stringify(body),
})
export const patch = async (url, body, options = {}) => await fetchJSON(url, {
  ...options,
  method: METHOD_PATCH,
  body: JSON.stringify(body),
})
export const remove = async (url, body, options = {}) => await fetchJSON(url, {
  ...options,
  method: METHOD_DELETE,
  body: JSON.stringify(body),
})
