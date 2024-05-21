import mongoose  from "mongoose";

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log("Connected to MONGODB😍");
  } catch(error) {
    console.log("Error connecting to MONGODB🥲", error.message)
  }
};
