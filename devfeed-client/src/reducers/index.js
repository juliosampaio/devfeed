import { combineReducers } from 'redux'
import {reducer as toastr} from 'react-redux-toastr'
import signup from './signup'
import login from './login'
import addColleagues from './addColleagues'
import listColleagues, { listColleaguesMiddleware } from './listColleagues'

export const middlewares = [
  listColleaguesMiddleware
]

export default combineReducers({
  signup,
  login,
  addColleagues,
  listColleagues,
  toastr
})
