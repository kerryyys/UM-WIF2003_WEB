import React , { useEffect, useState } from "react";
import "../../pages-css/Payment/Payment.css";
import { Button } from "react-bootstrap";

function Invoice() {
  const [invoices, setInvoices] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');

  const PaymentMethod = localStorage.getItem('paymentMethod');

  useEffect(() => {
    setPaymentMethod(PaymentMethod);
  }, []);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch('http://localhost:5050/payment/invoices');
        const data = await response.json();
        setInvoices(data);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };
    fetchInvoices();
  }, []);

  return (
    <div className="invoice-containerner">
      <Button
        className="BackBtn-In-PayHis"
        onClick={() => (window.location.href = "/successful")}>
        <p>
          <i className="bi-chevron-left" />
          Back
        </p>
      </Button>

      <div className="invoice-list">
        
        <p className="paymentHistory">Payment History</p>

        <div className="invoice-listlist">

          {invoices.map((invoice, index) => (
            <div key={index} className="INV">
              <p className="INVName">{paymentMethod}</p>
              <p className="INVPrice">{invoice.projectTitle}</p>
              <p className="INVDesc">RM {parseFloat(invoice.projectBudget) + 10}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
export default Invoice;