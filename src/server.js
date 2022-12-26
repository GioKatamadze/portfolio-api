import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import connectToMongo from "./config/mongo.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import meRouter from "./routes/Me-router.js";
import projectRouter from "./routes/Project-router.js";
import techRouter from "./routes/Tech-router.js";

const app = express();
dotenv.config();
connectToMongo();

app.use(bodyParser.json());
app.use("/images", express.static("public/storage"));
app.use("/api", cors(), meRouter);
app.use("/api", cors(), projectRouter);
app.use("/api", cors(), techRouter);
app.use("/", cors(), ...swaggerMiddleware());

app.listen(process.env.PORT || 5000);
