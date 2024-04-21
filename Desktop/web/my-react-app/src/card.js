import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Card() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCVC] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission, e.g., validate inputs, send data to server
    console.log('Submitted:', { cardNumber, expiry, cvc, country, postalCode });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="cardCard">
          <p className='desc'>Enter your details here</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className='cardVar' htmlFor="cardNumber">Card Number</label>
            <input className='cardinput'
              type="text"
              id="cardNumber"
              placeholder='5533 2455 7812 3696'
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className='cardVar' htmlFor="expiry">Expiry</label>
            <input className='cardinput1'
              type="text"
              placeholder='MM / YY'
              id="expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className='cardVar' htmlFor="cvc">CVC</label>
            <input className='cardinput4'
              type="text"
              id="cvc"
              placeholder='***'
              value={cvc}
              onChange={(e) => setCVC(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className='cardVar' htmlFor="country">Country</label>
            <input className='cardinput2'
              type="text"
              id="country"
              placeholder='Malaysia'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className='cardVar' htmlFor="postalCode">Postal Code</label>
            <input className='cardinput3'
              type="text"
              id="postalCode"
              placeholder='50602'
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </div>
          <button onClick={() => window.location.href = '/redirect'} className='button1' type="submit">Submit</button>
        </form>
          <p className='another1' onClick={() => window.location.href = '/choose'}>Pay with another method</p>
        </div>
      </header>
    </div>
  );
}

export default Card;
