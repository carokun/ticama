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
    console.log('this.props.competition',this.props.comp);
    return (
      <div className='notification tile is-child' style={{backgroundColor: 'transparent'}}>
        <div style={{overflow: 'scroll', height: '750px'}}>
          {this.props.comp.notifications.map(notification => {
            return <Post notification={notification}/>
          })}
        </div>

      </div>
    )
  }
}

export default MessageBoard;
