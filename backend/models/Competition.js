var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompetitionSchema = new Schema ({
  title: {
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
  ],
  applications: [
    {
      type: Schema.ObjectId,
      ref: 'Application'
    }
  ],
  caseFile : {
    type: String
  },
  applicationQuestions: {
    type: Array
  },
  approved: {
    type: Boolean
  },
  companyOrganizerInfo: {
    type: Object
  },
  clubOrganizerInfo: {
    type: Object
  },
  specifications: {
    type: String
  }
})


module.exports = mongoose.model('Competition', CompetitionSchema)
