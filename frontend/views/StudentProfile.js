import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BasicStudent from '../components/studentProfile/BasicStudent';
import CompetitionExperience from '../components/studentProfile/CompetitionExperience';
import WorkExperience from '../components/studentProfile/WorkExperience';
import Skills from '../components/studentProfile/Skills';

class StudentProfile extends Component {
  constructor(props) {
    super(props);
    this.state ={
      user: ''
    }
  }

  render() {
    //all of the user variables
    const { username, email, fname, lname, university, year, major, competitionExperience,
      workExperience, mainSkills,currentCompetitions } = this.props.user;


    return (
      <div className="container is-fluid">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <BasicStudent/>
            <div className="tile is-parent is-vertical is-6">
              <CompetitionExperience/>
              <WorkExperience/>
            </div>
            <Skills />
          </div>
          {/* <div className="tile is-parent">
            <article className="tile is-child notification is-success">
              <div className="content">
                <p className="title">Tall tile</p>
                <p className="subtitle">With even more content</p>
                <div className="content">
                </div>
              </div>
            </article>
          </div> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth
  }
};

const mapDispatchToProps = () => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile);
