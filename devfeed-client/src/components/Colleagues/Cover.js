import React from 'react'
import {Col, Row } from 'react-bootstrap'
import './Cover.css'
import avatarPlaceholder from '../../assets/avatarPlaceholder.svg'
import cover from '../../assets/cover.jpg'

const Cover = ({ colleague }) => (
  <Row>
    <Col md={12}>
      <div className="cover" >
        <img className="img-responsive" alt="" src={colleague.cover || cover} />
        <img className="img-responsive img-circle avatar" alt="" src={colleague.avatar || avatarPlaceholder} />
      </div>
      <div className="social">
        <h1>{colleague.name}</h1>
      </div>
      <div className="followers">
        <h4>Followers: <span>{colleague.followers || 0}</span></h4>
        <h4>Following: <span>{colleague.following || 0}</span></h4>
      </div>
    </Col>
  </Row>
)

export default Cover
