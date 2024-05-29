import React from "react";
import { Link } from "react-router-dom";
import "../../pages-css/Payment/Payment.css";
import back from "../../assets/images/Payment/left.png";
import { Button } from "react-bootstrap";

function InvoiceList() {

  const handleDownload = () => {
        const pdfUrl = '';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'invoice.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
  const handleInvClick = () => {
        handleDownload();
      };


  return (
    <><div className="invoice-list-containerner">
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
          <div className="INV" onClick={handleInvClick}>
            <p className="INVName">Completed</p>
            <p className="INVPrice">Shopping Cart App</p>
            <p className="INVDesc">RM 8000</p>
          </div>
        </div>
      </div>
    </div>
    
    <p className="tnc">Terms & Conditions:</p>
    <p className="tncDesc">
        Fees and payment terms will be established in the contract or agreement
        prior to the commencement of the project.{" "}
      </p>
      <p className="tncDesc2">
        An initial deposit will be required before any design work begins. We
        reserve the right to suspend or halt work in the event of non-payment.
      </p></>
    
  );
}
export default InvoiceList;