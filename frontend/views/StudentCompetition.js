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
    console.log(this.props.history.location.pathname, 'HURR');
    return (
      <div className="container is-fluid">
        <div className='tile is-ancestor' style={{padding: '0px 20px', margin: '0px'}}>
          <div className='tile is-3 is-parent is-vertical'>
            <CompetitionOverview comp={this.props.comp}/>
          </div>
          <div className='tile is-9 is-parent is-vertical'>
            <MessageBoard comp={this.props.comp}/>
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
