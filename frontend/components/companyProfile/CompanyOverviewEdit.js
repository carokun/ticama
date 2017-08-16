import React, { Component } from 'react';

class CompanyOverviewEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      industry: props.user.industry || '',
      phone: props.user.phone || '',
      email: props.user.email || '',
      website: props.user.website || '',
      about: props.user.about || ''
    }

  }

  save() {
    console.log('SAVING THIS', this.state);
    var { about, email, phone, website, industry } = this.state;
    this.props.updateBasicInfo(about, email, phone, website, industry);
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
        <article className="tile is-parent is-vertical notification" style={{padding: '30px', backgroundColor: 'white', boxShadow: '0 0 0.5px 0 #dbdbdb'}}>
          <div className='tile is-parent is-vertical'>
            <div className='tile is-child'>
              <p className="title is-2">{this.props.user.fname}</p>
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
              <input id="email" type="text" className="validate" onChange={(e) => this.setState({email: e.target.value})} value={this.state.email}/>
              <label className={(this.state.email.length > 0) && "active"} htmlFor="email">Email</label>
            </div>
            <div className="input-field" style={{display: 'inline-block'}}>
              <input id="website" type="text" className="validate" onChange={(e) => this.setState({website: e.target.value})} value={this.state.website}/>
              <label className={(this.state.website.length > 0) && "active"} htmlFor="website">Website</label>
            </div>
            <div className="input-field" style={{display: 'inline-block'}}>
              <input id="phone" type="text" className="validate" onChange={(e) => this.setState({phone: e.target.value})} value={this.state.phone}/>
              <label className={(this.state.phone.length > 0) && "active"} htmlFor="phone">Phone</label>
            </div>
          <hr/>
          <div className="input-field" >
            <textarea id="about" type="text" className="materialize-textarea" onChange={(e) => this.setState({about: e.target.value})} value={this.state.about}/>
            <label className={(this.state.about.length > 0) && "active"} htmlFor="about">Company Description</label>
          </div>
          </div>
        </div>
        </article>
      </div>
    )
  }
}

export default CompanyOverviewEdit;
