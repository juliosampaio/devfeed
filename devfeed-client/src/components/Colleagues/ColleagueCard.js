import React from 'react'
import { Col, Row, Glyphicon } from 'react-bootstrap'
import {  } from 'react-router-dom'
import avatarPlaceholder from '../../assets/avatarPlaceholder.svg'
import './ColleaguesCard.css'

const seeColleagueDetails = ({ id }) => {
  window.location.href = `colleagues/${id}`
}

const ColleagueCard = ({ colleague }) => (
  <Row className="colleague-card" onClick={() => seeColleagueDetails(colleague)}>
    <Col className="avatar" md={3}>
      <img className="img-responsive img-circle" alt="" src={colleague.avatar || avatarPlaceholder} />
    </Col>
    <Col className="content" md={9}>
      <Row>
        <Col className="name" md={12}>
          <h3>{colleague.name}</h3>
        </Col>
      </Row>
      <Row>
        <Col className="job" md={12}>
          {colleague.location && (<div>
            <Glyphicon glyph="map-marker"/> <h4>{colleague.location}</h4>
          </div>)}
          {colleague.company && (
          <div>
            <Glyphicon glyph="briefcase"/> <h4>{colleague.company}</h4>
          </div>
          )}
        </Col>
      </Row>
      <Row>
      {(colleague.tags && colleague.tags.length > 0) && (
        <Col className="tags" md={12}>
          This colleague is talking about:<br />
          {colleague.tags.map( tag => (
            <span key={tag} className="tag">#{tag}</span>
          ))} click for more...
        </Col>
      )}
      {(colleague.tags && colleague.tags.length === 0) && (
        <Col className="last-tweet" md={12}>
          {colleague.lastTweet}
        </Col>
      )}
      </Row>
    </Col>
  </Row>
)

export default ColleagueCard
