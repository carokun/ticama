import React, { Component } from 'react';

class CompanyOverviewEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'Consulting',
      phone: '(415) 920-2019',
      email: this.props.user.email,
      website: this.props.user.website,
      // streetAddress: '401 Walnut St.',
      // city: 'Philadelphia',
      // state: 'PA',
      // zipcode: '19104',
      about: 'heyo i like mayo'
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
                    <select>
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
            {/* <div className="input-field" style={{display: 'inline-block'}}>
              <input id="streetAddress" type="text" className="validate" onChange={(e) => this.setState({streetAddress: e.target.value})} value={this.state.streetAddress}/>
              <label className={(this.state.streetAddress.length > 0) && "active"} htmlFor="website">Street Address</label>
            </div> */}
            {/* <div style={{display: 'flex', flexDirection: 'row'}}>
              <div className="field">
                <label className="label">City</label>
                <div className="control">
                  <div className="select">
                    <select>
                      <option>Philadelphia</option>
                      <option>Honolulu</option>
                      <option>San Francisco</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">State</label>
                <div className="control">
                  <div className="select">
                    <select>
                      <option>PA</option>
                      <option>HI</option>
                      <option>CA</option>
                    </select>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="input-field" style={{display: 'inline-block'}}>
              <input id="zipcode" type="text" className="validate" onChange={(e) => this.setState({zipcode: e.target.value})} value={this.state.zipcode}/>
              <label className={(this.state.zipcode.length > 0) && "active"} htmlFor="zipcode">Zipcode</label>
            </div> */}
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
