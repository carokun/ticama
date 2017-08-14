import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompanyCompetitionApplications from './CompanyCompetitionApplications.js';
import CompanyCompetitionSubmissions from './CompanyCompetitionSubmissions.js';
import CompanyCompetitionSummary from './CompanyCompetitionSummary.js';

class CompanyCompetition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'summary'
    }
  }

  pickView() {
    if (this.state.view === 'summary') {
      return (
        <CompanyCompetitionSummary setView={this.setView.bind(this)}/>
      );
    } else if (this.state.view === 'submissions') {
      return (
        <CompanyCompetitionSubmissions setView={this.setView.bind(this)}/>
      );
    } else {
      return (
        <CompanyCompetitionApplications setView={this.setView.bind(this)}/>
      );
    }
  }

  setView(view) {
    this.setState({
      view
    })
  }

  render() {
    //all of the user variables for the company
    const { username, email, competitions, website, type } = this.props.user;


    return (
      <div>
        {this.pickView()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = () => {
  return {
    
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyCompetition);
