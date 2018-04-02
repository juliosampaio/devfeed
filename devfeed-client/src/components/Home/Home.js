import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Grid, Row, Col, Glyphicon} from 'react-bootstrap';
import { ColleaguesList } from '../Colleagues'
import './Home.css'

const Home = ({ location }) => {
  const user = location.state
  return (
    <Grid className="home">
      <Row>
        <Col className="left" md={2}>
          <Row>
            <Col md={12}>
              <div className="profile">
                <img
                  className="img-responsive img-circle"
                  src={`https://www.gravatar.com/avatar/${user.emailHash}`}
                />
                <span>{user.fullname}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <ul className="menu">
                <li className="active">
                  <Link to="/home/colleagues"><Glyphicon glyph="thumbs-up" /> Colleagues</Link>
                </li>
                <li><Link to="/home/settings"><Glyphicon glyph="cog" /> Settings</Link></li>
                <li><Link to="/login"><Glyphicon glyph="log-out" /> Logout</Link></li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className="right" md={10}>
          <Route exact path="/home" component={ColleaguesList} />
        </Col>
      </Row>
    </Grid>)
}

export default Home
