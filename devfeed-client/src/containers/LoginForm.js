import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { toastr } from 'react-redux-toastr'
import { login } from '../actions'

const submitForm = (e, dispatch) => {
  e.preventDefault()
  const form = e.target
  const email = form.email.value
  const password = form.password.value
  login(dispatch, { email, password })
}

const mapStateToProps = state => ({
  state: state.login
})

class LoginForm extends React.Component {

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
      {state.isLoggedIn && (
        <Redirect to={{
          pathname: '/home',
          state: state.user
        }} />
      )}
    </form>
  )}
}

export default connect(
  mapStateToProps
)(LoginForm)
