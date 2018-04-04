import {
  signUp as signUpService,
  login as loginService,
  addColleague as addColleagueService,
  listColleagues as listColleaguesService
} from '../services'

const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
const SIGN_UP_REQUEST_SUCCESS = 'SIGN_UP_REQUEST_SUCCESS'
const SIGN_UP_REQUEST_ERROR = 'SIGN_UP_REQUEST_ERROR'

const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS'
const LOGIN_REQUEST_ERROR = 'LOGIN_REQUEST_ERROR'

const ADD_COLLEAGUE_REQUEST = 'ADD_COLLEAGUE_REQUEST'
const ADD_COLLEAGUE_REQUEST_SUCCESS = 'ADD_COLLEAGUE_REQUEST_SUCCESS'
const ADD_COLLEAGUE_REQUEST_ERROR = 'ADD_COLLEAGUE_REQUEST_ERROR'

const LIST_COLLEAGUES_REQUEST = 'LIST_COLLEAGUES_REQUEST'
const LIST_COLLEAGUES_REQUEST_SUCCESS = 'LIST_COLLEAGUES_REQUEST_SUCCESS'
const LIST_COLLEAGUES_REQUEST_ERROR = 'LIST_COLLEAGUES_REQUEST_ERROR'

export const ACTIONS = {
  SIGN_UP_REQUEST,
  SIGN_UP_REQUEST_SUCCESS,
  SIGN_UP_REQUEST_ERROR,
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,
  ADD_COLLEAGUE_REQUEST,
  ADD_COLLEAGUE_REQUEST_SUCCESS,
  ADD_COLLEAGUE_REQUEST_ERROR,
  LIST_COLLEAGUES_REQUEST,
  LIST_COLLEAGUES_REQUEST_SUCCESS,
  LIST_COLLEAGUES_REQUEST_ERROR
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

export const addColleague = (dispatch, colleagueData) => {
  dispatch({ type: ADD_COLLEAGUE_REQUEST })
  addColleagueService(colleagueData)
    .then(result => dispatch({ type: ADD_COLLEAGUE_REQUEST_SUCCESS, payload: result }))
    .catch(error => dispatch({ type: ADD_COLLEAGUE_REQUEST_ERROR, payload: error.message }))
}

export const listColleagues = (dispatch) => {
  dispatch({ type: LIST_COLLEAGUES_REQUEST })
  listColleaguesService()
    .then(result => dispatch({ type: LIST_COLLEAGUES_REQUEST_SUCCESS, payload: result }))
    .catch(error => dispatch({ type: LIST_COLLEAGUES_REQUEST_ERROR, payload: error.message }))
}
