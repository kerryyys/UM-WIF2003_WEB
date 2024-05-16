import "../../pages-css/General/General.css";
import React, { useState } from "react";
import sideBackground from "../../assets/images/General/LOGIN.png";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Validate input fields (replace with your own logic)
    if (!email) {
      setErrorMessages({ name: "email", message: "Please enter your email" });
    } else {
      // Proceed with forgot password logic
      console.log("Forgot password: ", email);
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
      <form onSubmit={handleSubmit} className="login-forgot-container">
        <h2 className="login-title">Forgot Password</h2>
        <p className="login-transparent-text">
          Enter your email for the verification process, we will send 4 digits
          code to your email.
        </p>
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
        <div className="login-button-container1">
          <input
            onClick={() => (window.location.href = "/EnterCode")}
            type="submit"
            value="Send Code"
          />
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
