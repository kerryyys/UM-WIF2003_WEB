import React, { useEffect, useState } from "react";
import BackButton from '../../components/payment/BackButton';
import Reminder from '../../components/payment/Reminder';
import ChoosePaymentMethod from "../../components/payment/ChoosePaymentMethod";

const Card = () => {

  const [cardNumbers, setCardNumbers] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [country, setCountry] = useState("Malaysia");
  const [projectTitle, setProjectTitle] = useState(null);
  const [projectBudget, setProjectBudget] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('');


  useEffect(() => {
    const title = localStorage.getItem('projectTitle');
    const budget = localStorage.getItem('projectBudget');

    if (title && budget) {
      setProjectTitle(title);
      setProjectBudget(budget);
    }
  }, []);

  useEffect(() => {
    // Fetch card numbers
    fetch("http://localhost:5050/payment/getCardNumbers")
      .then((response) => response.json())
      .then((data) => setCardNumbers(data))
      .catch((error) =>
        console.error("Error fetching card numbers:", error)
      );
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    localStorage.setItem('paymentMethod' , service.cardNumber);
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
      fetch("http://localhost:5050/payment/submitCard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedCard),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Data saved successfully.");
            window.location.href = "/redirect";
          } else {
            throw new Error("Failed to save data.");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Please enter all the card details.");
    }
  }; 

  // Format card number input
  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D+/g, "");
    const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || "";
    return formatted;
  };

  const handleCardNumberChange = (e) => {
    const formattedCardNumber = formatCardNumber(e.target.value);
    setCardNumber(formattedCardNumber);
    localStorage.setItem('paymentMethod' , e.target.value);
  };

  // Format expiration date input
  const formatExpirationDate = (value) => {
    const cleaned = value.replace(/\D+/g, "");
    const truncated = cleaned.substring(0, 4);
    if (truncated.length >= 3) {
      return `${truncated.substring(0, 2)}/${truncated.substring(2, 4)}`;
    } else if (truncated.length >= 1) {
      return truncated;
    }

    return "";
  };

  const handleExpirationDateChange = (e) => {
    const formattedExpirationDate = formatExpirationDate(e.target.value);
    setExpirationDate(formattedExpirationDate);
  };

  return (
    <> 
    <BackButton/>
    
    <div className="split-container">
        <div className="LeftContainer">
          <p className="PaymentBigtitle">Payment</p>
          <hr className="line" />

          <p className="titleLinked">Linked payment method:</p>

          <div>
            {cardNumbers.map((number, index) => (
              <div
                key={index}
                onClick={() => handleServiceClick(number)}
                className={`automatedContainer ${selectedService &&
                    selectedService.cardNumber === number.cardNumber
                    ? "selected"
                    : ""}`}
              >
                <p className="BankName">{number.cardNumber}</p>
              </div>
            ))}
          </div>
          <ChoosePaymentMethod/>
          <form onSubmit={handleSubmit}>
            <p className="titleLinked">Card Number</p>
            <input
              className="cardNo-inputCTN"
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              placeholder="1234  5678  9101  1121"
              maxLength="19"
              required />

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
                  required />
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
                  required />
              </div>
            </div>

            <p className="titleLinked">Owner Name</p>
            <input
              className="cardNo-inputCTN"
              type="text"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              placeholder="David Teo"
              required />

            <p className="titleLinked">Country</p>
            <input
              className="cardNo-inputCTN"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Malaysia"
              required />

            <button type="submit" className="buttonPay">
              Pay Now
            </button>
          </form>
          <Reminder/>
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
      
      <div>
        <div>
          <p className="descContent">
            <span className="taskName">Subtotal</span>
            <span className="taskPrice">RM {projectBudget}</span>
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
          <span className="taskPrice">RM {10 + parseFloat(projectBudget)}</span>
        </p>
      </div>
    </div>
      </div>
      </>
  );
}
export default Card;