import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from 'axios';

class Card extends Component {
  render() {
    let comp = JSON.parse(this.props.comp)
    return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            {/* after populating company field, link their profile image here */}
            <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image" />
          </figure>
          <div style={{marginTop: '5px'}}>
            <button onClick={() => this.props.onClick()} className="button is-info">
              <span className="icon">
                <i className="fa fa-external-link"></i>
              </span>
            </button>
          </div>
        </div>
        <div className="media-content">
          <div className="content" style={{width: '400px', textOverflow: 'ellipsis', overflow: 'scroll'}}>
            <p>
              <strong>{comp.title}</strong>
              <br/>
              <small>{comp.company}</small>
              <br/>
              <small>{comp.location}</small>
              <br/>
              {comp.description}
            </p>
          </div>
        </div>
      </article>
    </div>
    )
  }
}

class StudentProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      competitions: []
    }

  }

  componentDidMount() {
    axios.get('/api/competitions')
    .then(response => {
      this.setState({
        competitions: response.data.competitions
        .map(competition => {
          console.log(JSON.stringify(competition));
          return JSON.stringify(competition);
        })
      })
    })
  }

  render() {
    return (
      <div className="container is-fluid">
        <div className="filters">
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
          <div className="field">
            <label class="label"><strong>Sort By</strong></label>
            <div className="control">
              <div className="select">
                <select>
                  <option>Most Recent</option>
                  <option>Duration</option>
                </select>
              </div>
            </div>
          </div>
          <div style={{width: '10px', height: '10px'}}></div>
          <div className="field">
          <label class="label"><strong>Industry</strong></label>
          <div className="control">
            <div className="select">
              <select>
                <option>Finance</option>
                <option>Consulting</option>
                <option>Technology</option>
              </select>
            </div>
          </div>
          </div>
          </div>
        </div>
        <div className="feed">
        {this.state.competitions.map((competition) =>
          (JSON.parse(competition).approved) &&
          <Card onClick={() => this.props.history.push('/competition/student')} comp={competition}/>
        )}
        </div>
      </div>
    )
}
}



export default StudentProfile;
