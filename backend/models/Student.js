var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema ({
  username: {
    type: String,
    required: true
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


module.exports = mongoose.model('Student', StudentSchema)
