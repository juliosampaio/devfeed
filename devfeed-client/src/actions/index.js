import { signUp as signUpService } from '../services'

const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
const SIGN_UP_REQUEST_SUCCESS = 'SIGN_UP_REQUEST_SUCCESS'
const SIGN_UP_REQUEST_ERROR = 'SIGN_UP_REQUEST_ERROR'

export const ACTIONS = {
  SIGN_UP_REQUEST,
  SIGN_UP_REQUEST_SUCCESS,
  SIGN_UP_REQUEST_ERROR
}

export const signUp = (dispatch, userData) => {
  dispatch({ type: SIGN_UP_REQUEST })
  signUpService(userData)
    .then(result => dispatch({ type: SIGN_UP_REQUEST_SUCCESS, payload: result }))
    .catch(error => dispatch({ type: SIGN_UP_REQUEST_ERROR, payload: error.message }))
}
