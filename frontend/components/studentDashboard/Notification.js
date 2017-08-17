import React, { Component } from 'react';
import { connect } from 'react-redux';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOrganizer: this.props.isOrganizer,
      sender: this.props.sender
    }
  }

  render() {
    return (
    <div className={this.state.isOrganizer ? "notification is-danger" : "notification is-info"}>
      <button className="delete"></button>
      <strong>{this.props.sender}</strong><br/>
      {this.props.msg}
    </div>

    )
  }
}

export default Notification;
