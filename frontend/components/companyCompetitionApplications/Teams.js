import React, { Component } from 'react';
import { connect } from 'react-redux';
import Team from './Team';
import axios from 'axios';

import {updateViewed} from '../../actions/ViewedActions.js'

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onSubmit() {
    axios.post('/api/accept/teams', {
      compId: this.props.viewed._id
    })
    .then(response => {
      console.log(response.data);
      this.props.updateViewed(response.data.competition)
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    if (!this.props.viewed.applications || this.props.viewed.applications.length === 0) {
      return <div className='notification tile is-child'>
        <div style={{overflow: 'scroll', height: '700px'}}>
          no applications
        </div>
      </div>
    }
    return (
      <div className='notification tile is-child'>
        <div style={{overflow: 'scroll', height: '700px'}}>
          {this.props.viewed.applications
          .filter(app => !app.approved)
          .map((app, index) => {
            return <Team key={app._id} application={app} index={index + 1} competition={this.props.viewed} changeAppViewed={this.props.changeAppViewed}/>;
          })}
        </div>
        <button className='button is-primary' onClick={() => this.onSubmit()}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    viewed: state.viewed
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateViewed: (competition) => dispatch(updateViewed(dispatch, competition))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
