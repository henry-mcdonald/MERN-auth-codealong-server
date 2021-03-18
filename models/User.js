// require mongoose 
const mongoose = require('mongoose')

// create the schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
}) 

// export the model
module.exports = User = mongoose.model('users', UserSchema)