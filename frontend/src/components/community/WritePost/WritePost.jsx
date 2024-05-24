import { useState } from "react";
import Avatar from "../NewsFeed/Avatar";
import Form from "react-bootstrap/Form";
import "../../../components-css/Community/WritePost.css";
import WritePostModal from "./WritePostModal";

function WritePost() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <div
        className="post-container"
        onClick={handleShowModal}
        style={{ cursor: "pointer" }}
      >
        <Avatar
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="User Avatar"
        />

        <Form.Control
          as="textarea"
          className="post-textarea"
          placeholder="Write your post here..."
          rows={3}
          readOnly
        />
      </div>
      <WritePostModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
}

export default WritePost;
