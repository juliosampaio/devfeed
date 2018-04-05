import { getToken, removeToken, getUserFromToken } from '../utils'

const api = (method, url, data, urlParams = { userId : getUserFromToken().id }) => {

  url = Object
    .keys(urlParams)
    .reduce((originalURL, param) => originalURL.replace(`{${param}}`, urlParams[param]), url)

  return fetch(url, {
    method: method,
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    },
    body: JSON.stringify(data)
  }).then(resp => {
    if (resp.status === 401) {
      removeToken()
      window.location.href = '/login'
      return Promise.reject({ message: 'UNAUTHORIZED' } )
    }
    if (resp.status < 200 || resp.status > 299) {
      return resp.json().then(({ error }) => {
        throw new Error(error)
      })
    }
    return resp.json()
  })
}

export default api
