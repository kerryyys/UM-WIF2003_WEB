import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "../../pages-css/Payment/Payment.css";
import Tnc from "../../components/payment/tnc";
import { useUserContext } from "../../context/UserContext";
import axios from '../../utils/customAxios';
import jsPDF from 'jspdf';

function InvoiceList() {
  
  const [invoices, setInvoices] = useState([]);
  const [invoiceContent, setInvoiceContent] = useState('');
  const { user } = useUserContext();

  useEffect(() => {
    const fetchInvoices = async (userId) => {
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:5050/payment/invoices/${userId}`);
          console.log("API Response (Invoice List)", response.data);
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

  useEffect(() => {
    const fetchInvoiceContent = async (userId) => {
      if (userId) {
        try {
          const response = await axios.get(`http://localhost:5050/payment/invoiceContent/${userId}`);
          console.log("API Response (Invoice Content):", response.data);
          if (response.status === 200) {
            setInvoiceContent(response.data);
          } else {
            throw new Error('Failed to fetch invoices.');
          }
        } catch (error) {
          console.error('Error fetching invoices:', error);
        }
      }
    };
    
    if (user._id) {
      fetchInvoiceContent(user._id);
    }
  }, [user]);

 
  const handleDownload = async () => {
    try {
      if (invoiceContent && invoiceContent.length > 0) {
        const doc = new jsPDF();
    
  
        invoiceContent.forEach((invoiceContent, index) => {
          doc.setFontSize(14);
          doc.setFont('helvetica', 'bold');
          doc.text(`Project ${index + 1} Details`, 20, 20);

          // Add page number
          doc.setFontSize(12);
          doc.setFont('helvetica', 'normal');
  
          // Add project details
          let currentY = 40;
          doc.setFontSize(12);
          doc.setFont('helvetica', 'normal');
  
          doc.text(`Project Title: ${invoiceContent.projectTitle || ''}`, 20, currentY);
          currentY += 10;
  
          doc.text(`Project Budget: RM${invoiceContent.projectBudget || ''}`, 20, currentY);
          currentY += 10;
  
          doc.text(`Project Description: ${invoiceContent.projectDescription || ''}`, 20, currentY);
          currentY += 10;
  
          doc.text(`Location: ${invoiceContent.location || ''}`, 20, currentY);
          currentY += 10;
  
          doc.text(`Project Category: ${invoiceContent.projectCategory || ''}`, 20, currentY);
          currentY += 10;
  
          doc.text(`Project Duration: ${invoiceContent.projectDuration || ''}`, 20, currentY);
          currentY += 10;
  
          doc.text(`Contact Information: ${invoiceContent.contactInformation || ''}`, 20, currentY);
          currentY += 10;
  
          doc.text(`Deadline: ${invoiceContent.deadline || ''}`, 20, currentY);
          currentY += 10;
  
          doc.text(`Additional Notes: ${invoiceContent.additionalNotes || ''}`, 20, currentY);
          currentY += 20; // Add extra space after each project
  
          // Add a new page for the next project
          if (index < invoiceContent.length - 1) {
            doc.addPage();
          }
        });
  
        doc.save('Invoice.pdf');
      } else {
        console.error('No project details available.');
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
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