import React from "react";
import { Link } from "react-router-dom";
import "../../pages-css/Payment/Payment.css";
import back from "../../assets/images/Payment/left.png";
import { Button } from "react-bootstrap";

function Invoice() {
  return (
    <>
      <Button
        className="BackBtn"
        onClick={() => (window.location.href = "/successful")}
      >
        <p>
          <i className="bi-chevron-left" />
          Back
        </p>
      </Button>

      <div className="cardPendingPayment">
        <p className="pendingTitle">Pending Payment</p>
        <p className="pendingPrice">RM 250.00</p>
        <p className="pendingDesc">as of 01-December 2023</p>
      </div>

      <p className="paymentHistory">Payment History</p>

      <div className="invoiceTitle">
        <button className="buttonPayHis">All</button>
        <button className="buttonPayHis">Completed</button>
        <button className="buttonPayHis">Pending</button>
        <button className="buttonPayHis">Rejected</button>
      </div>

      <div className="invoiceTitle2">
        <p>Payment Method</p>
        <p>Service</p>
        <p>Price</p>
      </div>

      <div className="INV">
        <p className="INVName">Boost</p>
        <p className="INVPrice">Do SPM Mathematics past year question</p>
        <p className="INVDesc">RM 30</p>
      </div>

      <div className="INV">
        <p className="INVName">MAE</p>
        <p className="INVPrice">
          Input data from scanned documents into Excel spreadsheet format
        </p>
        <p className="INVDesc">RM 200</p>
      </div>

      <div className="INV">
        <p className="INVName">Grab Pay</p>
        <p className="INVPrice">Complete 10 past year question</p>
        <p className="INVDesc">RM 70</p>
      </div>

      <div className="button4-CTN">
        <button className="buttonDown">Download</button>
      </div>
    </>
  );
}

export default Invoice;
