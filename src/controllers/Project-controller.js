import Project from "../models/Project.js";

export const getAllProjects = async (_, res) => {
  const data = await Project.find();
  const newData = data.map((project) => {
    return {
      project_id: project.project_id,
      title: project.title,
      live_link: project.live_link,
      front_link: project.front_link,
      back_link: project.back_link,
      tech_name: project.tech_name,
      tech_icon: project.tech_icon,
      thumbnail: project.thumbnail,
      content: project.content,
    };
  });
  return res.json(newData);
};

export const getSingleProject = async (req, res) => {
  const { id } = req.params;
  const project = await Project.findOne({ project_id: +id });

  if (!project) {
    return res
      .status(401)
      .json({ message: "There is no project with this id" });
  }

  const newData = {
    project_id: project.project_id,
    title: project.title,
    live_link: project.live_link,
    front_link: project.front_link,
    back_link: project.back_link,
    tech_name: project.tech_name,
    tech_icon: project.tech_icon,
    thumbnail: project.thumbnail,
    content: project.content,
  };

  return res.status(200).json(newData);
};
