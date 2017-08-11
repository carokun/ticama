import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompetitionRecord from '../../components/companyProfile/CompetitionRecord';
import CompanyOverview from '../../components/companyProfile/CompanyOverview';
import CompetitionRecordAdmin from '../../components/companyProfile/CompetitionRecordAdmin';
import axios from 'axios';

import {competitionRequest} from '../../actions/CompanyActions.js';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.makeRequest = this.makeRequest.bind(this)
  }
  makeRequest() {
    var competition = {
      title: this.refs.title.value,
      description: this.refs.description.value,
      startDate: this.refs.startDate.value,
      endDate: this.refs.endDate.value,
      companyOrganizerInfo: {
        phone: this.refs.phone.value,
        email: this.refs.email.value
      },
      location: this.refs.location.value,
      specifications: this.refs.specifications.value,
      approved: false,
    }
    console.log('MAKE COMPETITION REQUEST', competition);
    this.props.competitionRequest(competition)
    this.props.closeModal()
  }

  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Request a Competition</p>
            <button className="delete" onClick={() => this.props.closeModal()}></button>
          </header>
          <section className="modal-card-body">
            <p style={{marginBottom: '20px'}}>Tell us about your competition and let us set it up for you. Just answer a few questions below and we'll be on our way!</p>
            <div className="field">
              <label className="label">Competition Name</label>
              <div className="control">
                <input className="input" type="text" ref='title'/>
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="input-field">
                <textarea id="description" type="text" className="materialize-textarea" ref='description'/>
              </div>
            </div>
            <div className="field">
              <label className="label">Specifications</label>
              <div className="input-field">
                <textarea id="specifications" type="text" className="materialize-textarea" ref='specifications' placeholder='list any specifications about the competition here such as where the event will be held and the exact time of the event'/>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <div className="field" style={{flex: 5}}>
                <label className="label">Start Date</label>
                <div className="control">
                  <input className="input" type="date" ref='startDate'/>
                </div>
              </div>
              <div style={{flex: 1}}></div>
              <div className="field" style={{flex: 5}}>
                <label className="label">End Date</label>
                <div className="control">
                  <input className="input" type="date" ref='endDate'/>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Location</label>
              <div className="control">
                <input className="input" type="text" ref='location'/>
              </div>
            </div>
              <div className="field">
                <label className="label">Organizer Email</label>
                <div className="control">
                  <input className="input" type="text" ref='email'/>
                </div>
              </div>
              <div className="field">
                <label className="label">Organizer Phone</label>
                <div className="control">
                  <input className="input" type="text" ref='phone'/>
                </div>
              </div>

          </section>
          <footer className="modal-card-foot">
            <button onClick={() => this.makeRequest()} className="button is-danger">
              <span className="icon">
                <i className="fa fa-paper-plane"></i>
              </span>
              <span>Send Request</span>
            </button>
            <button onClick={() => this.props.closeModal()} className="button">Cancel</button>
          </footer>
        </div>
      </div>
    )
  }
}

class CompanyProfilePrivate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal : false
    }
    this.newComp = this.newComp.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    var html = document.getElementsByTagName("html")[0];
    var body = document.getElementsByTagName("body")[0];
    $(html).attr("style", 'background-color: #F9F7F9; transition:all ease-in-out 0.2s');
    $(body).attr("style", 'background-color: #F9F7F9; transition:all ease-in-out 0.2s');
  }
  newComp() {
    this.setState({modal: true})
  }
  closeModal() {
    this.setState({modal: false})
  }
  render() {
    const { username, email, pastCompetitions, currentCompetitions, website, type } = this.props.user;
    return(
      <div>
      <div className="container is-fluid">
        <div className="top-spacer">
            <div style={{position: 'absolute', top: '50px', right: '53px', zIndex: '5'}}>
              <button className="button is-danger is-large" style={{marginRight: '10px'}} onClick={() => this.newComp()}>
                <span className="icon">
                  <i className="fa fa-plus"></i>
                </span>
                <span>New Competition</span>
              </button>
              <button className="button is-info is-large" onClick={() => this.props.startEdit()}>
              <span className="icon">
                <i className="fa fa-pencil"></i>
              </span>
              <span>Edit</span>
            </button>
            </div>
        </div>
        {this.state.modal && <Modal competitionRequest={this.props.competitionRequest} closeModal={this.closeModal}/>}
        <div className='tile is-ancestor' style={{padding: '0px 20px', margin: '0px'}}>
          <div className='tile is-3 is-parent is-vertical'>
            {(this.props.id === this.props.user._id) ? <CompanyOverview user={this.props.user}/> : <CompanyOverview user={this.props.company}/>}
          </div>
          <div className='tile is-9 is-parent is-vertical'>
            <CompetitionRecordAdmin />
          </div>
        </div>
      </div>
    </div>
    )

  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    competitionRequest: (competition) => dispatch(competitionRequest(dispatch, competition))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfilePrivate);
