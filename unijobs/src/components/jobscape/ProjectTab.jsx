import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { Badge } from "react-bootstrap";
import "../../components-css/jobscape/ProjectTab.css";
import { useNavigate } from "react-router-dom";

const ProjectTab = ({
  projectId,
  CompanyLogo,
  projectName,
  companyName,
  category,
  filters,
  timePosted,
}) => {
  let navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleSaveClick = (event) => {
    event.stopPropagation(); // Prevent event from bubbling up to parent (ProjectTab)
    setSaved(!saved);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    navigate(`/SeekJobPage/job-details/${projectId}`);
  };
  return (
    <div
      className="ProjectTab"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="LeftContent">
        <img src={CompanyLogo} alt="Company Logo" className="CompanyLogo" />
        <div>
          <p className="ProjectTitle">{projectName}</p>

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
      {/* Right side content */}
      <div className="RightContent">
        <FontAwesomeIcon
          icon={faBookmark}
          className={`SaveIcon ${saved ? "saved" : ""}`}
          onClick={handleSaveClick}
        />
        <p className="TimePosted">{timePosted}</p>
      </div>
    </div>
  );
};

export default ProjectTab;
