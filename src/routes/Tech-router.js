import Express from "express";
import getAllTech from "../controllers/Tech-controller.js";

const techRouter = Express.Router();

techRouter.get("/status", getAllTech);

export default techRouter;
