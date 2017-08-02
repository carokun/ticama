import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StudentProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //all of the user variables
    const { username, email, fname, lname, university, year, major, competitionExperience,
      workExperience, mainSkills,currentCompetitions } = this.props.user;


    return (
      <div className="container is-fluid">

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
