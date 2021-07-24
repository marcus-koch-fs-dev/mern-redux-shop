const sgMail = require('@sendgrid/mail')

const sendEmail = (options) => {
  sgMail.setApiKey(process.env.EMAIL_PASSWORD)

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
  }

  sgMail.send(mailOptions, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })
}

module.exports = sendEmail
