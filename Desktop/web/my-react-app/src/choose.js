// Choose.js
import React from 'react';
import './App.css';
import fpxPic from './fpx.png'
import ewalletPic from './ewallet.png'
import cardPic from './card.png'

function Choose() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="chooseTitle">Choose preferred payment method</p>
        <div className="cardContainer">
          <div className="cardChoose" onClick={() => window.location.href = '/fpx'}> 
            <div>
              <img className='picFpx' src={fpxPic} alt="FPX Logo" />
              <p className='fpxWord'>Online Banking FPX</p>
            </div>
          </div>
          <div className="cardChoose" onClick={() => window.location.href = '/ewallet'}> 
            <div>
              <img className='picEwallet' src={ewalletPic} alt="E-Wallet Logo" />
              <p className='cardEwallet'>E-Wallet</p>
            </div>
          </div>
          <div className="cardChoose" onClick={() => window.location.href = '/card'}> 
            <div>
              <img className='picCard' src={cardPic} alt="Credit / Debit Card Logo" />
              <p className='cardWord'>Credit / Debit Card</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Choose;
