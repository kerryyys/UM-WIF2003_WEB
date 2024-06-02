import React from "react";
import { Button } from "react-bootstrap";
import "../../pages-css/Payment/Payment.css";

const BackButton = () => {
  return (
    <Button
      className="BackBtn"
      onClick={() => (window.location.href = "/ReviewProjectPage")}
    >
      <p>
        <i className="bi-chevron-left" />
        Back
      </p>
    </Button>
  );
};

export default BackButton;
