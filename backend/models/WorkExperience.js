var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkExperienceSchema = new Schema ({
  company: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
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


module.exports = mongoose.model('WorkExperience', WorkExperienceSchema)
