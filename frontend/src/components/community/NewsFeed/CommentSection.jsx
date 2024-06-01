import { useState, useEffect } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import { fetchComments, postComments } from "../../../api/commentsApi";
import { usePostContext } from "../../../context/PostContext";
import { useUserContext } from "../../../context/UserContext";

function CommentSection() {
  const postId = usePostContext();
  const user = useUserContext();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(postId).then((data) => setComments(data));
  }, [postId]);

  const handleCommentSubmit = async (text) => {
    const newComment = postComments(postId, user._id, text);

    const formattedComment = {
      text: newComment.content,
      author: "useContext User",
      avatar: "useContext User",
      timestamp: new Date(newComment.timestamp),
      likes: newComment.likes.length,
    };

    setComments((prevComments) => [...prevComments, formattedComment]);
  };

  const handleLike = (index) => {
    setComments((prevComments) =>
      prevComments.map((comment, i) =>
        i === index ? { ...comment, likes: comment.likes + 1 } : comment
      )
    );
  };

  return (
    <div className="tw-w-full tw-bg-gray-100 tw-p-4 tw-rounded-lg">
      <div className={`${comments.length > 0 ? "tw-mb-4" : "tw-mb-0"}`}>
        {comments.map((comment, idx) => (
          <Comment key={idx} comment={comment} onLike={() => handleLike(idx)} />
        ))}
      </div>
      <CommentInput onSubmit={handleCommentSubmit} />
    </div>
  );
}

export default CommentSection;
