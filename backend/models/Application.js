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
  ]
})


module.exports = mongoose.model('Application', ApplicationSchema)
