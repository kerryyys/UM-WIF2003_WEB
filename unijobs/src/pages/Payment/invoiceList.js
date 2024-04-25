import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Payment.css";
import back from "../../assets/images/Payment/left.png";
import { Button } from "react-bootstrap";

function InvoiceList() {
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

      <div className="c">
        <p>STATUS</p>
        <p>SERVICE</p>
        <p>PRICE</p>
      </div>

      <div onClick={() => (window.location.href = "/invoice")} className="INV">
        <p className="INVName">Completed</p>
        <p className="INVPrice">Do SPM Mathematics past year question</p>
        <p className="INVDesc">RM 30</p>
      </div>

      <div onClick={() => (window.location.href = "/invoice")} className="INV">
        <p className="INVName">Pending</p>
        <p className="INVPrice">Complete 10 past year question</p>
        <p className="INVDesc">RM 100</p>
      </div>

      <div onClick={() => (window.location.href = "/invoice")} className="INV">
        <p className="INVName">Completed</p>
        <p className="INVPrice">
          Input data from scanned documents into Excel spreadsheet format
        </p>
        <p className="INVDesc">RM 95</p>
      </div>

      <div onClick={() => (window.location.href = "/invoice")} className="INV">
        <p className="INVName">Completed</p>
        <p className="INVPrice">Fill up a survey form</p>
        <p className="INVDesc">RM 60</p>
      </div>

      <div onClick={() => (window.location.href = "/invoice")} className="INV">
        <p className="INVName">Completed</p>
        <p className="INVPrice">
          Write 10 blog articles on topics related to digital marketing and SEO
        </p>
        <p className="INVDesc">RM 200</p>
      </div>

      <div onClick={() => (window.location.href = "/invoice")} className="INV">
        <p className="INVName">Completed</p>
        <p className="INVPrice">Develop a simple mobile app</p>
        <p className="INVDesc">RM 1000</p>
      </div>
    </>
  );
}

export default InvoiceList;
