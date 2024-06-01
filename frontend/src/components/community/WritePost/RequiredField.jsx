import React from "react";
import FormGroupWrapper from "./FormGroupWrapper";
import TextInput from "./TextInput";
import Textarea from "./Textarea";

const RequiredField = React.forwardRef(
  (
    {
      label,
      value,
      onChangeListener,
      hasError,
      errorTitle,
      controlType = "text",
      placeholder,
    },
    ref
  ) => {
    const ControlComponent = controlType === "textarea" ? Textarea : TextInput;

    return (
      <FormGroupWrapper
        controlId="formPostTitle"
        label={label}
        hasError={hasError}
        errorTitle={errorTitle}
      >
        <ControlComponent
          value={value}
          onChange={onChangeListener}
          placeholder={placeholder}
          hasError={hasError}
          ref={ref}
        />
      </FormGroupWrapper>
    );
  }
);

export default RequiredField;
