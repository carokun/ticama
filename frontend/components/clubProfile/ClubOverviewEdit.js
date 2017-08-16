import React, { Component } from 'react';

class ClubOverviewEdit extends Component {
  constructor(props) {
    super(props);
    console.log(props.user);
    this.state = {
      industry: props.user.industry || 'Technology',
      email: props.user.email || '',
      website: props.user.website || '',
      about: props.user.about || '',
    }
    this.save = this.save.bind(this);
  }
  save() {
    console.log('SAVING THIS', this.state);
  }
  render() {
    
    return(
      <div>
        <article>
          <div style={{position: 'relative'}}>
            <figure className="image is-4by3">
              <img src={this.props.user.image ? this.props.user.image : 'https://s3-us-west-2.amazonaws.com/mirathon/defaultpp.png'} />
            </figure>
            <button className="button is-danger" style={{position: 'absolute', right: '0', zIndex: '1', borderRadius: '0px 0px 0px 3px'}}
              onClick={() => this.save()}>
              <span className="icon">
                <i className="fa fa-floppy-o"></i>
              </span>
              <span>Save</span>
            </button>
          </div>
        </article>
        <article className="tile is-parent is-vertical notification" style={{padding: '30px', backgroundColor: 'white', boxShadow: '0 0 0.5px 0 #6190E8'}}>
          <div className='tile is-parent is-vertical'>
            <div className='tile is-child'>
              <p className="title is-2">{this.props.user.fname}</p>
              <div className="field">
                <label className="label">Type</label>
                <div className="control">
                  <div className="select">
                    <select value={this.state.industry}>
                      <option>Finance</option>
                      <option>Consulting</option>
                      <option>Technology</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          <div className='tile is-child is-12'>
            <div className="input-field" style={{display: 'inline-block'}}>
              <input id="email" type="text" className="validate" onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}/>
              <label className={(this.state.email.length > 0) && "active"} htmlFor="email">Email</label>
            </div>
            <div className="input-field" style={{display: 'inline-block'}}>
              <input id="website" type="text" className="validate" onChange={(e) => this.setState({website: e.target.value})} value={this.state.website}/>
              <label className={(this.state.website.length > 0) && "active"} htmlFor="website">Website</label>
            </div>
          <hr/>
          <div className="input-field">
            <textarea id="description" type="text" className="materialize-textarea" onChange={(e) => this.setState({about: e.target.value})} value={this.state.description}/>
            <label className={(this.state.about.length > 0) && "active"} htmlFor="description">Club Description</label>
          </div>
          </div>
        </div>
        </article>
      </div>
    )
  }
}

export default ClubOverviewEdit;
