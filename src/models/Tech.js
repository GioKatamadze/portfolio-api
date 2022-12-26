import mongoose from "mongoose";

const { Schema } = mongoose;

const techSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  icon: {
    type: Schema.Types.String,
    required: true,
  },
  tech_id: {
    type: Schema.Types.Number,
    required: true,
  },
});

const Tech = mongoose.model("Tech", techSchema);

export default Tech;
