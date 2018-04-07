import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import ColleagueCard from '../components/Colleagues/ColleagueCard'
import { Loader } from '../components/Loader'

const ColleaguesCollection = ({ state }) => (
  <Fragment>
    {state.isFetching && (<Loader />)}
    {(state && !state.isFetching) && state.colleagues.map(colleague => (
      <ColleagueCard key={colleague.id} colleague={colleague} />
    ))}
  </Fragment>
)

const mapStateToProps = state => ({
  state: state.listColleagues
})

export default connect(
  mapStateToProps
)(ColleaguesCollection)
