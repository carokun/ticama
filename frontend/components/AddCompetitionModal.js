import axios from 'axios';
import React, { Component } from 'react';

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
    if (this.props.type === 'company') {
      competition.companyOrganizerInfo = {
        phone: this.refs.phone.value,
        email: this.refs.email.value
      }
    } else {
      competition.clubOrganizerInfo = {
        phone: this.refs.phone.value,
        email: this.refs.email.value
      }
    }

    axios.post('/api/request/competition', {
      competition
    })
    .then((response) => {
      if (response.data.success) {
        console.log('success');
      } else {
        console.log('failed');
      }
    })
    .catch((err) => {
        console.log(err);
    })

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

export default Modal;
