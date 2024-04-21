// ReviewProjectPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SmallTitle from "../../components/jobscape/SmallTitle";
import InProgressProjectTab from "../../components/jobscape/InProgressProjectTab";
import CompletedProjectTab from "../../components/jobscape/CompletedProjectTab";
import "../../components-css/jobscape/Notification.css";
import "../../styles/ReviewProjectPage.css";

const ReviewProjectPage = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleReviewFormSubmit = () => {
    setShowNotification(true);
  };

  return (
    <div className="ReviewProjectPage">
      <div className="header">
        <Link to="/SeekTalentPage" className="BackButton">
          &lt; BACK
        </Link>
        <SmallTitle className="ReviewTitle"
          title="Review Your Recent Project"
          fontWeight="700"
          fontSize="36px"
        />
      </div>

      <div className="InProgress">
        <SmallTitle title="In Progress" fontWeight="400" fontSize="32px" />
        <div className="InProgressList">
          {/* shld be can scroll horizontally */}
          <InProgressProjectTab
            projectTitle="E-commerce Website "
            due="16 May 2024"
            budget="RM 8,000"
            collaborator="Peter Lim"
          />
          <InProgressProjectTab
            projectTitle="E-commerce Website "
            due="16 May 2024"
            budget="RM 8,000"
            collaborator="Peter Lim"
          />
          <InProgressProjectTab
            projectTitle="E-commerce Website "
            due="16 May 2024"
            budget="RM 8,000"
            collaborator="Peter Lim"
          />
        </div>
      </div>

      <div>
        <SmallTitle title="Completed" fontWeight="400" fontSize="32px" />
        <div className="CompletedProjectList">
          <CompletedProjectTab
            projectTitle="E-commerce Website "
            due="16 May 2024"
            budget="RM 8,000"
            collaborator="Peter Lim"
            onReviewSubmit={handleReviewFormSubmit} // Pass handleReviewFormSubmit
          />
          <CompletedProjectTab
            projectTitle="E-commerce Website "
            due="16 May 2024"
            budget="RM 8,000"
            collaborator="Peter Lim"
            onReviewSubmit={handleReviewFormSubmit} // Pass handleReviewFormSubmit
          />
          <CompletedProjectTab
            projectTitle="E-commerce Website "
            due="16 May 2024"
            budget="RM 8,000"
            collaborator="Peter Lim"
            onReviewSubmit={handleReviewFormSubmit} // Pass handleReviewFormSubmit
          />
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
