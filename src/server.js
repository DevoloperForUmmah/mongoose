import express from "express";
import mongoose, { model, Schema } from "mongoose";
import { UserModel } from "./model/user.model.js";
import { register } from "./controller/user.controller.js";
import { userRoutes } from "./routes/user.routes.js";
import { ConectDB } from "./config/db.js";
const app = express();
const port = 3000;

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World!");
});

//create user api
app.use("/api", userRoutes);

//api/users/id


await ConectDB();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
