import Tech from "../models/Tech.js";

const getAllTech = async (_, res) => {
  const data = await Tech.find();
  const newData = data.map((tech) => {
    return {
      tech_id: tech.tech_id,
      name: tech.name,
      icon: tech.icon,
    };
  });
  return res.json(newData);
};

export default getAllTech;
