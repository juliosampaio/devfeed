import { ACTIONS } from '../actions'

const {
  FETCH_COLLEAGUE_REQUEST,
  FETCH_COLLEAGUE_REQUEST_SUCCESS,
  FETCH_COLLEAGUE_REQUEST_ERROR
} = ACTIONS

const initialState = {
  isFetching: false,
  hasMessage: false,
  messageTitle: '',
  message: '',
  messageType: '',
  colleague: null
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

const handleFetchColleagueSuccess = (state, payload) => {
  return {
  ...state,
  isFetching: false,
  hasMessage: false,
  colleague: payload
}}

const fetchColleague = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_COLLEAGUE_REQUEST:
      return handleRequest(state)
    case FETCH_COLLEAGUE_REQUEST_SUCCESS:
      return handleFetchColleagueSuccess(state, payload)
    case FETCH_COLLEAGUE_REQUEST_ERROR:
      return handleError(state, payload)
    default:
      return state
  }
}

export default fetchColleague
