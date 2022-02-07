const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, //true for port 465, false for other ports
    auth: {
      user: 'jadyn.moore33@ethereal.email',
      pass: 'wkMgtZNG6aKrGnCW8H',
    },
  });

  let info = await transporter.sendMail({
    from: '"Thomas Fentie" <fentiewebdevelopment@shaw.ca>',
    to: 'crazytrain401@hotmail.com',
    subject: 'Hello Test',
    text: 'Hello World?',
    html: '<h1>Hello World!</h1>',
  });

  res.json(info);
};

module.exports = sendEmail;
