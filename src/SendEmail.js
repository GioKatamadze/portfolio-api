import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendEmail = async (req, res) => {
  const email = process.env.EMAIL;
  const pass = process.env.PASS;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "giokat.inbox@gmail.com",
      pass: "byuepxrvcgryilwt",
    },
  });

  const mailOptions = {
    from: "Giokatamadze.com",
    to: "giokat.inbox@gmail.com",
    subject: `Website message from - ${req.body.mailerState.emailValue} - ${req.body.mailerState.name}: ${req.body.mailerState.subject}`,
    text: `${req.body.mailerState.message} ${email} ${pass}`,
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
