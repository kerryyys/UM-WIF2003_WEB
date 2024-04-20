import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
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
  const [saved, setSaved] = useState(false);

  const handleSaveClick = () => {
    setSaved(!saved);
  };

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="ProjectTab"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
                <Badge
                  key={index}
                  className="FilterBadge"
                >
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
