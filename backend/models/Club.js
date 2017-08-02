var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClubSchema = new Schema ({
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
  about: {
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


module.exports = mongoose.model('Club', ClubSchema)
