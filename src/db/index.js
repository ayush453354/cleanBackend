import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import e from "express";

const connectDB = async () => {
  try {
    
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("Error:", error);
  }
};

export default connectDB;
