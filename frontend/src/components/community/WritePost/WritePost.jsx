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
        className="tw-w-full tw-flex tw-items-center tw-p-3 tw-bg-white tw-rounded-lg tw-border tw-border-gray-300 tw-cursor-pointer"
        onClick={handleShowModal}
      >
        <Avatar
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="User Avatar"
        />

        <Form.Control
          as="textarea"
          className="tw-flex-grow tw-ml-3 tw-border-none tw-resize-none tw-outline-none tw-p-3"
          placeholder="Start a post, try writing with AI"
          rows={1}
          readOnly
        />
      </div>

      <WritePostModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
}

export default WritePost;
