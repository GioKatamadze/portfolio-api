import Express from "express";
import {
  getAllProjects,
  getSingleProject,
} from "../controllers/Project-controller.js";

const projectRouter = Express.Router();

projectRouter.get("/projects", getAllProjects);
projectRouter.get("/projects/:id", getSingleProject);

export default projectRouter;
