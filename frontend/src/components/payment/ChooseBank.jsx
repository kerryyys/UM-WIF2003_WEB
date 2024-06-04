import { useState } from "react";
import React  from "react";
import "../../pages-css/Payment/Payment.css";
import { useUserContext } from "../../context/UserContext";
import axios from '../../utils/customAxios';

const ChoosePaymentMethod = () => {
  const {user} = useUserContext();
  console.log("Your jobs page userContext: " + JSON.stringify(user));

  const [selectedBank, setSelectedBank] = useState("");

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
    localStorage.setItem('paymentMethod' , event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const selectedBank = document.querySelector('.ewallet').value;

    if (!user) {
      alert('Please log in before submitting the bank details.');
      return;
    }

    if (!selectedBank) {
      alert('Please select a bank to proceed.');
      return;
    }

    const payload = {
      selectedBank,
      userId: user._id
    };

    console.log(payload);

    try {
      const response = await axios.post('http://localhost:5050/payment/submitBank', payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.status === 200) {
        console.log('Data saved successfully.');
        window.location.href = "/redirect";
      } else {
        throw new Error('Failed to save data.');
      }
    } catch (error) {
      console.error("Error saving data:", error);
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
