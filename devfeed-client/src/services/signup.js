import api from './api'
const signup_url = 'http://localhost:3000/signup'

const formatData = (payload) => {
  var data = new FormData();
  data.append( "json", JSON.stringify( payload ) );
}

const signup = data => api('POST', signup_url, data)

export default signup
