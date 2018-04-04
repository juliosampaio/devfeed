import { combineReducers } from 'redux'
import {reducer as toastr} from 'react-redux-toastr'
import signup from './signup'
import login from './login'
import colleagues from './colleagues'

export default combineReducers({
  signup,
  login,
  colleagues,
  toastr
})
