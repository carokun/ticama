import React, { Component } from 'react';

class BasicStudent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="tile is-parent is-vertical is-3">
        <figure className="image is-4by3">
          <img src="http://bulma.io/images/placeholders/640x480.png" />
        </figure>
        <article className="tile is-child notification">
          <p style={{fontSize:'23px'}}>Matt Pearing</p>
          <p style={{fontSize:'18px'}}>Data Scientist</p>
          <div style={{height: '5px'}}></div>
          <p style={{padding: '5px'}}>this is a small blurb this is a small blurb this is a small blurb this is a small blurb this is a small blurb</p>
        <hr/>
        dfjlskdfj
        <hr/>
        dfjlskdfj
        <hr/>
        dfjlskdfj
        </article>
      </div>
    )
  }
}

export default BasicStudent;
