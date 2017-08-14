import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import CompanyProfileEdit from './CompanyProfile/CompanyProfileEdit';
import CompanyProfilePublic from './CompanyProfile/CompanyProfilePublic';
import CompanyProfilePrivate from './CompanyProfile/CompanyProfilePrivate';

import {updateViewed} from '../actions/ViewedActions.js'

import axios from 'axios';

class CompanyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      company: null
    }
    this.startEdit = this.startEdit.bind(this);
    this.endEdit = this.endEdit.bind(this);
  }

  componentDidMount() {
    axios.get('/api/user/' + this.props.match.params.id)
    .then(response => {
      if (!response.data.user || response.data.user.type !== 'company') {
        this.props.history.push('/error');
      }
      this.setState({
        company: response.data.user
      })
      this.props.updateViewed(response.data.user)
    })
  }


  startEdit() {
    this.setState({edit: true})
  }

  endEdit(saveMe) {
    console.log('HEHEHEHHE', saveMe);
    this.setState({edit: false})
  }

  isEditing() {
    if (!this.state.company) {
      return <div></div>;
    } else if (this.state.edit && this.props.match.params.id === this.props.user._id) {
      return <CompanyProfileEdit endEdit={this.endEdit} id={this.props.match.params.id} company={this.state.company}/>
    } else if (this.props.user._id === this.props.match.params.id) {
      return <CompanyProfilePrivate startEdit={this.startEdit} id={this.props.match.params.id}/>
    } else {
      return <CompanyProfilePublic isOwnProfile={this.props.match.params.id === this.props.user._id} startEdit={this.startEdit} id={this.props.match.params.id} company={this.state.company}/>
    }
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
    updateViewed: (user) => dispatch(updateViewed(dispatch, user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
