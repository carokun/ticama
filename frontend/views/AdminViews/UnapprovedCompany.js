import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from 'axios';

class UnapprovedCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    }

  }

  componentDidMount() {
    axios.get('/api/companies')
    .then(response => {
      this.setState({
        companies: response.data.companies.filter(company => {
          return !company.approved
        })
        .map(company => {
          console.log(JSON.stringify(company));
          return JSON.stringify(company);
        })
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.companies.map((company) =>
        <div style={{margin: '30px'}}>
          {company}
        </div>)}
      </div>
    )
  }
}



export default UnapprovedCompany;
