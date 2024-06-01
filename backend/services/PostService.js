import User from "../models/userModel.js";
import Post from "../models/post.js";
import { Comment } from "../models/comment.js";
import { handleNotFound } from "../utils/errorHandler.js";

class PostService {
  async postNewPost(userId, title, content) {
    const user = await User.findById(userId);
    handleNotFound(user, "User");
    const post = await Post.create({
      author: userId,
      title,
      content,
    });
    return post;
  }

  async getAllPosts() {
    return await Post.find().populate("comments");
  }

  async getAllPostsByUserId(userId) {
    const posts = await Post.find({ author: userId });
    handleNotFound(posts, "Posts");
    return posts;
  }

  async modifyPost(postId, title, content) {
    const post = await Post.findByIdAndUpdate(
      postId,
      { title, content },
      { new: true }
    );
    handleNotFound(post, "Post");
    return post;
  }

  async deletePost(postId) {
    const post = await Post.findByIdAndDelete(postId);
    handleNotFound(post, "Post");
    await Comment.deleteMany({ post: postId });
    return { message: "Post deleted" };
  }

  async likePost(postId, userId) {
    const post = await Post.findByIdAndUpdate(
      postId,
      { $addToSet: { likes: userId } },
      { new: true }
    );
    handleNotFound(post, "Post");
    return post;
  }

  async unlikePost(postId, userId) {
    const post = await Post.findByIdAndUpdate(
      postId,
      { $pull: { likes: userId } },
      { new: true }
    );
    handleNotFound(post, "Post");
    return post;
  }
}

export default new PostService();
