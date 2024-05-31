import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../pages-css/Payment/Payment.css";
import { Button } from "react-bootstrap";
import Tnc from "../../components/payment/tnc";
// import { useInvoice } from '../../context/UserContext';

function InvoiceList() {
  const [invoices, setInvoices] = useState([]);

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

  const handleDownload = () => {
        const pdfUrl = '';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'invoice.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
  const handleInvClick = () => {
        handleDownload();
      };

  return (
    <><div className="invoice-list-containerner">
      <div className="invoice-listing">

        <Button
          className="BackBtn"
          onClick={() => (window.location.href = "/successful")}>
          <p>
            <i className="bi-chevron-left" />
            Back
          </p>
        </Button>

        <div className="card-wenhao">
          <p className="INV-title-name">Invoice List</p>
          {invoices.map((invoice, index) => (
        <div key={index} className="INV" onClick={() => handleInvClick(invoice)}>
          <p className="INVName">Completed</p>
          <p className="INVPrice">{invoice.projectTitle}</p>
          <p className="INVDesc">RM {parseFloat(invoice.projectBudget) + 10}</p>
        </div>
      ))}
        </div>
      </div>
    </div>
      <Tnc />
      </>
    
  );
}
export default InvoiceList;