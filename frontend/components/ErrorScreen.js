import React, { Component } from 'react';
import Loading from '../views/Loading';

class ErrorScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Loading />
    )
  }
}

export default ErrorScreen;
