import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from 'axios';

class UnapprovedCompetitions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      competitions: []
    }

  }

  componentDidMount() {
    axios.get('/api/competitions')
    .then(response => {
      this.setState({
        competitions: response.data.competitions
        .filter(competition => {
          return !competition.approved
        })
        .map(competition => {
          console.log(JSON.stringify(competition));
          return JSON.stringify(competition);
        })
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.competitions.map((competition) =>
        <div style={{margin: '30px'}}>
          {competition}
        </div>)}
      </div>
    )
  }
}



export default UnapprovedCompetitions;
