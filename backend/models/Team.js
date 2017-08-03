var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  members: [
    {
      type: Schema.ObjectId,
      ref: 'User'
    }
  ],
  submissions: [
    {
      type: Schema.ObjectId,
      ref: 'Submission'
    }
  ],
  notifications: [
    {
      type: Schema.ObjectId,
      ref: 'Notification'
    }
  ]
})


module.exports = mongoose.model('Team', TeamSchema)
