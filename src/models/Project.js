import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  project_id: {
    type: Schema.Types.Number,
    required: true,
  },
  live_link: {
    type: Schema.Types.String,
    required: true,
  },
  front_link: {
    type: Schema.Types.String,
    required: true,
  },
  back_link: {
    type: Schema.Types.String,
    required: false,
  },
  tech_name: {
    type: Schema.Types.Array,
    required: true,
  },
  tech_icon: {
    type: Schema.Types.Array,
    required: true,
  },
  thumbnail: {
    type: Schema.Types.String,
    required: true,
  },
  content: {
    type: Schema.Types.Array,
    required: true,
  },
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
