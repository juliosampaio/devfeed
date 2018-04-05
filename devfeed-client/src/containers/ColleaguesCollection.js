import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import ColleagueCard from '../components/Colleagues/ColleagueCard'

const ColleaguesCollection = ({ state }) => (
  <Fragment>
    {state && state.colleagues.map(colleague => (
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
