import '../../styles/Payment.css';
import React, { useState } from 'react';
import fpxPic from '../../assets/images/Payment/fpx.png';
import ewalletPic from '../../assets/images/Payment/ewallet.png';
import cardPic from '../../assets/images/Payment/card.png';

function Ewallet() {
    const [selectedWallet, setSelectedWallet] = useState('');

    const handleWalletChange = (event) => {
      setSelectedWallet(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform further actions here, such as submitting the form data
        console.log("Submitted card number:",);
      };
  

  return (
        <div className="split-container">
          <div className="LeftContainer">
            <p className="PaymentBigtitle">Payment</p>
            <hr className = 'line'></hr>
            <p className='title'>Linked payment method:</p>

            <div onClick={() => window.location.href = '/redirect'} className='automatedContainer'>
    <p className='BankName'>Grab Pay</p>
    <span className='AccNumHashed'>6011****2599</span>
</div>

<div onClick={() => window.location.href = '/redirect'} className='automatedContainer'>
    <p className='BankName'>Touch N Go E Wallet</p>
    <span className='AccNumHashed'>6011****2599</span>
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
   
  <img className='picCard' src={cardPic} alt="Credit / Debit Card Logo" /><label onClick={() => window.location.href = '/'} className='choose' htmlFor="paypal" > Credit / Debit Card</label>
  </div>

      <div>
      <p className='title'>Choose Preferred E-Wallet</p>
      <select className='ewallet' value={selectedWallet} onChange={handleWalletChange}>
        <option value="">Select E-Wallet</option>
        <option value="Touch N Go">Touch N Go</option>
        <option value="Boost">Boost</option>
        <option value="Grab Pay">Grab Pay</option>
        <option value="MAE">MAE</option>
      </select>
      {selectedWallet && <p className='selectedEwallet'>You selected: {selectedWallet}</p>}
    </div>
      
    <button className='buttonPay' onClick={() => window.location.href = '/redirect'} >Pay Now</button>
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

export default Ewallet;
