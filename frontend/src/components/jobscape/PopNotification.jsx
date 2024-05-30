import React from "react";
import "../../components-css/jobscape/Notification.css";

const PopNotification = ({ message, onClose }) => {
  return (
    <div className="overlay">
      <div className="post-project-notification">
        <p>{message}</p>
        <button onClick={onClose} className="closePopNoti">
          Close
        </button>
      </div>
    </div>
  );
};

export default PopNotification;
