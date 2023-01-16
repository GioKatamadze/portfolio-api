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
import SendEmail from "./SendEmail.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static("public/thumbnails"));
app.use("/icons", express.static("public/icons"));

app.use("/api", meRouter);
app.use("/api", projectRouter);
app.use("/api", techRouter);
app.use("/api", skillRouter);
app.use("/api/sendemail", cors(), SendEmail());
app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT);
