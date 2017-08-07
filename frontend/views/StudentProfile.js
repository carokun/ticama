import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BasicStudent from '../components/studentProfile/BasicStudent';
import CompetitionExperience from '../components/studentProfile/CompetitionExperience';
import WorkExperience from '../components/studentProfile/WorkExperience';
import Skills from '../components/studentProfile/Skills';

import { addExperience, addSkill } from '../actions/StudentActions.js';

class StudentProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }


  }


  render() {
    //all of the user variables
    const { username, email, fname, lname, university, year, major, competitionExperience,
      workExperience, mainSkills, skills, currentCompetitions } = this.props.user;
      console.log(this.props.user);

    return (
      <div className="container is-fluid">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <BasicStudent user={this.props.user}/>
            <div className="tile is-parent is-vertical is-6">
              <CompetitionExperience competitionExperience={competitionExperience} isOwnProfile={username === this.props.username}/>
              <WorkExperience workExperience={workExperience} isOwnProfile={username === this.props.username} addExperience={this.props.addExperience}/>
            </div>
            <Skills skills={skills} mainSkills={mainSkills} addSkill={this.props.addSkill}/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addExperience: (newCompany, newStart, newEnd, newRole, newDescription, newLocation) => dispatch(addExperience(dispatch, newCompany, newStart, newEnd, newRole, newDescription, newLocation)),
    addSkill: (skill) => dispatch(addSkill(dispatch, skill))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile);
