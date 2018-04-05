import { ACTIONS, listColleagues as listColleaguesAction } from '../actions'

const {
  LIST_COLLEAGUES_REQUEST,
  LIST_COLLEAGUES_REQUEST_SUCCESS,
  LIST_COLLEAGUES_REQUEST_ERROR,
  ADD_COLLEAGUE_REQUEST_SUCCESS
} = ACTIONS

const initialState = {
  isFetching: false,
  hasMessage: false,
  messageTitle: '',
  message: '',
  messageType: '',
  colleagues: []
}

const buildMessage = (key) => {
  switch(key) {
    case 'UNAUTHORIZED': return "Wrong credentials. Please try again"
    default: return "An error has occurred. Please try again."
  }
}

const handleError = (state, payload) => ({
  ...state,
  isFetching: false,
  hasMessage: true,
  messageTitle: 'Ooops',
  messageType: 'error',
  message: buildMessage(payload)
})

const handleRequest = state => ({
  ...state,
  isFetching: true
})

const handleListColleagueSuccess = (state, payload) => {
  return {
  ...state,
  isFetching: false,
  hasMessage: false,
  colleagues: payload
}}

const listColleagues = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_COLLEAGUES_REQUEST:
      return handleRequest(state)
    case LIST_COLLEAGUES_REQUEST_SUCCESS:
      return handleListColleagueSuccess(state, payload)
    case LIST_COLLEAGUES_REQUEST_ERROR:
      return handleError(state, payload)
    default:
      return state
  }
}

export const listColleaguesMiddleware = store => next => action => {
  let result = next(action)
  if (action.type === ADD_COLLEAGUE_REQUEST_SUCCESS) {
    listColleaguesAction(store.dispatch)
  }
  return result
}

export default listColleagues
