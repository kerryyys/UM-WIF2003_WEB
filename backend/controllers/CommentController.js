import BaseController from "./BaseController.js";
import CommentService from "../services/CommentService.js";
import { validateRequest } from "../middlewares/validateRequest.js";
import {
  addCommentSchema,
  commentIdSchema,
  modifyCommentSchema,
} from "../validators/commentValidators.js";

class CommentController extends BaseController {
  async addComment(req, res) {
    validateRequest(addCommentSchema)(req, res, async () => {
      const { content } = req.body;
      await this.handleRequest(
        req,
        res,
        CommentService.addComment,
        req.params.postId,
        req.user._id,
        content
      );
    });
  }

  async deleteComment(req, res) {
    validateRequest(commentIdSchema)(req, res, async () => {
      await this.handleRequest(
        req,
        res,
        CommentService.deleteComment,
        req.params.commentId
      );
    });
  }

  async modifyComment(req, res) {
    validateRequest(modifyCommentSchema)(req, res, async () => {
      await this.handleRequest(
        req,
        res,
        CommentService.modifyComment,
        req.params.commentId,
        req.body.content
      );
    });
  }

  async likeComment(req, res) {
    validateRequest(commentIdSchema)(req, res, async () => {
      await this.handleRequest(
        req,
        res,
        CommentService.likeComment,
        req.params.commentId
      );
    });
  }

  async unlikeComment(req, res) {
    validateRequest(commentIdSchema)(req, res, async () => {
      await this.handleRequest(
        req,
        res,
        CommentService.unlikeComment,
        req.params.commentId
      );
    });
  }
}

export default new CommentController();
