import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { Loader } from '../components/Loader'
import { fetchColleagueInfo } from '../actions'

class ColleagueInfo extends React.Component {

  componentWillReceiveProps(prev) {
    const { state } = prev
    if (state.hasMessage) {
      toastr[state.messageType](state.messageTitle, state.message)
    }
  }

  componentWillMount() {
    this.props.fetchColleagueInfo()
  }

  componentWillUpdate() {
    console.log(this.props)
  }

  render() {
    const { state, id } = this.props
    return (
      <Fragment>
        {state.isFetching && (<Loader />)}
        {(state && !state.isFetching && state.colleague) && (
          <div>{JSON.stringify(state.colleague)}</div>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  state: state.fetchColleague
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchColleagueInfo: () => fetchColleagueInfo(dispatch, props.id)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColleagueInfo)
