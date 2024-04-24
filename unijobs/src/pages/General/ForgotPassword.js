import '../../styles/General.css';
import React, { useState } from 'react';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [errorMessages, setErrorMessages] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload

        // Validate input fields (replace with your own logic)
        if (!email) {
            setErrorMessages({ name: 'email', message: 'Please enter your email' });
        } else {
            // Proceed with forgot password logic
            console.log('Forgot password: ', email);
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    return (
        <div className="background">
            <form onSubmit={handleSubmit} className="forgot-container">
                <h2 className="title">Forgot Password</h2>
                <p className="transparent-text">
                Enter your email for the verification process, we will send 4 digits code to your email.
                </p>
                <div className="input-container">
                    <input
                        className="usernameInput"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {renderErrorMessage('email')}
                </div>
                <div className="button-container1">
                    <input onClick={() => window.location.href = '/EnterCode'} type="submit" value="Send Code" />
                </div>
            </form>
        </div>
        
    );
}

export default ForgotPassword;
