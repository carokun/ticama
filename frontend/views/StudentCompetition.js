import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompetitionOverview from '../components/studentCompetition/CompetitionOverview.js'
import MessageBoard from '../components/studentCompetition/MessageBoard.js'
import axios from 'axios';
import PostModal from '../components/studentCompetition/PostModal';

import {updateViewed} from '../actions/ViewedActions.js'

class StudentCompetition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      competition: '',
      modal: false,
    }
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    const path = this.props.history.location.pathname
    const id = path.slice(13);
    axios.get('/api/competition/' + id)
    .then(response => {
      console.log('response', response);
      this.setState({
        competition: response.data.competition
      })
      this.props.updateViewed(response.data.competition)
    })
  }

  closeModal() {
    this.setState({modal: false})

  }

  render() {
    if (this.state.competition) {
      return (
        <div className="container is-fluid">
          { this.state.modal && <PostModal closeModal={this.closeModal} comp={this.state.competition}/> }
          <div className="top-spacer-big">
            <button className="button is-info is-large" style={{position: 'absolute', top: '20px', right: '78px', zIndex: '5'}} onClick={() => this.setState({modal: true})}>
              <span className="icon">
                <i className="fa fa-pencil-square-o"></i>
              </span>
              <span>Post</span>
            </button>
          </div>
          <div className='tile is-ancestor' style={{padding: '0px 20px', margin: '0px'}}>
            <div className='tile is-3 is-parent is-vertical'>
              <CompetitionOverview comp={this.state.competition}/>
            </div>
            <div className='tile is-9 is-parent is-vertical'>
              <MessageBoard comp={this.state.competition}/>
            </div>
          </div>
        </div>

      )
    } else {
      return <div></div>
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
    updateViewed: (competition) => dispatch(updateViewed(dispatch, competition))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentCompetition);
