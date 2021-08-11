require('dotenv').config()
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.EMAIL_PASSWORD)
console.log(process.env.EMAIL_PASSWORD)

const mailOptions = {
  from: process.env.EMAIL_FROM,
  to: 'koch.marcus01@gmail.com',
  subject: 'test',
  html: `<h1>Test<h1>`,
}

sgMail.send(mailOptions, function (err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log(info)
  }
})
