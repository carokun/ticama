import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ClubProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //all of the user variables for the company
    const { username, email, pastCompetitions, currentCompetitions, website, type } = this.props.user;


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

export default connect(mapStateToProps, mapDispatchToProps)(ClubProfile);
