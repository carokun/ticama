import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrentCompetition extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (


      <div className="box is-card">
        <article className="media">
          <div className="media-left">
            <figure className="image is-32x32">
              <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>McKinsey & Co.</strong>
                <br />
                <nav className="level is-mobile">
                  <div className="level-left">
                    <div className="level-item">
                      <span className="icon">
                        <i className="fa fa-clock-o"></i>
                      </span>
                      <span style={{color: 'red'}}>  4h 5m</span>
                    </div>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <button className="button is-info">Open</button>
                    </div>
                  </div>
                </nav>
              </p>
            </div>
          </div>
        </article>
      </div>

    )
  }
}

export default CurrentCompetition;
