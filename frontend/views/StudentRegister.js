import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerStudent } from '../actions/AuthActions'
import axios from 'axios';

class StudentRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
      university: 'University of Pennsylvania',
      year: '2018',
      major: 'Anthropology',
      about: '',
      linkedin: '',
      website: '',
      image: '',
      resume: ''
    }
  }

  submit() {
    const { username, password, repeatPassword, email, fname, lname, university, year, major, website, linkedin, about, image, resume } = this.state;
    console.log('link there', linkedin);
    this.props.registerStudent({username, password, repeatPassword, email, fname, lname, university, year, major, about, website, linkedin, image, resume});
    this.props.history.push('/');
  }


  render() {
    return (
      <div>
      <div className="container">
        <div className="top-spacer"></div>
        <nav className="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
          <ul>
            <Link to='/register'><li><a>Register</a></li></Link> •
            <li className="is-active"><a aria-current="page">Student</a></li>
          </ul>
        </nav>
      </div>
      <div className="container" style={{display: 'flex', justifyContent: 'space-between', marginTop: '5%', flexDirection: 'column', width: '500px'}}>
          <h2 className="title is-2">Student Registration</h2>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input className="input" type="text" name="username" value={this.state.username}
                onChange={(e) => this.setState({username: e.target.value})}/>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input className="input" type="text" name="fname" value={this.state.fname}
                  onChange={(e) => this.setState({fname: e.target.value})}/>
              </div>
            </div>
            <div style={{width: '20px', height: '1px'}}></div>
            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
                <input className="input" type="text" name="lname" value={this.state.lname}
                  onChange={(e) => this.setState({lname: e.target.value})}/>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left">
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
              <input className="input" type="email" placeholder="e.g. charliebrown@gmail.com" name="email"
                value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left">
                <span className="icon is-small is-left">
                  <i className="fa fa-lock"></i>
                </span>
                <input className="input" type="password" name="password"
                  value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
              </div>
            </div>
            <div style={{width: '20px', height: '40px'}}></div>
            <div className="field">
              <label className="label">Confirm Password</label>
              <div className="control has-icons-left">
                <span className="icon is-small is-left">
                  <i className="fa fa-lock"></i>
                </span>
                <input className="input" type="password" name="repeatPassword"
                  value={this.state.repeatPassword} onChange={(e) => this.setState({repeatPassword: e.target.value})}/>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">About</label>
            <div className="control">
              <input className="input" type="text" name="about" value={this.state.about} placeholder='one liner about yourself'
                onChange={(e) => this.setState({about: e.target.value})}/>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div className="field">
              <label className="label">University</label>
              <div className="control">
                <div className="select">
                  <select onChange={(e) => this.setState({university: e.target.value})}>
                    <option>University of Pennsylvania</option>
                    <option>University of California – Berkeley</option>
                  </select>
                </div>
              </div>
            </div>
            <div style={{width: '10px', height: '1px'}}></div>
            <div className="field">
              <label className="label">Year</label>
              <div className="control">
                <div className="select">
                  <select onChange={(e) => this.setState({year: e.target.value})}>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                  </select>
                </div>
              </div>
            </div>
          </div>


          <div className="field">
            <label className="label">Major</label>
            <div className="control">
              <div className="select">
                <select onChange={(e) => this.setState({major: e.target.value})}>
                  <option>Anthropology</option>
                  <option>Computer Science</option>
                  <option>Math</option>
                  <option>Earth Science</option>
                </select>
              </div>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <div className="field">
              <label className="label">Linkedin</label>
              <div className="control has-icons-left">
                <span className="icon is-small is-left">
                  <i className="fa fa-linkedin"></i>
                </span>
                <input className="input" type="text" name="linkedin"
                  value={this.state.linkedin} onChange={(e) => this.setState({linkedin: e.target.value})}/>
              </div>
            </div>
            <div style={{width: '20px', height: '40px'}}></div>
            <div className="field">
              <label className="label">Website</label>
              <div className="control has-icons-left">
                <span className="icon is-small is-left">
                  <i className="fa fa-link"></i>
                </span>
                <input className="input" type="text" name="website"
                  value={this.state.website} onChange={(e) => this.setState({website: e.target.value})}/>
              </div>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <div className="file">
              <label className="label">Resume</label>
              <div style={{position: 'relative'}}>
                <button className="button is-outlined is-info is-medium" style={{position: 'absolute', left: '0', zIndex: '0'}}>
                    <span className="file-icon is-small">
                      <i className="fa fa-upload"></i>
                    </span>
                    <span> Upload</span>
                </button>
                <input className="file-input"  type="file" name="resume"
                  onChange={(e) => this.setState({resume: e.target.files[0]})}
                  style={{opacity: '0', zIndex: '2', float: 'left', height: '32px'}}/>
              </div>
            </div>
            <div className="file">
              <label className="label">Profile Picture</label>
              <div style={{position: 'relative'}}>
                <button className="button is-outlined is-info is-medium" style={{position: 'absolute', left: '0', zIndex: '0'}}>
                    <span className="file-icon is-small">
                      <i className="fa fa-upload"></i>
                    </span>
                    <span> Upload</span>
                </button>
                <input className="file-input"
                  type="file" name="picStudent" ref={(ref) => this.fileUpload = ref}
                  onChange={(e) => this.setState({image: e.target.files[0]})}
                  style={{opacity: '0', zIndex: '2', float: 'left', height: '32px'}}/>
              </div>
            </div>
          </div>
          <div className="top-spacer"></div>

          <div style={{display: 'flex', flexDirection: 'row', float: 'right'}}>
            <button className="button is-info" onClick={() => this.submit()}>Register</button>
          </div>
          <div style={{marginBottom: '60px'}}></div>
    </div>
    </div>
  )
}
}

const mapStateToProps = () => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerStudent: (student) => dispatch(registerStudent(dispatch, student))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentRegister);
