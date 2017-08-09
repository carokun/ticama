import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BasicStudent from '../../components/studentProfile/BasicStudent';
import CompetitionExperience from '../../components/studentProfile/CompetitionExperience';
import WorkExperience from '../../components/studentProfile/WorkExperience';
import Skills from '../../components/studentProfile/Skills';
import BasicStudentEdit from '../../components/studentProfile/BasicStudentEdit';
import axios from 'axios';

import { addExperience, addSkill, addMainSkill, updateBasicInfo } from '../../actions/StudentActions.js';

class StudentProfileEditable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      user: null
    }
  }


  componentDidMount() {
    axios.get('/api/user/' + this.props.id)
    .then(response => {
      this.setState({
        user: response.data.user
      })
    })
  }

  render() {
    if (this.state.user) {
      console.log('userrrrrr', this.state.user);
      const { username, email, fname, lname, university, year, major, competitionExperience,
        workExperience, mainSkills, skills, currentCompetitions } = this.state.user;
      return (
        <div className="container is-fluid">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <BasicStudentEdit user={this.state.user} updateBasicInfo={this.props.updateBasicInfo}/>
              <div className="tile is-parent is-vertical is-6">
                <button onClick={this.props.endEdit}>Done</button>
                <CompetitionExperience competitionExperience={competitionExperience}/>
                <WorkExperience experiences={workExperience} addExperience={this.props.addExperience} edit={true}/>
              </div>
              <Skills skills={skills} mainSkills={mainSkills} addSkill={this.props.addSkill} addMainSkill={this.props.addMainSkill} edit={true}/>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }

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
    addSkill: (skill) => dispatch(addSkill(dispatch, skill)),
    addMainSkill: (skill, description) => dispatch(addMainSkill(dispatch, skill, description)),
    updateBasicInfo: (fname, lname, about, university, major, year, interests, linkedin, website, resume) => dispatch(updateBasicInfo(dispatch, fname, lname, about, university, major, year, interests, linkedin, website, resume))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfileEditable);
