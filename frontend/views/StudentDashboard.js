import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SummaryInfo from '../components/studentDashboard/SummaryInfo.js';
import SubmissionPortal from '../components/studentDashboard/SubmissionPortal.js';
import Inbox from '../components/studentDashboard/Inbox.js';

class StudentDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div className='container is-fluid' style={{padding: '60px'}}>
        <div className='tile is-ancestor'>
          <div className='tile is-3 is-parent is-vertical'>
            <SummaryInfo />
          </div>
          <div className='tile is-6 is-parent is-vertical'>
            <SubmissionPortal />
          </div>
          <div className='tile is-3 is-parent is-vertical'>
            <Inbox />
          </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
