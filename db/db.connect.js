const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGODB;
const connectDB = async () => {
  await mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((error) => {
      console.log("Error in connection with mongodb :", error);
    });
};

module.exports = connectDB;
