var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompetitionSchema = new Schema ({
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
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  announcements: [
    {
      type: Schema.ObjectId,
      ref: 'Announcement'
    }
  ],
  submissions: [
    {
      type: Schema.ObjectId,
      ref: 'Submission'
    }
  ]
})


module.exports = mongoose.model('Competition', CompetitionSchema)
