const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body
  console.log(username, email)
  try {
    const user = await User.create({
      username,
      email,
      password,
    })
    // 201 Created
    res.status(201).json({
      success: true,
      user: user,
    })
  } catch (error) {
    next(error)
  }
}

exports.login = async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return next(new ErrorResponse('Please provide email and password', 400))
  }

  try {
    //   find user by email and return email and pw
    const user = await User.findOne({ email }).select('+password')
    // user found?
    if (!user) {
      return next(new ErrorResponse('Invalid credentials', 401))
    }

    //   check whether pw does match
    const isMatch = await user.matchPassword(password)
    if (!isMatch) {
      return next(new ErrorResponse('Invalid credentials', 401))
    }

    res.status(200).json({
      success: true,
      token: 'sajflafj',
    })
  } catch (error) {
    return next(new ErrorResponse(error.message, 500))
  }
}

exports.forgotPassword = (req, res, next) => {
  res.send('forgot Password Route')
}

exports.resetPassword = (req, res, next) => {
  res.send('Reset Password Route')
}
