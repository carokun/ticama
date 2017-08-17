import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import axios from 'axios';

class Card extends Component {
  render() {
    let comp = this.props.comp
    console.log('LECOMP', comp);
    return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={comp.company.image} alt="Image" />
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
          <div className="content" style={{height: '200px', width: '400px', textOverflow: 'ellipsis', overflow: 'scroll'}}>
            <p>
              <strong>{comp.title || 'title'}</strong>
              <br/>
              <small>{comp.company.fname || 'comp'}</small>
              <br/>
              <small>{comp.location || 'location'}</small>
              <br/>
              {comp.description || 'descr'}
            </p>
          </div>
        </div>
      </article>
    </div>
    )
  }
}

class StudentDiscover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      competitions: []
    }

  }

  componentDidMount() {
    axios.get('/api/competitions')
    .then(response => {
      console.log('compsstudentdiscover', response);
      this.setState({
        competitions: response.data.competitions
      })
    })
  }

  render() {
    console.log('comps', this.state.competitions);
    return (
      <div className="container is-fluid">
        <div className="filters">
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
          <div className="field">
            <label className="label"><strong>Sort By</strong></label>
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
          <label className="label"><strong>Industry</strong></label>
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
          competition.approved &&
          <Card key={competition._id} comp={competition} onClick={() => this.props.history.push('/competition/' + competition._id)}/>
        )}
        </div>
      </div>
    )
}
}



export default StudentDiscover;
