import React, { Component } from 'react';

class BasicStudent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="tile is-parent is-vertical">
        <article className="tile is-child notification is-primary">
          <p className="title">{this.props.user.name}</p>
          <p className="subtitle">Top tile</p>
          <figure className="image is-4by3">
            <img src="http://bulma.io/images/placeholders/640x480.png" />
          </figure>
        </article>
      </div>
    )
  }
}

export default BasicStudent;
