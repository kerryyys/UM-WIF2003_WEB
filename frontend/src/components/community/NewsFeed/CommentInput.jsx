import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function CommentInput({ onSubmit }) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment("");
    }
  };

  return (
    <form onSubmit={handleCommentSubmit} className="tw-flex tw-items-center">
      <div className="tw-w-10 tw-h-10 tw-rounded-full tw-bg-gray-300 tw-mr-2"></div>
      <input
        type="text"
        value={comment}
        onChange={handleCommentChange}
        className="tw-flex-grow tw-p-2 tw-border-0 tw-rounded-l-lg tw-bg-gray-100 focus:tw-outline-none"
        placeholder="Write a comment..."
      />
      <button
        type="submit"
        className="tw-p-2 tw-bg-blue-500 tw-text-white tw-rounded-full tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center"
      >
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
}

export default CommentInput;
