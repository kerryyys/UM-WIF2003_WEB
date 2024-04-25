import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import tngPic from './tng.png'
import maePic from './mae.png'
import boostPic from './boost.png'
import grabPic from './grab.png'

function EWallet() {
  return (
    <div className="App">
    <header className="App-header">
      <p className="chooseTitle">We Prefer To Use</p>

      <div className='pic-Container'>
      <img onClick={() => window.location.href = '/redirect'} className='photo' src={tngPic}></img>
      <img onClick={() => window.location.href = '/redirect'} className='photo' src={maePic}></img>
      <img onClick={() => window.location.href = '/redirect'} className='photo' src={boostPic}></img>
      <img onClick={() => window.location.href = '/redirect'} className='photo' src={grabPic}></img>
      </div>
     
      <div className='parallel'>
        <div>
            <p className='another' onClick={() => window.location.href = '/choose'}>Pay with another method</p>
        </div>
        <div>
            <p className='another' onClick={() => window.location.href = '/linkEWallet'}>Link E-Wallet Account</p>
        </div>
      </div>
      </header>
    </div>
  );
}

export default EWallet;
