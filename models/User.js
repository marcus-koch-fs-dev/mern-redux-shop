const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide a email'],
    unique: true,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
  },
  password: {
    type: String,
    required: [true, 'Please add a Password'],
    minLength: 6,
    // Don't send password back
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
})

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    // Check whether password should modify
    next()
  }

  const salt = await bcryptjs.genSalt(10)
  this.password = await bcryptjs.hash(this.password, salt)
  next()
})

userSchema.methods.matchPassword = async function (password) {
  // compare pw from body with pw from db user
  return await bcryptjs.compare(password, this.password)
}

const User = mongoose.model('User', userSchema)
module.exports = User
