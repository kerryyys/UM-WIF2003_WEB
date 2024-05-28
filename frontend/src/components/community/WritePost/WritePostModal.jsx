import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import FileUploader from "./FileUploader";
import LocationButton from "./LocationButton";
import LocationSearchModal from "./LocationSearchModal";
import TagPeople from "./TagPeople";
import RequiredField from "./RequiredField";
import { handleInputChange, validateFields } from "./Util";

const WritePostModal = ({ show, handleClose }) => {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);
  const [content, setContent] = useState("");
  const [taggedUsers, setTaggedUsers] = useState([]);
  const [placeTag, setPlaceTag] = useState("");
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [errors, setErrors] = useState({});

  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const handleShowLocationModal = () => setShowLocationModal(true);
  const handleCloseLocationModal = () => setShowLocationModal(false);

  const resetFields = () => {
    setTitle("");
    setFiles([]);
    setContent("");
    setTaggedUsers([]);
    setPlaceTag("");
    setShowLocationModal(false);
    setErrors({});
  };

  useEffect(() => {
    if (!show) {
      resetFields();
    }
  }, [show]);

  const handleSaveChanges = async () => {
    const fields = { title, content };
    const newErrors = validateFields(fields);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      if (newErrors.title) titleRef.current.focus();
      else if (newErrors.content) contentRef.current.focus();
      return;
    }

    const postData = { title, content, taggedUsers, placeTag, images: files };

    try {
      const res = await axios.post(
        "http://localhost:5050/community/posts",
        postData
      );
      if (res.status === 200) {
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
          <RequiredField
            label="Title"
            value={title}
            onChangeListener={handleInputChange(setTitle, errors, setErrors)}
            hasError={errors.title}
            errorTitle={errors.title}
            controlType="text"
            placeholder="Enter the title of your post"
            ref={titleRef}
          />

          <RequiredField
            label="Post Content"
            value={content}
            onChangeListener={handleInputChange(setContent, errors, setErrors)}
            hasError={errors.content}
            errorTitle={errors.content}
            controlType="textarea"
            placeholder="Enter the content of your post"
            ref={contentRef}
          />

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
