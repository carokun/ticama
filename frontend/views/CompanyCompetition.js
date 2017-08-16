import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompanyCompetitionApplications from './CompanyCompetitionApplications.js';
import CompanyCompetitionSubmissions from './CompanyCompetitionSubmissions.js';
import CompanyCompetitionSummary from './CompanyCompetitionSummary.js';
import {updateViewed} from '../actions/ViewedActions.js'

import axios from 'axios';

class CompanyCompetition extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'summary',
      competition: ''
    }
  }

  componentDidMount() {
    const path = this.props.history.location.pathname
    const id = path.slice(13);
    axios.get('/api/competition/' + id)
    .then(response => {
      this.setState({
        competition: response.data.competition
      })
      this.props.updateViewed(response.data.competition)
    })
  }

  pickView() {
    if (!this.state.competition) {
      return <div></div>
    } else if (this.state.view === 'summary') {
      return (
        <CompanyCompetitionSummary setView={this.setView.bind(this)}/>
      );
    } else if (this.state.view === 'submissions') {
      return (
        <CompanyCompetitionSubmissions setView={this.setView.bind(this)}/>
      );
    } else {
      return (
        <CompanyCompetitionApplications setView={this.setView.bind(this)} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateViewed: (competition) => dispatch(updateViewed(dispatch, competition))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyCompetition);
