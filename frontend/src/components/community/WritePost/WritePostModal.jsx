import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import FileUploader from "./FileUploader";
import { postPost } from "../../../api/postApi";
import { useUserContext } from "../../../context/UserContext";
import TitleField from "./TitleField";
import ContentField from "./ContentField";
import SubmitButtons from "./SubmitButton";

const WritePostModal = ({ show, handleClose }) => {
  const { user } = useUserContext();
  const [files, setFiles] = useState([]);

  const initialValues = {
    title: "",
    content: "",
    taggedUsers: [],
    placeTag: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const postData = new FormData();
    postData.append("title", values.title);
    postData.append("content", values.content);
    postData.append("userId", user ? user._id : null);

    files.forEach((file, index) => {
      postData.append(`images[${index}]`, file);
    });

    try {
      await postPost(postData, (successMessage) => {
        console.log(successMessage);
        resetForm();
        setFiles([]);
        handleClose();
      });
    } catch (error) {
      console.error("Error submitting post:", error);
    }

    setSubmitting(false);
  };

  return (
    <Modal show={show} onHide={handleClose} className="tw-m-4">
      <Modal.Header closeButton className="tw-bg-gray-100">
        <Modal.Title className="tw-text-lg tw-font-bold">
          Write a Post
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="tw-bg-white">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <FormikForm>
              <TitleField />
              <ContentField />
              <FileUploader files={files} setFiles={setFiles} />

              <SubmitButtons
                handleClose={handleClose}
                isSubmitting={isSubmitting}
              />
            </FormikForm>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default WritePostModal;
