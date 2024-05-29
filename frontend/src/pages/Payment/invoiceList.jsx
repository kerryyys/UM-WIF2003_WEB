import React from "react";
import { Link } from "react-router-dom";
import "../../pages-css/Payment/Payment.css";
import back from "../../assets/images/Payment/left.png";
import { Button } from "react-bootstrap";

function InvoiceList() {
  return (
    <div className="invoice-list-containerner">
      <div className="invoice-listing">

        <Button
          className="BackBtn"
          onClick={() => (window.location.href = "/successful")}>
          <p>
            <i className="bi-chevron-left" />
            Back
          </p>
        </Button>

        <div className="card-wenhao">
          <p className="INV-title-name">Invoice List</p>
          <div onClick={() => (window.location.href = "/invoice")} className="INV">
            <p className="INVName">Completed</p>
            <p className="INVPrice">Shopping Cart App</p>
            <p className="INVDesc">RM 8000</p>
          </div>

          <div onClick={() => (window.location.href = "/invoice")} className="INV">
            <p className="INVName">In Progress</p>
            <p className="INVPrice">Online Banking App</p>
            <p className="INVDesc">RM 15000</p>
          </div>

          <div onClick={() => (window.location.href = "/invoice")} className="INV">
            <p className="INVName">Completed</p>
            <p className="INVPrice">Mental Health App</p>
            <p className="INVDesc">RM 9000</p>
          </div>

          <div onClick={() => (window.location.href = "/invoice")} className="INV">
            <p className="INVName">In Progress</p>
            <p className="INVPrice">Photography Session</p>
            <p className="INVDesc">RM 1000</p>
          </div>

          <div onClick={() => (window.location.href = "/invoice")} className="INV">
            <p className="INVName">In Progress</p>
            <p className="INVPrice">E-commerce Website</p>
            <p className="INVDesc">RM 8000</p>
          </div>

          <div onClick={() => (window.location.href = "/invoice")} className="INV">
            <p className="INVName">In Progress</p>
            <p className="INVPrice">Planting Session</p>
            <p className="INVDesc">RM 7000</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default InvoiceList;