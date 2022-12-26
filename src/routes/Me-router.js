import express from "express";
import getMeInfo from "../controllers/Me-controller.js";

const meRouter = express.Router();

meRouter.get("/users", getMeInfo);

export default meRouter;
