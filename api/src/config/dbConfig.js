import mongoose from "mongoose";

export const dbConnection = () => {
  try {
    const connection = mongoose.connect(process.env.MONGO_CLIENT);
    connection && console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
