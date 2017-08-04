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

  render() {
    return (
      <div className='notification tile is-child'>
        <div style={{overflow: 'scroll', height: '700px'}}>
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
