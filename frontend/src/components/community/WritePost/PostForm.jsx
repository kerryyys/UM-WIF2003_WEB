import React from "react";
import { Form } from "react-bootstrap";
import FileUploader from "./FileUploader";
import LocationButton from "./LocationButton";
import TagPeople from "./TagPeople";
import RequiredField from "./RequiredField";

const PostForm = ({ register, errors, setError, onShowLocationModal }) => {
  return (
    <Form>
      <RequiredField
        label="Title"
        controlId="title"
        register={register("title", { required: "Title is required" })}
        hasError={!!errors.title}
        errorTitle={errors.title?.message}
        controlType="text"
        placeholder="Enter the title of your post"
      />

      <RequiredField
        label="Post Content"
        controlId="content"
        register={register("content", { required: "Content is required" })}
        hasError={!!errors.content}
        errorTitle={errors.content?.message}
        controlType="textarea"
        placeholder="Enter the content of your post"
      />

      <TagPeople register={register("taggedUsers")} />

      <Form.Group controlId="placeTag" className="tw-mb-4">
        <Form.Label className="tw-text-gray-700 tw-font-semibold">
          Place Tag
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Tag a place"
          {...register("placeTag")}
          className="tw-border tw-rounded tw-p-2 tw-w-full"
        />
      </Form.Group>

      <FileUploader register={register("files")} />

      <LocationButton handleShowLocationModal={onShowLocationModal} />
    </Form>
  );
};

export default PostForm;
