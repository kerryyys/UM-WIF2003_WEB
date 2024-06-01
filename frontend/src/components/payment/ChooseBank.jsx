import { useState } from "react";
import React  from "react";
import "../../pages-css/Payment/Payment.css";

const ChoosePaymentMethod = () => {

  const [selectedBank, setSelectedBank] = useState("");

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
    localStorage.setItem('paymentMethod' , event.target.value);
  };

  const handleSubmit = () => {
    const selectedBank = document.querySelector('.ewallet').value;

    if (selectedBank) {
        fetch('http://localhost:5050/payment/submitBank', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ selectedBank })
        })
        .then(response => {
            if (response.ok) {
                console.log('Data saved successfully.');
                window.location.href = "/redirect"
            } else {
                throw new Error('Failed to save data.');
            }
        })
        .catch(error => {
            console.error(error);
        });
    } else {
        alert('Please select a bank to proceed.');
    }
};
  
  return (
    <>
    <div>
            <p className="titleLinked">Choose Preferred Bank</p>
            <select
              className="ewallet"
              value={selectedBank}
              onChange={handleBankChange}
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
              <option value="HSBC AMANAH MALAYSIA BERHAD">
                HSBC AMANAH MALAYSIA BERHAD
              </option>
              <option value="KENANGA INVESTMENT BANK BERHAD">
                KENANGA INVESTMENT BANK BERHAD
              </option>
              <option value="MALAYAN BANKING BERHAD">
                MALAYAN BANKING BERHAD
              </option>
              <option value="OCBC BANK (MALAYSIA) BERHAD">
                OCBC BANK (MALAYSIA) BERHAD
              </option>
              <option value="PUBLIC BANK BERHAD">
                PUBLIC BANK BERHAD
              </option>
              <option value="RHB BANK BERHAD">
                RHB BANK BERHAD
              </option>
              <option value="	STANDARD CHARTERED BANK MALAYSIA BERHAD">
                STANDARD CHARTERED BANK MALAYSIA BERHAD
              </option>
              <option value="GX BANK">
                GX BANK
              </option>


            </select>
            {selectedBank && (
              <p className="selectedEwallet">You selected: {selectedBank}</p>
            )}
          </div>
          <button
            className="buttonPay"
            onClick={handleSubmit}
          >
            Pay Now
          </button>
          </>
  );
};

export default ChoosePaymentMethod;
