import React, { Fragment } from 'react'
import ColleagueCard from './ColleagueCard'
import {Col, Row, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import './ColleaguesList.css'
const colleagues = [
  {
    name: 'Nathan Nicholson',
    avatar: 'https://uixninja.github.io/pehia/img/person.jpg',
    tags: ["html", "css",  "javascript"],
    location: 'San Jose, CA',
    company: 'Google'
  },
  {
    name: "Claudio Guglieri",
    avatar: "https://uixninja.github.io/pehia/img/person_carousel.jpg",
    tags: ["Java", "SpringBoot",  "RxJava"],
    location: 'Fortaleza, CE',
    company: 'Paypal'
  },
  {
    name: "Claudio Guglieri",
    avatar: "https://uixninja.github.io/pehia/img/person_carousel.jpg",
    tags: ["Java", "SpringBoot",  "RxJava"],
    location: 'Fortaleza, CE',
    company: 'Paypal'
  },
  {
    name: "Claudio Guglieri",
    avatar: "https://uixninja.github.io/pehia/img/person_carousel.jpg",
    tags: ["Java", "SpringBoot",  "RxJava", "GraphQL", "REST"],
    location: 'Fortaleza, CE',
    company: 'Paypal'
  },
  {
    name: "Claudio Guglieri",
    avatar: "https://uixninja.github.io/pehia/img/person_carousel.jpg",
    tags: ["Java", "SpringBoot",  "RxJava", "GraphQL", "REST"],
    location: 'Fortaleza, CE',
    company: 'Paypal'
  },
  {
    name: "Claudio Guglieri",
    avatar: "https://uixninja.github.io/pehia/img/person_carousel.jpg",
    tags: ["Java", "SpringBoot",  "RxJava", "GraphQL", "REST"],
    location: 'Fortaleza, CE',
    company: 'Paypal'
  },
  {
    name: "Claudio Guglieri",
    avatar: "https://uixninja.github.io/pehia/img/person_carousel.jpg",
    tags: ["Java", "SpringBoot",  "RxJava", "GraphQL", "REST"],
    location: 'Fortaleza, CE',
    company: 'Paypal'
  }
]

const ColleaguesList = () => (
  <Fragment>
    <Row>
      <Col md={6}>
        <h1>Colleagues</h1>
        <form clasName="add-new-form">
          <FormGroup>
            <ControlLabel>Github</ControlLabel>
            <FormControl
              type="text"
              required
              name="github"
              placeholder="Enter your colleague's github user"
            />
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Twitter</ControlLabel>
            <FormControl
              type="text"
              required
              name="twitter"
              placeholder="Enter your colleague's twitter user"
            />
            <FormControl.Feedback />
          </FormGroup>
          <Button type="submit">Add colleague</Button>
        </form>
      </Col>
      <Col md={6} className="colleagues-list">
      {colleagues.map(colleague => (
        <ColleagueCard colleague={colleague} />
      ))}
      </Col>
    </Row>
  </Fragment>
)

export default ColleaguesList
