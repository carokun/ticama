import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ClubProfileEdit from './ClubProfile/ClubProfileEdit';
import ClubProfilePublic from './ClubProfile/ClubProfilePublic';
import ClubProfilePrivate from './ClubProfile/ClubProfilePrivate';

import {updateViewedUser} from '../actions/ViewedActions.js'

import axios from 'axios';

class ClubProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      isOwnProfile: (this.props.user._id === this.props.match.params.id),
      club: null
    }
    this.startEdit = this.startEdit.bind(this);
    this.endEdit = this.endEdit.bind(this);
  }

  componentDidMount() {
    axios.get('/api/user/' + this.props.match.params.id)
    .then(response => {
      if (!response.data.user || response.data.user.type !== 'club') {
        this.props.history.push('/error');
      }
      this.setState({
        club: response.data.user
      })
      this.props.updateViewedUser(response.data.user)
    })
    .catch(err => {
      console.log(err);
    })
  }

  startEdit() {
    this.setState({edit: true})
  }

  endEdit() {
    this.setState({edit: false})
  }

  isEditing() {
    if (!this.state.club) {
      return <div></div>;
    } else if (this.state.edit && this.props.user._id === this.props.match.params.id) {
      return <ClubProfileEdit endEdit={this.endEdit} id={this.props.match.params.id} club={this.state.club}/>
    } else if (this.props.user._id === this.props.match.params.id) {
      return <ClubProfilePrivate startEdit={this.startEdit}/>
    } else {
      return <ClubProfilePublic id={this.props.match.params.id} club={this.state.club}/>
    }
  }
  componentWillMount() {

  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="smallfade"
        transitionAppear={true}
        transitionAppearTimeout={350}
        transitionEnter={false}
        transitionLeave={false}>
      <div>
        {this.isEditing()}
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
    updateViewedUser: (user) => dispatch(updateViewedUser(dispatch, user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClubProfile);
