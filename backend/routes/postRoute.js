import express from "express";
import PostController from "../controllers/PostController.js";

const router = express.Router();

router.post("/posts", PostController.postNewPost);
router.get("/posts", PostController.getAllPosts);
router.get("/users/:userId/posts", PostController.getAllPostsByUserId);
router.put("/posts/:postId", PostController.modifyPost);
router.delete("/posts/:postId", PostController.deletePost);
router.post("/posts/:postId/like", PostController.likePost);
router.delete("/posts/:postId/like", PostController.unlikePost);

export default router;
