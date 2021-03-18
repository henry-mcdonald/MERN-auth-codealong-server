const jwt = require('jsonwebtoken')

const jwtTest = () => {
  try {
    // create a jwt payload
    const payload = { 
      name: 'user name',
      id: 'user id',
      email: 'user email'
    }

    // sign the jwt payload with a string
    const token = jwt.sign(payload, 'My jwt secrect', { expiresIn: 60 * 60 })
    console.log(token)

    // decode and verify jwt
    const decode = jwt.verify(token, 'My jwt secrect')
    console.log(decode)

  } catch(error) {
    console.log(error)
  }
}

jwtTest()