var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ApplicationSchema = new Schema ({
  date: {
    type: Date,
    required: true
  },
  team: [
    {
      type: Schema.ObjectId,
      ref: 'User'
    }
  ],
  responses: [
    {
      question: {
        type: String
      },
      response: {
        type: String
      }
    }
  ],
  approved: {
    type: Boolean
  },
  tempApproved: {
    type: Boolean
  },
  tempRejected: {
    type: Boolean
  }
})


module.exports = mongoose.model('Application', ApplicationSchema)
