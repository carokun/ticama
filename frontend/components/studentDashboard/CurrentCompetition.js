import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

class CurrentCompetition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: ''
    }
  }

  componentDidMount() {
    axios.get('/api/user/' + this.props.comp.company)
    .then(response => {
      this.setState({
        fname: response.data.user.fname
      })
    })
  }

  render() {
    return (


      <div className="box is-card">
        <article className="media">
          <div className="media-left">
            <figure className="image is-32x32">
              <img src="https://s3-us-west-2.amazonaws.com/mirathon/bcg-bcg.png" alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>BCG Undergraduate Case COmpetiion</strong>
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
                      <button className="button is-info" onClick={() => this.props.changeCompView(this.props.comp)}>Open</button>
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
