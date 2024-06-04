import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../../pages-css/Payment/Payment.css";
import Tnc from "../../components/payment/tnc";
import { useUserContext } from "../../context/UserContext";
import axios from '../../utils/customAxios';

function InvoiceList() {
  
  const [invoices, setInvoices] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    const fetchInvoices = async (userId) => {
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:5050/payment/invoices?postedBy=${userId}`);
          console.log("API Response:", response.data);
          if (response.status === 200) {
            setInvoices(response.data);
          } else {
            throw new Error('Failed to fetch invoices.');
          }
        } catch (error) {
          console.error('Error fetching invoices:', error);
        }
      }
    };
    
    if (user._id) {
      fetchInvoices(user._id);
    }
  }, [user]);


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