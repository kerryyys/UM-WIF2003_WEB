import '../../styles/Payment.css';
import React, { useState } from 'react';
import fpxPic from '../../assets/images/Payment/fpx.png';
import ewalletPic from '../../assets/images/Payment/ewallet.png';
import cardPic from '../../assets/images/Payment/card.png';

function Card() {
  const [cardNumber, setCardNumber, country] = useState('');

  const handleChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Check if cardNumber is empty before submitting
    if (cardNumber.trim() === '') {
      // Card number is empty, do not submit
      alert('Please enter a card number.');
      return;
    }

    // Continue with form submission
    // You can add your submission logic here
    // For example: send data to server, etc.
    console.log('Submitting form with card number:', cardNumber);
  };
  return (
        <div className="split-container">
          <div className="LeftContainer">
            <p className="PaymentBigtitle">Payment</p>
            <hr className = 'line'></hr>
            <p className='title'>Linked payment method:</p>

            <div onClick={() => window.location.href = '/redirect'} className='automatedContainer'>
    <p className='BankName'>VISA</p>
    <span className='AccNumHashed'>**** **** **** 8968</span>
</div>

<div onClick={() => window.location.href = '/redirect'} className='automatedContainer'>
    <p className='BankName'>MasterCard</p>
    <span className='AccNumHashed'>**** **** **** 3666</span>
</div>

            <hr className = 'line'></hr>
            <p className="title">Pay With:</p>
            <div className="LeftContainerr">
            <img className='picFpx' src={fpxPic} alt="FPX Logo" /><label className='choose' onClick={() => window.location.href = '/fpx'}  htmlFor="creditCard"> Online Banking FPX</label>
      </div>

      <div className="LeftContainerr">
      
      <img className='picEwallet' src={ewalletPic} alt="E-Wallet Logo" /><label className='choose' onClick={() => window.location.href = '/ewallet'} htmlFor="debitCard" >E- Wallet</label>
      </div>

      <div className="LeftContainerr">
       
      <img className='picCard' src={cardPic} alt="Credit / Debit Card Logo" /> <label onClick={() => window.location.href = '/'} className='choose' htmlFor="paypal" > Credit / Debit Card</label>
      </div>

      <p className='title'>Card Number</p>
      <form onSubmit={handleSubmit}>  
        <input className='input-container'
          type="text"
          value={cardNumber}
          onChange={handleChange}
          placeholder="1234  5678  9101  1121"
          maxLength="16"
        />
      </form>

      <div className='split-container'>
      <div className='c'>
        <p className='title'>Expiration Date</p>
        <form onSubmit={handleSubmit}>
          <input
            className='input-container1'
            type="text"
            placeholder="MM/YY"
          />
        </form>
      </div>
      <div className='c'>
        <p className='title'>CVV</p>
        <form onSubmit={handleSubmit}>
          <input
            className='input-container2'
            type="text"
            placeholder="123"
            maxlength="3"
          />
        </form>
      </div>
    </div>

    <p className='title'>Owner Name</p>
      <form onSubmit={handleSubmit}>
        <input className='input-container'
          type="text"
          placeholder="David Teo"
        />
      </form>

    <p className='title'>Country</p>
      <form onSubmit={handleSubmit}>
        <input className='input-container'
          type="text"
          value={country}
          placeholder="Malaysia"
        />
      </form>

    <button type="submit" className='buttonPay' onClick={() => window.location.href = '/redirect'}>Pay Now</button>
    <div className='reminder'>
      <p>Your personal data will be used to process your order, support your experience</p>
      <p>experience throughout this website, and for other purposes described</p>
      <p>in our privacy policy.</p>
    </div>
    
          </div>
          
          <div className="RightContainer">
            <div>
                <p className='titleRight'>Service Summary</p>
                <hr className = 'lineRight'></hr>
            </div>
            <div>
  <p className='descContent'>
    <span className='taskName'>Complete 10 survey form</span>
    <span className='taskPrice'>RM 100.00</span>
  </p>
</div>

            <hr className = 'lineRight'></hr>
            <form onSubmit={handleSubmit}>
        <input className='discount-container'
          type="text"
          placeholder="Gift or discount code"
        /> <span> <button className='buttonApply'>Apply</button> </span>
      </form>
      <hr className = 'lineRight'></hr>

      <div>
      <div>
  <p className='descContent'>
    <span className='taskName'>Subtotal</span>
    <span className='taskPrice'>RM 100.00</span>
  </p>
</div>

<div>
  <p className='descContent'>
    <span className='taskName'>Additional</span>
    <span className='taskPrice'>RM 10.00</span>
  </p>
</div>

            </div>

            <hr className = 'lineRight'></hr>

            <div>
  <p className='descContent'>
    <span className='taskName'>Total</span>
    <span className='taskPrice'>RM 110.00</span>
  </p>
</div>

          </div>
        </div>
  );
}

export default Card;
