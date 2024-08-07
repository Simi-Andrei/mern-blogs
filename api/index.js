import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB is connected!");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on PORT 3000...");
});
