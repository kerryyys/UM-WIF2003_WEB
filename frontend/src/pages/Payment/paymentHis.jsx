import React , { useEffect, useState } from "react";
import "../../pages-css/Payment/Payment.css";
import { Button } from "react-bootstrap";
import { useUserContext } from "../../context/UserContext";
import axios from '../../utils/customAxios';

function Invoice() {
  const [invoices, setInvoices] = useState([]);
  const {user} = useUserContext();
  console.log("Your jobs page userContext: " + JSON.stringify(user));

  const PaymentMethod = localStorage.getItem('paymentMethod');

  useEffect(() => {
    const fetchInvoices = async (userId) => {
      if (user._id) {
        try {
          const response = await axios.get(`http://localhost:5050/invoices?userId=${userId}`);
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
    fetchInvoices();
  }, [user]);

  if (!Array.isArray(invoices)) {
    console.error('invoices is not an array:', invoices);
    return null;
  }

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