var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pnkreddy11@gmail.com',
    pass: 'pragma05'
  }
});

var mailOptions = {
  from: 'sk.baji6@gmail.com',
  to: 'sk.baji6@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 