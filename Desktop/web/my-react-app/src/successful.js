import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import tickPic from './check-mark.png';

function Successful() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="cardSuccessful">
          <p className='successMsg'>Successfully made payment</p>
          <img className='tick' src= {tickPic} alt='Check Mark'></img>
          <br></br>
          <br></br>
          <Link to='/invoiceList' className='button2'>Generate Invoice</Link>
          <Link to='/paymentHis' className='button3'>View Payment History</Link>
        </div>
      </header>
    </div>
  );
}

export default Successful;
