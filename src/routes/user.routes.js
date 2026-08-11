import { Router } from "express";
import {
  getAllUsers,
  register,
  updateUser,
  userDelete,
} from "../controller/user.controller.js";

const router = Router();

router.post("/register", register);
router.get("/users", getAllUsers);
router.delete("/users/:id", userDelete);
router.patch('/users/:id',updateUser)

export const userRoutes = router;

// api/register
