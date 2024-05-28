import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import FileUploader from "./FileUploader";
import LocationButton from "./LocationButton";
import LocationSearchModal from "./LocationSearchModal";
import TagPeople from "./TagPeople";
import axios from "axios";

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
    const postData = {
      title: title,
      content: content,
      taggedUsers: taggedUsers,
      placeTag: placeTag,
    };

    try {
      const response = await axios.post(
        "http://localhost:5050/community/posts",
        postData
      );

      if (response.status === 200) {
        console.log("Post submitted successfully");
        handleClose();
      } else {
        console.error("Failed to submit post");
      }
    } catch (error) {
      console.log(error);
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
            <Form.Control
              as="textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="tw-w-full tw-h-40 tw-border tw-rounded tw-p-2 tw-resize-none"
            />
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
