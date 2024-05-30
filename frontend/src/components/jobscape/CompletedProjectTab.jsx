import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import SmallTitle from "../../components/jobscape/SmallTitle";
import ReviewForm from "../../components/jobscape/ReviewForm";
import ProjectDetailsModal from "./ProjectDetailsModal";
import "../../components-css/jobscape/CompletedProjectTab.css";

const CompletedProjectTab = ({
  projectId,
  projectTitle,
  due,
  budget,
  collaborator,
  setShowNotification,

  
}) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showProjectDetails, setShowProjectDetails] = useState(false);
  const [projectDetails, setProjectDetails] = useState(null);
  const navigate = useNavigate();

  const handleRateBtnClick = () => {
    setShowReviewForm(true);
  };

  const handleCloseReview = () => {
    setShowReviewForm(false);
  };

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
  
  const handlePayBtnClick = async () => {
    try {
      const response = await fetch(`http://localhost:5050/projects/${projectId}`);
      const data = await response.json();
      const { projectTitle, projectBudget } = data;
      navigate("/ewallet", {
        state: { projectTitle, projectBudget }
      });
    } catch (error) {
      console.error('Error fetching project data:', error);
    }
  };

  const handleCloseProjectDetails = () => {
    setShowProjectDetails(false);
  };

  const handleSubmitReview = async (reviewData) => {
    try {
      const response = await fetch(
        `http://localhost:5050/recruite/${projectId}/saveReview`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewData),
        }
      );
      const data = await response.json();
      console.log("Review saved:", data);
      setShowNotification(true); // Call setShowNotification to show the notification
    } catch (error) {
      console.error("Error saving review:", error);
    }
  };

  return (
    <>
      <div className="CompletedProjectTab" onClick={handleProjectClick}>
        <div className="projectDetails">
          <SmallTitle title={projectTitle} fontWeight={700} fontSize="21px" />
          <div className="content">
            <div className="DetailsType">
              <p>Due</p>
              <p>Budget</p>
              <p>Collaborator</p>
            </div>
            <div className="Details">
              <p>{due}</p>
              <p>{budget}</p>
              <div>{collaborator}</div>
            </div>
          </div>
        </div>
        <div className="TabBtn">
          <div className="RateBtn" onClick={handleRateBtnClick}>
            Rate
          </div>
          <Link className="PayBtn" onClick={handlePayBtnClick}>
            Pay
          </Link>
        </div>
      </div>
      {showReviewForm && (
        <ReviewForm
          onClose={handleCloseReview}
          onReviewSubmit={handleSubmitReview}
          setShowNotification={setShowNotification} // Pass setShowNotification as a prop
        />
      )}
      {showProjectDetails && projectDetails && (
        <ProjectDetailsModal
          project={projectDetails}
          onClose={handleCloseProjectDetails}
        />
      )}
    </>
  );
};

export default CompletedProjectTab;