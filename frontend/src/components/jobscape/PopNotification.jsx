import React from "react";
import "../../components-css/jobscape/Notification.css";

const PopNotification = ({ message, onClose }) => {
  // Refreshes the page
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="overlay">
      <div className="post-project-notification">
        <p>{message}</p>
        <button onClick={refreshPage} className="closePopNoti">
          Close
        </button>
      </div>
    </div>
  );
};

export default PopNotification;
