import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://uzefaqureshi06_db_user:tomato@cluster0.qi9nhan.mongodb.net/food-delivery?retryWrites=true&w=majority"
    );

    console.log("DB Connected");
  } catch (error) {
    console.log("MongoDB Connection Error:", error);
  }
};