import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
  render() {
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
                John Smith
              </p>
            </div>
          </div>
          <div className="media-right">
            <div>
              5/11/2017 1:34pm
            </div>
          </div>
        </article>
        <article className="media">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </article>
      </div>

    )
  }
}

export default Post;
