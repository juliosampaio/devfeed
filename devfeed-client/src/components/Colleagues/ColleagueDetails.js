import React from 'react'
import {Col, Row } from 'react-bootstrap'
import ColleagueInfo from '../../containers/ColleagueInfo'

const ColleagueDetails = ({ match }) => (
  <Row>
    <Col md={12}>
      <ColleagueInfo id={match.params.id} />
    </Col>
  </Row>
)

export default ColleagueDetails
