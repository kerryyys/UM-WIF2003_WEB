import "../../pages-css/Payment/Payment.css";
import React, { useEffect, useState } from "react";
import BackButton from '../../components/payment/BackButton';
import ServiceSummary from '../../components/payment/serviceSummary';
import Reminder from '../../components/payment/Reminder';
import ChoosePaymentMethod from "../../components/payment/ChoosePaymentMethod";

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
    localStorage.setItem('paymentMethod' , service.selectedWallet);
  };

  //  write choose what ewallet to pay 
  const [selectedWallet, setSelectedWallet] = useState('');
  const handleWalletChange = (event) => {
    setSelectedWallet(event.target.value);
    localStorage.setItem('paymentMethod' , event.target.value);
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
  return (
    <>
    <BackButton/>
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
          <ChoosePaymentMethod/>
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
          <Reminder/>
        </div>
        <ServiceSummary 
        projectTitle={projectTitle} 
        projectBudget={projectBudget} 
        taskData={taskData} 
      />
      </div></>
  );
}
export default Ewallet;