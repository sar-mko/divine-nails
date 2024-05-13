const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  booked: {
    type: Boolean,
    required: false
  }
})

module.exports = mongoose.model('Open', OpenSchema)
