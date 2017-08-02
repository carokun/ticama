var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotificationSchema = new Schema ({
  date: {
    type: Date,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  poster: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  type: {
    type: String,
    required: true
  }
})


module.exports = mongoose.model('Notification', NotificationSchema)
