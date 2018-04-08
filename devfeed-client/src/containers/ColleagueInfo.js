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

  addColleagueProp(colleague) {
    const { children } = this.props
    const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { colleague }));
    return childrenWithProps
  }

  render() {
    const { state } = this.props
    return (
      <Fragment>
        {state.isFetching && (<Loader />)}
        {(state && !state.isFetching && state.colleague) && (<Fragment>{this.addColleagueProp(state.colleague)}</Fragment>)}
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
