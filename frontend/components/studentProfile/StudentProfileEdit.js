import React, { Component } from 'react';

class StudentProfileEdit extends Component {
  constructor(props) {
    super(props);
      this.state = {
        about: this.props.user.about || '',
        university: this.props.user.univeristy,
        major: this.props.user.major,
        year: this.props.user.year || '',
        fname: this.props.user.fname,
        lname: this.props.user.lname,
        linkedin: this.props.user.linkedin || 'www.linkedin.com/carolineokun',
        portfolio: this.props.user.portfolio || 'tifchang.com'
      }
  }
  render() {
    console.log(this.props.user.about);
    return(
      <div className="tile is-parent is-vertical is-3" style={{overflow: 'scroll', height: '500px'}}>
        <article>
          <div style={{position: 'relative'}}>
            <figure className="image is-4by3">
              <img src="http://bulma.io/images/placeholders/640x480.png" />
            </figure>
            <button className="button is-danger" style={{position: 'absolute', right: '0', zIndex: '1'}}
              onClick={() => (this.props.save(this.state))}>
              <span className="icon">
                <i className="fa fa-floppy-o"></i>
              </span>
              <span>Save</span>
            </button>
          </div>
        </article>
        <article className="tile is-parent is-vertical notification" style={{padding: '30px', backgroundColor: 'white', boxShadow: '0 0 0.5px 0 #dbdbdb'}}>
            <article className='tile media is-vertical' style={{marginBottom: '10px'}}>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className="input-field" style={{display: 'inline-block'}}>
                  <input id="first_name" type="text" className="validate" onChange={(e) => this.setState({fname: e.target.value})} value={this.state.fname}/>
                  <label className={(this.state.fname.length > 0) && "active"} htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field" style={{display: 'inline-block'}}>
                  <input id="last_name" type="text" className="validate" onChange={(e) => this.setState({lname: e.target.value})} value={this.state.lname}/>
                  <label className={(this.state.lname.length > 0) && "active"} htmlFor="last_name">Last Name</label>
                </div>
              </div>
              <div className="input-field">
                <textarea id="about" type="text" className="materialize-textarea" onChange={(e) => this.setState({about: e.target.value})} value={this.state.about}/>
                <label className={(this.state.about.length > 0) && "active"} htmlFor="about">About Me</label>
              </div>
            </article>
            <article className='tile is-parent media'>
              <div className='tile is-child is-2'>
                <span className="icon">
                  <i className="fa fa-graduation-cap"></i>
                </span>
              </div>
              <div className='tile is-child is-10'>
                <div className="field">
                  <label className="label">University</label>
                  <div className="control">
                    <div className="select">
                      <select>
                        <option>University of Pennsylvania - Wharton</option>
                        <option>University of Pennsylvania - Engineering</option>
                        <option>University of Pennsylvania - College</option>
                        <option>University of Pennsylvania - Nursing</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Major</label>
                  <div className="control">
                    <div className="select">
                      <select>
                        <option>Anthropology</option>
                        <option>Aerospace</option>
                        <option>Agriculture</option>
                        <option>American History</option>
                      </select>
                    </div>
                </div>
                </div>
                <div className="field">
                  <label className="label">Year</label>
                  <div className="control">
                    <div className="select">
                      <select>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className='tile is-parent media'>
              <div className='tile is-child is-2'>
                <span className="icon">
                  <i className="fa fa-lightbulb-o"></i>
                </span>
              </div>
              <div className='tile is-child is-10'>
                <div className='tags'>
                  <span className="tag is-danger is-medium">
                    interest 1
                     <button className="delete is-small"></button>
                  </span>
                  <span className="tag is-danger is-medium">
                    interest 2
                     <button className="delete is-small"></button>
                  </span>
                  <span className="tag is-danger is-medium">
                    interest 3
                     <button className="delete is-small"></button>
                  </span>
                  <span className="tag is-danger is-medium">
                    interest 4
                     <button className="delete is-small"></button>
                  </span>
                  <span className="tag is-danger is-medium">
                    interest 5
                     <button className="delete is-small"></button>
                  </span>
                  <span className="tag is-danger is-medium">
                    interest 6
                    <button className="delete is-small"></button>
                  </span>
                </div>
              </div>
            </article>
            <article className='media tile is-vertical'>
              <div className='tile is-parent'>
                <div className='tile is-child is-2'>
                  <span className="icon">
                    <i className="fa fa-linkedin"></i>
                  </span>
                </div>
                <div className='tile is-child is-10'>
                  <div className="input-field">
                    <input id="linkedin" type="text" className="validate" onChange={(e) => this.setState({linkedin: e.target.value})} value={this.state.linkedin}/>
                    <label className={(this.state.linkedin.length > 0) && "active"} htmlFor="linkedin">Linkedin</label>
                  </div>
                </div>
              </div>
              <div className='tile is-parent'>
                <div className='tile is-child is-2'>
                  <span className="icon">
                    <i className="fa fa-link"></i>
                  </span>
                </div>
                <div className='tile is-child is-10'>
                  <div className="input-field">
                    <input id="portfolio" type="text" className="validate" onChange={(e) => this.setState({portfolio: e.target.value})} value={this.state.portfolio}/>
                    <label className={(this.state.portfolio.length > 0) && "active"} htmlFor="portfolio">Portfolio</label>
                  </div>
                </div>
              </div>
            </article>
            <article className='tile is-parent media'>
              <div className='tile is-child is-2'>
                <span className="icon">
                  <i className="fa fa-paper-plane"></i>
                </span>
              </div>
              <div className='tile is-child is-10'>
                <div className="field">
                  <input className="file-input" type="file" name="resume" />
                </div>
              </div>
            </article>
        </article>
      </div>
    )
  }
}

export default StudentProfileEdit;
