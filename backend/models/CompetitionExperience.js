var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompetitionExperienceSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  award: {
    type: String
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
})


module.exports = mongoose.model('CompetitionExperience', CompetitionExperienceSchema)
