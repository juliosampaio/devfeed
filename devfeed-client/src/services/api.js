const api = (method, url, data) => {
  return fetch(url, {
    method: method,
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(resp => {
    if (resp.status === 401) {
      localStorage.removeItem('access_token')
      return Promise.reject({ message: 'UNAUTHORIZED' } )
    }
    if (resp.status !== 200) {
      return resp.json().then(({ error }) => {
        throw new Error(error)
      })
    }
    return resp.json()
  })
}

export default api
