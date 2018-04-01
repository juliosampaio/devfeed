import { ACTIONS } from '../actions'

const {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR
} = ACTIONS

const initialState = {
  isFetching: false,
  isLoggedIn: false,
  hasMessage: false,
  messageTitle: '',
  message: '',
  messageType: '',
}

const buildMessage = (key) => {
  switch(key) {
    case 'UNAUTHORIZED': return "Wrong credentials. Please try again"
    default: return "An error has occurred. Please try again."
  }
}

const handleLoginSuccess = (state, payload) => {
  localStorage.setItem('access_token', payload)
  const newState = {
    ...state,
    isFetching: false,
    hasMessage: false,
    isLoggedIn: true
  }
  return newState
}

const login = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
        return {
          ...state,
          isFetching: true
        }
      case LOGIN_REQUEST_SUCCESS:
        return handleLoginSuccess(state, payload)
      case LOGIN_REQUEST_ERROR:
        return {
          ...state,
          isFetching: false,
          hasMessage: true,
          messageTitle: 'Ooops',
          messageType: 'error',
          message: buildMessage(payload)
        }
    default:
      return state
  }
}

export default login
