import "../../pages-css/General/General.css";
import React, { useState } from "react";
import google from "../../assets/images/General/logos_facebook.png";
import facebook from "../../assets/images/General/flat-color-icons_google.png";
import sideBackground from "../../assets/images/General/LOGIN.png";
import { postRegistration } from "../../api/authApi";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [userType, setUserType] = useState("recruiter");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Validate input fields (replace with your own logic)
    if (!fullName) {
      setErrorMessages({
        name: "fullName",
        message: "Please enter your full name",
      });
    } else if (!email) {
      setErrorMessages({ name: "email", message: "Please enter your email" });
    } else if (!password) {
      setErrorMessages({
        name: "password",
        message: "Please enter your password",
      });
    } else {
      // Successful registration logic
      console.log("Registration successful!");
    }
  };

  const handleRegistration = () => {
    postRegistration(email, fullName, password);
    window.location.href = "/Login";
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  return (
    <div className="login-background">
      <img
        alt="decoration"
        className="login-flower-pic"
        src={sideBackground}
      ></img>
      <form onSubmit={handleSubmit} className="login-form2-container">
        <h2 className="login-title">Create Account</h2>
        <div className="login-options">
          <hr className="login-hr-left" />
          <p className="login-normal-text">Signup with</p>
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
        <div className="login-options">
          <hr className="login-hr-left" />
          <p className="login-normal-text">Or</p>
          <hr className="login-hr-right" />
        </div>

        <div className="login-input-container">
          <input
            className="login-usernameInput"
            type="textt"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          {renderErrorMessage("email")}
        </div>

        {/* Email Input */}
        <div className="login-input-container">
          <input
            className="login-usernameInput"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {renderErrorMessage("email")}
        </div>
        {/* Password Input */}
        <div className="login-input-container">
          <input
            className="login-usernameInput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {renderErrorMessage("password")}
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
        <div className="login-button-container1">
          <input
            type="submit"
            value="Create Account"
            onClick={handleRegistration}
          />
        </div>

        <div className="login-normal-text">
          Already a member?{" "}
          <span
            onClick={() => (window.location.href = "/Login")}
            className="login-sign-up"
          >
            Login now
          </span>
        </div>
      </form>
    </div>
  );
}

export default Register;
