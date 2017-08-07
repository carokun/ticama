import React, { Component } from 'react';
import { connect } from 'react-redux';

class Message extends Component {
  render() {
    return (
      <article className="message is-medium">
        <div className="message-header">
          <p>RE: Question #5 is too hard!</p><br/>
          <button className="delete"></button>
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>,
          tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla.
          Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
          Aenean ac <em>eleifend lacus</em>,
          in mollis lectus. Donec sodales, arcu et sollicitudin porttitor,
          tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna,
          vehicula et sem eget, facilisis sodales sem.
          <div style={{height: '10px', width: '1px'}}></div>
          <p>2017-05-15 3:00pm</p>
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
