import "../../pages-css/Payment/Payment.css";
import React, { useEffect, useState } from "react";
import fpxPic from "../../assets/images/Payment/fpx.png";
import ewalletPic from "../../assets/images/Payment/ewallet.png";
import cardPic from "../../assets/images/Payment/card.png";

function Ewallet() {
  // read linked ewallet
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchSelectedBanks();
  }, []);

  const fetchSelectedBanks = async () => {
    try {
      const response = await fetch('http://localhost:6006/selectedWallets');
      if (!response.ok) {
        throw new Error('Failed to fetch selected banks');
      }
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error('Error fetching selected banks:', error);
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
        fetch('http://localhost:6006/submit', {
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

// read data to service summary
const [taskData, setTaskData] = useState({});

    useEffect(() => {
        fetch('http://localhost:6006/task')
            .then(response => response.json())
            .then(data => {
                setTaskData(data);
            })
            .catch(error => console.error('Error fetching task data:', error));
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
    <div className="split-container">
      <div className="LeftContainer">
        <p className="PaymentBigtitle">Payment</p>
        <hr className="line"></hr>
        <p className="titleLinked">Linked payment method:</p>

        <div>
  {services.map((service, index) => (
    <div
      key={index}
      onClick={() => {
        handleServiceClick(service);
        window.location.href = "/redirect";
      }}   
      className={`automatedContainer ${selectedService && selectedService.name === service.name ? 'selected' : ''}`}>
      <p className="BankName">{service.name}</p>
    </div>
      ))}
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
            <option value="Grab Pay">Grab Pay</option>
            <option value="MAE">MAE</option>
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
                <span className="taskName">{taskData.taskName}</span>
                <span className="taskPrice">{taskData.taskPrice}</span>
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
              <span className="taskPrice">{taskData.taskPrice}</span>
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
            <span className="taskPrice">{totalPriceString}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Ewallet;