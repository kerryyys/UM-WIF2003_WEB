import React from "react";
import { Form } from "react-bootstrap";

const FormGroupWrapper = ({
  controlId,
  label,
  hasError,
  errorTitle,
  children,
}) => (
  <Form.Group controlId={controlId} className="tw-mb-4">
    <Form.Label className="tw-text-gray-700 tw-font-semibold">
      {label}
    </Form.Label>
    {children}
    {hasError && <div className="tw-text-red-500">{errorTitle}</div>}
  </Form.Group>
);

export default FormGroupWrapper;
