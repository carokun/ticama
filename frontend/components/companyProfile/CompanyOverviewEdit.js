import React, { Component } from 'react';

class CompanyOverviewEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      industry: this.props.user.industry || '',
      phone: this.props.user.phone || '',
      email: this.props.user.email || '',
      website: this.props.user.website || '',
      about: this.props.user.about || ''
    }

  }

  save() {
    console.log('STATTTTEEEEEE', this.state);
  }

  render() {
    return(

      <div>
        <article>
          <div style={{position: 'relative'}}>
            <figure className="image is-4by3">
              <img src="http://bulma.io/images/placeholders/640x480.png" />
            </figure>
          </div>
          <button className='button' onClick={() => this.save()}>Save</button>
        </article>
        <article className="tile is-parent is-vertical notification" style={{padding: '30px', backgroundColor: 'white', boxShadow: '0 0 0.5px 0 #dbdbdb'}}>
          <div className='tile is-parent is-vertical'>
            <div className='tile is-child'>
              {/* no edits to name because we only want official clubs */}
              <p className="title is-2">McKinsey & Co.</p>
              <div className="field">
                <label className="label">Type</label>
                <div className="control">
                  <div className="select">
                    <select value={this.state.industry} onChange={(e) => this.setState({ industry: e.target.value })}>
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
              <input id="phone" type="text" className="validate" onChange={(e) => this.setState({phone: e.target.value})} value={this.state.phone}/>
              <label className={(this.state.phone.length > 0) && "active"} htmlFor="phone">Phone</label>
            </div>
            <div className="input-field" style={{display: 'inline-block'}}>
              <input id="email" type="text" className="validate" onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}/>
              <label className={(this.state.email.length > 0) && "active"} htmlFor="email">Email</label>
            </div>
            <div className="input-field" style={{display: 'inline-block'}}>
              <input id="website" type="text" className="validate" onChange={(e) => this.setState({website: e.target.value})} value={this.state.website}/>
              <label className={(this.state.website.length > 0) && "active"} htmlFor="website">Website</label>
            </div>
          <hr/>
          <div className="input-field" >
            <textarea id="about" type="text" className="materialize-textarea" onChange={(e) => this.setState({about: e.target.value})} value={this.state.about}/>
            <label className={(this.state.about.length > 0) && "active"} htmlFor="about">Club Description</label>
          </div>
          </div>
        </div>
        </article>
      </div>
    )
  }
}

export default CompanyOverviewEdit;
