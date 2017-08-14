import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post'

class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }
  componentDidMount() {
    this.setState({messages: this.props.comp.messages})
  }
  render() {
    return (
      <div className='notification tile is-child' style={{backgroundColor: 'transparent'}}>
        <div style={{overflow: 'scroll', height: '750px'}}>
          {
            this.state.messages.map((message) => {
              <Post message={message}/>
            })
          }
        </div>
      </div>
    )
  }
}

export default MessageBoard;
