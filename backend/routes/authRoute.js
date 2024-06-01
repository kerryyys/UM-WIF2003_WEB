import express from "express";
import { asyncHandler } from "../middlewares/asyncMiddleware.js";
import { signUp, login } from "../controllers/authController.js";
import {
  validateSignUp,
  validateLogin,
} from "../middlewares/authMiddleware.js";
import {
  handleBadRequest,
  handleInternalServerError,
} from "../helpers/errorHelpers.js";
import { User } from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";

const router = express.Router();

router.post("/signup", validateSignUp, asyncHandler(signUp));
router.post("/login", validateLogin, asyncHandler(login));
router.get("/debug", async (req, res) => {
  try {
    const allUsers = await User.find();

    if (!allUsers) {
      handleInternalServerError(res, error);
    }
    return res.status(StatusCodes.OK).json(allUsers);
  } catch (error) {
    handleInternalServerError(res, error);
  }
});

export default router;
