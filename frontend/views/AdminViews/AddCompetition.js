import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from 'axios';

class AddCompetition extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  submit() {
    const {title, startDate,endDate, company, club, description, location, caseFile, applicationQuestions} = this.refs;
    console.log('submitting');
    axios.post('/api/add/competition', {
      title : title.value,
      startDate : startDate.value,
      endDate : endDate.value,
      company : company.value,
      club : club.value,
      description : description.value,
      location : location.value,
      caseFile : caseFile.value,
      applicationQuestions : applicationQuestions.value
    })
    .then(response => {
      console.log(response.data.competition);
    })
  }

  render() {
    return (
      <div style={{margin: '30px', width: '300px'}}>
        <span>Title</span>
        <input type='text' ref='title' label=''/>
        <span>Start Date</span>
        <input type='date' ref='startDate' />
        <span>End Date</span>
        <input type='date' ref='endDate' />
        <span>Company</span>
        <input type='text' ref='company' />
        <span>Club</span>
        <input type='text' ref='club' />
        <span>Description</span>
        <input type='text' ref='description' />
        <span>Location</span>
        <input type='text' ref='location' />
        <span>CaseFile</span>
        <input type='text' ref='caseFile' />
        <span>Application Questions</span>
        <input type='text' ref='applicationQuestions' />
        <button onClick={() => this.submit()}>Submit</button>
      </div>
    )
  }
}



export default AddCompetition;
