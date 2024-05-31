import Comment from "../models/comment.js";
import Post from "../models/post.js";

class CommentService {
  async addComment(postId, userId, content) {
    const comment = await Comment.create({
      post: postId,
      author: userId,
      content,
    });
    await Post.findByIdAndUpdate(postId, { $push: { comments: comment._id } });
    return comment;
  }

  async deleteComment(commentId) {
    const comment = await Comment.findByIdAndDelete(commentId);
    if (!comment) {
      throw new Error("Comment not found");
    }

    await Post.findByIdAndUpdate(comment.post, {
      $pull: { comments: commentId },
    });

    return { message: "Comment deleted" };
  }

  async modifyComment(commentId, content) {
    const comment = await Comment.findByIdAndUpdate(
      commentId,
      { content },
      { new: true }
    );
    if (!comment) {
      throw new Error("Comment not found");
    }

    return comment;
  }

  async likeComment(commentId) {
    const comment = await Comment.findByIdAndUpdate(
      commentId,
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!comment) {
      throw new Error("Comment not found");
    }

    return comment;
  }

  async unlikeComment(commentId) {
    const comment = await Comment.findByIdAndUpdate(
      commentId,
      { $inc: { likes: -1 } },
      { new: true }
    );
    if (!comment) {
      throw new Error("Comment not found");
    }

    return comment;
  }
}

export default new CommentService();
