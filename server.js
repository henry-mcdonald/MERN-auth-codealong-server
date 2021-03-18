// require packages
const express = require('express')
const rowdy = require('rowdy-logger')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
// required db models -- runs the index file
require('./models')

// config express app
const app = express()
const PORT = process.env.PORT || 3001
const rowdyResults = rowdy.begin(app)
// middleswares
app.use(morgan('tiny'))
app.use(cors())
// request body parser
// for html for POSTs
// app.use(express.urlencoded({ extended: false }))
// for plain JSON request bodies
app.use(express.json())

// GET / -- test index route
app.get('/', (req, res) => {
  res.json({ msg: 'hello world 👾' })
})

// tell express to listen on a port
app.listen(PORT, () => {
  rowdyResults.print()
  console.log(`you are listening to the smooth sound of ${PORT} in the morning 🌊`)
})