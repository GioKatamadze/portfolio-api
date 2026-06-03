import mongoose from "mongoose";

const connection = async () => {
  try {
    const {
      MONGO_PROTOCOL,
      MONGO_USER,
      MONGO_PASSWORD,
      MONGO_HOST,
      MONGO_DATABASE,
    } = process.env;

    if (!MONGO_PROTOCOL || !MONGO_USER || !MONGO_PASSWORD || !MONGO_HOST || !MONGO_DATABASE) {
      throw new Error("Missing MongoDB environment variables");
    }

    const connectionUrl = `${MONGO_PROTOCOL}://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}`;

    await mongoose.connect(connectionUrl);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
};

export default connection;
