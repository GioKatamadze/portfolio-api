import express from "express";
import getMeInfo from "../controllers/Me-controller.js";

const meRouter = express.Router();

meRouter.get("/mes", getMeInfo);

export default meRouter;
