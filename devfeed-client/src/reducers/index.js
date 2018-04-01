import { combineReducers } from 'redux'
import {reducer as toastr} from 'react-redux-toastr'
import signup from './signup'
import login from './login'

export default combineReducers({
  signup,
  login,
  toastr
})
