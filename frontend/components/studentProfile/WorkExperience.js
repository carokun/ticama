import React, { Component } from 'react';

class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: 'modal',
      newCompany: '',
      newStart: '',
      newEnd: '',
      newRole: '',
      newDescription: '',
      newLocation: ''
    }
  }

  renderEditButtons() {
    if (!this.props.isOwnProfile) {
      return (
          <article className='media'>
            <button className='button' onClick={() => this.setState({ isActive: 'modal is-active' })}>
              Add Experience
            </button>
          </article>
      )
    }
    else {
      return '';
    }
  }

  render() {
    return(
      <article className="tile is-child notification is-vertical">
        <div className={this.state.isActive}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Experience</p>
              <button className="delete" onClick={() => this.setState({ isActive: 'modal' })}></button>
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Company</label>
                <div className="control">
                  <input className="input" type="text" value={this.state.newCompany} onChange={(e) => this.setState({ newCompany: e.target.value })}/>
                </div>
              </div>
              <div className="field">
                <label className="label">Start</label>
                <div className="control">
                  <input className="input" type="date" value={this.state.newStart} onChange={(e) => {console.log(typeof e.target.value); this.setState({ newStart: e.target.value })}}/>
                </div>
              </div>
              <div className="field">
                <label className="label">End</label>
                <div className="control">
                  <input className="input" type="date" value={this.state.newEnd} onChange={(e) => {console.log(e.target.value); this.setState({ newEnd: e.target.value })}}/>
                </div>
              </div>
              <div className="field">
                <label className="label">Role</label>
                <div className="control">
                  <input className="input" type="text" value={this.state.newRole} onChange={(e) => this.setState({ newRole: e.target.value })}/>
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <input className="input" type="text" value={this.state.newDescription} onChange={(e) => this.setState({ newDescription: e.target.value })}/>
                </div>
              </div>
              <div className="field">
                <label className="label">Location</label>
                <div className="control">
                  <input className="input" type="text" value={this.state.newLocation} onChange={(e) => this.setState({ newLocation: e.target.value })}/>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <a className="button is-success" onClick={() => this.props.addExperience(this.state.newCompany, this.state.newStart, this.state.newEnd, this.state.newRole, this.state.newDescription, this.state.newLocation)}>Save changes</a>

            </footer>
          </div>
        </div>
        <article className='media'>
          <p className="title">Relevant Experiences</p>
        </article>
        <article className='media' style={{height: '300px'}}>
          <div style={{padding: '0px 15px'}}>
            <div className='level'>
              <div className='level-left'>
                <div>
                  <div style={{fontSize: '19px'}}>
                    <strong>
                      Google
                    </strong>
                  </div>
                  <div>
                    Product Manager
                  </div>
                </div>

              </div>
              <div className='level-right'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                  <div>
                    June 2017 - July 2017
                  </div>
                  <div>
                    San Francisco, CA
                  </div>
                </div>
              </div>
            </div>
            <div>
              Eu sint tamquam intellegebat per. Autem prodesset pri at. Ut cum dicit antiopam imperdiet, at ornatus oportere aliquando nam. Sit ei utinam aliquip aliquando, mel dolorem appareat expetenda ne, ius quaeque suscipit aliquando eu. Nihil electram deterruisset at cum. Vis in alienum facilisis dissentiunt, ne mea movet quaerendum. Sed an dicit tacimates adolescens, erat dicit laudem at pri.
            </div>
          </div>

        </article>
        {this.renderEditButtons()}

      </article>
    )
  }
}

export default WorkExperience;
