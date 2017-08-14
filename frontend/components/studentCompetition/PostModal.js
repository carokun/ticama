import axios from 'axios';
import React, { Component } from 'react';

import {updateViewed} from '../../actions/ViewedActions.js'

import { connect } from 'react-redux';

class PostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      user: this.props.user
    }
    this.makeRequest = this.makeRequest.bind(this)
  }


  makeRequest() {
    axios.post('/api/new/post', {
      text: this.state.message,
      competition: this.props.comp._id
    })
    .then(response => {
      this.props.viewed.notifications.push(response.data.notification)
      this.props.updateViewed(this.props.viewed)
    })
    .catch(err => {
      console.log(err);
    })
    this.props.closeModal();
  }

  render() {
    console.log('viewed', this.props.viewed);
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">📝 Write a Post</p>
            <button className="delete" onClick={() => this.props.closeModal()}></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <input className="input" value={this.state.message} type="text" ref='message'
                  onChange={(e) => this.setState({message: e.target.value})}/>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button onClick={() => this.makeRequest()} className="button is-danger">
              <span className="icon">
                <i className="fa fa-thumb-tack"></i>
              </span>
              <span>Post</span>
            </button>
            <button onClick={() => this.props.closeModal()} className="button">Cancel</button>
          </footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
