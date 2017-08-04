import React, { Component } from 'react';
import { connect } from 'react-redux';

class Notification extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="notification is-danger">
      <button className="delete"></button>
      <strong>McKinsey & Co.</strong><br/>
      Attention participants! We are releasing edits to slide 40 in the packet. Please checkout the new updates.
    </div>

    )
  }
}

export default Notification;
