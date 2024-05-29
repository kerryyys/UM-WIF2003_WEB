import React from "react";
import "../../pages-css/Payment/Payment.css";
import back from "../../assets/images/Payment/left.png";
import { Button } from "react-bootstrap";

function Invoice() {
  return (
    <>
      <Button
        className="BackBtn"
        onClick={() => (window.location.href = "/invoiceList")}
      >
        <p>
          <i className="bi-chevron-left" />
          Back
        </p>
      </Button>

      <div className="cardContainer">
        <div className="invoiceHolder">
          Project Name -  <span> Shopping Cart App</span>
          <br></br>
          Issue to -  <span> Peter Lim</span>
          </div>
        <div className="cardContainer">
          <div className="invoiceDetails">
            <div className="invoiceAmount">
              AMOUNT DUE
              <br></br>
              <p className="Amount">
                RM <span>8000</span>
              </p>
              <p className="date">May 20, 2024</p>
            </div>
            <p className="invoiceWord">Invoice To: </p>
            <p className="Invoicename">James Chin</p>
            <p>012-3456789</p>
            <p className="location">Sabah, Malaysia</p>
          </div>
        </div>
      </div>

      <div className="cardInvoiceNo">
        <div className="invoiceDesc-long-bar">
          <p>
            Invoice No: <span>000027</span>
          </p>
          <p>
            Issued By: <span>May 20, 2024</span>
          </p>
          <p>
            Due Date: <span>June 20, 2024</span>
          </p>
        </div>
      </div>

      <div className="cardContainer-desc-price">
        <div className="cardInvoiceDesc">
          <div class="invoiceDesc">
            <p class="descColumn">DESCRIPTION</p>
            <p class="priceColumn">PRICE</p>
          </div>
          <div class="invoiceDesc2">
            <p class="descContent">
              App Design
            </p>
            <p class="priceContent">RM 2000</p>
          </div>
          <div class="invoiceDesc2">
            <p class="descContent">Front End Developemnt</p>
            <p class="priceContent">RM 4000</p>
          </div>
          <div class="invoiceDesc2">
            <p class="descContent">Back End Development</p>
            <p class="priceContent">RM 3000</p>
          </div>
          <div class="invoiceDesc2">
            <p class="descContent">Software Testing</p>
            <p class="priceContent">RM 1500</p>
          </div>
        </div>

        <p className="totalAmt">TOTAL AMOUNT: </p>
        <p className="greatTotal">RM 8000</p>
      </div>

      <p className="tnc">Terms & Conditions:</p>
      <p className="tncDesc">
        Fees and payment terms will be established in the contract or agreement
        prior to the commencement of the project.{" "}
      </p>
      <p className="tncDesc2">
        An initial deposit will be required before any design work begins. We
        reserve the right to suspend or halt work in the event of non-payment.
      </p>

      <div className="button4-CTN">
        <button className="buttonDown">Download</button>
      </div>
    </>
  );
}

export default Invoice;
