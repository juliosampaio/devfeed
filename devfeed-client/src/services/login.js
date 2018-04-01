import api from './api'

const login_url = 'http://localhost:3000/login'

const login = data => api('POST', login_url, data)

export default login
