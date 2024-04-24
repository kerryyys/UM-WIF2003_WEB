import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SmallTitle from "../../components/jobscape/SmallTitle";
import InProgressProjectTab from "../../components/jobscape/InProgressProjectTab";
import CompletedProjectTab from "../../components/jobscape/CompletedProjectTab";
import "../../components-css/jobscape/Notification.css";
import "../../styles/ReviewProjectPage.css";

const ReviewProjectPage = () => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  const handleReviewFormSubmit = () => {
    setShowNotification(true);
  };

  const inProgressProjects = [
    {
      projectTitle: "E-commerce Website",
      due: "16 May 2024",
      budget: "RM 8,000",
      collaborator: "Peter Lim",
    },
    {
      projectTitle: "Photography Session",
      due: "16 May 2024",
      budget: "RM 8,000",
      collaborator: "Peter Lim",
    },
    {
      projectTitle: "Online Banking App",
      due: "16 May 2024",
      budget: "RM 8,000",
      collaborator: "Peter Lim",
    },
    {
      projectTitle: "Grab",
      due: "16 May 2024",
      budget: "RM 8,000",
      collaborator: "Peter Lim",
    },
    {
      projectTitle: "E-commerce Website",
      due: "16 May 2024",
      budget: "RM 8,000",
      collaborator: "Peter Lim",
    },
  ];

  const completedProjects = [
    {
      projectTitle: "Shopping Cart App",
      due: "16 May 2024",
      budget: "RM 8,000",
      collaborator: "Peter Lim",
    },
    {
      projectTitle: "Planting Session",
      due: "16 May 2024",
      budget: "RM 8,000",
      collaborator: "Peter Lim",
    },
    {
      projectTitle: "Mental Health App",
      due: "16 May 2024",
      budget: "RM 8,000",
      collaborator: "Peter Lim",
    },
    {
      projectTitle: "E-commerce Website",
      due: "16 May 2024",
      budget: "RM 8,000",
      collaborator: "Peter Lim",
    },
    {
      projectTitle: "E-commerce Website",
      due: "16 May 2024",
      budget: "RM 8,000",
      collaborator: "Peter Lim",
    },
    {
      projectTitle: "E-commerce Website",
      due: "16 May 2024",
      budget: "RM 8,000",
      collaborator: "Peter Lim",
    },
  ];

  return (
    <div className="ReviewProjectPage">
      <div className="ReviewBackBtn">
        <Button className="BackBtn" onClick={() => navigate(-1)}>
          <p>
            <i className="bi-chevron-left" />
            Back
          </p>
        </Button>
      </div>

      <div className="Reviewheader">
        <SmallTitle
          className="ReviewTitle"
          title="Review Your Recent Project"
          fontWeight="700"
          fontSize="36px"
        />
      </div>

      <div className="InProgress">
        <SmallTitle title="In Progress" fontWeight="400" fontSize="32px" />
        <div className="InProgressList">
          {inProgressProjects.map((project, index) => (
            <InProgressProjectTab key={index} {...project} />
          ))}
        </div>
      </div>

      <div>
        <SmallTitle title="Completed" fontWeight="400" fontSize="32px" />
        <div className="CompletedProjectList">
          {completedProjects.map((project, index) => (
            <CompletedProjectTab
              key={index}
              {...project}
              onReviewSubmit={handleReviewFormSubmit}
            />
          ))}
        </div>
      </div>

      {showNotification && (
        <div className="overlay">
          <div className="notification">
            <p>Your review has been successfully submitted!</p>
            <button onClick={() => setShowNotification(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewProjectPage;
