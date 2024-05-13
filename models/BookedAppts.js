const mongoose = require('mongoose')

const BookedSchema = new mongoose.Schema({
   fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  services: {
    type: Array,
    required: true,
  },
  comments: {
    type: String,
    required: false
  },
   bookId: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Bookings', BookedSchema)
