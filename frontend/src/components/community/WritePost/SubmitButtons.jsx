import React from "react";
import { Button } from "react-bootstrap";

const SubmitButtons = ({ handleClose, isSubmitting }) => (
  <div className="tw-flex tw-justify-end tw-mt-4">
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button
      variant="primary"
      type="submit"
      disabled={isSubmitting}
      className="tw-ml-2"
    >
      Save Changes
    </Button>
  </div>
);

export default SubmitButtons;
