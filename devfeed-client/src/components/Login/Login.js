import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './Login.css'
import banner from './rocket.svg'
import LoginForm from '../../containers/LoginForm'

const Login = () => (
  <Grid>
    <Row>
      <Col className="left" md={6}>
        <div className="banner">
          <img src={banner} alt="A rocket launch representation" />
        </div>
      </Col>
      <Col className="right" md={6}>
        <LoginForm>
          <FormGroup>
            <ControlLabel>E-mail</ControlLabel>
            <FormControl
              type="email"
              required
              name="email"
              placeholder="Your email goes here"
            />
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              required
              name="password"
              placeholder="Enter your password"
            />
            <FormControl.Feedback />
          </FormGroup>
          <Button type="submit">Enter</Button>
        </LoginForm>
        <div className="signup-link">
          No account? No problem, <Link to="/signup">create one</Link>
        </div>
      </Col>
    </Row>
  </Grid>
)

export default Login
