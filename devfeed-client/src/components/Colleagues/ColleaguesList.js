import React, { Fragment } from 'react'
import {Col, Row } from 'react-bootstrap'
import AddColleagueForm from '../../containers/AddColleague'
import ColleaguesCollection from '../../containers/ColleaguesCollection'
import './ColleaguesList.css'

const ColleaguesList = () => (
  <Fragment>
    <Row>
      <Col md={6}>
        <h1>Colleagues</h1>
        <AddColleagueForm clasName="add-new-form" />
      </Col>
      <Col md={6} className="colleagues-list">
        <ColleaguesCollection />
      </Col>
    </Row>
  </Fragment>
)

export default ColleaguesList
