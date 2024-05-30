import React, { useState, useEffect } from "react";
import SmallTitle from "../../components/jobscape/SmallTitle";
import "../../components-css/jobscape/InProgressProjectTab.css";
import ProjectDetailsModal from "./ProjectDetailsModal";

const InProgressProjectTab = ({
  projectId,
  projectTitle,
  due,
  budget,
  collaborator,
}) => {
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [projectDetails, setProjectDetails] = useState(null);

  const handleProjectClick = async () => {
    try {
      const response = await fetch(
        `http://localhost:5050/projects/${projectId}`
      );
      const data = await response.json();
      setProjectDetails(data);
      setShowProjectDetails(true);
    } catch (error) {
      console.error("Error fetching project details:", error);
    }
  };

  const handleCloseProjectDetails = () => {
    setShowProjectDetails(false);
  };

  return (
    <>
      <div className="InProgressProjectTab">
        <div className="projectDetails">
          <SmallTitle title={projectTitle} fontWeight={700} fontSize="21px" />
          <div className="content">
            <div className="DetailsType">
              <p>Due</p>
              <p>Budget</p>
              <p>Collaborator</p>
            </div>
            <div className="PDetails">
              <p>{due}</p>
              <p>{budget}</p>
              <div>{collaborator}</div>
            </div>
          </div>
        </div>
        <div className="MoreBtn" onClick={handleProjectClick}>
          More
        </div>
      </div>
      {showProjectDetails && (
        <ProjectDetailsModal
          project={projectDetails}
          onClose={handleCloseProjectDetails}
        />
      )}
    </>
  );
};

export default InProgressProjectTab;
