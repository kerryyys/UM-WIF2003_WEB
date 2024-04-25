// Home.js
import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="title">Just A Step To Pay</p>
        <p className='desc'>We provide a seamless experience in making your payment</p>
        <p className="descSecond">to assure your smoothness & accessibility</p>
        <div className="card">
          <div>
            <p className='greet'>Total Amount</p>
            <div className="price">
              <span className='currency'>RM </span>
              <span className='amount'>50</span>
            </div>
            <button className='buttonPay' onClick={() => window.location.href = '/choose'}>Pay Now</button>
            <button className='buttonView' onClick={() => window.location.href = '/paymentHis'}>View Payment History</button>
            <p className='alert'>Payment secured and powered by UniJobs</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
