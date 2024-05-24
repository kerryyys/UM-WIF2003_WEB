import React from "react";
import SmallTitle from "./SmallTitle";
import "../../components-css/jobscape/ProjectPostedTab.css";

const ProjectPostedTab = ({ projectTitle, due, budget, postedDate }) => {
  return (
    <>
      <div className="ProjectPostedTab">
        <div className="projectDetails">
          <SmallTitle title={projectTitle} fontWeight={700} fontSize="21px" />
          <div className="content">
            <div className="DetailsType">
              <p>Due</p>
              <p>Budget</p>
              <p>postedDate</p>
            </div>
            <div className="PDetails">
              <p>{due}</p>
              <p>{budget}</p>
              <div>{postedDate}</div>
            </div>
          </div>
        </div>
        <div className="MoreBtn">More</div>
      </div>
    </>
  );
};

export default ProjectPostedTab;
