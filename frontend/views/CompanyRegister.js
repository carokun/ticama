import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerCompany } from '../actions/AuthActions'

class CompanyRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
      about: '',
      website: ''
    }
  }

  submit() {
    const { username, password, repeatPassword, email, name, about, website } = this.state;
    this.props.registerCompany(username, password, repeatPassword, email, name, about, website);
  }

  render() {
    return (
      <div className="container">
        <div className="top-spacer"></div>
        <nav className="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
          <ul>
            <Link to='/register'><li><a>Register</a></li></Link> •
            <li className="is-active"><a aria-current="page">Company</a></li>
          </ul>
        </nav>
        <div className="container" style={{display: 'flex', justifyContent: 'center', marginTop: '5%', flexDirection: 'column', width: '500px'}}>
          <h2 className="title is-2">Company Registration</h2>
          <div className="field">
            <label className="label">Userame</label>
            <div className="control">
              <input className="input" type="text" name="username" value={this.state.username}
                onChange={(e) => this.setState({username: e.target.value})}/>
              </div>
              <p className="help">For simple login purposes.</p>
            </div>

            <div className="field">
              <label className="label">Company Name</label>
              <div className="control">
                <input className="input" type="text" name="name" value={this.state.name}
                  onChange={(e) => this.setState({name: e.target.value})}/>
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

                    <div className="field">
                      <label className="label">Website</label>
                      <div className="control has-icons-left">
                        <span className="icon is-small is-left">
                          <i className="fa fa-link"></i>
                        </span>
                        <input className="input" type="text" placeholder="http://www.ticama.com" name="website"
                        value={this.state.website} onChange={(e) => this.setState({website: e.target.value})}/>
                      </div>
                    </div>

                    <div className="field">
                      <label className="label">About</label>
                      <div className="control">
                        <textarea className="textarea" placeholder="e.g. We promote social good in communities."></textarea>
                      </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', float: 'right'}}>
                      <Link to='/'><button className="button is-danger">Login</button></Link>
                      <div style={{width: '10px', height: '1px'}}></div>
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
            registerCompany: (username, password, repeatPassword, email, name, about, website) => dispatch(registerCompany(dispatch, username, password, repeatPassword, email, name, about, website))
          }
        };

        export default connect(mapStateToProps, mapDispatchToProps)(CompanyRegister);
