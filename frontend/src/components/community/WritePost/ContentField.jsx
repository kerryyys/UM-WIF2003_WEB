import React from "react";
import FormGroup from "./FormGroup";

const ContentField = () => (
  <FormGroup
    controlId="formContent"
    label="Post Content"
    name="content"
    as="textarea"
    placeholder="Enter the content of your post"
    className="tw-resize-none"
  />
);

export default ContentField;
