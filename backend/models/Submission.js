var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubmissionSchema = new Schema ({
  date: {
    type: Date,
    required: true
  },
  files: {
    type: Array,
    required: true
  },
  team: {
    type: Schema.ObjectId,
    ref: 'Team'
  }
})


module.exports = mongoose.model('Submission', SubmissionSchema)
