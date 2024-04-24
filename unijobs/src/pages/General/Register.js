import '../../styles/General.css';
import React, { useState } from 'react';

function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState({});
    const [userType, setUserType] = useState('recruiter');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload

        // Validate input fields (replace with your own logic)
        if (!fullName) {
            setErrorMessages({ name: 'fullName', message: 'Please enter your full name' });
        } else if (!email) {
            setErrorMessages({ name: 'email', message: 'Please enter your email' });
        } else if (!password) {
            setErrorMessages({ name: 'password', message: 'Please enter your password' });
        } else {
            // Successful registration logic
            console.log('Registration successful!');
        }
    };
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    return (
        <div className="background">
            <form onSubmit={handleSubmit} className="form2-container">
                <h2 className="title">Create Account</h2>
                <div className="login-options">
                    <hr className="hr-left" />
                    <p className="normal-text">Signup with</p>
                    <hr className="hr-right" />
                </div>
                <div className="button-group">
                    <button className="facebook-button">
                        <img src="/img/logos_facebook.png" alt="Facebook Logo" />
                        Facebook
                    </button>
                    <button className="facebook-button">
                        <img src="/img/flat-color-icons_google.png" alt="Google Logo" />
                        Google
                    </button>
                </div>
                <div className="login-options">
                    <hr className="hr-left" />
                    <p className="normal-text">Or</p>
                    <hr className="hr-right" />
                </div>
                <div className="input-container">
                    <input
                        className="usernameInput"
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    {renderErrorMessage('fullName')}
                </div>
                {/* Email Input */}
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
                {/* Password Input */}
                <div className="input-container">
                    <input
                        className="usernameInput"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {renderErrorMessage('password')}
                </div>
                <div className="radio-container">
                    <input
                        type="radio"
                        id="recruiter"
                        name="userType"
                        value="recruiter"
                        checked={userType === 'recruiter'}
                        onChange={() => setUserType('recruiter')}
                    />
                    <label htmlFor="recruiter">Recruiter</label>
                    <input
                        type="radio"
                        id="freelance"
                        name="userType"
                        value="freelance"
                        checked={userType === 'freelance'}
                        onChange={() => setUserType('freelance')}
                    />
                    <label htmlFor="freelance">Freelancer</label>
                </div>
                <div className="button-container1">
                    <input type="submit" value="Create Account" onClick={handleSubmit} />
                </div>
                <div className="normal-text">
                    Already a member? <span onClick={() => window.location.href = '/Login'} className="sign-up">Login now</span>
                </div>
            </form>
        </div>
    );
}

export default Register;
