const crypto = require('crypto')
const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')
const sendEmail = require('../utils/sendEmail')

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body
  try {
    const user = await User.create({
      username,
      email,
      password,
    })

    sendToken(user, 201, res)
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

    sendToken(user, 200, res)
  } catch (error) {
    return next(new ErrorResponse(error.message, 500))
  }
}

exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body

  try {
    const user = await User.findOne({ email })

    if (!email) {
      return next(new ErrorResponse('Email could not be sent', 404))
    }

    const resetToken = user.getResetPasswordToken()

    await user.save()

    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`

    const message = `<h1>You have requested a password reset</h1>
    <p>Please click on this link to reset your password</p>
    <a href=${resetUrl} clicktracking = off>${resetUrl}</a>`

    try {
      await sendEmail({
        to: user.email,
        subject: 'Reset Password Request',
        text: message,
      })
      res.status(200).json({ success: true, data: 'Email sent' })
    } catch (error) {
      console.log('Error after')
      user.resetPasswordToken = undefined
      user.resetPasswordExpire = undefined

      user.save()

      next(new ErrorResponse('Email could not be send', 500))
    }
  } catch (error) {
    next(error)
  }
}

exports.resetPassword = async (req, res, next) => {
  // Compare token in URL params to hashed token
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resetToken)
    .digest('hex')

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    })

    if (!user) {
      return next(new ErrorResponse('Invalid Token', 400))
    }

    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()

    res.status(201).json({
      success: true,
      data: 'Password Updated Success',
      token: user.getSignedJwtToken(),
    })
  } catch (err) {
    next(err)
  }
}

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken()
  res.status(statusCode).json({ success: true, token })
}
