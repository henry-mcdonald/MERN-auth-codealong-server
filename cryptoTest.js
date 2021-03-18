const bcrypt = require('bcryptjs')

const testCrypto = async () => {
  try { 
    // test hashing a 'password' string
    // when a user is registering:
    const password = 'banana'
    const saltRounds = 12
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    console.log('hashed password', hashedPassword)

    // test matching a string to our hashed password
    // user is logging in:
    const matchPassword = await bcrypt.compare('Banana', hashedPassword)
    // if password don't match --- don't let the user login
    console.log('matchedPasswords:', matchPassword)
  } catch (error) {
    console.log(error)
  }
}

testCrypto()