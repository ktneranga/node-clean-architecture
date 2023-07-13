import mongoose from "mongoose";
import dotenv from "dotenv";
import { MongodbGoalDataSource } from "../data/mongodb-goal-data-source";
dotenv.config({ path: ".env" });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URI as string);
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }

  return new MongodbGoalDataSource();
};

export default connectDB;
