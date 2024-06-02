import React, { useState, useEffect } from "react";
import PopNotification from "./PopNotification";
import SmallTitle from "../../components/jobscape/SmallTitle";
import "../../components-css/jobscape/InProgressProjectTab.css";
import ProjectDetailsModal from "./ProjectDetailsModal";
import axios from "axios";

const InProgressProjectTab = ({
  projectId,
  projectTitle,
  due,
  budget,
  collaborator,
  collaboratorId,
}) => {
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [projectDetails, setProjectDetails] = useState(null);
  const [fileAccepted, setFileAccepted] = useState(false);
  const [fileRejected, setFileRejected] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [showLocalNotification, setShowLocalNotification] = useState(false);
  // Shows the ProjectDetailsModal
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
  const handleAccept = () => {
    console.log("Accept button clicked");
    axios
      .post(`http://localhost:5050/recruite/${projectId}/accept-file`, {
        userId: collaboratorId,
      })
      .then((response) => {
        console.log("Accept response: ", response);
        setFileAccepted(true);
        localStorage.setItem(`project_${projectId}_accepted`, true); // Store accepted state in localStorage
        // setIsProjectAccepted(true); Probably don't need
        setNotificationMessage("File accepted successfully.");
        setShowLocalNotification(true);
      })
      .catch((error) => {
        console.error("Error accepting the file:", error);
      });
  };
  const handleReject = () => {
    console.log(
      "Reject button clicked, this is the collaborator id: " + collaboratorId
    );
    axios
      .post(`http://localhost:5050/recruite/${projectId}/reject-file`, {
        userId: collaboratorId,
      })
      .then((response) => {
        console.log("Reject response: ", response);
        setFileRejected(true);
        setFileAccepted(false);
        localStorage.removeItem(`project_${projectId}_accepted`);
        setNotificationMessage("File rejected successfully.");
        setShowLocalNotification(true);
        setProjectDetails((prevProjectDetails) => ({
          ...prevProjectDetails,
          uploadedFiles: [],
        }));
      })
      .catch((error) => {
        console.error("Error rejecting the file:", error);
      });
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
              <p>RM{budget}</p>
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
          onAccept={handleAccept}
          onReject={handleReject}
          fileAccepted={fileAccepted}
          fileRejected={fileRejected}
        />
      )}
      {showLocalNotification && (
        <PopNotification
          message={notificationMessage}
          onClose={() => setShowLocalNotification(false)}
        />
      )}
    </>
  );
};

export default InProgressProjectTab;
