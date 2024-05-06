import React, { useState, useEffect } from "react";
import "../../pages-css/General/General.css";
import ticking from "../../assets/images/General/Successmark.png";

function Notification({ message }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // Hide the notification after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="notification show">
      <img src={ticking} alt="Success Tick" className="notification-logo" />
      <p className="title2">{message}</p>{" "}
      {/* Display the message passed from props */}
    </div>
  );
}

export default Notification;
