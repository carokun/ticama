var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema ({
  date: {
    type: Date,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  to: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  from: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  replies: [
    {
      type: Schema.ObjectId,
      ref: 'Reply'
    }
  ]
})


module.exports = mongoose.model('Message', MessageSchema)
