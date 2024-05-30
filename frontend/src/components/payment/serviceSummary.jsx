import "../../pages-css/Payment/Payment.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ServiceSummary = ({ taskData }) => {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectBudget, setProjectBudget] = useState('');
  const location = useLocation();


  // get task name and price
  useEffect(() => {
    if (location.state) {
      const { projectTitle, projectBudget } = location.state;
      setProjectTitle(projectTitle.toString());
      setProjectBudget(projectBudget.toString());
    }
  }, [location.state]);

  return (
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
  );
};

export default ServiceSummary;