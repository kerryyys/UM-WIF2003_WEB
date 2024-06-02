import React from "react";
import FormGroup from "./FormGroup";

const TitleField = () => (
  <FormGroup
    controlId="formTitle"
    label="Title"
    name="title"
    placeholder="Enter the title of your post"
  />
);

export default TitleField;
