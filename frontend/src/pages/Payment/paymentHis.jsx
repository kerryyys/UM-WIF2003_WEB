import React from "react";
import "../../pages-css/Payment/Payment.css";
import { Button } from "react-bootstrap";

function Invoice() {
  return (
    <div className="invoice-containerner">
      <Button
        className="BackBtn"
        onClick={() => (window.location.href = "/successful")}>
        <p>
          <i className="bi-chevron-left" />
          Back
        </p>
      </Button>

      <div className="invoice-list">
        
      <p className="paymentHistory">Payment History</p>

      <div className="invoice-listlist">
        <div className="INV">
          <p className="INVName">HLB</p>
          <p className="INVPrice">Shopping Cart App</p>
          <p className="INVDesc">RM 8000</p>
        </div>

        
      </div>
      </div>
    </div>
  );
}
export default Invoice;