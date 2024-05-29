import "../../pages-css/Payment/Payment.css";
import React, { useState } from "react";
import fpxPic from "../../assets/images/Payment/fpx.png";
import ewalletPic from "../../assets/images/Payment/ewallet.png";
import cardPic from "../../assets/images/Payment/card.png";

function Fpx() {
  const [selectedWallet, setSelectedWallet] = useState("");

  const handleWalletChange = (event) => {
    setSelectedWallet(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further actions here, such as submitting the form data
    console.log("Submitted card number:");
  };

  return (
    <div className="split-container">
      <div className="LeftContainer">
        <p className="PaymentBigtitle">Payment</p>
        <hr className="line"></hr>
        <p className="titleLinked">Linked payment method: </p>

        <div
          onClick={() => (window.location.href = "/redirect")}
          className="automatedContainer"
        >
          <p className="BankName">Hong Leong Bank</p>
          <span className="AccNumHashed">**** **** **** 4533</span>
        </div>

        <div
          onClick={() => (window.location.href = "/redirect")}
          className="automatedContainer"
        >
          <p className="BankName">CIMB Bank</p>
          <span className="AccNumHashed">**** **** **** 9866</span>
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

        <div>
          <p className="titleLinked">Choose Preferred Bank</p>
          <select
            className="ewallet"
            value={selectedWallet}
            onChange={handleWalletChange}
          >
            <option value="" disabled hidden>
              Select Bank
            </option>
            <option value="AFFIN BANK BERHAD">AFFIN BANK BERHAD</option>
            <option value="ALLIANCE BANK MALAYSIA BERHAD">
              ALLIANCE BANK MALAYSIA BERHAD{" "}
            </option>
            <option value="AMBANK (M) BERHAD">AMBANK (M) BERHAD</option>
            <option value="BANK ISLAM MALAYSIA BERHAD">
              BANK ISLAM MALAYSIA BERHAD
            </option>
            <option value="BANK MUAMALAT (MALAYSIA) BERHAD">
              BANK MUAMALAT (MALAYSIA) BERHAD
            </option>
            <option value="CIMB BANK BERHAD">CIMB BANK BERHAD</option>
            <option value="CITIBANK BERHAD">CITIBANK BERHAD</option>
            <option value="HONG LEONG BANK BERHAD">
              HONG LEONG BANK BERHAD
            </option>
          </select>
          {selectedWallet && (
            <p className="selectedEwallet">You selected: {selectedWallet}</p>
          )}
        </div>

        <button
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

export default Fpx;
