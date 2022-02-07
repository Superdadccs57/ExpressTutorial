const nodemailer = require('nodemailer');
const sendGrid = require('@sendgrid/mail');

// const sendEmailEthereal = async (req, res) => {
//   let testAccount = await nodemailer.createTestAccount();

//   const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     secure: false, //true for port 465, false for other ports
//     auth: {
//       user: 'jadyn.moore33@ethereal.email',
//       pass: 'wkMgtZNG6aKrGnCW8H',
//     },
//   });

//   let info = await transporter.sendMail({
//     from: '"Thomas Fentie" <fentiewebdevelopment@shaw.ca>',
//     to: 'crazytrain401@hotmail.com',
//     subject: 'Hello Test',
//     text: 'Hello World?',
//     html: '<h1>Hello World!</h1>',
//   });
// res.json(info);
// };

const sendEmail = async (req, res) => {
  sendGrid.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'crazytrain401@hotmail.com',
    from: 'fentiewebdevelopment@shaw.ca',
    subject: 'Hello Test',
    text: 'Hello World?',
    html: '<h1>Hello World!</h1>',
  };
  const info = await sendGrid.send(msg);
  res.json(info);
};

module.exports = sendEmail;
