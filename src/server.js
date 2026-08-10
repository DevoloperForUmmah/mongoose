import express from "express";
import mongoose, { model, Schema } from "mongoose";
const app = express();
const port = 3000;

app.use(express.json());
const ConectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Ummah_Test");
    console.log("conect db successfully");
  } catch (error) {
    console.log(" db not connect successfully");
    console.log(error);
  }
};

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const UserModel = model("users", UserSchema);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//create user api
app.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  const createUser = await UserModel.create({
    email,
    name,
    password,
  });

  console.log(email, name, password);

  res.status(201).json({
    success: true,
    message: "user created successfully",
    data: createUser,
  });
});

app.get("/users", async (req, res) => {
  const users = await UserModel.find();

  res.status(200).json({
    success: true,
    message: "users get successfully",
    data: users,
  });
});

app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;

  const deleteUser = await UserModel.deleteOne({ _id: id });

  res.status(200).json({
    success: true,
    message: "users delete successfully",
    data: deleteUser,
  });
});

app.patch("/users/:id", async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  const { email, name, password } = req.body;

  const updateUser = await UserModel.updateOne(
    { _id: id },
    { email, name, password },
  );

  res.status(200).json({
    success: true,
    message: "users updated successfully",
    data: updateUser,
  });

});
await ConectDB();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
