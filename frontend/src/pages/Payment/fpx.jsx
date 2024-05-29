import "../../pages-css/Payment/Payment.css";
import React, { useEffect, useState } from "react";
import fpxPic from "../../assets/images/Payment/fpx.png";
import ewalletPic from "../../assets/images/Payment/ewallet.png";
import cardPic from "../../assets/images/Payment/card.png";
import { Button } from "react-bootstrap";

function Fpx() {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectBudget, setProjectBudget] = useState('');
  const [taskData, setTaskData] = useState({});
  
  // read linked FPX
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchSelectedBanks();
  }, []);

  const fetchSelectedBanks = async () => {
    try {
      const response = await fetch('http://localhost:5050/payment/selectedBanks');
      if (!response.ok) {
        throw new Error('Failed to fetch selected banks');
      }
      const data = await response.json();
      console.log(data); // Log the fetched data to inspect its structure
      setServices(data);
    } catch (error) {
      console.error('Error fetching selected banks:', error);
    }
  };
  

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  // write choose what bank to pay
  const [selectedBank, setSelectedBank] = useState("");

  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
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

// get task name and price
useEffect(() => {
  fetch('http://localhost:5050/payment/task')
    .then(response => response.json())
    .then(data => {
      const { projectTitle, projectBudget } = data;
      setProjectTitle(projectTitle.toString());
      setProjectBudget(projectBudget.toString());
    })
    .catch(error => console.error('Error fetching project data:', error));
}, []);

    // total price
    let totalPrice;
    let totalPriceString;
    if (taskData && taskData.taskPrice) {
      const priceString = taskData.taskPrice;
      const priceWithoutPrefix = priceString.replace("RM", "").trim();
      const taskPrice = parseFloat(priceWithoutPrefix);
      
      if (!isNaN(taskPrice)) {
          totalPrice = taskPrice + 10;
          totalPriceString = "RM " + totalPrice;
      } else {
          console.log("Invalid task price");
      }
  } else {
      console.log("taskData or taskData.taskPrice is undefined");
  }
  
  
  return (
    <><Button
      className="BackBtn"
      onClick={() => (window.location.href = "/ReviewProjectPage")}>
      <p>
        <i className="bi-chevron-left" />
        Back
      </p>
    </Button>
    
    <div className="split-container">
        <div className="LeftContainer">
          <p className="PaymentBigtitle">Payment</p>
          <hr className="line"></hr>
          <p className="titleLinked">Linked payment method: </p>

          <div>
            {services.map((service, index) => {
              console.log(service);
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleServiceClick(service);
                    window.location.href = "/redirect";
                  } }
                  className={`automatedContainer ${selectedService && selectedService.name === service.name ? 'selected' : ''}`}
                >
                  <p className="BankName">{service.name}</p>
                  {service}
                </div>
              );
            })}
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
              alt="Credit / Debit Card Logo" />{" "}
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
              <span className="taskName">{projectTitle}</span>
              <span className="taskPrice"> RM {projectBudget}</span>
            </p>
          </div>

          <hr className="lineRightBox"></hr>
          <form onSubmit={handleSubmit}>
            <input
              className="dis"
              type="text"
              placeholder="Gift or discount code" />{" "}
            <span className="buttonApply">Apply</span>
          </form>
          <hr className="lineRightBox"></hr>

          <div>
            <div>
              <p className="descContent">
                <span className="taskName">Subtotal</span>
                <span className="taskPrice">{projectBudget}</span>
              </p>
            </div>

            <div>
              <p className="descContent">
                <span className="taskName">Additional( 6% of service tax )</span>
                <span className="taskPrice">RM 10</span>
              </p>
            </div>
          </div>

          <hr className="lineRightBox"></hr>

          <div>
            <p className="descContent">
              <span className="taskName">Total</span>
              <span className="taskPrice">RM {parseFloat(projectBudget) + 10}</span>
            </p>
          </div>
        </div>
      </div></>
  );
}
export default Fpx;