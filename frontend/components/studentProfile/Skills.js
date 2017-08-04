import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSkills: false
    }
  }

  toggleSkills() {
    this.setState({
      allSkills: !this.state.allSkills
    })
  }

  renderSkillsBody() {
    if (this.state.allSkills) {
      return (
        <div>all of dem</div>
      )
    } else {
      return (
        <div>just the main ones</div>
      )
    }
  }

  render() {
    return(
      // we need to do tabs here for the two skill sections
      <div className="tile is-parent is-vertical is-3">
        <article className="tile is-child notification">
          <p className="title">Skills</p>
          <hr />
          <div className='tabs is-centered'>
            <ul>
              <li className={(!this.state.allSkills)?"is-active":''} style={{width: '50%'}} onClick={() => this.toggleSkills()}><a style={{textDecoration: 'none'}}>TOP</a></li>
              <li className={(this.state.allSkills)?"is-active":''} onClick={() => this.toggleSkills()} style={{width: '50%'}}><a style={{textDecoration: 'none'}}>ALL</a></li>
            </ul>
          </div>
          <div>
            {this.renderSkillsBody()}
          </div>
        </article>
      </div>
    )
  }
}

export default Skills;
