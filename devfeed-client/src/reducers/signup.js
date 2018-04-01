import { ACTIONS } from '../actions'

const {
  SIGN_UP_REQUEST,
  SIGN_UP_REQUEST_SUCCESS,
  SIGN_UP_REQUEST_ERROR
} = ACTIONS

const initialState = {
  isFetching: false,
  redirectToLogin: false,
  hasMessage: false,
  messageTitle: '',
  message: '',
  messageType: '',
}

const buildMessage = (key) => {
  switch(key) {
    case 'USER_EXISTS': return "Sorry, this email address is already taken"
    default: return "An error has occurred. Please try again."
  }
}

const signup = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        isFetching: true
      }
      case SIGN_UP_REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasMessage: true,
        messageTitle: 'Success!',
        messageType: 'success',
        message: 'Please login with your credentials',
        redirectToLogin: true
      }
      case SIGN_UP_REQUEST_ERROR:
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

export default signup
