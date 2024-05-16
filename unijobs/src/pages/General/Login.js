import "../../pages-css/General/General.css";
import React, { useState } from "react";
import Notification from "../../pages/General/Notification";
import google from "../../assets/images/General/logos_facebook.png";
import facebook from "../../assets/images/General/flat-color-icons_google.png";
import sideBackground from "../../assets/images/General/LOGIN.png";

function App({ handleLoginClick }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [userType, setUserType] = useState("recruiter");
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = () => {
    setShowNotification(true); // Show the notification when the button is clicked
    setTimeout(() => {
      setShowNotification(false); // Hide the notification after a delay
      handleLoginClick();
      window.location.href = "/JobscapeMainPage"; // Redirect after hiding the notification
    }, 3000); // Adjust the timeout duration as needed
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Simulate successful login
    // You can replace this logic with your actual authentication mechanism
    // For demonstration purposes, let's consider any username and password as valid
    // Replace 'your_username' and 'your_password' with your actual username and password
    if (username === "your_username" && password === "your_password") {
      setErrorMessages({});
      // Successful login logic (redirect, show success message, etc.)
      alert("Login successful!");
    } else {
      // Invalid username or password
      setErrorMessages({
        name: "invalid",
        message: "Invalid username or password",
      });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  return (
    <div className="login-background">
      <img className="login-flower-pic" src={sideBackground}></img>
      <form onSubmit={handleSubmit} className="login-form-container">
        <h2 className="login-title">Login Now</h2>
        <div className="login-input-container">
          <input
            className="login-usernameInput"
            placeholder="Username"
            type="textt"
            name="uname"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="login-input-container">
          <input
            className="login-usernameInput"
            placeholder="Password"
            type="password"
            name="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="login-radio-container">
          <input
            type="radio"
            id="recruiter"
            name="userType"
            value="recruiter"
            checked={userType === "recruiter"}
            onChange={() => setUserType("recruiter")}
          />
          <label htmlFor="recruiter">Recruiter</label>
          <input
            type="radio"
            id="freelance"
            name="userType"
            value="freelance"
            checked={userType === "freelance"}
            onChange={() => setUserType("freelance")}
          />
          <label htmlFor="freelance">Freelancer</label>
        </div>
        <div className="login-checkbox-container">
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe" className="remember-label">
            Remember me on this computer
          </label>
        </div>
        {showNotification && <Notification message="Login Successfully!" />}{" "}
        {/* Conditionally render the notification */}
        <div className="login-button-container">
          <input type="submit" value="Login" onClick={handleClick} />
        </div>
        <div className="login-forgot-password">
          <span
            onClick={() => (window.location.href = "/ForgotP")}
            className="login-forgot-password-text"
          >
            Forgot Password?
          </span>
        </div>
        <div className="login-options">
          <hr className="login-hr-left" />
          <p className="login-normal-text">Or login with</p>
          <hr className="login-hr-right" />
        </div>
        <div className="login-button-group">
          <button className="login-facebook-button">
            <img src={google} alt="Facebook Logo" />
            Facebook
          </button>
          <button className="login-facebook-button">
            <img src={facebook} alt="Google Logo" />
            Google
          </button>
        </div>
        <div className="login-normal-text">
          Not a member?{" "}
          <span
            onClick={() => (window.location.href = "/Register")}
            className="login-sign-up"
          >
            Sign up now
          </span>
        </div>
      </form>
    </div>
  );
}

export default App;
