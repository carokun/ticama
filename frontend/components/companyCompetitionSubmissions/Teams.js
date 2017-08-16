import React, { Component } from 'react';
import { connect } from 'react-redux';
import Team from './Team'

import axios from 'axios';

import {updateViewed} from '../../actions/ViewedActions.js'

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    console.log('view', this.props.viewed);
  }
  onSubmit() {

  }

  render() {
    return (
      <div className='notification tile is-child'>
        <div style={{overflow: 'scroll', height: '700px'}}>
          {this.props.viewed.applications
          .filter(app => {
            console.log(app.approved);
            return app.approved;
          })
          .map((app, index) => {
            return <Team index={index + 1} competition={this.props.competition} app={app} changeAppViewed={this.props.changeAppViewed}/>
          })}
        </div>

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
