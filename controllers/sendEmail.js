const nodemailer = require("nodemailer");

const sgMail = require('@sendgrid/mail')
const { StatusCodes } = require('http-status-codes');


const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: process.env.ETHEREAL_HOST,
    port: process.env.ETHEREAL_PORT,
    auth: {
      user: process.env.ETHEREAL_AUTH_USER,
      pass: process.env.ETHEREAL_AUTH_PASS
    }
  });
  
  let info = await transporter.sendMail({
    from: '"Brendon Banda" <skycodingjr@gmail.com>',
    to: "bar@example.com",
    subject: "Hello ✔",
    html: "<h2>Sending Emails with node js</h2>"
  });
  
  res.json(info);
};

// sendgrind
const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
  to: 'skycodingjr@gmail.com', 
  from: 'mtheesikhosana@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  

  // sgMail
  // .send(msg)
  // .then(() => {
  //   console.log('Email sent')
  // })
  // .catch((error) => {
  //   console.error(error)
  // })

  const info = await sgMail.send(msg);

  res.json(info);
}


module.exports = sendEmail;