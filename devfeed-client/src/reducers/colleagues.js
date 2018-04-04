import { ACTIONS } from '../actions'

const {
  ADD_COLLEAGUE_REQUEST,
  ADD_COLLEAGUE_REQUEST_SUCCESS,
  ADD_COLLEAGUE_REQUEST_ERROR
} = ACTIONS

const initialState = {
  isFetching: false,
  hasMessage: false,
  messageTitle: '',
  message: '',
  messageType: '',
  newColleague: null
}

const buildMessage = (key) => {
  switch(key) {
    case 'UNAUTHORIZED': return "Wrong credentials. Please try again"
    default: return "An error has occurred. Please try again."
  }
}

const handleAddColleagueSuccess = (state, newColleague) => {
  const newState = {
    ...state,
    isFetching: false,
    hasMessage: true,
    messageType: 'success',
    message: 'New colleague added',
    newColleague
  }
  return newState
}

const colleagues = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COLLEAGUE_REQUEST:
        return {
          ...state,
          isFetching: true
        }
      case ADD_COLLEAGUE_REQUEST_SUCCESS:
        return handleAddColleagueSuccess(state, payload)
      case ADD_COLLEAGUE_REQUEST_ERROR:
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

export default colleagues
