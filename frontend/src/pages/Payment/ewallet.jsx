import "../../pages-css/Payment/Payment.css";
import React, { useEffect, useState } from "react";
import fpxPic from "../../assets/images/Payment/fpx.png";
import ewalletPic from "../../assets/images/Payment/ewallet.png";
import cardPic from "../../assets/images/Payment/card.png";
import { Button } from "react-bootstrap";

function Ewallet() {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectBudget, setProjectBudget] = useState('');
  const [taskData, setTaskData] = useState({});
  // read linked ewallet
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchSelectedBanks();
  }, []);

  const fetchSelectedBanks = async () => {
    try {
      const response = await fetch('http://localhost:5050/payment/selectedWallets');
      if (!response.ok) {
        throw new Error('Failed to fetch selected e wallet');
      }
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching selected e wallet:', error);
    }
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  //  write choose what ewallet to pay 
  const [selectedWallet, setSelectedWallet] = useState('');
  const handleWalletChange = (event) => {
    setSelectedWallet(event.target.value);
  };

  const handleSubmit = () => {
    const selectedWallet = document.querySelector('.ewallet').value;

    if (selectedWallet) {
        fetch('http://localhost:5050/payment/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ selectedWallet })
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
        alert('Please select an e-wallet.');
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
          <p className="titleLinked">Linked payment method:</p>

          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => {
                handleServiceClick(service);
                window.location.href = "/redirect";
              } }
              className={`automatedContainer ${selectedService && selectedService.name === service.name ? 'selected' : ''}`}
            >
              <p className="BankName"></p>
              <p>{service.selectedWallet}</p>
            </div>
          ))}

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

          <div>
            <p className="titleLinked">Choose Preferred E-Wallet</p>
            <select
              className="ewallet"
              value={selectedWallet}
              onChange={handleWalletChange}
            >
              <option value="">Select E-Wallet</option>
              <option value="Touch N Go">Touch N Go</option>
              <option value="Boost">Boost</option>
              <option value="Grab Pay">GrabPay</option>
              <option value="MAE">MAE</option>
              <option value="BigPay">BigPay</option>
              <option value="AliPay">AliPay</option>
              <option value="ShopeePay">ShopeePay</option>
            </select>
            {selectedWallet && (
              <p className="selectedEwallet">You selected: {selectedWallet}</p>
            )}
          </div>

          <button
            className="buttonPay"
            onClick={handleSubmit}>
            Pay Now
          </button>
          <div className="reminder">
            <p>Your personal data will be used to process your order, support your experience</p>
            <p>experience throughout this website, and for other purposes described</p>
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
          
          <hr className="lineRightBox"></hr>

          <div>
            <div>
              <p className="descContent">
                <span className="taskName">Subtotal</span>
                <span className="taskPrice">RM {projectBudget}</span>
              </p>
            </div>

            <div>
              <p className="descContent">
                <span className="taskName">Additional ( 6% of service tax )</span>
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
export default Ewallet;