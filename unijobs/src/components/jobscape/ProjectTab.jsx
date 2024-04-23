import React from "react";
import { Badge } from "react-bootstrap";
import "../../components-css/jobscape/ProjectTab.css";

const ProjectTab = ({
  CompanyLogo,
  projectName,
  companyName,
  category,
  filters,
  timePosted,
}) => {
  return (
    <div className="ProjectTab">
      {/* Left side content */}
      <div className="LeftContent">
        {/* Larger company logo */}
        <img src={CompanyLogo} alt="Company Logo" className="CompanyLogo" />
        <div>
          {/* Project title */}
          <p className="ProjectTitle">{projectName}</p>
          {/* Company name and category */}
          <p className="CompanyInfo">
            By <span className="CompanyName">{companyName}</span> in {"  "}
            <span className="Category">{category}</span>
          </p>
          <div className="Filters">
            {Array.isArray(filters) &&
              filters.map((filter, index) => (
                <Badge key={index} className="FilterBadge">
                  {filter}
                </Badge>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTab;
