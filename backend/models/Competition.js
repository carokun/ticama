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
  company: {
    type: Schema.ObjectId,
    ref: 'Company'
  },
  club: {
    type: Schema.ObjectId,
    ref: 'Club'
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  notifications: [
    {
      type: Schema.ObjectId,
      ref: 'Notification'
    }
  ],
  messages: [
    {
      type: Schema.ObjectId,
      ref: 'Message'
    }
  ],
  teams: [
    {
      type: Schema.ObjectId,
      ref: 'Team'
    }
  ],
  individuals: [
    {
      type: Schema.ObjectId,
      ref: 'User'
    }
  ]
  applications: [
    {
      type: Schema.ObjectId,
      ref: 'Application'
    }
  ],
  case : {
    type: String
  },
  applicationQuestions: {
    type: Array
  }
})


module.exports = mongoose.model('Competition', CompetitionSchema)
