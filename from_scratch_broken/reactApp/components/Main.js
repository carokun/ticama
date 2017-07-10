import React from 'react';
import { Link } from 'react-router-dom';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Home</Link>
        </h1>
        {/* because parent component wasnt able to pass down props normally */}
        {/* {React.cloneElement(this.props.children, this.props)} */}
      </div>
    )
  }
});

export default Main;
