import mongoose from "mongoose";

const connectToDb = async (cb) => {

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in the environment variables");
  }
  
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
    return cb();
  } catch (error) {
    console.error(error);
    return cb("Failed to connect to MongoDB:", error);
  }
};

export default connectToDb;
