var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
  username: {
    type: String,
    required: true
  },
  fname: {
    type: String
  },
  lname: {
    type: String
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  about: {
    type: String
  },
  university: {
    type: String
  },
  website: {
    type: String
  },
  major: {
    type: String
  },
  skills: [
      {
        type: Schema.ObjectId,
        ref: 'Skill'
      }
  ],
  linkedin: {
    type: String
  },
  competitionExperience: [
      {
        type: Schema.ObjectId,
        ref: 'CompetitionExperience'
      }
  ],
  workExperience: [
      {
        type: Schema.ObjectId,
        ref: 'WorkExperience'
      }
  ],
  pastCompetitions: [
      {
        type: Schema.ObjectId,
        ref: 'Competition'
      }
  ],
  mainSkills: [
      {
        type: Schema.ObjectId,
        ref: 'Skill'
      },
      {
        type: String,
        ref: 'description'
      }
  ],
  currentCompetitions: [
    {
      type: Schema.ObjectId,
      ref: 'Competition'
    }
  ]
})

module.exports = mongoose.model('User', UserSchema)
