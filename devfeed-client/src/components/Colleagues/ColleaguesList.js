import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import ColleagueCard from './ColleagueCard'
import {Col, Row, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import AddColleagueForm from '../../containers/AddColleague'
import './ColleaguesList.css'

const ColleaguesList = ({ state }) => (
  <Fragment>
    <Row>
      <Col md={6}>
        <h1>Colleagues</h1>
        <AddColleagueForm clasName="add-new-form">
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              required
              name="name"
              placeholder="Enter your colleague's name"
            />
            <FormControl.Feedback />
          </FormGroup>
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
        </AddColleagueForm>
      </Col>
      <Col md={6} className="colleagues-list">
      {state && state.colleagues.map(colleague => (
        <ColleagueCard key={colleague.id} colleague={colleague} />
      ))}
      </Col>
    </Row>
  </Fragment>
)

const mapStateToProps = state => ({
  state: state.colleagues
})

export default connect(
  mapStateToProps
)(ColleaguesList)
