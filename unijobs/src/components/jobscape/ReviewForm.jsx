// ReviewForm.js
import React, { useState } from "react";
import Rating from "react-rating";
import "../../components-css/jobscape/ReviewForm.css";

const ReviewForm = ({ onClose, onReviewSubmit }) => {
  const [satisfactionRating, setSatisfactionRating] = useState(0);
  const [projectRating, setProjectRating] = useState(0);
  const [projectFeedback, setProjectFeedback] = useState("");
  const [collaboratorRating, setCollaboratorRating] = useState(0);
  const [collaboratorFeedback, setCollaboratorFeedback] = useState("");

  const handleSubmit = () => {
    console.log("Satisfaction Rating:", satisfactionRating);
    console.log("Project Rating:", projectRating);
    console.log("Project Feedback:", projectFeedback);
    console.log("Collaborator Rating:", collaboratorRating);
    console.log("Collaborator Feedback:", collaboratorFeedback);
    onReviewSubmit(); // Call the onReviewSubmit handler passed from parent component
    onClose();
  };

  return (
    <div className="ReviewForm">
      <p>Project Satisfaction</p>
      <Rating
        initialRating={satisfactionRating}
        onClick={(value) => setSatisfactionRating(value)}
      />
      <p>Rate this Project</p>
      <Rating
        initialRating={projectRating}
        onClick={(value) => setProjectRating(value)}
      />
      <p>Project Feedback</p>
      <textarea
        value={projectFeedback}
        onChange={(e) => setProjectFeedback(e.target.value)}
        rows={4}
      />
      <p>Rate Your Collaborator</p>
      <Rating
        initialRating={collaboratorRating}
        onClick={(value) => setCollaboratorRating(value)}
      />
      <p>Collaborator Feedback</p>
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
