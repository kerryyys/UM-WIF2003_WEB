// ProjectPostedUser.js

import React from "react";
import { Button } from "react-bootstrap";
import CollaboratorTab from "./CollaboratorTab";
import "../../components-css/jobscape/ProjectPostedUser.css";

const ProjectPostedUser = ({ applicant, projectId, onConfirm, onRemove }) => {
  const handleConfirm = () => {
    console.log("handleConfirm: ", applicant);
    onConfirm(applicant);
  };

  const handleRemove = () => {
    console.log("handleRemove: ", applicant);
    onRemove(applicant);
  };

  return (
    <div className="PPMoreBtn">
      <CollaboratorTab />
      <Button className="ConfirmBtn" onClick={handleConfirm}>
        Confirm
      </Button>
      <Button className="RemoveBtn" onClick={handleRemove}>
        Remove
      </Button>
    </div>
  );
};

export default ProjectPostedUser;
