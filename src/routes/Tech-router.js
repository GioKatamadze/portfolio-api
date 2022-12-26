import Express from "express";
import getAllTech from "../controllers/Tech-controller.js";

const techRouter = Express.Router();

techRouter.get("/techs", getAllTech);

export default techRouter;
