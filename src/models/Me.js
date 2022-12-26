import mongoose from "mongoose";

const { Schema } = mongoose;

const meSchema = new Schema({
  github: {
    type: Schema.Types.String,
    required: true,
  },
  linkedin: {
    type: Schema.Types.String,
    required: true,
  },
});

const Mes = mongoose.model("Mes", meSchema);

export default Mes;
