// ProjectPostedUser.js

import React from "react";
import { Button } from "react-bootstrap";
import CollaboratorTab from "./CollaboratorTab";
import "../../components-css/jobscape/ProjectPostedUser.css";

const ProjectPostedUser = ({ applicant, projectId, onConfirm, onRemove }) => {
  const handleConfirm = () => {
    onConfirm(projectId, applicant.userID);
  };

  const handleRemove = () => {
    onRemove(projectId, applicant.userID);
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
