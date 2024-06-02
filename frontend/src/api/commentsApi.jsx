import axios from "../utils/customAxios";
import { readAndLog, readAndReturn } from "../utils/responseHandler.tsx";

const API_URL = "http://localhost:5050/community";

export const fetchComments = async (postId) => {
  try {
    const res = await axios.get(API_URL + `/posts/${postId}/comments`);
    readAndReturn(res, "Failed to fetch data");
  } catch (err) {
    console.error(err);
  }
};

export const postComments = async (postId, userId, comment) => {
  try {
    const res = await axios.post(API_URL + `/posts/${postId}/comments`, {
      postId,
      userId,
      comment,
    });
    readAndLog(res, "Comment posted successfully", "Failed to post comment");
    return res.data.data;
  } catch (err) {
    console.error(err);
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
