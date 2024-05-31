import bcrypt from "bcryptjs";
import { User } from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";
import {
  createSecretToken,
  setTokenCookie,
} from "../middleware/tokenMiddleware.js";
import {
  handleBadRequest,
  handleInternalServerError,
} from "../helpers/errorHelpers.js";

export const signUp = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    //Check if user email already exists in the database
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return handleBadRequest(res, "User already exists");
    }

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(await bcrypt.compare(password, hashedPassword));

    const user = await User.create({
      email: email,
      password: hashedPassword,
      username: username,
    });

    // Create a token with JWT based on _id
    const token = createSecretToken(user._id);
    setTokenCookie(res, token);

    res
      .status(StatusCodes.CREATED)
      .json({ message: "User signed up successfully", success: true, user });
  } catch (error) {
    return handleInternalServerError(res, error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found");
      return handleBadRequest(res, "Incorrect password or email");
    }

    // Compare input password with the encrypted password
    console.log("User found:", user);
    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      console.log("Password comparison failed");
      return handleBadRequest(res, "Incorrect password");
    }

    console.log("Password comparison succeeded");
    // Create a JWT token for current user session
    const token = createSecretToken(user._id);
    setTokenCookie(res, token);

    return res.status(StatusCodes.OK).json({
      message: "User logged in successfully",
      success: true,
      user: user,
    });
  } catch (error) {
    console.log("Error during login:", error);
    return handleInternalServerError(res, error);
  }
};
