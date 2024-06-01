import "../../pages-css/Payment/Payment.css";
import React, { useEffect, useState } from "react";
import fpxPic from "../../assets/images/Payment/fpx.png";
import ewalletPic from "../../assets/images/Payment/ewallet.png";
import cardPic from "../../assets/images/Payment/card.png";
import BackButton from '../../components/payment/BackButton';
import Reminder from '../../components/payment/Reminder';
import ChooseBank from '../../components/payment/ChooseBank';
import ChoosePaymentMethod from "../../components/payment/ChoosePaymentMethod";

function Fpx() {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectBudget, setProjectBudget] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    const title = localStorage.getItem('projectTitle');
    const budget = localStorage.getItem('projectBudget');

    if (title && budget) {
      setProjectTitle(title);
      setProjectBudget(budget);
    }
  }, []);

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
    localStorage.setItem('paymentMethod' , service);
  };

  // write choose what bank to pay
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
    <BackButton/>
    
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
          <ChoosePaymentMethod/>
          <ChooseBank/>
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
      </div></>
  );
}
export default Fpx;