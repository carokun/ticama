import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TeamApplication from '../components/companyCompetitionApplications/TeamApplication.js';
import Teams from '../components/companyCompetitionApplications/Teams.js';


class CompanyCompetitionApplications extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //all of the user variables for the company
    const { username, email, competitions, website, type } = this.props.user;


    return (
      <div className="container is-fluid">
        <div className="top-spacer"></div>
        <div className="tabs">
          <ul>
            <li><a onClick={() => this.props.setView('summary')}>Summary</a></li>
            <li><a onClick={() => this.props.setView('submissions')}>Submissions</a></li>
            <li className="is-active"><a>Applications</a></li>
          </ul>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4 is-vertical">
            <article className="tile is-child notification">
              <p className="title is-2"><strong>Google Code Jam</strong></p>
              <p>05/14/2017 – 05/16/2017</p>
              <p>123 5th Street <br/> New York, NY 19102</p>
            </article>

            <TeamApplication />
          </div>
          <div className="tile is-parent is-8">
            <Teams />
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyCompetitionApplications);
