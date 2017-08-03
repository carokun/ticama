var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompetitionExperienceSchema = new Schema ({
  award: {
    type: String
  },
  competition: {
    type: Schema.ObjectId,
    ref: 'Competition'
  },
  team: {
    type: Schema.ObjectId,
    ref: 'Team'
  }
})


module.exports = mongoose.model('CompetitionExperience', CompetitionExperienceSchema)
