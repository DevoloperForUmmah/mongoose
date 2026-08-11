import mongoose from "mongoose";

export const ConectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Ummah_Test");
    console.log("conect db successfully");
  } catch (error) {
    console.log(" db not connect successfully");
    console.log(error);
  }
};
