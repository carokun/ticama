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
      this.setState({
        comp: this.props.viewed
      })
    }
  }

  render() {
    console.log('this.props.competition',this.props.comp);
    return (
      <div className='notification tile is-child' style={{backgroundColor: 'transparent'}}>
        <div style={{overflow: 'scroll', height: '750px'}}>
          {this.state.comp.notifications.map(notification => {
            return <Post notification={notification}/>
          })}
        </div>

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
