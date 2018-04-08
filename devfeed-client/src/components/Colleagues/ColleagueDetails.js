import React from 'react'
import {Col, Row } from 'react-bootstrap'
import ColleagueInfo from '../../containers/ColleagueInfo'
import Cover from './Cover'
import Timeline from './Timeline'

const ColleagueDetails = ({ match }) => (
  <Row>
    <Col md={12}>
      <ColleagueInfo id={match.params.id}>
        <Cover />
        <Timeline />
      </ColleagueInfo>
    </Col>
  </Row>
)

export default ColleagueDetails
