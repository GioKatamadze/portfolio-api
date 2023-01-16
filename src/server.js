import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import connectToMongo from "./config/mongo.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import meRouter from "./routes/Me-router.js";
import projectRouter from "./routes/Project-router.js";
import techRouter from "./routes/Tech-router.js";
import skillRouter from "./routes/Skill-router.js";
import SendEmail from "./routes/SendEmail-router.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static("public/thumbnails"));
app.use("/icons", express.static("public/icons"));

// app.use("/api/sendemail", cors(), (req, res) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "giokat.inbox@gmail.com",
//       pass: "byuepxrvcgryilwt",
//     },
//   });

//   const mailOptions = {
//     from: `${req.body.mailerState.email}`,
//     to: "giokat.inbox@gmail.com",
//     subject: `Message from ${req.body.mailerState.name}: ${req.body.mailerState.subject}`,
//     text: `${req.body.mailerState.message}`,
//   };

//   transporter.sendMail(mailOptions, function (err, data) {
//     if (err) {
//       res.json({
//         status: "fail",
//       });
//     } else {
//       console.log("== Message Sent ==");
//       res.json({
//         status: "success",
//       });
//     }
//   });
// });

app.use("/api", meRouter);
app.use("/api", projectRouter);
app.use("/api", techRouter);
app.use("/api", skillRouter);
app.use("/api/sendemail", SendEmail());
app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT);
