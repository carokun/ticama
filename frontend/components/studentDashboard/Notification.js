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
      Primar lorem ipsum dolor sit amet, consectetur
      adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
      consectetur adipiscing elit
    </div>

    )
  }
}

export default Notification;
