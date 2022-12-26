import Me from "../models/Me.js";

const getMeInfo = async (_, res) => {
  const data = await Me.find();
  const newData = data.map((me) => {
    return {
      github: me.github,
      linkedin: me.linkedin,
    };
  });

  return res.json(newData);
};

export default getMeInfo;
