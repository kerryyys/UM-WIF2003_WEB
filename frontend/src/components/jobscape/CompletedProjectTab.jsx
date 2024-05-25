import React, { useState } from "react";
import { Link } from "react-router-dom";
import SmallTitle from "../../components/jobscape/SmallTitle";
import ReviewForm from "../../components/jobscape/ReviewForm";
import "../../components-css/jobscape/CompletedProjectTab.css";

const CompletedProjectTab = ({
  projectId,
  projectTitle,
  due,
  budget,
  collaborator,
  setShowNotification
}) => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleRateBtnClick = () => {
    setShowReviewForm(true);
  };

  const handleClose = () => {
    setShowReviewForm(false);
  };

  const handleSubmitReview = async (reviewData) => {
    try {
      const response = await fetch(
        "http://localhost:5050/recruite/" + projectId + "/saveReview",
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
      <div className="CompletedProjectTab">
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
          <Link to="/card" className="PayBtn">
            Pay
          </Link>
        </div>
      </div>
      {showReviewForm && (
        <ReviewForm
          onClose={handleClose}
          onReviewSubmit={handleSubmitReview}
          setShowNotification={setShowNotification} // Pass setShowNotification as a prop
        />
      )}
    </>
  );
};

export default CompletedProjectTab;
