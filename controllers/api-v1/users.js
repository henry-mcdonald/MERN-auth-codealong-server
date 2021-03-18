const router = require('express').Router()
const User = require('../../models/User.js')

// GET /users -- test endpoint
router.get('/', (req, res) => {
  res.json({ msg: 'hello from users!' })
})

// POST /users/register -- CREATE a new user 
router.post('/register', (req, res) => {
  res.json({ msg: 'register a user' })
})

// POST /users/login -- validate crendentials
router.post('/login', (req, res) => {
  res.json({ msg: 'login a user' })
})

// GET /auth-locked -- redirect if a bad token is found
router.get('/auth-locked', (req, res) => {
  res.json({ msg: 'Welcome to the private rouote!' })
})

module.exports = router