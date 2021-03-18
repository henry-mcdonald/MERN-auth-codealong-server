// require mongoose package
const mongoose = require('mongoose')

// mongoose config
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/mernAuth'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

const db = mongoose.connection;

// db methods for debug
db.once('open', () => {
  console.log(`⛓ mongoDB connection @ ${db.host}:${db.port}`)
})

db.on('error', err => {
  console.error(`🔥 something has gone wrong with the DB!!!!\n ${err}`)
})
// console.dir
// console.log
// console == object with function in it
// console.log(console)

// escape character
// \n -- creates a new line