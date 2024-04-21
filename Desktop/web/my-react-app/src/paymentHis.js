import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import back from './left.png'

function Invoice() {
  return (
    <>
    <img className='backPic' onClick={() => window.location.href = '/'} src={back}></img>

    <div className="cardPendingPayment">
        <p className='pendingTitle'>Pending Payment</p>
        <p className='pendingPrice' >RM 250.00</p>
        <p className='pendingDesc'>as of 01-December 2023</p>
    </div>

    <p className='paymentHistory'>Payment History</p>

    <div className='invoiceTitle'>
        <button className='button'>All</button>
        <button className='button'>Complete</button>
        <button className='button'>Pending</button>
        <button className='button'>Rejected</button>
    </div>

    <div onClick={() => window.location.href = '/invoice'} className="cardInvoiceList">
        <div className='invoiceDesc'>
            <p>Completed</p>
            <p>Do SPM Mathematics past year question</p>
            <p>RM 30</p>
        </div>
    </div>
    <div onClick={() => window.location.href = '/invoice'} className="cardInvoiceList">
        <div className='invoiceDesc'>
            <p>Completed</p>
            <p>Do SPM Mathematics past year question</p>
            <p>RM 30</p>
        </div>
    </div>
    <div onClick={() => window.location.href = '/invoice'} className="cardInvoiceList">
        <div className='invoiceDesc'>
            <p>Completed</p>
            <p>Do SPM Mathematics past year question</p>
            <p>RM 30</p>
        </div>
    </div>
    <div onClick={() => window.location.href = '/invoice'} className="cardInvoiceList">
        <div className='invoiceDesc'>
            <p>Completed</p>
            <p>Do SPM Mathematics past year question</p>
            <p>RM 30</p>
        </div>
    </div><div onClick={() => window.location.href = '/invoice'} className="cardInvoiceList">
        <div className='invoiceDesc'>
            <p>Completed</p>
            <p>Do SPM Mathematics past year question</p>
            <p>RM 30</p>
        </div>
    </div>


    <div className='button4-CTN'>
    <button className='buttonDown'>Download</button>
    </div>
    
    
    </>
  );
}

export default Invoice;
