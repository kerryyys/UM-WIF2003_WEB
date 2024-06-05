import React , { useEffect, useState } from "react";
import "../../pages-css/Payment/Payment.css";
import { Button } from "react-bootstrap";
import { useUserContext } from "../../context/UserContext";
import axios from '../../utils/customAxios';

function Invoice() {
  const [invoices, setInvoices] = useState([]);
  const {user} = useUserContext();

  const PaymentMethod = localStorage.getItem('paymentMethod');

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
              <p className="INVName">{PaymentMethod}</p>
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