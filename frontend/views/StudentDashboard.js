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
      password: '',
      competition: this.props.user.competitions[0]
    }
  }

  changeCompView(competition) {
    this.setState({
      competition
    })
  }

  render() {
    console.log('hello', this.props.user);
    const { competitions } = this.props.user
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
            <SummaryInfo user={this.props.user} changeCompView={this.changeCompView.bind(this)}/>
          </div>
          <div className='tile is-6 is-parent is-vertical'>
            <SubmissionPortal comp={this.state.competition}/>
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
