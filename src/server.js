import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
const nodemailer = require("nodemailer");

import connectToMongo from "./config/mongo.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import meRouter from "./routes/Me-router.js";
import projectRouter from "./routes/Project-router.js";
import techRouter from "./routes/Tech-router.js";
import skillRouter from "./routes/Skill-router.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static("public/thumbnails"));
app.use("/icons", express.static("public/icons"));

app.use("/api/sendemail", (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "giokat.inbox@gmail.com",
      pass: "Tamusi1003",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "giokat.inbox@gmail.com",
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message,
  };

  // Send Email
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(info);
      res.send(success);
    }
  });
});

// app.post("/api/sendemail", async (req, res) => {
//   const { email } = req.body;

//   try {
//     const send_to = email;
//     const sent_from = process.env.EMAIL_USER;
//     const reply_to = email;
//     const subject = "Thank You Message From NodeCourse";
//     const message = `
//           <h3>Hello Zino</h3>
//           <p>Thank for your YouTube Tutorials</p>
//           <p>Regards...</p>

//       `;

//     await sendEmail(subject, message, send_to, sent_from, reply_to);
//     res.status(200).json({ success: true, message: "Email Sent" });
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// });

app.use("/api", meRouter);
app.use("/api", projectRouter);
app.use("/api", techRouter);
app.use("/api", skillRouter);
app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT);
