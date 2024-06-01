import BaseController from "./BaseController.js";
import PostService from "../services/PostService.js";
import { validateRequest } from "../middlewares/validate.js";
import {
  addPostSchema,
  modifyPostSchema,
  deletePostSchema,
  likePostSchema,
  userIdSchema,
} from "../validators/postValidators.js";

class PostController extends BaseController {
  constructor() {
    super();
    this.postNewPost = this.postNewPost.bind(this);
    this.getAllPosts = this.getAllPosts.bind(this);
    this.getAllPostsByUserId = this.getAllPostsByUserId.bind(this);
    this.modifyPost = this.modifyPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.likePost = this.likePost.bind(this);
    this.unlikePost = this.unlikePost.bind(this);
  }

  async postNewPost(req, res) {
    validateRequest(addPostSchema)(req, res, async () => {
      const { title, content, userId } = req.body;
      const images = req.files;

      await this.handleRequest(
        req,
        res,
        PostService.postNewPost,
        userId,
        title,
        content,
        images // Pass images to the service layer
      );
    });
  }

  async getAllPosts(req, res) {
    await this.handleRequest(req, res, PostService.getAllPosts);
  }

  async getAllPostsByUserId(req, res) {
    validateRequest(userIdSchema)(req, res, async () => {
      await this.handleRequest(
        req,
        res,
        PostService.getAllPostsByUserId,
        req.params.userId
      );
    });
  }

  async modifyPost(req, res) {
    validateRequest(modifyPostSchema)(req, res, async () => {
      const { title, content } = req.body;
      const images = req.files;

      await this.handleRequest(
        req,
        res,
        PostService.modifyPost,
        req.params.postId,
        title,
        content,
        images // Pass images to the service layer
      );
    });
  }

  async deletePost(req, res) {
    validateRequest(deletePostSchema)(req, res, async () => {
      await this.handleRequest(
        req,
        res,
        PostService.deletePost,
        req.params.postId
      );
    });
  }

  async likePost(req, res) {
    validateRequest(likePostSchema)(req, res, async () => {
      await this.handleRequest(
        req,
        res,
        PostService.likePost,
        req.params.postId,
        req.body.userId
      );
    });
  }

  async unlikePost(req, res) {
    validateRequest(likePostSchema)(req, res, async () => {
      await this.handleRequest(
        req,
        res,
        PostService.unlikePost,
        req.params.postId,
        req.body.userId
      );
    });
  }
}

export default new PostController();
