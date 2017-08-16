import axios from 'axios';
import React, { Component } from 'react';

class RegisterModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{fname: 'Tiffany', username: 'tiff', lname: 'Chang'}, {fname: 'Caroline', lname: 'Okun', username: 'carokun'}],
      teammates: []

    }
    this.registerUser = this.registerUser.bind(this);
    this.addTeammate = this.addTeammate.bind(this);
  }

  componentDidMount() {
    console.log('Get all of the users in database on componentDidMount & set state with users');
    axios.get('/api/students')
    .then(response => {
      this.setState({
        users: response.data.students
      })
    })
    .catch(err => {
      console.log(err);
    })

  }

  registerUser() {
    console.log('Grab array of teammates with their usernames and send to backend');
    axios.post('/api/apply', {
      teammates: this.state.teammates,
      responses: [{
        question: "question here",
        response: this.refs.response.value
      }],
      competition: this.props.comp._id
    })
    .then(response => {
      console.log(response.data);
    })
    this.props.endRegister()
  }

  addTeammate() {
    console.log('add teammate', this.refs.teammates.value);
    const newTeammate = this.refs.teammates.value;
    const currArr = this.state.teammates;
    currArr.push(newTeammate)
    this.setState({teammates: currArr});
    this.refs.teammates.value = ''
  }
  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Register</p>
            <button className="delete" onClick={() => this.props.endRegister()}></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Teammates</label>
              <p>Start typing a teammate's name and see them appear below 👇</p>
              <p><strong>Your teammates: </strong>{this.state.teammates.map((t) => (t + ', '))}</p>
              <div className="control">
                  <input list="teammates" name="teammates" ref="teammates"/>
                  <datalist id="teammates">
                    {
                      this.state.users.map((person) => (
                        <option value={person.username}>{person.fname + ' ' + person.lname}</option>
                      ))
                    }
                  </datalist>
                  <button className="button is-info" onClick={() => this.addTeammate()}>Add Teammate</button>
              </div>
            </div>

            <div className="field">
              <label className="label">Question 1</label>
              <p>Insert company question here.</p>
              <div className="control">
                <input className="input" type="text" ref='response'/>
              </div>
            </div>

          </section>
          <footer className="modal-card-foot">
            <button onClick={() => this.registerUser()} className="button is-danger">
              <span className="icon">
                <i className="fa fa-thumb-tack"></i>
              </span>
              <span>Register</span>
            </button>
            <button onClick={() => this.props.endRegister()} className="button">Cancel</button>
          </footer>
        </div>
      </div>
    )
  }
}

export default RegisterModal;
