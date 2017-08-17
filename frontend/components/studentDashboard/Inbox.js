import React, { Component } from 'react';
import { connect } from 'react-redux';

class Message extends Component {
  render() {
    return (
      <article className="message is-medium">
        <div className="message-header">
          <p>RE: Approval for Q4</p><br/>
          <button className="delete"></button>
        </div>
        <div className="message-body">
          Hey, thanks for letting us know about Q4. We have just reviewed your solution for Q4
          and think that there could be more work done on clearly identifying the TAM for part 4.2.
          Please review your solutions and resubmit when you are ready.
          <div style={{height: '10px', width: '1px'}}></div>
          <p>2017-08-25 6:00pm</p>
        </div>
      </article>
    )
  }
}

class Inbox extends Component {
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
        <h3 className='subtitle is-2'>Inbox</h3>
        <hr/>
        <Message />
      </div>
    )
  }
}

export default Inbox;
