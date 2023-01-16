import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      //   user: `"``${process.env.EMAIL}``"`,
      user: "giokat.inbox@gmail.com",
      //   pass: `"``${process.env.PASS}``"`,
      pass: "byuepxrvcgryilwt",
    },
  });

  const mailOptions = {
    from: `${req.body.mailerState.emailValue}`,
    // to: `"``${process.env.EMAIL}``"`,
    to: "giokat.inbox@gmail.com",
    subject: `Message from ${req.body.mailerState.name}: ${req.body.mailerState.subject}`,
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
