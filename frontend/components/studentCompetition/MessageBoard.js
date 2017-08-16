import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post'

class MessageBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      comp: this.props.comp
    }
  }

  componentDidMount() {
    if (this.props.viewed.notifications) {
      console.log('here');
      this.setState({
        comp: this.props.viewed
      })
    }
  }
  noPosts() {
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h2 className="title is-1" style={{textAlign: 'center'}}>There are no posts right now!</h2>
      <p className="title is-1" style={{textAlign: 'center', fontSize: '60px'}}>🤷</p>
      <h2 className="title is-1" style={{textAlign: 'center'}}>Make one up there!</h2>
    </div>
  }
  render() {
    console.log(this.state.comp.notifications.length);
    return (
      <div className='notification tile is-child' style={{backgroundColor: 'transparent'}}>
        {(this.state.comp.notifications.length === 0) ?
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
            <h2 className="title is-1" style={{textAlign: 'center'}}>There are no posts right now!</h2>
            <p className="title is-1" style={{textAlign: 'center', fontSize: '60px'}}>¯\_(ツ)_/¯</p>
            <h2 className="title is-1" style={{textAlign: 'center'}}>Make one up there!</h2>
          </div>
        :
          <div style={{overflow: 'scroll', height: '750px'}}>
            {this.state.comp.notifications.map(notification => {
              return <Post notification={notification}/>
            })}
          </div>
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    viewed: state.viewed
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageBoard);
