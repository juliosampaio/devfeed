import api from './api'

const signup_url = 'http://localhost:3000/signup'

const signup = data => api('POST', signup_url, data)

export default signup
