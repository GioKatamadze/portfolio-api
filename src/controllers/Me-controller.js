import Me from "../models/Me.js";

export const getMeInfo = async (_, res) => {
  const data = await Me.find();
  const newData = await data.map((me) => {
    return {
      github: me.github,
      linkedin: me.linkedin,
    };
  });

  return res.json(newData);
};

export default getMeInfo;
