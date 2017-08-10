import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from 'axios';

class UnapprovedClub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: []
    }

  }

  componentDidMount() {
    axios.get('/api/clubs')
    .then(response => {
      this.setState({
        clubs: response.data.clubs.filter(club => {
          return !club.approved
        })
        .map(club => {
          console.log(JSON.stringify(club));
          return JSON.stringify(club);
        })
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.clubs.map((club) =>
        <div style={{margin: '30px'}}>
          {club}
        </div>)}
      </div>
    )
  }
}



export default UnapprovedClub;
