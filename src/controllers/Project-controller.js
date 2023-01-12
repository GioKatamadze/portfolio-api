import Project from "../models/Project.js";

const getAllProjects = async (_, res) => {
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

export default getAllProjects;
