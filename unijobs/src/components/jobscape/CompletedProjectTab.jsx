import React, { useState } from "react";
import { Link } from "react-router-dom";
import SmallTitle from "../../components/jobscape/SmallTitle";
import ReviewForm from "../../components/jobscape/ReviewForm";
import "../../components-css/jobscape/CompletedProjectTab.css";

const CompletedProjectTab = ({
  projectTitle,
  due,
  budget,
  collaborator,
  onReviewSubmit,
}) => {
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleRateBtnClick = () => {
    setShowReviewForm(true);
  };

  return (
    <>
      <div className="CompletedProjectTab">
        <div className="projectDetails">
          <SmallTitle title={projectTitle} fontWeight={700} fontSize="24px" />
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
          onClose={() => setShowReviewForm(false)}
          onReviewSubmit={onReviewSubmit} // Pass onReviewSubmit handler
        />
      )}
    </>
  );
};

export default CompletedProjectTab;
