import React, { Fragment } from 'react'
import moment from 'moment'
import './Timeline.css'
import {Col, Row, Glyphicon } from 'react-bootstrap'
import twitterLogo from '../../assets/twitter.svg'
import githubLogo from '../../assets/github.svg'

const formatDate = (date, format = 'hh:mm A - DD MMM YYYY') => moment(date).format(format)

const StarredEvent = ({ event }) => (
  <Fragment>
    <Glyphicon glyph="star" /> Starred the repository <a href={`https://github.com/${event.repo.name}`} target="_blank">{event.repo.name}</a>
  </Fragment>
)

const CommentEvent = ({ event }) => (
  <Fragment>
    <Glyphicon glyph="comment" /> Commented a <a href={event.payload.comment.html_url} target="_blank" >issue</a>
    <blockquote cite={event.payload.comment.html_url} >{event.payload.comment.body}</blockquote>
  </Fragment>
)

const PushEvent = ({ event }) => (
  <Fragment>
    <Glyphicon glyph="upload" /> Pushed {event.payload.commits.length} {event.payload.commits.length > 1 ? 'commits': 'commit'} to <a href={`https://github.com/${event.repo.name}`} target="_blank">{event.repo.name}</a>
  </Fragment>
)

const CreateEvent = ({ event }) => (
  <Fragment>
    <Glyphicon glyph="plus" /> Created a {event.payload.ref_type} at <a href={`https://github.com/${event.repo.name}`} target="_blank">{event.repo.name}</a>
  </Fragment>
)

const IssuesEvent = ({ event }) => (
  <Fragment>
    <Glyphicon glyph="tasks" /> {event.payload.action} a <a href={event.payload.issue.html_url} target="_blank" >issue</a>
  </Fragment>
)

const PullRequestEvent = ({ event }) => (
  <Fragment>
    <Glyphicon glyph="random" /> {event.payload.action} a PR at <a href={`https://github.com/${event.repo.name}`} target="_blank">{event.repo.name}</a>
  </Fragment>
)

const renderGithubEvent = (event) => {
  switch(event.type) {
    case 'WatchEvent': return (<StarredEvent event={event} />)
    case 'IssueCommentEvent': return (<CommentEvent event={event} />)
    case 'PushEvent': return (<PushEvent event={event} />)
    case 'CreateEvent': return (<CreateEvent event={event} />)
    case 'IssuesEvent': return (<IssuesEvent event={event} />)
    case 'PullRequestEvent': return (<PullRequestEvent event={event} />)
    default: return `${event.payload.action} ${event.type}`
  }
}

const Timeline = ({ colleague }) => (
  <Row className="timeline">
    <Col md={12}>
      <div className="header">
        <div className="logo-wrapper">
          <img className="img-responsive img-circle" alt="" src={githubLogo} />
        </div>
        <div className="logo-wrapper">
          <img className="img-responsive img-circle" alt="" src={twitterLogo} />
        </div>
      </div>
      <div className="content">
        <div className="github-events">
          {colleague.timeline.github && colleague.timeline.github.map((event) => (
            <div key={event.id} className="event-wrapper github">
              <div className="event">
                <div className="date">
                  <h5>{formatDate(event.created_at)}</h5>
                </div>
                <div className="body">
                    {renderGithubEvent(event)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="twitter-events">
          {colleague.timeline.twitter.map((event) => (
            <div key={event.id} className="event-wrapper twitter">
              <div className="event">
                <div className="date">
                  <h5>{formatDate(event.created_at)}</h5>
                </div>
                <div className="body">
                  {event.full_text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Col>
  </Row>
)

export default Timeline
