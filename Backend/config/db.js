import mongoose from "mongoose";

async function connectToDb(cb) {
  try {
  await mongoose.connect(process.env.MONGODB_URI);
  return cb()
} catch (error) {
    console.error(error);
    return cb("Failed to connect to MongoDB:", error);
  }
}

export default connectToDb;
