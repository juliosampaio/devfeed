import { combineReducers } from 'redux'
import {reducer as toastr} from 'react-redux-toastr'
import signup from './signup'

export default combineReducers({
  signup,
  toastr
})
