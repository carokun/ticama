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
  image: {
    type: String
  },
  about: {
    type: String
  },
  university: {
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
  website: {
    type: String
  },
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
  mainSkills: [
    {
      name: {
        type: String,
      },
      description: {
        type: String,
      }
    }
  ],
  competitions: [
    {
      type: Schema.ObjectId,
      ref: 'Competition'
    }
  ],
  type: {
    type: String
  },
  resume: {
    type: String
  },
  interests : {
    type: Array
  },
  industry: {
    type: String
  },
  phone: {
    type: String
  },
  approved: {
    type: Boolean
  },
  year: {
    type: String
  }
})

module.exports = mongoose.model('User', UserSchema)
