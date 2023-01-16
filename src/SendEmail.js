import nodemailer from "nodemailer";
import dotenv from "dotenv";

const sendEmail = async (req, res) => {
  dotenv.config();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `\"${process.env.EMAIL}\"`,
      pass: `\"${process.env.PASS}\"`,
    },
  });

  const mailOptions = {
    from: "Giokatamadze.com",
    to: `\"${process.env.EMAIL}\"`,
    subject: `Website message from - ${req.body.mailerState.emailValue} - ${req.body.mailerState.name}: ${req.body.mailerState.subject}`,
    text: `${req.body.mailerState.message}`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
};

export default sendEmail;
