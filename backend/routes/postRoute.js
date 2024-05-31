import { Status } from "../config.js";
import express from "express";
import Post from "../models/post.js";
import Comment from "../models/comment.js";

const router = express.Router();

router.post("/posts", async (req, res) => {
  try {
    const postData = req.body;

    const { title, content } = postData;

    const post = new Post({
      title,
      content,
    });

    await post.save();
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error saving post", error });
  }
});

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().populate("comments");
    res.status(Status.SUCCESS).json(posts);
  } catch (error) {
    res.status(Status.ERROR).json({ message: error.message });
  }
});

router.post("/posts/:postId/comments", async (req, res) => {
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
