import express from "express";
import upload from "../middlewares/fileUpload.js";
import PostController from "../controllers/PostController.js";

const router = express.Router();

router.post("/posts", upload.array("images", 10), PostController.postNewPost);
router.put(
  "/posts/:postId",
  upload.array("images", 10),
  PostController.modifyPost
);
router.get("/posts", PostController.getAllPosts);
router.get("/posts/user/:userId", PostController.getAllPostsByUserId);
router.delete("/posts/:postId", PostController.deletePost);
router.post("/posts/:postId/like", PostController.likePost);
router.delete("/posts/:postId/like", PostController.unlikePost);

export default router;
