import mongoose from "mongoose";

let isConnected = false; // <-- IMPORTANT: cache connection in serverless

const connectDB = async () => {
  if (isConnected) {
    // If already connected, re-use the connection
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "e-commerce",
    });

    isConnected = !!conn.connections[0].readyState;
    console.log("MongoDB connected:", isConnected);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to database");
  }
};

export default connectDB;
