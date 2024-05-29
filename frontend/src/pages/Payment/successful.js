import React from "react";
import { Link } from "react-router-dom";
import "../../pages-css/Payment/Payment.css";
import back from "../../assets/images/Payment/left.png";
import tickPic from "../../assets/images/Payment/check-mark.png";

function Successful() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="cardSuccessful">
          <p className="successMsg">Successfully made payment</p>
          <img className="tick" src={tickPic} alt="Check Mark"></img>
          <br></br>
          <br></br>
          <button
            onClick={() => (window.location.href = "/invoiceList")}
            className="buttonSuccessful"
          >
            Generate Invoice
          </button>
          <br></br>
          <button
            onClick={() => (window.location.href = "/paymentHis")}
            className="buttonSuccessful"
          >
            View Payment History
          </button>
        </div>
      </header>
    </div>
  );
}

export default Successful;
