import axios from "axios";
import { readAndLog, readAndReturn } from "../utils/responseHandler.tsx";

const API_URL = "http://localhost:5050/community";

export const postPost = async (postData, action) => {
  try {
    const res = await axios.post(API_URL + "posts", postData);
    readAndReturn(
      res,
      "Post submitted successfully",
      "Failed to submit post",
      action
    );
  } catch (error) {
    console.log(error);
  }
};

export const postLikes = async (postId, userId) => {
  try {
    const res = await axios.post(API_URL + `/posts/${postId}/likes`, {
      postId,
      userId,
    });
    readAndLog(res, "Post liked successfully", "Failed to like post");
  } catch (err) {
    console.error(err);
  }
};
