import React from 'react';
import './App.css';
import hlbPic from './hlb.png'
import islamPic from './islam.png'
import uobPic from './uob.png'
import maybankPic from './maybank.png'
import puPic from './pu.png'
import cimbPic from './cimb.png'
import rhbPic from './rhb.png'
import amPic from './ambank.png'
import rakyatPic from './rakyat.png'

function fpx() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="cardFPX">
            <p className='fpxTitle'>Choose Your Bank</p>
            <img className='photobank' onClick={() => window.location.href = '/redirect'} src={hlbPic}></img>
            <img className='photobank' onClick={() => window.location.href = '/redirect'} src={amPic}></img>
            <img className='photobank' onClick={() => window.location.href = '/redirect'} src={rakyatPic}></img>
            <img className='photobank' onClick={() => window.location.href = '/redirect'} src={islamPic}></img>
            <img className='photobank' onClick={() => window.location.href = '/redirect'} src={uobPic}></img>
            <img className='photobank' onClick={() => window.location.href = '/redirect'} src={maybankPic}></img>
            <img className='photobank' onClick={() => window.location.href = '/redirect'} src={puPic}></img>
            <img className='photobank' onClick={() => window.location.href = '/redirect'} src={cimbPic}></img>
            <img className='photobank' onClick={() => window.location.href = '/redirect'} src={rhbPic}></img>
            <p className='another1' onClick={() => window.location.href = '/choose'}>Pay with another method</p>
          </div>
        </header>
      </div>
    );
  }
  
  export default fpx;
  