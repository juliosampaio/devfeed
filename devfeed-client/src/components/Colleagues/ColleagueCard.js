import React from 'react'
import { Col, Row, Glyphicon } from 'react-bootstrap'
import avatarPlaceholder from './avatarPlaceholder.svg'
import './ColleaguesCard.css'

const ColleagueCard = ({ colleague }) => (
  <Row className="colleague-card">
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
        <Col className="tags" md={12}>
          This colleague is talking about: {colleague.tags && colleague.tags.map( tag => (
            <span className="tag">#{tag}</span>
          ))}
        </Col>
      </Row>
    </Col>
  </Row>
)

export default ColleagueCard
