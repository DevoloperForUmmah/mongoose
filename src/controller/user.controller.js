import { UserModel } from "../model/user.model.js";

export const register= async (req, res) => {
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
}

export const getAllUsers=async (req, res) => {
  const users = await UserModel.find();

  res.status(200).json({
    success: true,
    message: "users get successfully",
    data: users,
  });
}

export const userDelete= async (req, res) => {
  const id = req.params.id;

  const deleteUser = await UserModel.deleteOne({ _id: id });

  res.status(200).json({
    success: true,
    message: "users delete successfully",
    data: deleteUser,
  });
}

export const updateUser= async (req, res) => {
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
}