import React from 'react'
import { connect } from 'react-redux'
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'
import { toastr } from 'react-redux-toastr'
import { addColleague, listColleagues } from '../actions'

const mapStateToProps = state => ({
  store: state.addColleagues
})

class AddColleague extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colleague: {
        name: '',
        twitter: '',
        github: ''
      }
    }
  }

  submitForm(e) {
    e.preventDefault()
    const { dispatch } = this.props
    addColleague(dispatch, this.state.colleague)
  }

  componentWillMount() {
    listColleagues(this.props.dispatch)
  }

  componentWillReceiveProps(prev) {
    const { store } = prev
    if (store.hasMessage) {
      toastr[store.messageType](store.messageTitle, store.message)
    }
    if (store.newColleague && !store.isFetching) {
      this.setState({
        colleague: {
          name: '',
          twitter: '',
          github: ''
        }
      })
    }
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitForm(e)}>
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            required
            name="name"
            value={this.state.colleague.name}
            onChange={(e) => this.setState({ colleague: {...this.state.colleague, name: e.target.value}})}
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
            value={this.state.colleague.github}
            onChange={(e) => this.setState({ colleague: {...this.state.colleague, github: e.target.value}})}
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
            value={this.state.colleague.twitter}
            onChange={(e) => this.setState({ colleague: {...this.state.colleague, twitter: e.target.value}})}
            placeholder="Enter your colleague's twitter user"
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button type="submit">Add colleague</Button>
      </form>
    )
  }
}

export default connect(
  mapStateToProps
)(AddColleague)
