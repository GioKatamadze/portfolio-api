import Mes from "../models/Me.js";

const getMeInfo = async (_, res) => {
  const data = await Mes.find();
  const newData = data.map((me) => {
    return {
      github: me.github,
      linkedin: me.linkedin,
    };
  });

  return res.json(newData);
};

export default getMeInfo;
