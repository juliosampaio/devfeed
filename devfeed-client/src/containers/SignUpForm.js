import React from 'react'
import { connect } from 'react-redux'
import { signUp } from '../actions'

const submitForm = (e: Event, dispatch) => {
  e.preventDefault()
  const form = e.target
  const fullname = form.fullname.value
  const email = form.email.value
  const password = form.password.value
  signUp(dispatch, { fullname, email, password })
}

const SignUpForm = ({ dispatch, children }) => (
  <form onSubmit={(e) => submitForm(e, dispatch)}>
    {children}
  </form>
)

export default connect()(SignUpForm)
