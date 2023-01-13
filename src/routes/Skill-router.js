import Express from "express";
import getAllSkill from "../controllers/Skill-controller.js";

const skillRouter = Express.Router();

skillRouter.get("/skills", getAllSkill);

export default skillRouter;
