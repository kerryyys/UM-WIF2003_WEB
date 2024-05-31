import CommentService from "../services/CommentService";
import Comment from "../models/comment";
import Post from "../models/post";
import { handleNotFound } from "../utils/errorHandler";

jest.mock("../models/comment");
jest.mock("../models/post");
jest.mock("../utils/errorHandler");

describe("CommentService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("addComment", () => {
    it("should add a comment and update the post", async () => {
      const mockComment = {
        _id: "commentId",
        post: "postId",
        author: "userId",
        content: "content",
      };
      Comment.create.mockResolvedValue(mockComment);
      Post.findByIdAndUpdate.mockResolvedValue({});

      const result = await CommentService.addComment(
        "postId",
        "userId",
        "content"
      );

      expect(Comment.create).toHaveBeenCalledWith({
        post: "postId",
        author: "userId",
        content: "content",
      });
      expect(Post.findByIdAndUpdate).toHaveBeenCalledWith("postId", {
        $push: { comments: "commentId" },
      });
      expect(result).toEqual(mockComment);
    });
  });

  describe("deleteComment", () => {
    it("should delete a comment and update the post", async () => {
      const mockComment = { _id: "commentId", post: "postId" };
      Comment.findByIdAndDelete.mockResolvedValue(mockComment);
      Post.findByIdAndUpdate.mockResolvedValue({});

      await CommentService.deleteComment("commentId");

      expect(Comment.findByIdAndDelete).toHaveBeenCalledWith("commentId");
      expect(Post.findByIdAndUpdate).toHaveBeenCalledWith("postId", {
        $pull: { comments: "commentId" },
      });
      expect(handleNotFound).toHaveBeenCalledTimes(2);
    });

    it("should call handleNotFound if the comment is not found", async () => {
      Comment.findByIdAndDelete.mockResolvedValue(null);

      await CommentService.deleteComment("commentId");

      expect(handleNotFound).toHaveBeenCalledWith(null, "Comment");
    });
  });

  describe("modifyComment", () => {
    it("should modify a comment", async () => {
      const mockComment = { _id: "commentId", content: "new content" };
      Comment.findByIdAndUpdate.mockResolvedValue(mockComment);

      const result = await CommentService.modifyComment(
        "commentId",
        "new content"
      );

      expect(Comment.findByIdAndUpdate).toHaveBeenCalledWith(
        "commentId",
        { content: "new content" },
        { new: true }
      );
      expect(handleNotFound).toHaveBeenCalledWith(mockComment, "Comment");
      expect(result).toEqual(mockComment);
    });
  });

  describe("likeComment", () => {
    it("should increment likes on a comment", async () => {
      const mockComment = { _id: "commentId", likes: 1 };
      Comment.findByIdAndUpdate.mockResolvedValue(mockComment);

      const result = await CommentService.likeComment("commentId");

      expect(Comment.findByIdAndUpdate).toHaveBeenCalledWith(
        "commentId",
        { $inc: { likes: 1 } },
        { new: true }
      );
      expect(handleNotFound).toHaveBeenCalledWith(mockComment, "Comment");
      expect(result).toEqual(mockComment);
    });
  });

  describe("unlikeComment", () => {
    it("should decrement likes on a comment", async () => {
      const mockComment = { _id: "commentId", likes: 0 };
      Comment.findByIdAndUpdate.mockResolvedValue(mockComment);

      const result = await CommentService.unlikeComment("commentId");

      expect(Comment.findByIdAndUpdate).toHaveBeenCalledWith(
        "commentId",
        { $inc: { likes: -1 } },
        { new: true }
      );
      expect(handleNotFound).toHaveBeenCalledWith(mockComment, "Comment");
      expect(result).toEqual(mockComment);
    });
  });
});
