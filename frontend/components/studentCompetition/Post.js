import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: ''
    }
  }

  componentDidMount() {
    axios.get('/api/user/' + this.props.notification.poster)
    .then(response => {
      this.setState({
        fname: response.data.user.fname,
        lname: response.data.user.lname
      })
    })
  }

  render() {
    console.log(this.props.notification);
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image"/>
            </figure>
          </div>
          <div className="media-content" style={{paddingTop: '16px'}}>
            <div className="content">
              <p style={{fontSize: '18px'}}>
                {this.state.fname} {this.state.lname}
              </p>
            </div>
          </div>
          <div className="media-right">
            <div>
              {this.props.notification.date}
            </div>
          </div>
        </article>
        <article className="media">
          {this.props.notification.text}
        </article>
      </div>

    )
  }
}

export default Post;
