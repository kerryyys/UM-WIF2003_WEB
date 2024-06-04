import { useState } from "react";
import Form from "react-bootstrap/Form";
import "../../../components-css/Community/WritePost.css";
import WritePostModal from "./WritePostModal";
import ProfileImage from "../ProfileImage";
import { useUserContext } from "../../../context/UserContext";

function WritePost() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const { user } = useUserContext();

  return (
    <div>
      <div
        className="tw-w-full tw-flex tw-items-center tw-p-3 tw-bg-white tw-rounded-lg tw-border tw-border-gray-300 tw-cursor-pointer"
        onClick={handleShowModal}
      >
        <ProfileImage
          user={user}
          alt="profile-image"
          className="tw-h-12 tw-w-12"
        />

        <Form.Control
          as="textarea"
          className="tw-resize-none tw-p-3 tw-h-2 hover:tw-bg-slate-200 tw-transition tw-duration-200 *:tw-overflow-hidden"
          placeholder="Start a post..."
          readOnly
        />
      </div>

      <WritePostModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
}

export default WritePost;
