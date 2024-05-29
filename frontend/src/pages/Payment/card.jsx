import "../../pages-css/Payment/Payment.css";
import React, { useEffect, useState } from "react";
import fpxPic from "../../assets/images/Payment/fpx.png";
import ewalletPic from "../../assets/images/Payment/ewallet.png";
import cardPic from "../../assets/images/Payment/card.png";

function Card() {
  const [cardNumbers, setCardNumbers] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [country, setCountry] = useState("Malaysia");
  const [taskData, setTaskData] = useState({});

useEffect(() => {
  fetch('http://localhost:6006/getCardNumbers')
    .then(response => response.json())
    .then(data => setCardNumbers(data))
    .catch(error => console.error('Error fetching card numbers:', error));
}, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    window.location.href = "/redirect";
  };

    const handleSubmit = (event) => {
      event.preventDefault();
      
      const selectedCard = {
        cardNumber,
        expirationDate,
        cvv,
        ownerName,
        country,
    };

    if (cardNumber && expirationDate && cvv && ownerName && country) {
      fetch('http://localhost:6006/submitCard', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(selectedCard)
      })
      .then(response => {
          if (response.ok) {
              console.log('Data saved successfully.');
              window.location.href = "/redirect";
          } else {
              throw new Error('Failed to save data.');
          }
      })
      .catch(error => {
          console.error(error);
      });
    } else {
      alert('Please enter all the card details.');
    }
  };

  useEffect(() => {
    fetch('http://localhost:6006/task')
      .then(response => response.json())
      .then(data => setTaskData(data))
      .catch(error => console.error('Error fetching task data:', error));
  }, []);

  let totalPriceString = "RM 10";
  if (taskData && taskData.taskPrice) {
    const priceString = taskData.taskPrice;
    const priceWithoutPrefix = priceString.replace("RM", "").trim();
    const taskPrice = parseFloat(priceWithoutPrefix);

    if (!isNaN(taskPrice)) {
      const totalPrice = taskPrice + 10;
      totalPriceString = "RM " + totalPrice;
    } else {
      console.log("Invalid task price");
    }
  } else {
    console.log("taskData or taskData.taskPrice is undefined");
  }

  const formatCardNumber = (value) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D+/g, '');
    // Group digits in sets of four
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || '';
    return formatted;
  };

  const handleCardNumberChange = (e) => {
    const formattedCardNumber = formatCardNumber(e.target.value);
    setCardNumber(formattedCardNumber);
  };

  const formatExpirationDate = (value) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D+/g, '');
    
    // Limit to 4 digits for MMYY format
    const truncated = cleaned.substring(0, 4);
  
    // Format as MM/YY
    if (truncated.length >= 3) {
      return `${truncated.substring(0, 2)}/${truncated.substring(2, 4)}`;
    } else if (truncated.length >= 1) {
      return truncated;
    }
  
    return '';
  };
  
  const handleExpirationDateChange = (e) => {
    const formattedExpirationDate = formatExpirationDate(e.target.value);
    setExpirationDate(formattedExpirationDate);
  };
  

  return (
    <div className="split-container">
      <div className="LeftContainer">
        <p className="PaymentBigtitle">Payment</p>
        <hr className="line"></hr>
        <p className="titleLinked">Linked payment method:</p>

        <div>
  {cardNumbers.map((number, index) => (
    <div
      key={index}
      onClick={() => handleServiceClick(number)}
      className={`automatedContainer ${selectedService && selectedService.cardNumber === number.cardNumber ? 'selected' : ''}`}
    >
      <p className="BankName">{number.cardNumber}</p>
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
          >
            Online Banking FPX
          </label>
        </div>

        <div className="LeftContainerr">
          <img className="picEwallet" src={ewalletPic} alt="E-Wallet Logo" />
          <label
            className="choose-payment-method"
            onClick={() => (window.location.href = "/ewallet")}
          >
            E- Wallet
          </label>
        </div>

        <div className="LeftContainerr">
          <img className="picCard" src={cardPic} alt="Credit / Debit Card Logo" />
          <label
            onClick={() => (window.location.href = "/card")}
            className="choose-payment-method"
          >
            Credit / Debit Card
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          <p className="titleLinked">Card Number</p>
          <input
            className="cardNo-inputCTN"
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234  5678  9101  1121"
            maxLength="19"
            required
          />

          <div className="split-container">
            <div className="c">
              <p className="titleLinked">Expiration Date</p>
              <input
                className="inputCTN1"
                type="text"
                value={expirationDate}
                onChange={handleExpirationDateChange}
                placeholder="MM/YY"
                maxLength="5"
                required
              />
            </div>
            <div className="c">
              <p className="titleLinked">CVV</p>
              <input
                className="inputCTN2"
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                maxLength="3"
                required
              />
            </div>
          </div>

          <p className="titleLinked">Owner Name</p>
          <input
            className="cardNo-inputCTN"
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            placeholder="David Teo"
            required
          />

          <p className="titleLinked">Country</p>
          <input
            className="cardNo-inputCTN"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Malaysia"
            required
          />

          <button type="submit" className="buttonPay">
            Pay Now
          </button>
        </form>
        <div className="reminder">
          <p>
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>
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
          />
          <span className="buttonApply">Apply</span>
        </form>
        <hr className="lineRightBox"></hr>

        <div>
          <div>
            <p className="descContent">
              <span className="taskName">Subtotal</span>
              <span className="taskPrice">{totalPriceString}</span>
            </p>
          </div>

          <div>
            <p className="descContent">
              <span className="taskName">Additional (6% of service tax)</span>
              <span className="taskPrice">RM 10</span>
            </p>
          </div>
        </div>

        <hr className="lineRightBox"></hr>

        <div>
          <p className="descContent">
            <span className="taskName">Total</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
