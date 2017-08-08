import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BasicStudent from '../../components/studentProfile/BasicStudent';
import CompetitionExperience from '../../components/studentProfile/CompetitionExperience';
import WorkExperience from '../../components/studentProfile/WorkExperience';
import Skills from '../../components/studentProfile/Skills';
import BasicStudentEdit from '../../components/studentProfile/BasicStudentEdit';

import { addExperience, addSkill } from '../../actions/StudentActions.js';

class StudentProfileEditable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
    this.save = this.save.bind(this);
  }
  save(state) {
    console.log('SAVE THESE', {
      fname: state.fname,
      about: state.about,
      university: state.univeristy,
      major: state.major,
      year: state.year,
      fname: state.fname,
      lname: state.lname,
      linkedin: state.linkedin,
      portfolio: state.portfolio
    })
  }

  render() {
    const { username, email, fname, lname, university, year, major, competitionExperience,
      workExperience, mainSkills, skills, currentCompetitions } = this.props.user;

    return (
      <div className="container is-fluid">
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <BasicStudentEdit user={this.props.user} endEdit={this.props.endEdit}/>
            <div className="tile is-parent is-vertical is-6">
              <button onClick={this.props.endEdit}>Save</button>
              <CompetitionExperience competitionExperience={competitionExperience} isOwnProfile={username === this.props.username}/>
              <WorkExperienceEdit experiences={workExperience} addExperience={this.props.addExperience} edit={true}/>
            </div>
            <Skills skills={skills} mainSkills={mainSkills} addSkill={this.props.addSkill} edit={true}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfileEditable);
