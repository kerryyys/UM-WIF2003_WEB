import "../../pages-css/Payment/Payment.css";
import React, { useState } from "react";
import fpxPic from "../../assets/images/Payment/fpx.png";
import ewalletPic from "../../assets/images/Payment/ewallet.png";
import cardPic from "../../assets/images/Payment/card.png";

function Card() {
  const [cardNumber, setCardNumber, country] = useState("");

  const handleChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if cardNumber is empty before submitting
    if (cardNumber.trim() === "") {
      // Card number is empty, do not submit
      alert("Please enter a card number.");
      return;
    }

    // Continue with form submission
    // You can add your submission logic here
    // For example: send data to server, etc.
    console.log("Submitting form with card number:", cardNumber);
  };
  return (
    <div className="split-container">
      <div className="LeftContainer">
        <p className="PaymentBigtitle">Payment</p>
        <hr className="line"></hr>
        <p className="titleLinked">Linked payment method:</p>

        <div
          onClick={() => (window.location.href = "/redirect")}
          className="automatedContainer"
        >
          <p className="BankName">VISA</p>
          <span className="AccNumHashed">**** **** **** 8968</span>
        </div>

        <div
          onClick={() => (window.location.href = "/redirect")}
          className="automatedContainer"
        >
          <p className="BankName">MasterCard</p>
          <span className="AccNumHashed">**** **** **** 3666</span>
        </div>

        <hr className="line"></hr>
        <p className="titleLinked">Pay With:</p>

        <div className="LeftContainerr">
          <img className="picFpx" src={fpxPic} alt="FPX Logo" />
          <label
            className="choose-payment-method"
            onClick={() => (window.location.href = "/fpx")}
            htmlFor="creditCard"
          >
            {" "}
            Online Banking FPX
          </label>
        </div>

        <div className="LeftContainerr">
          <img className="picEwallet" src={ewalletPic} alt="E-Wallet Logo" />{" "}
          <label
            className="choose-payment-method"
            onClick={() => (window.location.href = "/ewallet")}
            htmlFor="debitCard"
          >
            E- Wallet
          </label>
        </div>

        <div className="LeftContainerr">
          <img
            className="picCard"
            src={cardPic}
            alt="Credit / Debit Card Logo"
          />{" "}
          <label
            onClick={() => (window.location.href = "/card")}
            className="choose-payment-method"
            htmlFor="paypal"
          >
            {" "}
            Credit / Debit Card
          </label>
        </div>

        <p className="titleLinked">Card Number</p>
        <form onSubmit={handleSubmit}>
          <input
            className="cardNo-inputCTN"
            type="text"
            value={cardNumber}
            onChange={handleChange}
            placeholder="1234  5678  9101  1121"
            maxLength="16"
          />
        </form>

        <div className="split-container">
          <div className="c">
            <p className="titleLinked">Expiration Date</p>
            <form onSubmit={handleSubmit}>
              <input className="inputCTN1" type="text" placeholder="MM/YY" />
            </form>
          </div>
          <div className="c">
            <p className="titleLinked">CVV</p>
            <form onSubmit={handleSubmit}>
              <input
                className="inputCTN2"
                type="text"
                placeholder="123"
                maxlength="3"
              />
            </form>
          </div>
        </div>

        <p className="titleLinked">Owner Name</p>
        <form onSubmit={handleSubmit}>
          <input
            className="cardNo-inputCTN"
            type="text"
            placeholder="David Teo"
          />
        </form>

        <p className="titleLinked">Country</p>
        <form onSubmit={handleSubmit}>
          <input
            className="cardNo-inputCTN"
            type="text"
            value={country}
            placeholder="Malaysia"
          />
        </form>

        <button
          type="submit"
          className="buttonPay"
          onClick={() => (window.location.href = "/redirect")}
        >
          Pay Now
        </button>
        <div className="reminder">
          <p>
            Your personal data will be used to process your order, support your
            experience
          </p>
          <p>
            experience throughout this website, and for other purposes described
          </p>
          <p>in our privacy policy.</p>
        </div>
      </div>

      <div className="RightContainer">
        <div>
          <p className="titleRight">Service Summary</p>
          <hr className="lineRightBox"></hr>
        </div>
        <div>
          <p className="descContent">
            <span className="taskName">Complete 10 survey form</span>
            <span className="taskPrice">RM 100.00</span>
          </p>
        </div>

        <hr className="lineRightBox"></hr>
        <form onSubmit={handleSubmit}>
          <input
            className="dis"
            type="text"
            placeholder="Gift or discount code"
          />{" "}
          <span className="buttonApply">Apply</span>
        </form>
        <hr className="lineRightBox"></hr>

        <div>
          <div>
            <p className="descContent">
              <span className="taskName">Subtotal</span>
              <span className="taskPrice">RM 100.00</span>
            </p>
          </div>

          <div>
            <p className="descContent">
              <span className="taskName">Additional</span>
              <span className="taskPrice">RM 10.00</span>
            </p>
          </div>
        </div>

        <hr className="lineRightBox"></hr>

        <div>
          <p className="descContent">
            <span className="taskName">Total</span>
            <span className="taskPrice">RM 110.00</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
