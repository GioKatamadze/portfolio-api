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
import sendEmail from "./SendEmail.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static("public/thumbnails"));
app.use("/icons", express.static("public/icons"));

app.use("/api", cors(), meRouter);
app.use("/api", cors(), projectRouter);
app.use("/api", cors(), techRouter);
app.use("/api", cors(), skillRouter);
app.use("/api/sendemail", cors(), sendEmail);
app.use("/", ...swaggerMiddleware());

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
