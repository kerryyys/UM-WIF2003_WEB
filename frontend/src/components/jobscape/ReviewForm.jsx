import React, { useState } from "react";
import Rating from "react-rating";
import { BsStarFill } from "react-icons/bs";
import "../../components-css/jobscape/ReviewForm.css";

const ReviewForm = ({ onClose, onReviewSubmit, setShowNotification }) => {
  const [satisfactionRating, setSatisfactionRating] = useState(0);
  const [projectRating, setProjectRating] = useState(0);
  const [projectFeedback, setProjectFeedback] = useState("");
  const [collaboratorRating, setCollaboratorRating] = useState(0);
  const [collaboratorFeedback, setCollaboratorFeedback] = useState("");

  const isFormComplete = () => {
    return (
      satisfactionRating > 0 &&
      projectRating > 0 &&
      projectFeedback.trim() !== "" &&
      collaboratorRating > 0 &&
      collaboratorFeedback.trim() !== ""
    );
  };

  const handleSubmit = () => {
    if (isFormComplete()) {
      const reviewData = {
        satisfactionRating,
        projectRating,
        projectFeedback,
        collaboratorRating,
        collaboratorFeedback,
      };
      onReviewSubmit(reviewData);
      onClose();
    } else {
      setShowNotification(true);
    }
  };

  const starIcon = <BsStarFill color="#FFD700" size={24} />;
  const emptyStarIcon = <BsStarFill color="#ccc" size={24} />;

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="ReviewForm">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p className="rate1">Rate The Project!</p>
        <div className="rating-section">
          <p>Project Satisfaction</p>
          <Rating
            initialRating={satisfactionRating}
            onClick={(value) => setSatisfactionRating(value)}
            emptySymbol={emptyStarIcon}
            fullSymbol={starIcon}
          />
        </div>
        <div className="rating-section">
          <p>Rate this Project</p>
          <Rating
            initialRating={projectRating}
            onClick={(value) => setProjectRating(value)}
            emptySymbol={emptyStarIcon}
            fullSymbol={starIcon}
          />
        </div>
        <div className="feedback-section">
          <p>Project Feedback</p>
          <textarea
            value={projectFeedback}
            onChange={(e) => setProjectFeedback(e.target.value)}
            rows={4}
          />
        </div>
        <div className="rating-section">
          <p>Rate Your Collaborator</p>
          <Rating
            initialRating={collaboratorRating}
            onClick={(value) => setCollaboratorRating(value)}
            emptySymbol={emptyStarIcon}
            fullSymbol={starIcon}
          />
        </div>
        <div className="feedback-section">
          <p>Collaborator Feedback</p>
          <textarea
            value={collaboratorFeedback}
            onChange={(e) => setCollaboratorFeedback(e.target.value)}
            rows={4}
          />
        </div>
        <button onClick={handleSubmit} disabled={!isFormComplete()}>
          Submit
        </button>
      </div>
    </>
  );
};

export default ReviewForm;
