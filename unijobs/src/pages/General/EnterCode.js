import '../../styles/General.css';
import React, { useState, useRef, useEffect } from 'react';

function EnterCode() {
    const [codes, setCodes] = useState(['', '', '', '']);
    const [errorMessages, setErrorMessages] = useState({});
    const codeInputs = useRef([]);

    useEffect(() => {
        codeInputs.current[0].focus();
    }, []);

    // Function to handle digit input and move focus to the next input box
    const handleInput = (index, value) => {
        setCodes((prevCodes) => {
            const newCodes = [...prevCodes];
            newCodes[index] = value;

            // Move focus to the next input box if not the last one
            if (index < 3 && value !== '') {
                codeInputs.current[index + 1].focus();
            }

            return newCodes;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload

        // Validate input fields (replace with your own logic)
        const code = codes.join('');
        if (code.length !== 4) {
            setErrorMessages({ name: 'code', message: 'Please enter a 4-digit code' });
        } else {
            // Proceed with verification logic
            console.log('Verification code: ', code);
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
                <h2 className="title">Enter Verification Code</h2>
                <p className="transparent-text">
                    Enter the 4-digit verification code sent to your email.
                </p>
                {/* Code Inputs */}
                <div className="code-inputs">
                    {codes.map((value, index) => (
                        <input
                            key={index}
                            className="codeInput"
                            type="text"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleInput(index, e.target.value)}
                            required
                            ref={(input) => (codeInputs.current[index] = input)}
                        />
                    ))}
                </div>
                {renderErrorMessage('code')}
                <div className="button-container1">
                    <input onClick={() => window.location.href = '/NewPass'} type="submit" value="Verify Code"  />
                </div>
            </form>
        </div>
    );
}

export default EnterCode;
