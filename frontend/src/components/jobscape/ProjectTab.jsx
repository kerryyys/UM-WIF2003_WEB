import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { Badge } from "react-bootstrap";
import "../../components-css/jobscape/ProjectTab.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  favoriteProject,
  removeFavoriteProject,
  API_URL,
} from "../../api/projectApi";

const ProjectTab = ({
  projectId,
  CompanyLogo,
  projectName,
  companyName,
  projectCategory,
  filters,
  timePosted,
}) => {
  let navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Fake user id just for testing
  // NEED TO BE MODIFIED ONCE USER SESSION IS IMPLEMENTED
  const userId = "664a0e34bc1a43dbcb1f6d74";

  // Save if not fav, unsave if fav
  const handleSaveClick = async (event) => {
    event.stopPropagation(); // Prevent event from bubbling up to parent (ProjectTab)
    try {
      if (saved) {
        await removeFavoriteProject(userId, projectId);
      } else {
        await favoriteProject(userId, projectId);
      }
      setSaved(!saved);
    } catch (error) {
      console.error("Error fav/remove fav project: ", error);
    }
  };

  useEffect(() => {
    const fetchUserFavoriteProjects = async () => {
      console.log("UseEffect has been executed");
      try {
        const user = await axios.get(`${API_URL}/user/${userId}`);
        const favProjects = user.data.favoriteProjects;
        console.log("Fetch user from frontend: ", favProjects);
        if (Array.isArray(favProjects) && favProjects.includes(projectId)) {
          setSaved(true);
        }
      } catch (error) {
        console.error("Error fetching user favorite projects: ", error);
      }
    };
    fetchUserFavoriteProjects();
  }, []);

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
            <span className="Category">{projectCategory}</span>
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
        <p className="TimePosted">{timePosted}</p>
        <FontAwesomeIcon
          icon={faBookmark}
          className={`SaveIcon ${saved ? "saved" : ""}`}
          onClick={handleSaveClick}
        />
      </div>
    </div>
  );
};

export default ProjectTab;
