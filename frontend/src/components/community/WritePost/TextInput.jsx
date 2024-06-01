import React from "react";
import { Form } from "react-bootstrap";

const TextInput = React.forwardRef(
  ({ value, onChange, placeholder, hasError }, ref) => (
    <Form.Control
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`tw-border tw-rounded tw-p-2 tw-w-full ${
        hasError
          ? "tw-border-red-300 tw-shadow-[0_0_10px__rgba(255,0,0,0.3)]"
          : ""
      }`}
      ref={ref}
    />
  )
);

export default TextInput;
