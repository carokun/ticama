var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReplySchema = new Schema ({
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
  }
})


module.exports = mongoose.model('Reply', ReplySchema)
