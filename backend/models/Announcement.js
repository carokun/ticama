var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnnouncementSchema = new Schema ({
  caption: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})


module.exports = mongoose.model('Announcement', AnnouncementSchema)
