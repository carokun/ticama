import React, { Component } from 'react';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSkills: false,
      newSkill: '',
      newDescription: '',
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
              <span className="tag is-primary is-medium" style={{margin: '5px'}}>
                {skill.name}
              </span>
            )
          })}
        </div>
      )
    } else {
      return (
        <div>
          {this.props.mainSkills.map(skill => {
            console.log(skill);
            return (
              <div>
                <div style={{fontSize: '19px', marginBottom: '7px'}}>
                  <strong>
                    {skill.name}
                  </strong>
                </div>
                <div>
                  {skill.description}
                </div>
                <div style={{height: '20px'}}>

                </div>
              </div>
            )
          })}
        </div>
      )
    }
  }

  editButton() {
    console.log(this.props.edit);
    if (this.props.edit && this.state.allSkills) {
      return (
        <article className='media'>
          <button className='button' onClick={() => this.setState({ isActive: 'modal is-active' })}>Add Skill</button>
        </article>
      );
    } else if (this.props.edit) {
      return (
        <article className='media'>
          <button className='button is-danger' onClick={() => this.setState({ isActive: 'modal is-active' })}>Add Main Skill</button>
        </article>
      )
    }
  }

  modal() {
    if (this.props.edit && this.state.allSkills) {
      return (
        <div className={this.state.isActive || 'modal'}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Skill</p>
              <button className="delete" onClick={() => this.setState({ isActive: 'modal', newSkill: '' })}></button>
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
              <a className="button is-success" onClick={() => this.newSkill()}>Save changes</a>
            </footer>
          </div>
        </div>
      );
    } else if (this.props.edit) {
      return (
        <div className={this.state.isActive || 'modal'}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Skill</p>
              <button className="delete" onClick={() => this.setState({ isActive: 'modal', newSkill: '', newDescription: '' })}></button>
            </header>
            <section className="modal-card-body">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" value={this.state.newSkill} onChange={(e) => this.setState({ newSkill: e.target.value })}/>
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <input className="input" type="text" value={this.state.newDescription} onChange={(e) => this.setState({ newDescription: e.target.value })}/>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <a className="button is-danger" onClick={() => this.newMainSkill()}>Add Experience</a>
            </footer>
          </div>
        </div>
      )
    }

  }

  newSkill() {
    this.props.addSkill(this.state.newSkill);
    this.setState({
      isActive: 'modal', newSkill: ''
    })
  }

  newMainSkill() {
    this.props.addMainSkill(this.state.newSkill, this.state.newDescription);
    this.setState({
      isActive: 'modal', newSkill: '', newDescription: ''
    })
  }

  render() {

    return(
      // we need to do tabs here for the two skill sections
      <div className="tile is-parent is-vertical is-3">
        {this.modal()}
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
          {this.editButton()}
        </article>

      </div>
    )
  }
}

export default Skills;
