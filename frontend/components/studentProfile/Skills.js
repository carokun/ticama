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
        <div>
          <div className='tags'>
            <span className="tag is-primary is-medium">
              computer science
            </span>
            <span className="tag is-primary is-medium">
              python
            </span>
            <span className="tag is-primary is-medium">
              ballin
            </span>
            <span className="tag is-primary is-medium">
              hustling
            </span>
            <span className="tag is-primary is-medium">
              marketing
            </span>
            <span className="tag is-primary is-medium">
              excel
            </span>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div>
            <div style={{fontSize: '19px', marginBottom: '7px'}}>
              <strong>
                Main Skill
              </strong>
            </div>
            <div>
Lorem ipsum dolor sit amet, in pri modo adipiscing. No pri dicta aliquam. Ius te impetus interpretaris, nam ludus imperdiet inciderint no. Dolorum philosophia definitionem ut cum, iriure integre ei sed.            </div>
          </div>
          <div style={{height: '30px'}}>

          </div>
          <div>
            <div style={{fontSize: '19px', marginBottom: '7px'}}>
              <strong>
                Main Skill
              </strong>
            </div>
            <div>
              Lorem ipsum dolor sit amet, in pri modo adipiscing. No pri dicta aliquam. Ius te impetus interpretaris, nam ludus imperdiet inciderint no. Dolorum philosophia definitionem ut cum, iriure integre ei sed.
            </div>
          </div>
          <div style={{height: '30px'}}>

          </div>
          <div>
            <div style={{fontSize: '19px', marginBottom: '7px'}}>
              <strong>
                Main Skill
              </strong>
            </div>
            <div>
              Lorem ipsum dolor sit amet, in pri modo adipiscing. No pri dicta aliquam. Ius te impetus interpretaris, nam ludui sed. Eius appetere ea pro. Dico viris contentiones mel ne, in nam modus luptatum consectetuer.
            </div>
          </div>
        </div>
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
