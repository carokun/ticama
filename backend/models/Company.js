var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanySchema = new Schema ({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  about: {
    type: String
  },
  website: {
    type: String
  },
  pastCompetitions: [
      {
        type: Schema.ObjectId,
        ref: 'CompetitionExperience'
      }
  ],
  currentCompetitions: [
    {
      type: Schema.ObjectId,
      ref: 'Competition'
    }
  ]
})


module.exports = mongoose.model('Company', CompanySchema)
