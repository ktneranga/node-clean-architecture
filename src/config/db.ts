import mongoose from "mongoose";
import dotenv from "dotenv";
import { MongodbTaskDataSource } from "../data/mongodb-task-data-source";
dotenv.config({ path: ".env" });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI as string);
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }

  return new MongodbTaskDataSource();
};

export default connectDB;
