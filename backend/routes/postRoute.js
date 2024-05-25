import { Status } from "../config.js";
import express from "express";
import Post from "../models/post.js";
import Comment from "../models/comment.js";

const router = express.Router();

router.post("/posts", async (req, res) => {
  const { content, image } = req.body;
  const post = new Post({
    author: req.user._id,
    content,
    image,
  });
  await post.save();
  res.status(Status.SUCCESS).json(post);
});

router.post("/:postId/comments", async (req, res) => {
  const { content } = req.body;
  const comment = new Comment({
    post: req.params.postId,
    author: req.user._id,
    content,
  });
  await comment.save();
  // Add the comment to the post's comments array
  const post = await Post.findById(req.params.postId);
  post.comments.push(comment._id);
  await post.save();
  res.status(Status.SUCCESS).json(comment);
});

export default router;
