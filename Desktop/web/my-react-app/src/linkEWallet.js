import React, { useState } from 'react';
import './App.css';
import tngPic from './tng.png'

function LinkEWallet() {
  const [mobile, setMobile] = useState('');
  const [pin, setPin] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', { mobile, pin });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={tngPic} alt="TNG logo" />
        <p className='titleLink'>Linking to Your E-Wallet...</p>

        <div className="card">
          <form onSubmit={handleSubmit}>
          <p className='mobile'>Mobile No.</p>
            <label htmlFor="mobile">Mobile No.:</label>
            <input className='mobileinput'
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="0123456789"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />

            <p className='pin'>6 Digit Pin</p>
            <label htmlFor="pin">6 Digit Pin:</label>
            <input className='pininput'
              type="password"
              id="pin"
              name="pin"
              pattern="\d{6}"
              title="Please enter a 6-digit PIN"
              placeholder="******"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              maxLength={6}
              required
            />
            <br></br>
            <button type="submit" className='button' onClick={() => window.location.href = '/redirect'}>Confirm</button>
          </form>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="automaticPayment"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)} // Toggle checkbox state
            />
            <label className='alert' htmlFor="automaticPayment">Do you want to pay automatically with your linked account?</label>
          </div>
        </div>
      </header>
    </div>
  );
}

export default LinkEWallet;
