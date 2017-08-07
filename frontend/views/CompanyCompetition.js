import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CompanyCompetition extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //all of the user variables for the company
    const { username, email, pastCompetitions, currentCompetitions, website, type } = this.props.user;


    return (
      <div className="container is-fluid">
        <div className="tile is-ancestor">
          <div className="tile is-2">
            Column one
          </div>
          <div className="tile is-7">
            Column two
          </div>
          <div className="tile is-3">
            Column three
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyCompetition);
