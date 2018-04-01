import {
  signUp as signUpService,
  login as loginService
} from '../services'

const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
const SIGN_UP_REQUEST_SUCCESS = 'SIGN_UP_REQUEST_SUCCESS'
const SIGN_UP_REQUEST_ERROR = 'SIGN_UP_REQUEST_ERROR'

const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS'
const LOGIN_REQUEST_ERROR = 'LOGIN_REQUEST_ERROR'

export const ACTIONS = {
  SIGN_UP_REQUEST,
  SIGN_UP_REQUEST_SUCCESS,
  SIGN_UP_REQUEST_ERROR,
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR
}

export const signUp = (dispatch, userData) => {
  dispatch({ type: SIGN_UP_REQUEST })
  signUpService(userData)
    .then(result => dispatch({ type: SIGN_UP_REQUEST_SUCCESS, payload: result }))
    .catch(error => dispatch({ type: SIGN_UP_REQUEST_ERROR, payload: error.message }))
}

export const login = (dispatch, userData) => {
  dispatch({ type: LOGIN_REQUEST })
  loginService(userData)
    .then(result => dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: result }))
    .catch(error => dispatch({ type: LOGIN_REQUEST_ERROR, payload: error.message }))
}
