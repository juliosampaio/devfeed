import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { toastr } from 'react-redux-toastr'
import { signUp } from '../actions'

const submitForm = (e, dispatch) => {
  e.preventDefault()
  const form = e.target
  const fullname = form.fullname.value
  const email = form.email.value
  const password = form.password.value
  signUp(dispatch, { fullname, email, password })
}

const mapStateToProps = state => ({
  state: state.signup
})

class SignUpForm extends React.Component {

  componentWillReceiveProps(prev) {
    const { state } = prev
    if (state.hasMessage) {
      toastr[state.messageType](state.messageTitle, state.message)
    }
  }

  render() {
    const { dispatch, children, state } = this.props
    return (
    <form onSubmit={(e) => submitForm(e, dispatch)}>
      {children}
      {state.redirectToLogin && (
        <Redirect to="/login" />
      )}
    </form>
  )}
}

export default connect(
  mapStateToProps
)(SignUpForm)
