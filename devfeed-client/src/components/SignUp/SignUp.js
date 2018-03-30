import React from 'react'
import { Button, Grid, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './SignUp.css'
import SignUpForm from '../../containers/SignUpForm'
import banner from './social-network.svg'

const SignUp = () => (
  <Grid>
    <Row>
      <Col className="left" md={6}>
        <div className="banner">
          <img src={banner} alt="Social network representation" />
        </div>
      </Col>
      <Col className="right" md={6}>
        <SignUpForm>
          <FormGroup>
            <ControlLabel>Full Name</ControlLabel>
            <FormControl
              type="text"
              required
              name="fullname"
              placeholder="Enter your full name"
            />
            <FormControl.Feedback />
          </FormGroup>
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
          <FormGroup>
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
              type="password"
              required
              name="password-confirm"
              placeholder="Confirm the choosen password"
            />
            <FormControl.Feedback />
          </FormGroup>
          <Button type="submit">Sign Up</Button>
        </SignUpForm>
      </Col>
    </Row>
  </Grid>
)

export default SignUp
