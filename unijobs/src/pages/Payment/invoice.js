import React from 'react';
import '../../styles/Payment.css';
import back from '../../assets/images/Payment/left.png';

function Invoice() {
  return (
    <>
    
<img className='LeftPic'  onClick={() => window.location.href = '/successful'} src={back}></img>

    <div className='cardContainer'>
      <div className='invoiceHolder'>Mr. Wu</div>
      <div className='cardContainer'>
        <div className='invoiceDetails'>
          <div className='invoiceAmount'>
            AMOUNT DUE
          <br></br>
          <p className='Amount'>RM <span>30</span></p>
          <p className='date'>July 26, 2024</p>
          </div>
          <p className='invoiceWord'>Invoice To: </p>
          <p className='Invoicename'>Howard</p>
          <p>012-3456789</p>
          <p className='location'>Sabah, Malaysia</p>
        </div>
      </div>
    </div>

    <div className="cardInvoiceNo">
    <div className='invoiceDesc2'>
        <p>Invoice No: <span>000027</span></p>
        <p>Issued By: <span>June 26, 2024</span></p>
        <p>Due Date: <span>July 26, 2024</span></p>
    </div>
</div>


    <div className='cardContainer'>
    <div className="cardInvoiceDesc">

    <div class='invoiceDesc'>
    <p class="descColumn">DESCRIPTION</p> 
    <p class="priceColumn">PRICE</p>
</div>
<div class='invoiceDesc2'>
    <p class="descContent">Fill up survey about faculty research programme</p>
    <p class="priceContent">RM 50.00</p>
</div>
<div class='invoiceDesc2'>
    <p class="descContent">Send the new tyre urgently</p>
    <p class="priceContent">RM 70.00</p>
</div>
<div class='invoiceDesc2'>
    <p class="descContent">Java Assignment</p>
    <p class="priceContent">RM 120.00</p>
</div>
<div class='invoiceDesc2'>
    <p class="descContent">Solve KBAT SPM Add Math Questions</p>
    <p class="priceContent">RM 50.00</p>
</div>
           
</div>

    <p className='totalAmt'>TOTAL AMOUNT: </p>
    <p className='greatTotal'>RM 290.00</p>
    </div>

    <p className='tnc'>Terms & Conditions:</p>
    <p className='tncDesc'>Fees and payment terms will be established in the contract or agreement prior to the commencement of the project. </p>
    <p className='tncDesc2'>An initial deposit will be required before any design work begins. We reserve the right to suspend or halt work in the event of non-payment.</p>
   

    <div className='button4-CTN'>
    <button className='buttonDown'>Download</button>
    </div>
    
    
    </>
  );
}

export default Invoice;
