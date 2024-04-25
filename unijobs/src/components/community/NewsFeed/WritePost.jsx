import React from "react";
import Form from "react-bootstrap/Form";
import "../../../components-css/Community/WritePost.css";

function WritePost() {
  return (
    <div className="post-container">
      <div className="avatar-container">
        <img
          className="avatar rounded-circle"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="User Avatar"
        />
      </div>
      <Form.Control
        as="textarea"
        className="post-textarea"
        placeholder="Write your post here..."
        rows={3}
      />
    </div>
  );
}

export default WritePost;
