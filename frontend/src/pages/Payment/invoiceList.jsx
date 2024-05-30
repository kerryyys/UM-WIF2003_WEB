import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../pages-css/Payment/Payment.css";
import { Button } from "react-bootstrap";
import Tnc from "../../components/payment/tnc";
// import { useInvoice } from '../../context/UserContext';

function InvoiceList() {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectBudget, setProjectBudget] = useState('');
  const [invoices, setInvoices] = useState([]);
  const location = useLocation();


  // const { projectTitle, projectBudget } = useInvoice();


  useEffect(() => {
    
    const title = localStorage.getItem('projectTitle');
    const budget = localStorage.getItem('projectBudget');

    if (title && budget) {
      setProjectTitle(title);
      setProjectBudget(budget);
      setInvoices([{ projectTitle: title, projectBudget: budget }]);
    } 
    else if (location.state) {
      const { projectTitle, projectBudget } = location.state;
      setProjectTitle(projectTitle.toString());
      setProjectBudget(projectBudget.toString());
      setInvoices([{ projectTitle: projectTitle.toString(), projectBudget: projectBudget.toString() }]);
    }
  }, [location.state]);

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
          <p className="INVPrice">{projectTitle}</p>
          <p className="INVDesc">RM {parseFloat(projectBudget) + 10}</p>
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