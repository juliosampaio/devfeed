export const parseJwt = (token) => {
  if (!token) return {}
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

export const setToken = token => localStorage.setItem('access_token', token)

export const getToken = () => localStorage.getItem('access_token')

export const removeToken = () => localStorage.removeItem('access_token')

export const getUserFromToken = () => parseJwt(getToken())
