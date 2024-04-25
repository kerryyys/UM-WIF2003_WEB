import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import back from './left.png'

function InvoiceList() {
  return (
    <>
    <img className='backPic' onClick={() => window.location.href = '/'} src={back}></img>


    <div className='invoiceTitle'>
    <p>STATUS</p>
    <p>SERVICE</p>
    <p>PRICE</p>
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
            <p>RM 60</p>
        </div>
    </div>
    <div onClick={() => window.location.href = '/invoice'} className="cardInvoiceList">
    <div className='invoiceDesc'>
            <p>Pending</p>
            <p>Do SPM Mathematics past year question</p>
            <p>RM 98</p>
        </div>
    </div>
    <div onClick={() => window.location.href = '/invoice'} className="cardInvoiceList">
    <div className='invoiceDesc'>
            <p>Pending</p>
            <p>Do SPM Mathematics past year question</p>
            <p>RM 30</p>
        </div>
    </div>
    <div onClick={() => window.location.href = '/invoice'} className="cardInvoiceList">
    <div className='invoiceDesc'>
            <p>Pending</p>
            <p>Complete a Google Form survey</p>
            <p>RM 5</p>
        </div>
    </div>
    <div onClick={() => window.location.href = '/invoice'} className="cardInvoiceList">
    <div className='invoiceDesc'>
            <p>Completed</p>
            <p>xxx</p>
            <p>RM 50</p>
        </div>
    </div>
    <div onClick={() => window.location.href = '/invoice'} className="cardInvoiceList">
    <div className='invoiceDesc'>
            <p>Completed</p>
            <p>Fetch goods to Kuala Lumpur</p>
            <p>RM 200</p>
        </div>
    </div>
    </>
  );
}

export default InvoiceList;
