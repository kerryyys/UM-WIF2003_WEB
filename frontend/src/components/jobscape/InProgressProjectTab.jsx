import React from "react";
import SmallTitle from "../../components/jobscape/SmallTitle";
import "../../components-css/jobscape/InProgressProjectTab.css";

const InProgressProjectTab = ({ projectTitle, due, budget, collaborator }) => {
  return (
    <>
      <div className="InProgressProjectTab">
        <div className="projectDetails">
          <SmallTitle title={projectTitle} fontWeight={700} fontSize="21px" />
          <div className="content">
            <div className="DetailsType">
              <p>Due</p>
              <p>Budget</p>
              <p>Collaborator</p>
            </div>
            <div className="PDetails">
              <p>{due}</p>
              <p>{budget}</p>
              <div>{collaborator}</div>
            </div>
          </div>
        </div>
        <div className="MoreBtn">More</div>
      </div>
    </>
  );
};

export default InProgressProjectTab;
