import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompetitionOverview from '../components/studentCompetition/CompetitionOverview.js'
import MessageBoard from '../components/studentCompetition/MessageBoard.js'

class StudentCompetition extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="breadcrumb has-bullet-separator" aria-label="breadcrumbs" style={{paddingTop: '10px'}}>
          <ul>
            <li><a href="#">Home</a></li>
            <li className="is-active"><a href="#" aria-current="page">McKinsey & Co. Undergraduate Case Competition</a></li>
          </ul>
        </nav>
        <div className='tile is-ancestor' style={{padding: '0px 20px', margin: '0px'}}>
          <div className='tile is-3 is-parent is-vertical'>
            <CompetitionOverview />
          </div>
          <div className='tile is-9 is-parent is-vertical'>
            <MessageBoard />
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentCompetition);
