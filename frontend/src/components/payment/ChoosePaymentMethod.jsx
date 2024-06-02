import React from "react";
import "../../pages-css/Payment/Payment.css";
import fpxPic from "../../assets/images/Payment/fpx.png";
import ewalletPic from "../../assets/images/Payment/ewallet.png";
import cardPic from "../../assets/images/Payment/card.png";

const ChoosePaymentMethod = () => {
  return (
    <>
    <hr className="line"></hr>
    <p className="titleLinked">Pay With:</p>
    <div className="LeftContainerr">
          <img className="picFpx" src={fpxPic} alt="FPX Logo" />
          <label
              className="choose-payment-method"
              onClick={() => (window.location.href = "/fpx")}
              htmlFor="creditCard"
          >
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
              <img className="picCard" src={cardPic} alt="Credit / Debit Card Logo" />
              <label
                  onClick={() => (window.location.href = "/card")}
                  className="choose-payment-method"
                  htmlFor="paypal"
              >
                  Credit / Debit Card
              </label>
          </div>
          </>
  );
};

export default ChoosePaymentMethod;
