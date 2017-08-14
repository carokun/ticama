import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BasicStudent from '../../components/studentProfile/BasicStudent';
import CompetitionExperience from '../../components/studentProfile/CompetitionExperience';
import WorkExperience from '../../components/studentProfile/WorkExperience';
import Skills from '../../components/studentProfile/Skills';
import BasicStudentEdit from '../../components/studentProfile/BasicStudentEdit';
import axios from 'axios';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { addExperience, addSkill, addMainSkill, updateBasicInfo, deleteSkill } from '../../actions/StudentActions.js';

class StudentProfileEditable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
  }
  componentWillMount() {
    var html = document.getElementsByTagName("html")[0];
    var body = document.getElementsByTagName("body")[0];
    $(html).attr("style", 'background-color: #6190E8; transition:all ease-in-out 0.2s;');
    $(body).attr("style", 'background-color: #6190E8; transition:all ease-in-out 0.2s;');
  }

  componentWillUnmount() {
    var html = document.getElementsByTagName("html")[0];
    var body = document.getElementsByTagName("body")[0];
    $(html).attr("style", 'background-color: #F9F7F9; transition:all ease-in-out 0.2s');
    $(body).attr("style", 'background-color: #F9F7F9; transition:all ease-in-out 0.2s');
  }

  render() {
    console.log('OAIWEHSJFPOIASHJPFOIASJNFPOISAJNFPOAISHJFPISOAJFNPASIOJNFPAOISJNSAOIJNFOPASIJNPO;AISJ');
    let { username, email, fname, lname, university, year, major, competitionExperience,
      workExperience, mainSkills, skills, competitions } = this.props.user;
    return (
      <div className="container is-fluid">
        <div className="top-spacer-big">
          <button className="button is-danger is-large" style={{position: 'absolute', top: '20px', right: '12px', zIndex: '5'}} onClick={() => this.props.endEdit()}>
            <span className="icon">
              <i className="fa fa-check"></i>
            </span>
            <span>Done</span>
          </button>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <BasicStudentEdit user={this.props.user} updateBasicInfo={this.props.updateBasicInfo}/>
            <div className="tile is-parent is-vertical is-6">
              <CompetitionExperience competitionExperience={competitionExperience}/>
              <WorkExperience experiences={workExperience} addExperience={this.props.addExperience} edit={true}/>
            </div>
            <Skills skills={skills} mainSkills={mainSkills} addSkill={this.props.addSkill} deleteSkill={this.props.deleteSkill} addMainSkill={this.props.addMainSkill} edit={true}/>
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
    addSkill: (skill) => dispatch(addSkill(dispatch, skill)),
    addMainSkill: (skill, description) => dispatch(addMainSkill(dispatch, skill, description)),
    updateBasicInfo: (fname, lname, about, university, major, year, interests, linkedin, website, resume) => dispatch(updateBasicInfo(dispatch, fname, lname, about, university, major, year, interests, linkedin, website, resume)),
    deleteSkill: (id) => dispatch(addSkill(dispatch, id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfileEditable);
