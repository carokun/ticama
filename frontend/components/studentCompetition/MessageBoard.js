import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post'

class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  noPosts() {
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h2 className="title is-1" style={{textAlign: 'center'}}>There are no posts right now!</h2>
      <p className="title is-1" style={{textAlign: 'center', fontSize: '60px'}}>🤷</p>
      <h2 className="title is-1" style={{textAlign: 'center'}}>Make one up there!</h2>
    </div>
  }
  render() {
    return (
      <div className='notification tile is-child' style={{backgroundColor: 'transparent'}}>
        <div style={{overflow: 'scroll', height: '750px'}}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

      </div>
    )
  }
}

export default MessageBoard;
