import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSkills: false,
      newSkill: '',
      isActive: 'modal'
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
          {this.props.skills.map(skill => {
            return (
              <span className="tag is-primary is-medium">
                {skill.name}
              </span>
            )
          })}
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
        <div className={this.state.isActive || 'modal'}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Skill</p>
              <button className="delete" onClick={() => this.setState({ isActive: 'modal' })}></button>
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" value={this.state.newSkill} onChange={(e) => this.setState({ newSkill: e.target.value })}/>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <a className="button is-success" onClick={() => this.props.addSkill(this.state.newSkill)}>Save changes</a>

            </footer>
          </div>
        </div>
        <article className="tile is-child notification">
          <article className='media'>
            <p className="title">Skills</p>
          </article>
          <article className='tile is-vertical media'>
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
          {(this.props.edit) ? <article className='media'>
            <button className='button' onClick={() => this.setState({ isActive: 'modal is-active' })}>Add Skill</button>
          </article> : ''}
        </article>

      </div>
    )
  }
}

export default Skills;
