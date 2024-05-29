import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";

function CommentSection() {
  const [comments, setComments] = useState([]);

  const handleCommentSubmit = (text) => {
    const newComment = {
      text,
      author: "Tama Akira",
      avatar: "https://via.placeholder.com/40", // Placeholder avatar image
      timestamp: new Date(),
      likes: 0,
    };
    setComments([...comments, newComment]);
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
      <div className="tw-mb-4">
        {comments.map((comment, idx) => (
          <Comment key={idx} comment={comment} onLike={() => handleLike(idx)} />
        ))}
      </div>
      <CommentInput onSubmit={handleCommentSubmit} />
    </div>
  );
}

export default CommentSection;
