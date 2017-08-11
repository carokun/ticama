import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CompetitionRecord from '../../components/companyProfile/CompetitionRecord';
import CompanyOverview from '../../components/companyProfile/CompanyOverview';
import CompetitionRecordAdmin from '../../components/companyProfile/CompetitionRecordAdmin';
import axios from 'axios';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      start: '',
      end: '',
      streetAddress: '',
      city: '',
      state: '',
      zipcode: '',
      description: '',
      email: '',
      phone: '',
      link: ''
    }
    this.makeRequest = this.makeRequest.bind(this)
  }
  makeRequest() {
    console.log('MAKE COMPETITION REQUEST', this.state);
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
                <input className="input" type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="input-field">
                <textarea id="description" type="text" className="materialize-textarea" onChange={(e) => this.setState({description: e.target.value})} value={this.state.description}/>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <div className="field">
                <label className="label">Start</label>
                <div className="control">
                  <input className="input" type="datetime-local" value={this.state.start} onChange={(e) => (this.setState({ start: e.target.value }))}/>
                </div>
              </div>
              <div className="field">
                <label className="label">End</label>
                <div className="control">
                  <input className="input" type="datetime-local" value={this.state.end} onChange={(e) => (this.setState({ end: e.target.value }))}/>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Location</label>
              <div className="control">
                <input className="input" type="text" value={this.state.streetAddress} onChange={(e) => this.setState({ streetAddress: e.target.value })}/>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              <div className="field">
                <label className="label">City</label>
                <div className="control">
                  <input className="input" type="text" value={this.state.city} onChange={(e) => (this.setState({ city: e.target.value }))}/>
                </div>
              </div>
              <div style={{width: '10px', height: '5px'}}></div>
              <div className="field">
                <label className="label">State</label>
                <div className="control">
                  <div className="select">
                    <select value={this.state.state} onChange={(e) => this.setState({state: e.target.value})}>
                      <option>Alabama</option>
                      <option>Arkansas</option>
                    </select>
                  </div>
                </div>
              </div>
              <div style={{width: '50px', height: '5px'}}></div>
              <div className="field">
                <label className="label">Zipcode</label>
                <div className="control">
                  <input className="input" type="text" value={this.state.zipcode} onChange={(e) => (this.setState({ zipcode: e.target.value }))}/>
                </div>
              </div>
            </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input className="input" type="text" value={this.state.email} onChange={(e) => (this.setState({ email: e.target.value }))}/>
                </div>
              </div>
              <div className="field">
                <label className="label">Phone</label>
                <div className="control">
                  <input className="input" type="text" value={this.state.phone} onChange={(e) => (this.setState({ phone: e.target.value }))}/>
                </div>
              </div>
              <div className="field">
                <label className="label">Link</label>
                <div className="control">
                  <input className="input" type="text" value={this.state.link} onChange={(e) => (this.setState({ link: e.target.value }))}/>
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
    console.log(this.state.modal);
    return(
      <div>
        {/* <div style={{position: 'absolute', top: '0', backgroundColor: 'red', height: '100%', width: '100%', zIndex: '0'}}></div> */}
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
        {this.state.modal && <Modal closeModal={this.closeModal}/>}
        <div className='tile is-ancestor' style={{padding: '0px 20px', margin: '0px'}}>
          <div className='tile is-3 is-parent is-vertical'>
            {(this.props.id === this.props.user._id) ? <CompanyOverview user={this.props.user}/> : <CompanyOverview user={this.props.company}/>}
          </div>
          <div className='tile is-9 is-parent is-vertical'>
            {/* we want to toggle this with CompetitionRecord depending on if it's the company viewing their
            own profile or not. this logic also applies with club profile*/}
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

const mapDispatchToProps = () => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfilePrivate);
