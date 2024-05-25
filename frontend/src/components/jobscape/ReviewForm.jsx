import React, { useState } from "react";
import Rating from "react-rating";
import { BsStarFill } from "react-icons/bs"; // Import the star icon from react-icons/bs
import "../../components-css/jobscape/ReviewForm.css";

const ReviewForm = ({ onClose, onReviewSubmit, setShowNotification }) => {
  const [satisfactionRating, setSatisfactionRating] = useState(0);
  const [projectRating, setProjectRating] = useState(0);
  const [projectFeedback, setProjectFeedback] = useState("");
  const [collaboratorRating, setCollaboratorRating] = useState(0);
  const [collaboratorFeedback, setCollaboratorFeedback] = useState("");

  const handleSubmit = () => {
    // Prepare review data object
    const reviewData = {
      satisfactionRating,
      projectRating,
      projectFeedback,
      collaboratorRating,
      collaboratorFeedback,
    };
    console.log("Review Data:", reviewData); // Debugging log
    // Call the onReviewSubmit handler passed from parent component with reviewData
    onReviewSubmit(reviewData);
    onClose();
  };

  // Define custom star icons for the Rating component
  const starIcon = <BsStarFill color="#FFD700" size={24} />; // Define a gold star icon
  const emptyStarIcon = <BsStarFill color="#ccc" size={24} />; // Define an empty star icon

  return (
    <div className="ReviewForm">
      <p className="rate1">Rate The Project!</p>
      <p className="projectheader">Project Satisfaction</p>
      <Rating
        initialRating={satisfactionRating}
        onClick={(value) => setSatisfactionRating(value)}
        emptySymbol={emptyStarIcon}
        fullSymbol={starIcon}
      />
      <p className="rate1">Rate this Project</p>
      <Rating
        initialRating={projectRating}
        onClick={(value) => setProjectRating(value)}
        emptySymbol={emptyStarIcon}
        fullSymbol={starIcon}
      />
      <p className="rate1">Project Feedback</p>
      <textarea
        value={projectFeedback}
        onChange={(e) => setProjectFeedback(e.target.value)}
        rows={4}
      />
      <p className="rate1">Rate Your Collaborator</p>
      <Rating
        initialRating={collaboratorRating}
        onClick={(value) => setCollaboratorRating(value)}
        emptySymbol={emptyStarIcon}
        fullSymbol={starIcon}
      />
      <p className="rate1">Collaborator Feedback</p>
      <textarea
        value={collaboratorFeedback}
        onChange={(e) => setCollaboratorFeedback(e.target.value)}
        rows={4}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ReviewForm;
