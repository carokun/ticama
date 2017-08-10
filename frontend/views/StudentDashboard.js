import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SummaryInfo from '../components/studentDashboard/SummaryInfo.js';
import SubmissionPortal from '../components/studentDashboard/SubmissionPortal.js';
import Inbox from '../components/studentDashboard/Inbox.js';
import '../assets/stylesheets/base.scss';

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
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={350}
        transitionEnter={false}
        transitionLeave={false}>
      <div className='container is-fluid' style={{padding: '36px'}}>
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
    </ReactCSSTransitionGroup>
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
