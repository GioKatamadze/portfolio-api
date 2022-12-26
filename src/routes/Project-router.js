import Express from "express";
import getAllProjects from "../controllers/Project-controller.js";

const projectRouter = Express.Router();

projectRouter.get("/projects", getAllProjects);

export default projectRouter;
