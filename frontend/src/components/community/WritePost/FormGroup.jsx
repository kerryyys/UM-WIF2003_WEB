import React from "react";
import { Form } from "react-bootstrap";
import { Field, ErrorMessage } from "formik";

const FormGroup = ({
  controlId,
  label,
  name,
  type = "text",
  placeholder,
  as,
  className,
}) => (
  <Form.Group controlId={controlId}>
    <Form.Label className="tw-text-gray-700 tw-font-semibold">
      {label}
    </Form.Label>
    <Field
      name={name}
      type={type}
      as={as}
      placeholder={placeholder}
      className={`tw-border tw-rounded tw-p-2 tw-w-full ${className}`} // Apply the additional class
    />
    <ErrorMessage name={name} component="div" className="tw-text-red-500" />
  </Form.Group>
);

export default FormGroup;
