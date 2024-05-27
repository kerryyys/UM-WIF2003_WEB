import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import FileUploader from "./FileUploader"; // Adjust the path as needed
import LocationButton from "./LocationButton"; // Adjust the path as needed
import LocationSearchModal from "./LocationSearchModal"; // Adjust the path as needed
import MarkdownEditor from "./MarkdownEditor";
import TagPeople from "./TagPeople"; // Adjust the path as needed

const WritePostModal = ({ show, handleClose }) => {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);
  const [content, setContent] = useState("");
  const [taggedUsers, setTaggedUsers] = useState([]);
  const [placeTag, setPlaceTag] = useState("");
  const [showLocationModal, setShowLocationModal] = useState(false);

  const handleShowLocationModal = () => setShowLocationModal(true);
  const handleCloseLocationModal = () => setShowLocationModal(false);

  const resetFields = () => {
    setTitle("");
    setFiles([]);
    setContent("");
    setTaggedUsers([]);
    setPlaceTag("");
    setShowLocationModal(false);
  };

  useEffect(() => {
    if (!show) {
      resetFields();
    }
  }, [show]);

  const handleSaveChanges = async () => {
    const postData = new FormData();
    postData.append("title", title);
    postData.append("content", content);
    postData.append("placeTag", placeTag);
    taggedUsers.forEach((user, index) => {
      postData.append(`taggedUser${index}`, user.id);
    });
    files.forEach((file, index) => {
      postData.append(`image${index}`, file);
    });

    try {
      const response = await fetch("http://localhost/community/post", {
        method: "POST",
        body: postData,
      });

      if (response.ok) {
        console.log("Post submitted successfully");
        handleClose();
      } else {
        console.error("Failed to submit post");
      }
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} className="tw-m-4">
      <Modal.Header closeButton className="tw-bg-gray-100">
        <Modal.Title className="tw-text-lg tw-font-bold">
          Write a Post
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="tw-bg-white">
        <Form>
          <Form.Group controlId="formPostTitle" className="tw-mb-4">
            <Form.Label className="tw-text-gray-700 tw-font-semibold">
              Title
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the title of your post"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="tw-border tw-rounded tw-p-2 tw-w-full"
            />
          </Form.Group>

          <Form.Group controlId="formPostContent" className="tw-mb-4">
            <Form.Label className="tw-text-gray-700 tw-font-semibold">
              Post Content
            </Form.Label>
            <MarkdownEditor content={content} setContent={setContent} />
          </Form.Group>

          <TagPeople
            taggedUsers={taggedUsers}
            setTaggedUsers={setTaggedUsers}
          />

          <Form.Group controlId="formPlaceTag" className="tw-mb-4">
            <Form.Label className="tw-text-gray-700 tw-font-semibold">
              Place Tag
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Tag a place"
              value={placeTag}
              onChange={(e) => setPlaceTag(e.target.value)}
              className="tw-border tw-rounded tw-p-2 tw-w-full"
            />
          </Form.Group>

          <FileUploader files={files} setFiles={setFiles} />

          <LocationButton handleShowLocationModal={handleShowLocationModal} />
        </Form>
      </Modal.Body>

      <Modal.Footer className="tw-bg-gray-100">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>

      <LocationSearchModal
        show={showLocationModal}
        handleClose={handleCloseLocationModal}
      />
    </Modal>
  );
};

export default WritePostModal;
