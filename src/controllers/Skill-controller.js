import Skills from "../models/Skill.js";

const getAllSkill = async (_, res) => {
  const data = await Skills.find();
  const newData = data.map((skill) => {
    return {
      skill_id: skill.skill_id,
      name: skill.name,
      icon: skill.icon,
    };
  });
  return res.json(newData);
};

export default getAllSkill;
