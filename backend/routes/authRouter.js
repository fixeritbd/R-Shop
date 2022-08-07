import express from "express";
import {
  handleUserRegister,
  handleUserLogin,
} from "../controllers/authController.js";

const router = express.Router();
router.post("/register", handleUserRegister);
router.post("/login", handleUserLogin);

export default router;