const router = require('express').Router()
const User = require('../../models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// GET /users -- test endpoint
router.get('/', (req, res) => {
  res.json({ msg: 'hello from users!' })
})

// POST /users/register -- CREATE a new user 
router.post('/register', async (req, res) => {
  try {
    // look at req.body and see if the email exists already in th db
    const findUser = await User.findOne({
      email: req.body.email
    })

    // if the user is found -- return function and respond 
    if(findUser) return res.status(400).json({ msg: 'email exists already' })

    // hash the password from the req.body
    const password = req.body.password
    const saltRounds = 12
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // CREATE a user in the db
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })

    await newUser.save()

    // make a jwt payload 
    const payload = {
      name: newUser.name,
      email: newUser.email,
      id: newUser.id
    }

    // sign it and send it back
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 60 * 60 })

    res.json({ token })

  } catch(error) {
    console.log(error)
    res.status(500).json({ msg: '🔥 OH NO server error' })
  }

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