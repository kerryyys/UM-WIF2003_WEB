import "../../styles/General.css";
import React, { useState } from "react";
import Notification from "../../pages/General/Notification";
import sideBackground from "../../assets/images/General/LOGIN.png";

function EnterCode() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = () => {
    setShowNotification(true); // Show the notification when the button is clicked
    setTimeout(() => {
      setShowNotification(false); // Hide the notification after a delay
      window.location.href = "/Login"; // Redirect after hiding the notification
    }, 3000); // Adjust the timeout duration as needed
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Validate input fields (replace with your own logic)
    if (!password || !newPassword) {
      setErrorMessages({
        name: "password",
        message: "Please enter both password and new password",
      });
    } else {
      // Proceed with verification logic
      console.log("Password:", password);
      console.log("New Password:", newPassword);
      // Redirect to NewPass page or perform any other action
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div className="background">
      <img className="flower-pic" src={sideBackground}></img>
      <form onSubmit={handleSubmit} className="forgot-container">
        <h2 className="login-title">Reset Password</h2>
        <p className="transparent-text">
          Set the new password for your account so you can login and access all
          features.
        </p>
        <div className="login-input-container">
          <input
            className="usernameInput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="login-input-container">
          <input
            className="usernameInput"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        {renderErrorMessage("password")}
        {showNotification && (
          <Notification message="Password Reset Successfully!" />
        )}{" "}
        {/* Conditionally render the notification */}
        <div className="button-container2">
          <input type="submit" value="Reset Password" onClick={handleClick} />
        </div>
      </form>
    </div>
  );
}

export default EnterCode;
