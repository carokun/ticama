var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkExperienceSchema = new Schema ({
  company: {
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
