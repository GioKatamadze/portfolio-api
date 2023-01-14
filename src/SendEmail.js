// const nodemailer = require("nodemailer");

// const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "giokat.inbox@gmail.com",
//       pass: "Tamusi1003",
//     },
//   });

//   const mailOptions = {
//     from: req.body.email,
//     to: "giokat.inbox@gmail.com",
//     subject: `Message from ${req.body.email}: ${req.body.subject}`,
//     text: req.body.message,
//   };

//   // Send Email
//   transporter.sendMail(mailOptions, function (err, info) {
//     if (err) {
//       console.log(err);
//       res.send(err);
//     } else {
//       console.log(info);
//       res.send(success);
//     }
//   });
// };

// module.exports = sendEmail;
