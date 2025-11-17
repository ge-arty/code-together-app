import mongoose from "mongoose";
import ENV from "./env.js";

export const connectDb = async () => {
  try {
    const dbUrl = ENV.DB_URL;

    if (!dbUrl) {
      throw new Error("DB_URL is not defined in environment variables");
    }

    const con = await mongoose.connect(dbUrl);

    console.log(`MongoDB Connected: ${con.connection.host}`);

    return con;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
