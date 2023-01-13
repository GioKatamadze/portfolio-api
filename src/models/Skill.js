import mongoose from "mongoose";

const { Schema } = mongoose;

const skillSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  icon: {
    type: Schema.Types.String,
    required: true,
  },
  skill_id: {
    type: Schema.Types.Number,
    required: true,
  },
});

const Skills = mongoose.model("Skills", skillSchema);

export default Skills;
