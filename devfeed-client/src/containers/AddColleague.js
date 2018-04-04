import React from 'react'
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { addColleague, listColleagues } from '../actions'

const submitForm = (e, dispatch) => {
  e.preventDefault()
  const form = e.target
  const github = form.github.value
  const twitter = form.twitter.value
  const name = form.name.value
  addColleague(dispatch, { github, twitter, name })
}

const mapStateToProps = state => ({
  state: state.colleagues
})

class AddColleague extends React.Component {

  componentWillMount() {
    listColleagues(this.props.dispatch)
  }

  componentWillReceiveProps(prev) {
    const { state, dispatch } = prev
    if (state.hasMessage) {
      toastr[state.messageType](state.messageTitle, state.message)
    }
    if (state.newColleague && !state.isFetching) {
      listColleagues(dispatch)
    }
  }

  render() {
    const { dispatch, children} = this.props;
    return (
      <form onSubmit={(e) => submitForm(e, dispatch)}>
        {children}
      </form>
    )
  }
}

export default connect(
  mapStateToProps
)(AddColleague)
